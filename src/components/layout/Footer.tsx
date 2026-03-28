import { AtSign } from 'lucide-react'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="flex flex-col leading-none">
              <span className="text-[22px] font-extralight text-white tracking-[0.12em]">
                JDE<span className="text-jade">.</span>
              </span>
              <span className="text-[8.5px] tracking-[0.32em] uppercase text-white/22 mt-[3px]">
                Agency
              </span>
            </a>
            <p className="text-[11px] text-white/20 mt-4 tracking-wide font-light">
              Live content. Live commerce. Live brands.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-white/28 hover:text-white/55 tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="text-center md:text-right">
            <a
              href="mailto:jdeagency.live@gmail.com"
              className="text-xs text-jade/65 hover:text-jade transition-colors tracking-wide"
            >
              jdeagency.live@gmail.com
            </a>
            <a
              href="https://www.instagram.com/jde.agency/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-end gap-1.5 text-[11px] text-white/18 hover:text-jade/70 mt-1 tracking-wide transition-colors duration-200"
            >
              <AtSign size={11} strokeWidth={1.5} />
              @jde.agency
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/14 tracking-wide">
            © {new Date().getFullYear()} JDE Agency. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <a
              href="#/mentions-legales"
              className="text-[11px] text-white/14 hover:text-white/35 tracking-wide transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#/cgv"
              className="text-[11px] text-white/14 hover:text-white/35 tracking-wide transition-colors"
            >
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
