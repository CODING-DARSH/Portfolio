import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: '980px',
          padding: '0 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontSize: '17px',
              fontWeight: '600',
              color: '#1d1d1f',
              letterSpacing: '-0.3px',
            }}
          >
            DV
          </button>

          {/* Desktop links */}
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }} className="nav-desktop">
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                style={{
                  fontSize: '13px',
                  color: '#1d1d1f',
                  opacity: 0.85,
                  fontWeight: '400',
                  letterSpacing: '0',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0.85}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
            aria-label="Toggle menu"
          >
            <span style={{ width: 22, height: 1.5, background: '#1d1d1f', display: 'block', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span style={{ width: 22, height: 1.5, background: '#1d1d1f', display: 'block', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ width: 22, height: 1.5, background: '#1d1d1f', display: 'block', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '48px',
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              padding: '16px 0',
            }}
          >
            {links.map(l => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px 22px',
                  fontSize: '17px',
                  color: '#1d1d1f',
                  textAlign: 'left',
                  fontWeight: '400',
                }}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
