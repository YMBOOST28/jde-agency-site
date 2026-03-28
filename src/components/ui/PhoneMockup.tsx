import { useState, useEffect, useRef } from 'react'

// ─── Mock data ────────────────────────────────────────────────────────────────

const COMMENT_POOL: { username: string; text: string }[] = [
  { username: 'aurelie_b',      text: "elle est incroyable cette crème 😍" },
  { username: 'laeticia_m',     text: "livraison en France ?" },
  { username: 'sophie_beauty',  text: "je prends le lot de 2 !" },
  { username: 'juliette_sk',    text: "c'est quoi le prix ?" },
  { username: 'clementine_r',   text: "j'en veux 2 !!" },
  { username: 'maevacos',       text: "ça tient toute la journée ?" },
  { username: 'pauline_bb',     text: "je commande tout de suite ✨" },
  { username: 'lena_fleur',     text: "super crème de nuit 🙏" },
  { username: 'amandine_bl',    text: "ça sent bon ?" },
  { username: 'chloe_makeup',   text: "disponible en pharmacie ?" },
  { username: 'emma_glow',      text: "incroyable le résultat en 3 jours" },
  { username: 'sarah_bbeauty',  text: "on la reçoit sous combien de jours ?" },
  { username: 'mathilde_s',     text: "ma peau était horrible avant 😭 maintenant 🔥" },
  { username: 'lucie_cos',      text: "cadeau idéal pour ma mère 💝" },
  { username: 'nina_gloss',     text: "j'ai déjà commandé, c'est TOP" },
  { username: 'manon_lit',      text: "le packaging est ouf" },
  { username: 'jade_mirror',    text: "testée, approuvée 💯" },
  { username: 'camille_glow',   text: "promo dispo jusqu'à quand ?" },
  { username: 'elodie_b',       text: "vous livrez à la Réunion ?" },
  { username: 'flora_sk',       text: "elle sent la fleur de cerisier ?? 🌸" },
]

const ORDER_USERNAMES = [
  'aurelie_b', 'marie_sk83', 'lena_fleur', 'sophie_beauty_',
  'clemmm_', 'pauline.bb', 'juliette_rose', 'maeva_cos',
  'emma_g_glow', 'lucie_cosmetics', 'camille_0', 'flora_sk',
  'manon_l_', 'jade_mirror25', 'elodie.beau', 'sarah_b_',
]

// ─── Types ────────────────────────────────────────────────────────────────────

interface Comment {
  id: number
  username: string
  text: string
}

interface OrderNotif {
  id: number
  username: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const formatViewers = (n: number): string =>
  n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n)

// Opacity ramp: [oldest, middle, newest] — max 3 visible
const OPACITY_RAMP = [0.35, 0.62, 1.0]

// ─── Props ────────────────────────────────────────────────────────────────────

export interface PhoneMockupProps {
  videoSrc: string
  posterSrc?: string
  /** 0 = initial tilt, 1 = fully frontal */
  scrollProgress?: number
  className?: string
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function PhoneMockup({
  videoSrc,
  posterSrc,
  scrollProgress = 0,
  className = '',
}: PhoneMockupProps) {
  // ── 3D transform ────────────────────────────────────────────────────────────
  const p = Math.min(Math.max(scrollProgress, 0), 1)
  const rotY = -12 + p * 12  // -12deg → 0deg
  const rotX =   3 - p * 3   //  +3deg → 0deg

  // ── Live overlay state ───────────────────────────────────────────────────────
  const [comments, setComments]   = useState<Comment[]>([])
  const [viewers,  setViewers]    = useState(2847)
  const [notif,    setNotif]      = useState<OrderNotif | null>(null)

  // Stable refs for timer ids and cycling indexes
  const commentTimerRef  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const notifTimerRef    = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const notifDismissRef  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const commentIdxRef    = useRef(0)
  const commentIdRef     = useRef(0)
  const notifIdxRef      = useRef(0)

  // ── Scrolling comments ───────────────────────────────────────────────────────
  useEffect(() => {
    const scheduleNext = () => {
      const delay = 2200 + Math.random() * 1600  // 2.2 – 3.8 s
      commentTimerRef.current = setTimeout(() => {
        const pool  = COMMENT_POOL
        const entry = pool[commentIdxRef.current % pool.length]
        commentIdxRef.current++

        setComments(prev => {
          const next: Comment[] = [
            ...prev,
            { id: ++commentIdRef.current, ...entry },
          ]
          return next.slice(-3)  // keep last 3
        })

        scheduleNext()
      }, delay)
    }

    // First comment appears quickly to populate the screen
    commentTimerRef.current = setTimeout(() => {
      setComments([{ id: ++commentIdRef.current, ...COMMENT_POOL[0] }])
      commentIdxRef.current = 1
      scheduleNext()
    }, 800)

    return () => clearTimeout(commentTimerRef.current)
  }, [])

  // ── Dynamic viewer count ─────────────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setViewers(prev => {
        const delta = Math.round((Math.random() - 0.42) * 90)  // slight upward bias
        return Math.min(Math.max(prev + delta, 2100), 5200)
      })
    }, 4200)
    return () => clearInterval(id)
  }, [])

  // ── Order notifications ──────────────────────────────────────────────────────
  useEffect(() => {
    const scheduleNext = () => {
      const delay = 6000 + Math.random() * 5000  // 6 – 11 s
      notifTimerRef.current = setTimeout(() => {
        const username = ORDER_USERNAMES[notifIdxRef.current % ORDER_USERNAMES.length]
        notifIdxRef.current++

        const id = Date.now()
        setNotif({ id, username })

        // Auto-dismiss after 2.6 s
        clearTimeout(notifDismissRef.current)
        notifDismissRef.current = setTimeout(() => setNotif(null), 2600)

        scheduleNext()
      }, delay)
    }

    scheduleNext()

    return () => {
      clearTimeout(notifTimerRef.current)
      clearTimeout(notifDismissRef.current)
    }
  }, [])

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Ambient glow behind phone */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 280px 380px at 50% 50%, rgba(143,180,160,0.14), transparent 70%)',
        }}
      />

      {/* Phone body — 3D transform */}
      <div
        style={{
          transform: `rotateY(${rotY}deg) rotateX(${rotX}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s linear',
          willChange: 'transform',
        }}
      >
        {/* Outer frame */}
        <div
          className="relative w-[248px] sm:w-[264px] h-[510px] sm:h-[542px] rounded-[44px] select-none"
          style={{
            background: 'linear-gradient(150deg, #2e2e2e 0%, #111111 100%)',
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.09),
              inset 0 0 0 1px rgba(255,255,255,0.04),
              0 48px 96px rgba(0,0,0,0.55),
              0 12px 24px rgba(0,0,0,0.35)
            `,
          }}
        >
          {/* Volume buttons */}
          <div className="absolute -left-[3px] top-[88px]  w-[3px] h-[30px] rounded-l bg-[#1a1a1a]" />
          <div className="absolute -left-[3px] top-[128px] w-[3px] h-[44px] rounded-l bg-[#1a1a1a]" />
          <div className="absolute -left-[3px] top-[180px] w-[3px] h-[44px] rounded-l bg-[#1a1a1a]" />
          {/* Power button */}
          <div className="absolute -right-[3px] top-[118px] w-[3px] h-[54px] rounded-r bg-[#1a1a1a]" />

          {/* Screen */}
          <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] rounded-[36px] overflow-hidden bg-black">

            {/* Video */}
            <video
              src={videoSrc}
              poster={posterSrc}
              muted
              autoPlay
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />

            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 60%, rgba(0,0,0,0.35) 100%)',
              }}
            />

            {/* Dynamic Island */}
            <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[86px] h-[26px] bg-black rounded-full z-20" />

            {/* ── TikTok Live UI ── */}
            <div className="absolute inset-0 z-20 pointer-events-none">

              {/* LIVE badge */}
              <div className="absolute top-[46px] left-3 flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-2.5 py-[5px] rounded-full">
                <div className="w-[6px] h-[6px] rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-[9px] font-medium tracking-wider">EN DIRECT</span>
              </div>

              {/* Viewer count */}
              <div className="absolute top-[46px] right-3 flex items-center gap-1 bg-black/35 backdrop-blur-sm px-2 py-[5px] rounded-full">
                <span className="text-white/80 text-[9px] tracking-wide">
                  {formatViewers(viewers)} 👁
                </span>
              </div>

              {/* Order notification */}
              {notif && (
                <div
                  key={notif.id}
                  className="absolute left-3 right-14 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-[7px]"
                  style={{
                    bottom: '108px',
                    animation: 'notifSlideIn 0.3s ease forwards',
                  }}
                >
                  <span className="text-[11px] shrink-0">🛍️</span>
                  <p className="text-[8.5px] leading-tight truncate">
                    <span className="text-[#8FB4A0] font-medium">@{notif.username}</span>
                    <span className="text-white/55"> vient de commander</span>
                  </p>
                </div>
              )}

              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)',
                }}
              />

              {/* Scrolling comments */}
              <div className="absolute left-3 right-14 flex flex-col justify-end gap-[5px]" style={{ bottom: '48px' }}>
                {comments.map((comment, i) => {
                  const opacityIndex = i + (3 - comments.length)
                  const opacity = OPACITY_RAMP[Math.max(opacityIndex, 0)] ?? 1
                  const isNewest = i === comments.length - 1

                  return (
                    <p
                      key={comment.id}
                      className="text-[8.5px] leading-snug"
                      style={{
                        opacity,
                        animation: isNewest
                          ? 'commentSlideIn 0.35s ease forwards'
                          : 'none',
                      }}
                    >
                      <span className="text-[#8FB4A0] font-medium">
                        @{comment.username}
                      </span>{' '}
                      <span className="text-white/80">{comment.text}</span>
                    </p>
                  )
                })}
              </div>

              {/* Right interaction icons */}
              <div className="absolute right-3 bottom-14 flex flex-col items-center gap-3">
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[15px]">❤️</span>
                  <span className="text-white/45 text-[7px]">4.2k</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[15px]">💬</span>
                  <span className="text-white/45 text-[7px]">842</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[15px]">🛍️</span>
                  <span className="text-white/45 text-[7px]">Acheter</span>
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-white/22 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
