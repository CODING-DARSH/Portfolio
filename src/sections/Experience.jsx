import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const experience = [
  {
    type: 'work',
    role: 'Student Intern',
    org: 'OmniForge',
    period: 'Apr 2026 – Present',
    bullets: [
      'Created and annotated datasets for document understanding and computer vision workflows involving medical documents.',
      'Generated bounding boxes, segmentation masks, and coordinate annotations for supervised ML pipelines.',
    ],
  },
  {
    type: 'work',
    role: 'AI Intern',
    org: 'Edunet Foundation · Microsoft Initiative (AICTE)',
    period: 'Apr 2025 – May 2025',
    bullets: [
      'Developed a banking FAQ chatbot using TF-IDF vectorization and Logistic Regression for intent classification.',
      'Built preprocessing and inference pipelines using Python and Scikit-learn for real-time query prediction.',
    ],
  },
]

const opensource = [
  {
    type: 'opensource',
    role: 'Open Source Contributor',
    org: 'Qdrant FastEmbed',
    period: '2025–2026',
    bullets: [
      'PR fixing image preprocessing dimension-order bug with regression tests and reproducible report.',
      'PR fixing case-insensitive CustomTextEmbedding registry KeyError.',
    ],
  },
  {
    type: 'opensource',
    role: 'Dataset Author',
    org: 'Hugging Face · Kaggle',
    period: '2026',
    bullets: [
      'Released NARA Synthetic Recommendation Dataset — 19M+ records spanning 5K users, 4.6M meal logs, 7.3M interactions.',
      'Published 10K+ image dataset for computer vision and multimodal search applications.',
    ],
  },
]

const leadership = [
  {
    type: 'club',
    role: 'Technical Member',
    org: 'The Turing Club',
    period: 'Feb 2026 – Present',
    bullets: [
      'Built and operated EmojiLang, an emoji-based programming language and live coding judge used by 15+ teams in a competition.',
    ],
  },
]

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '40px',
        padding: '36px 0',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
      className="timeline-item"
    >
      <div>
        <p style={{ fontSize: '13px', color: '#86868b', marginBottom: '4px' }}>{item.period}</p>
        <p style={{ fontSize: '15px', fontWeight: '500', color: '#1d1d1f', marginBottom: '2px' }}>{item.role}</p>
        <p style={{ fontSize: '14px', color: '#515154' }}>{item.org}</p>
      </div>
      <div>
        {item.bullets.map((b, i) => (
          <p key={i} style={{
            fontSize: '15px',
            color: '#515154',
            lineHeight: '1.6',
            marginBottom: i < item.bullets.length - 1 ? '10px' : 0,
            paddingLeft: '16px',
            borderLeft: '1.5px solid rgba(0,0,0,0.1)',
          }}>
            {b}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

function Block({ title, items }) {
  const [ref, inView] = useInView()
  return (
    <div style={{ marginBottom: '64px' }}>
      <motion.p
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.08em',
          color: '#86868b',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}
      >
        {title}
      </motion.p>
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} index={i} />
      ))}
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" style={{ background: '#f5f5f7', padding: '120px 22px' }}>
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
            Background
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700',
            letterSpacing: '-0.025em',
            color: '#1d1d1f',
            lineHeight: '1.1',
          }}>
            Experience
          </h2>
        </motion.div>

        <Block title="Work" items={experience} />
        <Block title="Open source" items={opensource} />
        <Block title="Leadership" items={leadership} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
