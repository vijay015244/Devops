import React from 'react';
import './App.css';
import { Terminal, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">VK<span className="accent">.</span></div>
        <nav className="desktop-nav">
          <ul>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge">
              <Terminal size={14} />
              <span>Initializing workspace...</span>
            </div>
            <h1>Vijay Kumar <span className="accent">A</span></h1>
            <h2 className="subtitle">DevOps Engineer <span className="typing-cursor">_</span></h2>
            <p className="hero-description">
              Expert in cloud infrastructure, CI/CD automation, Kubernetes, and monitoring solutions.
              Adept at deploying scalable systems, enhancing reliability, and leading zero-downtime production upgrades.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Deploy Contact <ArrowRight size={16} /></a>
              <div className="social-links">
                <a href="https://linkedin.com/in/vijaykumara01" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:iamvijaykumar.a@gmail.com"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        <Experience />
        <Projects />
        <Skills />
        
        <section id="contact" className="section contact-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-card"
          >
            <h2>Ready to Optimize Infrastructure?</h2>
            <p>From cloud migrations to automated CI/CD pipelines, let's build something scalable and reliable together.</p>
            <a href="mailto:iamvijaykumar.a@gmail.com" className="btn btn-primary">
              <Mail size={18} /> Send an Email
            </a>
          </motion.div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Vijay Kumar A. System deployed securely. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
