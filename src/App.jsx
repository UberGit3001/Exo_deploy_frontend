import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Docs from './Docs' // On importe notre nouvelle page
import './App.css'

// 1. On isole le contenu de la page d'accueil dans un composant local
function Home({ isSubscribed, setIsSubscribed }) {
  return (
    <>
      <main className="hero-section">
        <div className="hero-text-content">
          <div className="badge">Propulsé par Vite & React</div>
          <h1 className="hero-title">
            Créez des applications <span className="highlight">ultra-rapides</span>
          </h1>
          <p className="hero-subtitle">
            Modifiez <code>src/App.jsx</code> et observez les changements instantanément grâce au HMR.
          </p>
          <div className="cta-container">
            <button
              type="button"
              className={`cta-button ${isSubscribed ? 'success' : ''}`}
              onClick={() => setIsSubscribed(!isSubscribed)}
            >
              {isSubscribed ? "✓ Vous êtes inscrit !" : "Commencer gratuitement"}
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            <img src={heroImg} className="main-hero-image" alt="Illustration principale" />
            <img src={reactLogo} className="floating-icon react" alt="React logo" />
            <img src={viteLogo} className="floating-icon vite" alt="Vite logo" />
          </div>
        </div>
      </main>

      <section className="community-section">
        <h2>Rejoignez l'écosystème</h2>
        <div className="social-links-grid">
          <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer" className="social-card"><span>Discord</span></a>
          <a href="https://x.com/vite_js" target="_blank" rel="noreferrer" className="social-card"><span>X.com</span></a>
          <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer" className="social-card"><span>Bluesky</span></a>
        </div>
      </section>
    </>
  )
}

// 2. Le composant principal gère la structure globale (Navbar) et le système de Routes
function App() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <Router>
      <div className="page-container">
        
        {/* Barre de navigation commune à toutes les pages */}
        <header className="navbar">
          <div className="nav-logo">
            <img src={viteLogo} className="logo-mini" alt="Vite logo" />
            <span className="brand-name">ViteNext</span>
          </div>
          <nav className="nav-links">
            {/* ICI : On utilise <Link> pour naviguer vers nos pages internes sans recharger */}
            <Link to="/">Accueil</Link>
            <Link to="/documentation">Documentation</Link> 
            <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer" className="nav-btn-git">
              GitHub
            </a>
          </nav>
        </header>

        {/* Définition des URLs de l'application */}
        <Routes>
          <Route path="/" element={<Home isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />} />
          <Route path="/documentation" element={<Docs />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 ViteNext. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App