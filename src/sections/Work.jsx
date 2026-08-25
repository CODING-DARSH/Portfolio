import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 'nara',
    label: 'NARA',
    title: 'AI-Powered Nutrition\nRecommendation Platform',
    description: 'Engineered a 19M+ record synthetic behavioral dataset across 10 tables. Trained 15 production-grade ML models across 5 systems — recommendation ranking, cold-start personalization, health-compliance scoring, meal-occasion classification, and reorder prediction.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'LightGBM', 'XGBoost', 'PyTorch', 'Docker'],
    metrics: [
      { v: 'NDCG@10 ≈ 0.47', l: 'Recommendation ranking' },
      { v: '97.4% F1', l: 'Meal occasion XGBoost' },
      { v: '99.6% Top-3', l: 'Cold-start accuracy' },
    ],
    year: '2026',
    github: 'https://github.com/CODING-DARSH/Nara',
    accent: '#1d1d1f',
  },
  {
    id: 'fintel',
    label: 'FINTEL',
    title: 'Financial Intelligence\nAgentic RAG Platform',
    description: 'Engineered a financial document intelligence pipeline processing 1,385 SEC EDGAR filings across 50 public companies using DOM-aware parsing and structured extraction. Built an agentic RAG system with planner-based orchestration, iterative retrieval, BGE embeddings, semantic chunking, and HDBSCAN clustering. Designed an LLM + Neo4j knowledge extraction framework pulling 15+ structured financial signal types for multi-hop graph reasoning and dynamic risk analysis.',
    tags: ['Python', 'FastAPI', 'Neo4j', 'ChromaDB', 'PostgreSQL', 'Docker', 'LangGraph', 'Llama 3.1', 'BGE Embeddings'],
    metrics: [
      { v: '92.3%', l: 'Retrieval hit rate' },
      { v: '80.1%', l: 'Recall@K' },
      { v: '0.82 MRR', l: '26-query reasoning benchmark' },
    ],
    year: '2026',
    github: 'https://github.com/CODING-DARSH/Fintel',
    accent: '#1d1d1f',
  },
  {
    id: 'search',
    label: 'Multimodal Search',
    title: 'Visual Semantic\nSearch Engine',
    description: 'Built a multimodal semantic search engine supporting text, image, and voice retrieval across 10,000+ images. Optimized CLIP inference via ONNX INT8 quantization — reduced model size from 350MB to 90MB with FAISS vector retrieval.',
    tags: ['Python', 'CLIP', 'FAISS', 'ONNX Runtime', 'FastAPI', 'Docker'],
    metrics: [
      { v: '350→90MB', l: 'ONNX INT8 quantization' },
      { v: '10K+', l: 'Images indexed' },
      { v: 'Hugging Face', l: 'Deployed' },
    ],
    year: '2026',
    github: 'https://github.com/CODING-DARSH/multimodal-vector-image-retrieval',
    accent: '#1d1d1f',
  },
  {
    id: 'nourish',
    label: 'Nourish VLM',
    title: 'Food & Health\nVision-Language Model',
    description: 'Domain-specific VLM for food understanding and health-aware question answering. Combined Vision Transformers, cross-attention fusion, and transformer decoders. Trained on 500K+ nutrition texts and 75K+ food images.',
    tags: ['PyTorch', 'Transformers', 'ViT', 'FastAPI', 'ChromaDB', 'SQLite'],
    metrics: [
      { v: '77%', l: 'Top-1 on Food-101' },
      { v: '500K+', l: 'Training samples' },
      { v: '75K+', l: 'Food images' },
    ],
    year: '2026',
    github: 'https://github.com/CODING-DARSH/Nourish_VLM',
    accent: '#1d1d1f',
  },
]

function ProjectRow({ project, index }) {
  const [ref, inView] = useInView()
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        borderTop: '1px solid rgba(0,0,0,0.1)',
        padding: '80px 0',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}
      className="project-grid"
      >
        {/* Left: Text */}
        <div style={{ order: isEven ? 0 : 1 }} className="project-text">
          <p style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            color: '#86868b',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            {project.label} · {project.year}
          </p>
          <h3 style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: '700',
            letterSpacing: '-0.025em',
            lineHeight: '1.1',
            color: '#1d1d1f',
            marginBottom: '24px',
            whiteSpace: 'pre-line',
          }}>
            {project.title}
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#515154',
            lineHeight: '1.65',
            marginBottom: '28px',
          }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {project.tags.map(t => (
              <span key={t} style={{
                padding: '5px 12px',
                background: '#f5f5f7',
                borderRadius: '980px',
                fontSize: '13px',
                color: '#515154',
                fontWeight: '400',
              }}>
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '15px',
              color: '#0071e3',
              fontWeight: '500',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.7}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right: Metrics panel */}
        <div style={{ order: isEven ? 1 : 0 }} className="project-visual">
          <div style={{
            background: '#f5f5f7',
            borderRadius: '18px',
            padding: '40px 36px',
          }}>
            <p style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              color: '#86868b',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              Key results
            </p>
            {project.metrics.map((m, i) => (
              <div key={i} style={{
                borderTop: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.08)',
                paddingTop: i === 0 ? 0 : '20px',
                paddingBottom: '20px',
              }}>
                <p style={{
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  fontWeight: '700',
                  letterSpacing: '-0.025em',
                  color: '#1d1d1f',
                  marginBottom: '4px',
                }}>
                  {m.v}
                </p>
                <p style={{ fontSize: '14px', color: '#86868b' }}>{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [ref, inView] = useInView()

  return (
    <section id="work" style={{ background: '#ffffff', padding: '100px 22px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '20px' }}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            color: '#86868b',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Selected work
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700',
            letterSpacing: '-0.025em',
            color: '#1d1d1f',
            lineHeight: '1.1',
          }}>
            Projects
          </h2>
        </motion.div>

        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .project-text, .project-visual {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  )
}