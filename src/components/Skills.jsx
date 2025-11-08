import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"],
      icon: "💻",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Backend",
      skills: ["Flask", "Node.js", "Python", "Java", "C++", "REST APIs"],
      icon: "⚙️",
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "SQL", "Git"],
      icon: "🗃️",
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "AI / ML",
      skills: ["Computer Vision", "Face Verification", "CNNs", "TensorFlow", "OpenCV"],
      icon: "🧠",
      color: "from-orange-500/10 to-red-500/10"
    }
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
    }
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      id="skills"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-2xl border border-gray-700 bg-black/50 backdrop-blur-sm mb-6"
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
            <span className="text-sm font-medium text-gray-300">Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            whileInView={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Technologies I use to turn ideas into <span className="text-white font-semibold">intelligent solutions</span>
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Card */}
              <motion.div
                className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 group-hover:border-gray-600 group-hover:shadow-2xl group-hover:shadow-gray-900/20"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Header */}
                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <motion.div
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors">
                      {category.title}
                    </h3>
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full mt-1"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-2 bg-gray-900/80 text-gray-300 rounded-lg text-sm border border-gray-700 backdrop-blur-sm cursor-pointer"
                      variants={skillItemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: '#ffffff',
                        borderColor: 'rgba(255,255,255,0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Floating Element */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-800 max-w-2xl mx-auto"
          variants={itemVariants}
          whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
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
              Continuously learning and expanding my skill set with emerging technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}