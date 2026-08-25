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
    role: 'Open Source Author',
    org: 'Rylox',
    period: '2026',
    bullets: [
      'Built and published Rylox, a repository context engine for semantic code retrieval using FAISS, BM25, Tree-sitter, and Reciprocal Rank Fusion (RRF); released on PyPI with 100+ downloads.',
    ],
    links: [{ label: 'View on PyPI', url: 'https://pypi.org/project/rylox/' }],
  },
  {
    type: 'opensource',
    role: 'Dataset Author',
    org: 'NutriRec India 19M',
    period: '2026',
    bullets: [
      'Released the 19M+ row NARA Synthetic Recommendation Dataset for recommendation system research.',
    ],
    links: [{ label: 'View on Kaggle', url: 'https://www.kaggle.com/datasets/darshvithlani/nutrirec-india19m/data' }],
  },
  {
    type: 'opensource',
    role: 'Dataset Author',
    org: 'Real-World Images for Computer Vision (10K)',
    period: '2026',
    bullets: [
      'Published a 10K+ image dataset for computer vision and multimodal retrieval — 6,800+ downloads on Hugging Face.',
    ],
    links: [{ label: 'View on Kaggle', url: 'https://www.kaggle.com/datasets/darshvithlani/real-world-images-for-computer-vision-10k-139' }],
  },
  {
    type: 'opensource',
    role: 'Open Source Contributor',
    org: 'SOUP · LLM Fine-Tuning Framework',
    period: '2026',
    bullets: [
      '9 PRs merged in production releases — including a gated MCP execution security system with single-use cryptographic confirmation tokens, cross-tokenizer speculative decoding via Wasserstein-aligned ULD distillation, and an opt-in MCP execution safety gate.',
      'Shipped tokenizer vocabulary expansion across SFT, DPO, IPO, KTO, BCO, ORPO, SimPO, and GRPO trainers, resolved security issues, and added regression tests.',
    ],
  },
  {
    type: 'opensource',
    role: 'Open Source Contributor',
    org: 'Qdrant FastEmbed',
    period: '2026',
    bullets: [
      'PR fixing a non-square image resize bug where FastEmbed\u2019s (height, width) dimensions were passed directly to Pillow without converting to its (width, height) format; added a regression test (not yet merged).',
      'PR fixing a case-insensitive CustomTextEmbedding lookup — postprocessing config lookup now uses the canonical resolved model name instead of the user-provided casing, preventing a KeyError; added a regression test (not yet merged).',
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
        {item.links?.length > 0 && (
          <div style={{ display: 'flex', gap: '16px', marginTop: '14px', paddingLeft: '16px', flexWrap: 'wrap' }}>
            {item.links.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '14px',
                  color: '#0071e3',
                  fontWeight: '500',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = 0.7}
                onMouseLeave={e => e.currentTarget.style.opacity = 1}
              >
                {l.label}
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        )}
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