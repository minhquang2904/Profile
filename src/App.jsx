import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/Home/Home'
import ContactPage from './pages/Contact/Contact'
import AboutPage from './pages/About/About'
import PortfolioPage from './pages/Portfolio/Portfolio'
import { AnimatePresence } from 'framer-motion'

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <Navigation />
            <AnimatePresence mode="wait">
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App
