import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Certificates from './components/Certificates'

export default function App() {
return (
<div className="min-h-screen">
<Header />
<main className="max-w-6xl mx-auto px-6">
<Hero />
<Skills />
<Projects />
<About />
<Certificates />
<Contact />
</main>
</div>
)
}