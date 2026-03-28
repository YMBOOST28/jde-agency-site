import { useInView } from '@/hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Audit & Setup',
    description:
      "Analyse de votre marque, de vos produits et de votre marché. Configuration complète de la boutique, des fiches produits et des assets. On est prêts à vendre dès le départ.",
  },
  {
    number: '02',
    title: 'Lancement',
    description:
      'Premiers lives, premiers affiliés, premières commandes. On teste, on mesure, on ajuste rapidement pour identifier ce qui convertit le mieux pour votre marque.',
  },
  {
    number: '03',
    title: 'Accélération',
    description:
      "Montée en volume live, recrutement d'affiliés à grande échelle, stratégie ads. On pousse fort sur ce qui fonctionne et on maximise chaque levier.",
  },
  {
    number: '04',
    title: 'Pilotage continu',
    description:
      'Reporting mensuel, optimisation de chaque levier, alignement sur vos objectifs de CA. Nous sommes disponibles et proactifs — pas en attente de vos relances.',
  },
]

export default function Method() {
  const { ref, inView } = useInView()

  return (
    <section id="methode" className="bg-obsidian py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-jade text-[11px] tracking-[0.25em] uppercase font-medium mb-4">
            Notre méthode
          </p>
          <h2 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-extralight leading-tight tracking-tight">
            Un process rodé.<br className="hidden sm:block" /> 4 étapes.
          </h2>
          <p className="text-white/30 text-base font-light mt-4 max-w-lg leading-relaxed">
            Pas d'improvisation. Chaque marque suit le même chemin de croissance.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              {/* Connector line — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-jade/20 to-transparent z-0 -translate-y-1/2" />
              )}

              {/* Number */}
              <div className="text-[3.5rem] font-extralight text-jade/20 leading-none tracking-tight mb-5 select-none">
                {step.number}
              </div>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-jade/30 mb-5" />

              {/* Content */}
              <h3 className="text-white text-base font-medium tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-white/30 text-[13.5px] font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
