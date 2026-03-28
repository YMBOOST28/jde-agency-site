import { useInView } from '@/hooks/useInView'

interface TimelineItem {
  month: string
  orders: string
  revenue: string
  revenueValue: number
  active?: boolean
}

const timeline: TimelineItem[] = [
  { month: 'Août 2025', orders: '55', revenue: '2 400 €', revenueValue: 2400 },
  { month: 'Sept. 2025', orders: '1 417', revenue: '30 000 €', revenueValue: 30000 },
  { month: 'Nov. 2025', orders: '1 386', revenue: '55 000 €', revenueValue: 55000 },
  { month: 'Déc. 2025', orders: '1 554', revenue: '66 000 €', revenueValue: 66000 },
  { month: 'Fév. 2026', orders: '2 250', revenue: '121 000 €', revenueValue: 121000 },
  { month: 'Mars 2026', orders: '1 382+', revenue: '+87 000 €', revenueValue: 87000, active: true },
]

const maxRevenue = 121000

const highlights = [
  { value: '458 000 €', label: 'CA cumulé en 7 mois' },
  { value: '×50', label: 'Croissance mensuelle' },
  { value: '91%', label: 'CA via TikTok Shop' },
]

export default function Results() {
  const { ref, inView } = useInView()

  return (
    <section id="resultats" className="bg-jade-mist py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-jade-deep text-[11px] tracking-[0.25em] uppercase font-medium mb-4">
            Cas client
          </p>
          <h2 className="text-obsidian text-[clamp(1.8rem,4vw,3rem)] font-extralight leading-tight tracking-tight">
            Des chiffres réels.<br className="hidden sm:block" /> Une marque réelle.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Brand info + highlights */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Brand name */}
            <div className="mb-8">
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-extralight text-jade-deep tracking-tight leading-none mb-2">
                MELA' AURA
              </h3>
              <p className="text-smoke/60 text-sm tracking-wide font-light">
                Soins & skincare · Géré par JDE Agency depuis juin 2025
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-jade/40 mb-8" />

            {/* Key highlights */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span className="text-[2rem] font-extralight text-obsidian tracking-tight leading-none">
                    {h.value}
                  </span>
                  <span className="text-xs text-smoke/50 uppercase tracking-[0.15em] font-light">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Context note */}
            <div className="bg-white/60 border border-jade-light/60 rounded-xl p-5">
              <p className="text-[13px] text-smoke/70 leading-relaxed font-light">
                91% du CA de MELA' AURA provient directement de TikTok Shop via
                affiliés et lives. Le canal TikTok génère également{' '}
                <span className="text-obsidian font-medium">12 000 €/mois</span> sur
                leur site Shopify.
              </p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[11px] text-smoke/40 uppercase tracking-[0.2em] font-medium mb-6">
              Progression mensuelle
            </p>

            <div className="space-y-4">
              {timeline.map((item, i) => {
                const pct = Math.round((item.revenueValue / maxRevenue) * 100)
                return (
                  <div
                    key={i}
                    className={`group ${
                      item.active ? 'opacity-60' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] text-smoke/50 font-light w-24 shrink-0">
                          {item.month}
                        </span>
                        {item.active && (
                          <span className="text-[9px] text-jade-deep uppercase tracking-[0.15em] bg-jade/15 px-2 py-0.5 rounded-full">
                            En cours
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] text-smoke/40 font-light">
                          {item.orders} cmd
                        </span>
                        <span className="text-[14px] font-medium text-obsidian tracking-tight w-24 text-right">
                          {item.revenue}
                        </span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-[3px] bg-jade-light/40 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          inView ? '' : 'w-0'
                        } ${item.active ? 'bg-jade/40' : 'bg-jade-deep'}`}
                        style={{
                          width: inView ? `${pct}%` : '0%',
                          transitionDelay: `${300 + i * 120}ms`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center text-[13px] text-jade-deep font-medium tracking-wide hover:text-obsidian transition-colors group"
              >
                Vous avez un produit ? Parlons-en.
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
