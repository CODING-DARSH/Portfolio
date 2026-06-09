import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" style={{ background: '#f5f5f7', padding: '120px 22px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="about-grid"
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              color: '#86868b',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              About
            </p>
            <h2 style={{
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              lineHeight: '1.1',
              color: '#1d1d1f',
              marginBottom: '28px',
            }}>
              Engineer.<br />
              <span style={{ fontWeight: '300', color: '#86868b' }}>Builder. Researcher.</span>
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#515154',
              lineHeight: '1.65',
              marginBottom: '20px',
            }}>
              I'm an ML engineer building production-grade AI systems — from large-scale recommendation pipelines to multimodal vision-language models.
            </p>
            <p style={{
              fontSize: '17px',
              color: '#515154',
              lineHeight: '1.65',
            }}>
              Currently focused on NARA, a personalized nutrition platform demonstrating end-to-end ML engineering: data generation at scale, rigorous validation, and trained models ready for deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div style={{
              background: '#ffffff',
              borderRadius: '18px',
              padding: '40px',
            }}>
              {[
                { label: 'Currently building', value: 'NARA · Nourish VLM' },
                { label: 'Open source', value: '2 PRs to Qdrant FastEmbed' },
                { label: 'Education', value: 'B.E. in progress' },
                { label: 'Location', value: 'Bengaluru, India' },
                { label: 'Club', value: 'Technical Member, The Turing Club' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '16px 0',
                  borderBottom: i < 4 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                  gap: '20px',
                }}>
                  <span style={{ fontSize: '14px', color: '#86868b', flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontSize: '14px', color: '#1d1d1f', textAlign: 'right' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
