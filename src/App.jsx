import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Work from './sections/Work'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!introDone && (
          <Intro onDone={() => setIntroDone(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Work />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </motion.div>
    </>
  )
}