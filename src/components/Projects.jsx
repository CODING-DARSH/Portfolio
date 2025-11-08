import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Console CPP — Student Management',
    short: 'Console-based student management system written in core C++ using OOP and STL. Admin/teacher/student logins, grading and activity logging.',
    tech: ['C++ (Core)', 'OOP', 'STL', 'File Handling'],
    github: 'https://github.com/CODING-DARSH/CPP/blob/main/PracticeCPP/Task2.cpp',
    category: 'System Design',
    status: 'Completed',
    complexity: 'Intermediate'
  },
  {
    title: 'Bank Management (ML + Face Verification)',
    short: 'Bank onboarding flow with document upload and ML-based face verification. Team-managed verification dashboard and account creation.',
    tech: ['React', 'Node.js', 'Express', 'ML', 'Face Verification', 'Computer Vision'],
    github: 'https://github.com/CODING-DARSH/hackathon',
    category: 'Full Stack + AI',
    status: 'Hackathon Project',
    complexity: 'Advanced'
  },
  {
    title: 'Student Management Platform',
    short: 'Web app where teachers post assignments, attendance, and marks; students submit work; AI notifications warn of potential failure.',
    tech: ['React', 'Python', 'Flask', 'PostgreSQL', 'AI/ML', 'Notifications'],
    github: 'https://github.com/CODING-DARSH/Student_Management_Project',
    category: 'Full Stack AI',
    status: 'In Progress',
    complexity: 'Advanced'
  },
]

export default function Projects() {
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.section
      id="projects"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-400/3 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-gray-300">Featured Work</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4"
            whileInView={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            Projects & Builds
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Hands-on implementations showcasing <span className="text-white font-semibold">full-stack development</span> and <span className="text-white font-semibold">AI integration</span>
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-8 overflow-hidden transition-all duration-500 group-hover:border-gray-600 group-hover:shadow-2xl group-hover:shadow-gray-900/20"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <motion.h3 
                          className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        {/* Status Badge */}
                        <motion.span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/10 text-green-400 border-green-500/20'
                              : project.status === 'Hackathon Project'
                              ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                              : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.status}
                        </motion.span>
                      </div>

                      {/* Category and Complexity */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <motion.div
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          />
                          {project.category}
                        </span>
                        <span className="flex items-center gap-2">
                          <motion.div
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 + 0.2 }}
                          />
                          {project.complexity}
                        </span>
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300 group/github"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </motion.svg>
                      <span className="text-sm font-medium">View Code</span>
                      <motion.svg
                        className="w-4 h-4 opacity-0 group-hover/github:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                    </motion.a>
                  </div>

                  {/* Project Description */}
                  <motion.p 
                    className="text-gray-400 text-lg leading-relaxed mb-6"
                    whileHover={{ color: '#e5e7eb' }}
                  >
                    {project.short}
                  </motion.p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-gray-900/80 text-gray-300 rounded-xl text-sm border border-gray-700 backdrop-blur-sm cursor-pointer"
                        variants={techVariants}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: '#ffffff',
                          borderColor: 'rgba(255,255,255,0.3)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Floating Element */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-3 bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-800 text-gray-400"
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
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
              Interested in my work? Check out my <a href="https://github.com/CODING-DARSH" className="text-white font-semibold hover:underline">GitHub</a> for more projects
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}