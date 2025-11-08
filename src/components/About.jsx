import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      color: '#ffffff',
      transition: {
        duration: 0.2
      }
    }
  }

  const stats = [
    { number: '3+', label: 'Projects', icon: '🚀' },
    { number: '1', label: 'Microsoft Internship(Edunet Foundation)', icon: '⭐' },
    { number: 'AI/ML', label: 'Specialization', icon: '🧠' },
    { number: 'Full Stack', label: 'Development', icon: '💻' }
  ]

  return (
    <motion.section
      id="about"
      className="py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-400/3 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-2xl border border-gray-700 bg-black/50 backdrop-blur-sm mb-4"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full mr-3"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm font-medium text-gray-300">My Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-3"
            whileInView={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Building intelligent systems that <span className="text-white font-semibold">learn, adapt, and deliver real impact</span>
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content - Text */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
          >
            <motion.div
              className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 group hover:border-gray-600 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="relative z-10">
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  I'm{' '}
                  <motion.span
                    className="text-white font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    variants={highlightVariants}
                    whileHover="hover"
                  >
                    Darsh Vithlani
                  </motion.span>
                  , an AI/ML engineer with a hands-on approach to building systems that learn and adapt. 
                  My work spans from crafting efficient{' '}
                  <motion.span
                    className="text-white font-semibold"
                    variants={highlightVariants}
                    whileHover="hover"
                  >
                    C++ logic
                  </motion.span>{' '}
                  to developing intelligent, full-stack solutions.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 group hover:border-gray-600 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="relative z-10">
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  I've built{' '}
                  <motion.span
                    className="text-white font-semibold"
                    variants={highlightVariants}
                    whileHover="hover"
                  >
                    student and bank management platforms
                  </motion.span>{' '}
                  that blend data, AI, and usability. During my internship with{' '}
                  <motion.span
                    className="text-white font-semibold"
                    variants={highlightVariants}
                    whileHover="hover"
                  >
                    Edunet (Microsoft)
                  </motion.span>
                  , I deepened my understanding of applied AI.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 group hover:border-gray-600 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="relative z-10">
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  I'm driven by{' '}
                  <motion.span
                    className="text-white font-semibold"
                    variants={highlightVariants}
                    whileHover="hover"
                  >
                    curiosity
                  </motion.span>{' '}
                  — dissecting how systems think, fail, and improve. My goal:{' '}
                  <motion.span
                    className="text-white font-semibold italic"
                    variants={highlightVariants}
                    whileHover="hover"
                  >
                    build tech that's thoughtful, fast, and genuinely useful.
                  </motion.span>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Focus Areas */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            {/* Stats Grid - More Compact */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-4 group hover:border-gray-600 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-xl mb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-xl font-black text-white mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xs text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education Card - More Compact */}
            <motion.div
              className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 group hover:border-gray-600 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="relative z-10">
                <motion.h3
                  className="text-lg font-bold text-white mb-4 flex items-center gap-2"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  Education
                </motion.h3>

                <div className="flex items-start gap-3 p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300 group/item">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-white text-xs font-bold">JU</span>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm mb-1 group-hover/item:text-gray-100 transition-colors truncate">
                      Jain University
                    </h4>
                    <p className="text-gray-400 text-xs mb-1">
                      B.Tech CSE (AIML)
                    </p>
                    <p className="text-gray-500 text-xs">
                      2nd Year • 2024 - 2028
                    </p>
                    <motion.div
                      className="flex items-center gap-2 mt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((dot) => (
                          <motion.div
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${
                              dot <= 2 ? 'bg-blue-500' : 'bg-gray-700'
                            }`}
                            animate={dot <= 2 ? {
                              scale: [1, 1.2, 1],
                            } : {}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: dot * 0.2
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-xs">Year 2/4</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Focus Areas - More Compact */}
            <motion.div
              className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 group hover:border-gray-600 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="relative z-10">
                <motion.h3
                  className="text-lg font-bold text-white mb-4 flex items-center gap-2"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  Focus Areas
                </motion.h3>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { area: 'AI/ML', desc: 'Intelligent systems' },
                    { area: 'Full-Stack', desc: 'Modern tech stacks' },
                    { area: 'System Design', desc: 'Scalable architecture' },
                    { area: 'Problem Solving', desc: 'Elegant solutions' }
                  ].map((focus, index) => (
                    <motion.div
                      key={focus.area}
                      className="p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300 group/item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="text-white font-semibold text-sm mb-1 group-hover/item:text-gray-100 transition-colors">
                        {focus.area}
                      </h4>
                      <p className="text-gray-400 text-xs leading-tight">
                        {focus.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Current Focus - More Compact */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md border border-gray-700 rounded-xl p-4"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-white font-semibold text-sm">Currently</span>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                Building intelligent applications and exploring advanced AI concepts while expanding my expertise.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}