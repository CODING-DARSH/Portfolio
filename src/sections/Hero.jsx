import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
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
        style={{ y, opacity, textAlign: 'center', maxWidth: '780px' }}
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
            marginBottom: '20px',
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
            marginBottom: '28px',
          }}
        >
          Building AI
          <br />
          <span style={{ color: '#86868b', fontWeight: '300' }}>that scales.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            fontSize: 'clamp(17px, 2vw, 21px)',
            color: '#515154',
            fontWeight: '400',
            lineHeight: '1.6',
            maxWidth: '560px',
            margin: '0 auto 40px',
          }}
        >
          ML engineer focused on recommendation systems, multimodal AI, and production-grade data pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="https://github.com/CODING-DARSH"
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
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
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
