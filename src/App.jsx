import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/Home/Home'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'
import PortfolioPage from './pages/Portfolio'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default App
