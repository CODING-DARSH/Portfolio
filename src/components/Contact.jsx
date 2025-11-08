import React from 'react'
import { motion } from 'framer-motion'

// Container variants for staggered animations
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

export default function Contact() {
  const contactVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.3
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  }

  const contactInfo = [
    {
      label: "Email",
      value: "darshvit20@gmail.com",
      href: "mailto:darshvit20@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: "Phone",
      value: "+91 9426495221",
      href: "tel:+919426495221",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      value: "darsh-vithlani",
      href: "https://www.linkedin.com/in/darsh-vithlani-43430027b/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ]

  return (
    <motion.footer
      id="contact"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={contactVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gray-400/3 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={contactVariants}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-2xl border border-gray-700 bg-black/50 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full mr-3"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm font-medium text-gray-300">Let's Connect</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4"
            whileInView={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to bring your ideas to life? Let's discuss how we can <span className="text-white font-semibold">build something amazing</span> together.
          </motion.p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          className="relative bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-8 lg:p-12 group hover:border-gray-600 transition-all duration-500"
          variants={contactVariants}
          whileHover={{ y: -5, scale: 1.01 }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Contact Information */}
              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.h3
                  className="text-2xl font-bold text-white"
                  variants={itemVariants}
                >
                  Let's start a conversation
                </motion.h3>
                
                <motion.p
                  className="text-gray-400 text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you.
                </motion.p>

                {/* Contact Details */}
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                >
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.label === 'LinkedIn' ? '_blank' : '_self'}
                      rel={contact.label === 'LinkedIn' ? 'noreferrer' : ''}
                      className="flex items-center gap-4 p-3 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group/item"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400">{contact.label}</div>
                        <div className="text-white font-medium group-hover/item:text-gray-100 transition-colors">
                          {contact.value}
                        </div>
                      </div>
                      <motion.svg
                        className="w-4 h-4 text-gray-400 group-hover/item:text-green-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Side - CTA */}
              <motion.div
                className="text-center lg:text-right space-y-6"
                variants={containerVariants}
              >
                <motion.div
                  className="space-y-4"
                  variants={itemVariants}
                >
                  <h4 className="text-xl font-semibold text-white">
                    Ready to get started?
                  </h4>
                  <p className="text-gray-400">
                    Send me a message and I'll get back to you within 24 hours.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
                  variants={containerVariants}
                >
                  <motion.a
                    href="mailto:darshvit20@gmail.com?subject=Hi%20Darsh%20—%20Let's%20Work%20Together"
                    className="group/email relative px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg overflow-hidden"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                      whileHover={{ scale: 1.1 }}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      Send Email
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
                    href="tel:+919426495221"
                    className="group/phone px-8 py-4 border-2 border-gray-700 rounded-2xl font-semibold text-lg relative overflow-hidden"
                    variants={buttonVariants}
                    whileHover={{ borderColor: 'rgba(255,255,255,0.5)', scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover/phone:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center gap-3 text-gray-300 group-hover/phone:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Copyright section has been removed */}
      </div>
    </motion.footer>
  )
}