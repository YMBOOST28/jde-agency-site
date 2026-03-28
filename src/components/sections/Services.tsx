import { Video, ShoppingBag, Users, TrendingUp, BarChart2, Layers } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import type { LucideIcon } from 'lucide-react'

interface Service {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    number: '01',
    icon: Video,
    title: 'Live TikTok Shop',
    description:
      'Mise en place et gestion complète de vos sessions live. Liveuses expertes, pilotage en temps réel, optimisation des conversions. Minimum 160h de live par mois.',
  },
  {
    number: '02',
    icon: ShoppingBag,
    title: 'Boutique TikTok Shop',
    description:
      'Création, configuration et optimisation complète de votre boutique. Fiches produits, catalogue, UX achat, suivi des performances.',
  },
  {
    number: '03',
    icon: Users,
    title: "Stratégie d'affiliation",
    description:
      'Sélection et coordination de créateurs de contenu alignés avec votre marque. Amplification organique et ventes affiliées à grande échelle.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'TikTok Ads',
    description:
      'Campagnes publicitaires TikTok Shop orientées performance. Ciblage, créatifs, pilotage des budgets. Chaque euro investi est tracé.',
  },
  {
    number: '05',
    icon: BarChart2,
    title: 'Accompagnement performance',
    description:
      'Reporting mensuel, optimisation continue, réunions de pilotage. Nous sommes votre équipe TikTok dédiée — pas un prestataire qui disparaît après le setup.',
  },
  {
    number: '06',
    icon: Layers,
    title: 'Stratégie de contenu & catalogue',
    description:
      "Audit et optimisation des fiches produits TikTok Shop, production de vidéos courtes produit, stratégie de contenu organique. Votre catalogue converti avant même le live.",
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="bg-fog py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-jade-deep text-[11px] tracking-[0.25em] uppercase font-medium mb-4">
            Nos services
          </p>
          <h2 className="text-obsidian text-[clamp(1.8rem,4vw,3rem)] font-extralight leading-tight tracking-tight">
            L'intégralité de votre canal<br className="hidden sm:block" /> TikTok Shop.
          </h2>
          <p className="text-smoke/70 text-base font-light mt-4 max-w-xl leading-relaxed">
            Nous prenons en charge chaque levier. Vous n'avez rien à gérer.
          </p>
        </div>

        {/* Cards — 3×2 symmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: Service
  index: number
  inView: boolean
}) {
  const Icon = service.icon

  return (
    <div
      className={`group relative bg-white border border-jade-light/40 rounded-xl p-7 hover:border-jade/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${100 + index * 70}ms`, transitionDuration: '600ms' }}
    >
      {/* Top jade accent */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-jade/40 to-transparent rounded-full" />

      {/* Number */}
      <span className="text-[11px] text-jade/45 tracking-[0.2em] font-medium mb-4 block">
        {service.number}
      </span>

      {/* Icon */}
      <div className="w-9 h-9 rounded-lg bg-jade-mist flex items-center justify-center mb-5 group-hover:bg-jade/15 transition-colors">
        <Icon size={16} className="text-jade-deep" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className="text-obsidian text-[15px] font-medium tracking-tight mb-3">
        {service.title}
      </h3>
      <p className="text-smoke/62 text-[13.5px] font-light leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}
