import { useEffect, useRef, useState } from 'react'

const WEIGHTS = () => (Math.random() > 0.5 ? '' : '-') +
  (Math.random() < 0.3 ? Math.floor(Math.random() * 10) :
    (Math.random() * 4 - 2).toFixed(4))

const COLS = 26
const ROWS = 32
const CELL_W = 72
const CELL_H = 22

export default function Intro({ onDone }) {
  const canvasRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const W = window.innerWidth
    const H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const cols = Math.floor(W / CELL_W) + 1
    const rows = Math.floor(H / CELL_H) + 2
    const totalCells = cols * rows

    // Each cell: { col, row, value, opacity, state: 'empty'|'writing'|'alive'|'dying'|'dead' }
    const cells = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        cells.push({ col: c, row: r, value: WEIGHTS(), opacity: 0, state: 'empty', age: 0 })
      }
    }

    // Timeline (ms)
    // 0–1200ms: numbers write in one by one diagonally fast
    // 1200–2400ms: gradient wipe from edges inward — numbers fade dying
    // 2400–3000ms: all gone, name appears center huge
    // 3000–4000ms: name fades and transitions to hero

    const START = performance.now()
    const PHASE2 = 2000
    const PHASE3 = 4000
    const PHASE4 = 3100
    const PHASE4_END = 6800

    // Phase 1: schedule each cell to "write in" along diagonal order
    const diagOrder = []
    for (let d = 0; d < cols + rows; d++) {
      for (let r = 0; r < rows; r++) {
        const c = d - r
        if (c >= 0 && c < cols) {
          diagOrder.push(r * cols + c)
        }
      }
    }

    // spread writes across 0–1100ms
    diagOrder.forEach((idx, i) => {
      const t = (i / diagOrder.length) * 1800
      setTimeout(() => {
        if (cells[idx]) {
          cells[idx].state = 'alive'
          cells[idx].opacity = 0.18 + Math.random() * 0.22
        }
      }, t)
    })

    // flicker interval — randomly update values while alive
    const flickerInterval = setInterval(() => {
      cells.forEach(cell => {
        if (cell.state === 'alive' && Math.random() < 0.08) {
          cell.value = WEIGHTS()
        }
      })
    }, 80)

    let nameOpacity = 0
    let nameScale = 1

    const draw = () => {
      const now = performance.now()
      const elapsed = now - START

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, W, H)

      const cx = W / 2
      const cy = H / 2

      // Phase 2: convergence — fade cells from edges inward
      if (elapsed > PHASE2 && elapsed < PHASE3) {
        const p = (elapsed - PHASE2) / (PHASE3 - PHASE2) // 0→1
        // distance from center determines when it dies
        cells.forEach(cell => {
          if (cell.state === 'alive') {
            const cellX = cell.col * CELL_W
            const cellY = cell.row * CELL_H
            const dx = cellX - cx
            const dy = cellY - cy
            const dist = Math.sqrt(dx * dx + dy * dy)
            const maxDist = Math.sqrt(cx * cx + cy * cy)
            const normDist = dist / maxDist
            // cells far from center die first
            const deathThreshold = 1 - p * 1.15
            if (normDist > deathThreshold) {
              cell.opacity = Math.max(0, cell.opacity - 0.06)
              if (cell.opacity <= 0) cell.state = 'dead'
            } else {
              // surviving cells get slightly brighter
              cell.opacity = Math.min(0.55, cell.opacity + 0.01)
              if (Math.random() < 0.15) cell.value = WEIGHTS()
            }
          }
        })
      }

      // kill all cells at phase 3
      if (elapsed > PHASE3) {
        cells.forEach(cell => {
          if (cell.state !== 'dead') {
            cell.opacity = Math.max(0, cell.opacity - 0.08)
            if (cell.opacity <= 0) cell.state = 'dead'
          }
        })
      }

      // draw cells
      ctx.font = `400 11px 'SF Mono', 'Fira Mono', 'Courier New', monospace`
      ctx.textBaseline = 'middle'
      cells.forEach(cell => {
        if (cell.opacity <= 0) return
        const x = cell.col * CELL_W + 4
        const y = cell.row * CELL_H + CELL_H / 2
        ctx.fillStyle = `rgba(255,255,255,${cell.opacity})`
        ctx.fillText(cell.value, x, y)
      })

      // Phase 3: name appears
      if (elapsed > PHASE3 && elapsed < PHASE4) {
        const p = (elapsed - PHASE3) / (PHASE4 - PHASE3)
        nameOpacity = Math.min(1, p * 2.5)
      }

      // Phase 4: name fades
      if (elapsed > PHASE4 && elapsed < PHASE4_END) {
        const p = (elapsed - PHASE4) / (PHASE4_END - PHASE4)
        nameOpacity = Math.max(0, 1 - p)
        nameScale = 1 + p * 0.04 // very slight scale up as it fades — feels like it lifts into hero
      }

      // draw name
      if (nameOpacity > 0) {
        ctx.save()
        ctx.translate(cx, cy)
        ctx.scale(nameScale, nameScale)
        ctx.translate(-cx, -cy)

        const fontSize = Math.min(W * 0.072, 88)
        ctx.font = `700 ${fontSize}px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.letterSpacing = '-2px'
        ctx.fillStyle = `rgba(255,255,255,${nameOpacity})`
        ctx.fillText('Darsh Vithlani', cx, cy)
        ctx.restore()
      }

      // done
      if (elapsed >= PHASE4_END && !doneRef.current) {
        doneRef.current = true
        clearInterval(flickerInterval)
        onDone()
        return
      }

      requestAnimationFrame(draw)
    }

    requestAnimationFrame(draw)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(flickerInterval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#000',
    }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  )
}