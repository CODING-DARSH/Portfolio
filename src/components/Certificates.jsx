import React from 'react'
import { motion } from 'framer-motion'

export default function Certificates() {
  const certs = [
    {
      title: "C Programming",
      issuer: "Royal Technosoft Pvt. Ltd.",
      link: "https://certopus.s3.ap-south-1.amazonaws.com/images/6e87798dd783420194d966a25daf9c13.jpeg",
      category: "Programming",
      level: "Max"
    },
    {
      title: "C++ Programming",
      issuer: "Royal Technosoft Pvt. Ltd.",
      link: "https://certopus.s3.ap-south-1.amazonaws.com/images/39dbcaa5906143018ba8e800875c4d3c.jpeg",
      category: "Programming",
      level: "Max   "
    },
    {
      title: "Python Programming",
      issuer: "Royal Technosoft Pvt. Ltd.",
      link: "https://certopus.s3.ap-south-1.amazonaws.com/images/1ccbfa519e9a491296e39a223dcf70f3.jpeg",
      category: "Programming",
      level: "Intermediate"
    },
    {
      title: "HTML Fundamentals",
      issuer: "Royal Technosoft Pvt. Ltd.",
      link: "https://certopus.s3.ap-south-1.amazonaws.com/images/5ccd3541e5e64e9fa8e33feceee9b8d5.jpeg",
      category: "Web Development",
      level: "Fundamentals"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section
      id="certificates"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-400/3 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-2xl border border-gray-700 bg-black/50 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <motion.div
              className="w-2 h-2 bg-yellow-500 rounded-full mr-3"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm font-medium text-gray-300">Credentials</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4"
            whileInView={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            Certificates & Achievements
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Validated skills and accomplishments that showcase my <span className="text-white font-semibold">technical expertise</span> and <span className="text-white font-semibold">continuous learning</span>
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {certs.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 group-hover:border-yellow-500/50 group-hover:shadow-2xl group-hover:shadow-yellow-900/20"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Certificate Icon */}
                  <motion.div
                    className="mb-4"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Certificate Content */}
                  <div className="flex-1">
                    <motion.h4
                      className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors mb-2"
                      whileHover={{ x: 3 }}
                    >
                      {cert.title}
                    </motion.h4>
                    
                    <motion.p
                      className="text-gray-400 text-sm mb-3"
                      whileHover={{ color: '#e5e7eb' }}
                    >
                      {cert.issuer}
                    </motion.p>

                    {/* Category and Level */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.span
                        className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded-lg text-xs border border-yellow-500/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {cert.category}
                      </motion.span>
                      <motion.span
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs border border-gray-700"
                        whileHover={{ scale: 1.05 }}
                      >
                        {cert.level}
                      </motion.span>
                    </div>
                  </div>

                  {/* View Certificate Link */}
                  <motion.div
                    className="flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-gray-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm text-yellow-400 group-hover:text-yellow-300 font-medium">
                      View Certificate
                    </span>
                    <motion.svg
                      className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Floating Element */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-3 bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-800 text-gray-400"
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <motion.div
              className="w-2 h-2 bg-yellow-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm">
              Continuously learning and adding new certifications to my skill set
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}