import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'C++'],
  },
  {
    category: 'ML / AI',
    skills: ['PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM', 'CLIP', 'FAISS', 'Transformers', 'ONNX Runtime', 'SHAP', 'ViT'],
  },
  {
    category: 'Backend & Data',
    skills: ['FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'REST APIs', 'SQLite', 'ChromaDB'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Nginx', 'Git', 'Linux', 'Hugging Face', 'Kaggle'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" style={{ background: '#ffffff', padding: '120px 22px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            color: '#86868b',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Technical skills
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700',
            letterSpacing: '-0.025em',
            color: '#1d1d1f',
            lineHeight: '1.1',
          }}>
            Stack
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {skillGroups.map((group, gi) => {
            const [rowRef, rowInView] = useInView()
            return (
              <motion.div
                key={group.category}
                ref={rowRef}
                initial={{ opacity: 0, y: 20 }}
                animate={rowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.07 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  gap: '40px',
                  padding: '32px 0',
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  alignItems: 'start',
                }}
                className="skill-row"
              >
                <p style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#1d1d1f',
                  paddingTop: '4px',
                }}>
                  {group.category}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.skills.map(skill => (
                    <span key={skill} style={{
                      padding: '6px 14px',
                      background: '#f5f5f7',
                      borderRadius: '980px',
                      fontSize: '14px',
                      color: '#515154',
                      fontWeight: '400',
                      transition: 'background 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#e8e8ed'}
                    onMouseLeave={e => e.currentTarget.style.background = '#f5f5f7'}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skill-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
