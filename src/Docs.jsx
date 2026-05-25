// src/Docs.jsx
import { Link } from 'react-router-dom'
import viteLogo from './assets/vite.svg'

function Docs() {
  return (
    <div className="page-container" style={{ textAlign: 'center', paddingTop: '5rem' }}>
      <img src={viteLogo} className="logo-mini" alt="Vite logo" />
      <h1>Documentation Officielle</h1>
      <p style={{ color: '#94a3b8', margin: '2rem 0' }}>
        Bienvenue sur la page de doc. L'URL a changé sans recharger l'application !
      </p>
      {/* <Link> remplace la balise <a> pour la navigation interne */}
      <Link to="/" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Retour à l'accueil
      </Link>
    </div>
  )
}

export default Docs