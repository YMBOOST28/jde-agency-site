import { useState, useEffect } from 'react'
import PhoneMockup from '@/components/ui/PhoneMockup'

const VIDEO_SRC = '/videos/live-demo.mp4'
// Replace with a poster frame image if available:
const VIDEO_POSTER = undefined

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const p = Math.min(window.scrollY / (window.innerHeight * 0.55), 1)
      setScrollProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-obsidian overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 1000px 700px at 70% 40%, rgba(143,180,160,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Content grid */}
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 xl:gap-24 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="max-w-[600px]">

            {/* Caption */}
            <p className="text-jade text-[11px] tracking-[0.3em] uppercase font-light mb-8">
              Live · Commerce · Brands
            </p>

            {/* H1 — Option A */}
            <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-extralight leading-[1.06] tracking-tight mb-7">
              <span className="text-white">450&nbsp;000&nbsp;€<br />générés en live.</span>
              <br />
              <span className="text-jade">7 mois.<br />Une marque.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/38 text-[16px] sm:text-[17px] font-light leading-relaxed mb-10 max-w-[500px]">
              JDE Agency pilote votre canal TikTok Shop de A à Z — lives,
              affiliés, boutique, ads et performance. Vous vous concentrez sur
              votre marque. On génère les ventes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-jade text-obsidian font-medium px-7 py-4 rounded-xl hover:bg-jade-deep hover:text-white transition-all duration-200 text-[14.5px] tracking-wide"
              >
                Parlons de votre marque
              </a>
              <a
                href="#resultats"
                className="inline-flex items-center justify-center border border-white/10 text-white/45 hover:text-white hover:border-white/22 font-light px-7 py-4 rounded-xl transition-all duration-200 text-[14.5px] tracking-wide"
              >
                Voir les résultats
              </a>
            </div>

            {/* Reassurance */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              {[
                '11 000+ commandes',
                '91% via TikTok Shop',
                '7 mois · 1 marque',
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="text-jade/20" aria-hidden="true">·</span>
                  )}
                  <span className="text-[12.5px] text-white/30 tracking-wide">
                    {item}
                  </span>
                </span>
              ))}
            </div>

            {/* Mobile: phone mockup below text — no 3D */}
            <div className="lg:hidden mt-12 flex justify-center">
              <PhoneMockup
                videoSrc={VIDEO_SRC}
                posterSrc={VIDEO_POSTER}
                scrollProgress={1}
              />
            </div>
          </div>

          {/* ── RIGHT: Phone mockup — desktop only ── */}
          <div className="hidden lg:flex items-center justify-center py-12">
            <PhoneMockup
              videoSrc={VIDEO_SRC}
              posterSrc={VIDEO_POSTER}
              scrollProgress={scrollProgress}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 pointer-events-none opacity-20">
        <div className="w-px h-10 bg-jade animate-pulse" />
      </div>
    </section>
  )
}
