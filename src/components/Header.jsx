import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-white rounded-full absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Darsh Vithlani
            </h1>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="hidden sm:block px-3 py-1 rounded-full border border-gray-700 bg-black/50 text-xs text-gray-400"
            whileHover={{ 
              borderColor: 'rgba(255,255,255,0.3)',
              color: '#ffffff'
            }}
          >
            AI/ML Engineer
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              className="relative text-gray-300 hover:text-white text-sm font-medium group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
          
          {/* CTA Button */}
          <motion.a
            variants={itemVariants}
            href="mailto:darshvit20@gmail.com"
            className="px-6 py-2 bg-white text-black rounded-lg font-semibold text-sm relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white group-hover:from-white group-hover:to-gray-100 transition-all duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Hire Me
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg border border-gray-700 bg-black/50"
          whileHover={{ borderColor: 'rgba(255,255,255,0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 relative">
            <motion.span
              className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 0 : -4,
                x: '-50%'
              }}
            />
            <motion.span
              className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white rounded-full"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                x: '-50%'
              }}
            />
            <motion.span
              className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? 0 : 4,
                x: '-50%'
              }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-gray-800/50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white text-lg font-medium py-2 border-b border-gray-800/50"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="mailto:darshvit20@gmail.com"
                className="block w-full text-center px-6 py-3 bg-white text-black rounded-lg font-semibold mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white to-gray-400"
        style={{ width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  )
}