import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const WORDS = ['Precise.', 'Scalable.', 'Production-ready.', 'Yours.']
const TYPE_SPEED = 60
const DELETE_SPEED = 35
const PAUSE_AFTER_TYPE = 1600
const PAUSE_AFTER_DELETE = 400

function Typewriter({ started }) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting | waiting
  const [charIndex, setCharIndex] = useState(0)
  const [blink, setBlink] = useState(true)

  // cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!started) return
    const word = WORDS[wordIndex]
    const isYours = word === 'Yours.'

    if (phase === 'typing') {
      if (charIndex < word.length) {
        const id = setTimeout(() => {
          setDisplay(word.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, TYPE_SPEED)
        return () => clearTimeout(id)
      } else {
        const id = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE)
        return () => clearTimeout(id)
      }
    }

    if (phase === 'deleting') {
      if (charIndex > 0) {
        const id = setTimeout(() => {
          setDisplay(word.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, DELETE_SPEED)
        return () => clearTimeout(id)
      } else {
        const id = setTimeout(() => {
          setWordIndex(i => (i + 1) % WORDS.length)
          setPhase('typing')
        }, PAUSE_AFTER_DELETE)
        return () => clearTimeout(id)
      }
    }
  }, [phase, charIndex, wordIndex, started])

  const currentWord = WORDS[wordIndex]
  const isYours = display === 'Yours.' || (currentWord === 'Yours.' && display.length > 0 && phase !== 'deleting')

  return (
    <span style={{
      color: isYours ? '#0071e3' : '#1d1d1f',
      transition: 'color 0.3s ease',
      fontWeight: '700',
    }}>
      {display}
      <span style={{
        display: 'inline-block',
        width: '3px',
        height: '0.85em',
        background: isYours ? '#0071e3' : '#1d1d1f',
        marginLeft: '3px',
        verticalAlign: 'middle',
        opacity: blink ? 1 : 0,
        transition: 'background 0.3s ease',
        borderRadius: '1px',
      }} />
    </span>
  )
}

export default function Hero({ started }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 22px',
      }}
    >
      <motion.div
        style={{ y, opacity, textAlign: 'center', maxWidth: '820px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            fontSize: '17px',
            color: '#86868b',
            fontWeight: '400',
            marginBottom: '24px',
            letterSpacing: '0.02em',
          }}
        >
          Darsh Vithlani · Bengaluru, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: '700',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            color: '#1d1d1f',
            marginBottom: '48px',
          }}
        >
          Building AI
          <br />
          that's{' '}
          <Typewriter started={started} />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="https://github.com/darshvithlani"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              background: '#1d1d1f',
              color: '#fff',
              borderRadius: '980px',
              fontSize: '15px',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#000'}
            onMouseLeave={e => e.currentTarget.style.background = '#1d1d1f'}
          >
            GitHub
          </a>
          <button
            onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '12px 24px',
              background: 'transparent',
              color: '#1d1d1f',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '980px',
              fontSize: '15px',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              transition: 'border-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.5)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'}
          >
            See work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, #86868b)',
          }}
        />
      </motion.div>
    </section>
  )
}