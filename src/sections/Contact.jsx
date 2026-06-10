import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" style={{ background: '#ffffff', padding: '140px 22px 100px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            color: '#86868b',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            Get in touch
          </p>
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: '700',
            letterSpacing: '-0.03em',
            color: '#1d1d1f',
            lineHeight: '1.05',
            marginBottom: '28px',
          }}>
            Let's build
            <br />
            <span style={{ color: '#86868b', fontWeight: '300' }}>something great.</span>
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#515154',
            lineHeight: '1.6',
            marginBottom: '48px',
          }}>
            Open to ML engineering roles, research collaborations, and interesting problems worth solving.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            <a
              href="mailto:darshvit20@gmail.com"
              style={{
                padding: '14px 28px',
                background: '#1d1d1f',
                color: '#fff',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#000'}
              onMouseLeave={e => e.currentTarget.style.background = '#1d1d1f'}
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/darsh-vithlani-43430027b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#1d1d1f',
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/CODING-DARSH"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#1d1d1f',
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'}
            >
              GitHub
            </a>
          </div>

          {/* Resume download */}
          <a
            href="/resume.pdf"
            download="Darsh_Vithlani_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'transparent',
              color: '#1d1d1f',
              border: '1px solid rgba(0,0,0,0.15)',
              borderRadius: '980px',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '64px',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; e.currentTarget.style.background = '#f5f5f7' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; e.currentTarget.style.background = 'transparent' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v8M4 6.5l3 3 3-3M1.5 12.5h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>

          <p style={{ fontSize: '13px', color: '#86868b' }}>
            Darsh Vithlani · Bengaluru, India · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  )
}