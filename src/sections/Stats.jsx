import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: '19M+', label: 'Behavioral records', sub: 'Synthetic dataset across 10 tables' },
  { value: '15', label: 'ML models trained', sub: 'Across 5 production systems' },
  { value: '97.4%', label: 'Meal occasion F1', sub: 'XGBoost on 930K test samples' },
  { value: '99.6%', label: 'Cold-start Top-3', sub: 'Wide & Deep on new users' },
  { value: '77%', label: 'Food-101 Top-1', sub: 'Nourish VLM, trained from scratch' },
]

export default function Stats() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      style={{
        background: '#f5f5f7',
        padding: '100px 22px',
      }}
    >
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            color: '#86868b',
            textTransform: 'uppercase',
            marginBottom: '48px',
          }}
        >
          By the numbers
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0',
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                padding: '0 32px 0 0',
                borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                marginRight: i < stats.length - 1 ? '32px' : 0,
              }}
              className="stat-item"
            >
              <p style={{
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: '700',
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {s.value}
              </p>
              <p style={{
                fontSize: '15px',
                color: '#1d1d1f',
                fontWeight: '500',
                marginBottom: '4px',
              }}>
                {s.label}
              </p>
              <p style={{
                fontSize: '13px',
                color: '#86868b',
                lineHeight: '1.4',
              }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.08) !important;
            padding: 28px 0 !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
