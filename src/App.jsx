import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <div className="page-container">
      {/* Barre de navigation supérieure */}
      <header className="navbar">
        <div className="nav-logo">
          <img src={viteLogo} className="logo-mini" alt="Vite logo" />
          <span className="brand-name">ViteNext</span>
        </div>
        <nav className="nav-links">
          <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>
          <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer" className="nav-btn-git">
            GitHub
          </a>
        </nav>
      </header>

      {/* Section Héro Principale */}
      <main className="hero-section">
        <div className="hero-text-content">
          <div className="badge">Propulsé par Vite & React</div>
          <h1 className="hero-title">
            Créez des applications <span className="highlight">ultra-rapides</span>
          </h1>
          <p className="hero-subtitle">
            Modifiez <code>src/App.jsx</code> et observez les changements instantanément grâce au HMR (Hot Module Replacement). Le futur du web commence ici.
          </p>
          
          {/* Zone d'action interactive */}
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

        {/* Conteneur de l'image Hero avec badges flottants */}
        <div className="hero-image-container">
          <div className="image-wrapper">
            <img src={heroImg} className="main-hero-image" alt="Illustration principale" />
            <img src={reactLogo} className="floating-icon react" alt="React logo" />
            <img src={viteLogo} className="floating-icon vite" alt="Vite logo" />
          </div>
        </div>
      </main>

      {/* Section Communauté & Réseaux */}
      <section className="community-section">
        <h2>Rejoignez l'écosystème</h2>
        <div className="social-links-grid">
          <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer" className="social-card">
            <use href="/icons.svg#discord-icon"></use>
            <span>Discord</span>
          </a>
          <a href="https://x.com/vite_js" target="_blank" rel="noreferrer" className="social-card">
            <span>X.com</span>
          </a>
          <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer" className="social-card">
            <span>Bluesky</span>
          </a>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="footer">
        <p>© 2026 ViteNext. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default App