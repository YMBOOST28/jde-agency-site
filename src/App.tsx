import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import ProofBar from './components/sections/ProofBar'
import Services from './components/sections/Services'
import Method from './components/sections/Method'
import Results from './components/sections/Results'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Brands from './components/sections/Brands'
import MentionsLegales from './pages/MentionsLegales'
import CGV from './pages/CGV'

type Page = 'home' | 'mentions' | 'cgv'

function getPage(): Page {
  const hash = window.location.hash
  if (hash === '#/mentions-legales') return 'mentions'
  if (hash === '#/cgv') return 'cgv'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage)

  useEffect(() => {
    const handler = () => {
      const next = getPage()
      setPage(next)
      if (next !== 'home') window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  if (page === 'mentions') return <MentionsLegales />
  if (page === 'cgv') return <CGV />

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Services />
        <Method />
        <Brands />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
