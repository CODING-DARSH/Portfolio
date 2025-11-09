import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-gray-400/3 to-white/3 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          className="space-y-8 relative"
        >
          {/* Animated Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-2xl border border-gray-700 bg-black/50 backdrop-blur-sm relative overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <motion.div
              className="w-2 h-2 bg-white rounded-full mr-3"
              animate={pulseAnimation}
            />
            <span className="text-sm font-medium text-gray-300 relative z-10">
              Currently Building AI Solutions
            </span>
          </motion.div>

          {/* Main Heading with Staggered Text */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-black leading-tight"
            >
              <motion.span
                className="block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hi, I'm{' '}
                <motion.span
                  className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative"
                  whileHover={{ scale: 1.05 }}
                >
                  Darsh
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </motion.span>
              </motion.span>
              <motion.span
                className="block text-4xl lg:text-5xl text-gray-300 mt-4"
                variants={itemVariants}
              >
                AI/ML Engineer
              </motion.span>
            </motion.h1>
          </div>

          {/* Animated Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-2xl text-gray-400 leading-relaxed font-light"
            whileHover={{ scale: 1.01 }}
          >
            Crafting intelligent systems that{' '}
            <motion.span
              className="text-white font-medium relative"
              whileHover={{ color: '#ffffff' }}
            >
              learn, adapt,
            </motion.span>{' '}
            and deliver{' '}
            <motion.span
              className="text-white font-medium"
              whileHover={{ scale: 1.1 }}
            >
              real impact
            </motion.span>
          </motion.p>

          {/* Description with Fade In */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 leading-relaxed max-w-2xl"
          >
            From optimized <span className="text-gray-300 font-semibold">C++ architectures</span> to 
            full-stack applications with <span className="text-gray-300 font-semibold">deep learning</span> at their core, 
            I focus on creating technology that's fast, precise, and built to last.
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-8"
          >
            <motion.a
              href="mailto:darshvit20@gmail.com"
              className="group relative px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg overflow-hidden"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Get In Touch
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/CODING-DARSH"
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-4 border-2 border-gray-700 rounded-2xl font-semibold text-lg relative overflow-hidden"
              whileHover={{ borderColor: 'rgba(255,255,255,0.5)', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3 text-gray-300 group-hover:text-white">
                <motion.svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </motion.svg>
                View GitHub
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Profile Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
          className="relative"
        >
          {/* Card Container */}
          <div className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Profile Header */}
            <motion.div 
              className="flex items-center gap-6 pb-6 border-b border-gray-800 relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <motion.div
                  className="w-28 h-28 rounded-2xl bg-gray-900 overflow-hidden border-2 border-gray-700 relative"
                  whileHover={{ rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/darsh.jpg"
                    alt="Darsh Vithlani"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    animate={{
                      x: [-100, 100],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-black"
                  animate={pulseAnimation}
                />
              </div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-3xl font-bold text-white"
                  whileHover={{ x: 5 }}
                >
                  Darsh Vithlani
                </motion.h3>
                <motion.p 
                  className="text-gray-400 mt-2 text-lg"
                  whileHover={{ color: '#ffffff' }}
                >
                  AI/ML Engineer
                </motion.p>
                <motion.div 
                  className="flex items-center mt-3 text-gray-500"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </motion.svg>
                  <span>Bengaluru, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {[
                { label: "Experience", value: "AI/ML Intern", sub: "Edunet · 1 month" },
                { label: "Focus Area", value: "AI/ML", sub: "Deep Learning" },
                { label: "Status", value: "Available", sub: "For Projects" },
                { label: "Specialization", value: "C++ & Python", sub: "Full Stack AI" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{stat.label}</div>
                  <div className="font-semibold text-white text-lg">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300">{stat.sub}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Tags */}
            <motion.div 
              className="mt-8 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 flex items-center">
                <span>Core Technologies</span>
                <motion.div
                  className="ml-2 w-2 h-2 bg-white rounded-full"
                  animate={pulseAnimation}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {['C++', 'Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'React', 'Node.js', 'PyTorch'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-xl text-sm border border-gray-700 cursor-pointer"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#ffffff'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Status Footer */}
            <motion.div 
              className="mt-8 flex items-center justify-between pt-6 border-t border-gray-800 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-sm text-gray-400">Open to collaborations</span>
              </motion.div>
              <motion.div 
                className="text-sm text-gray-500 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <span>📍 Available Worldwide</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements Around Card */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full blur-sm"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-12 h-12 bg-gray-400/10 rounded-full blur-sm"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}