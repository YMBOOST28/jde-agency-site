import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '458 000 €', label: 'CA cumulé généré' },
  { value: '×50', label: 'Croissance en 7 mois' },
  { value: '11 000+', label: 'Commandes générées' },
  { value: '91%', label: 'CA via TikTok Shop' },
  { value: '160h', label: 'De live par mois' },
]

export default function ProofBar() {
  const { ref, inView } = useInView()

  return (
    <section id="chiffres" className="bg-jade-mist py-16 md:py-20">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } ${i === stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="text-[clamp(1.75rem,4vw,2.5rem)] font-extralight text-jade-deep tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-smoke/60 mt-2.5 font-light leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
