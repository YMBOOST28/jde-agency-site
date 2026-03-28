import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[68px] md:h-[72px]">

          {/* Logo — more presence */}
          <a href="#" className="flex items-end gap-2.5 group" aria-label="JDE Agency">
            <div className="flex flex-col leading-none">
              <span className="text-[26px] font-extralight text-white tracking-[0.12em] leading-none">
                JDE<span className="text-jade">.</span>
              </span>
              <span className="text-[9px] font-light tracking-[0.35em] uppercase text-white/30 mt-[3px] group-hover:text-white/50 transition-colors duration-200">
                Agency
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/42 hover:text-white/90 tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="text-[13px] bg-jade text-obsidian font-medium px-5 py-2.5 rounded-lg hover:bg-jade-deep hover:text-white transition-all duration-200 tracking-wide"
            >
              Prendre contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/55 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 border-t border-white/5' : 'max-h-0'
        } bg-obsidian/98 backdrop-blur-md`}
      >
        <nav className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-white/55 hover:text-white py-2.5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 text-center bg-jade text-obsidian font-medium px-5 py-3 rounded-lg text-[13.5px] tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            Prendre contact
          </a>
        </nav>
      </div>
    </header>
  )
}
