// ─── Logo data ────────────────────────────────────────────────────────────────
// To add a logo later: append one object to this array — nothing else to change.

const logos = [
  { src: '/logos/melaaura.png',  alt: "Mela'Aura"  },
  { src: '/logos/inescurly.png', alt: 'Ines Curly'  },
  { src: '/logos/ht26.png',      alt: 'HT26'        },
]

// Triplicate so one "half" of the track already fills any viewport.
// The full track = HALF + HALF → animating -50% = exactly one half → seamless loop.
const HALF = [...logos, ...logos, ...logos]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Brands() {
  return (
    <section
      aria-label="Marques accompagnées"
      className="bg-obsidian py-14 border-y border-white/[0.045]"
    >
      {/* Label */}
      <p
        className="text-center text-[10px] tracking-[0.32em] uppercase font-medium text-white/18 mb-10 select-none"
        aria-hidden="true"
      >
        Marques accompagnées
      </p>

      {/* Marquee track — lateral fade via CSS mask */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 11%, black 89%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 11%, black 89%, transparent 100%)',
        }}
      >
        {/* Outer wrapper controls pause-on-hover */}
        <div
          className="group"
          style={{ display: 'contents' }}
        >
          <div
            className="flex w-max"
            style={{
              animation: 'marquee 52s linear infinite',
            }}
            onMouseEnter={e =>
              ((e.currentTarget as HTMLElement).style.animationPlayState = 'paused')
            }
            onMouseLeave={e =>
              ((e.currentTarget as HTMLElement).style.animationPlayState = 'running')
            }
          >
            {/* First half — semantically meaningful */}
            {HALF.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-12 h-[72px] shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable={false}
                  className="max-h-10 max-w-[140px] w-auto object-contain select-none"
                  style={{
                    filter: 'grayscale(100%) invert(1)',
                    opacity: 0.58,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            ))}

            {/* Second half — decorative duplicate, hidden from screen readers */}
            <div aria-hidden="true" className="contents">
              {HALF.map((logo, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex items-center justify-center px-12 h-[72px] shrink-0"
                >
                  <img
                    src={logo.src}
                    alt=""
                    draggable={false}
                    className="max-h-10 max-w-[140px] w-auto object-contain select-none"
                    style={{
                      filter: 'grayscale(100%) invert(1)',
                      opacity: 0.58,
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
