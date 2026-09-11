import React, { useState } from 'react'
import { Router, Routes, Route } from './router/Router'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Preloader from './components/Loader/Preloader'
import ConsultationModal from './components/ConsultationModal/ConsultationModal'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Programs from './pages/Programs/Programs'
import Contact from './pages/Contact/Contact'
import './App.css'

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  const handleOpenConsultation = () => setIsConsultationOpen(true)
  const handleCloseConsultation = () => setIsConsultationOpen(false)

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
        {/* Cinematic Preloader */}
        <Preloader />

        {/* Global Navigation */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/programs" element={<Programs onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenConsultation={handleOpenConsultation} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Consultation / Trial Pass Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
        />
        </div>
      </Router>
    </ThemeProvider>
  )
}
