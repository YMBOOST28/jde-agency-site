import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'TikTok Shop fonctionne-t-il pour mon type de produit ?',
    answer:
      "TikTok Shop performe particulièrement bien sur les produits grand public, cosmétiques, soins, alimentation, mode et produits de niche à fort potentiel d'achat impulsif. On vous dit honnêtement dès l'audit si votre produit est adapté — pas de fausse promesse.",
  },
  {
    question: 'Combien de temps avant les premiers résultats ?',
    answer:
      "Les premières commandes arrivent généralement dès le premier mois. L'accélération réelle se fait sur 2 à 3 mois. MELA' AURA est passé de 2 400 € à 30 000 € dès le deuxième mois d'activité.",
  },
  {
    question: "J'ai déjà une boutique Shopify. Est-ce compatible ?",
    answer:
      "Absolument. TikTok Shop cohabite parfaitement avec Shopify et lui génère du trafic additionnel. Notre client génère aujourd'hui 12 000 €/mois supplémentaires sur son Shopify grâce au trafic TikTok.",
  },
  {
    question: 'Est-ce que je garde le contrôle sur ma marque ?',
    answer:
      "Oui. Vous validez la stratégie, les contenus, les affiliés. JDE Agency est votre équipe TikTok dédiée — nous agissons dans le cadre que vous définissez, jamais en dehors.",
  },
  {
    question: "Pourquoi une commission en plus de la mensualité ?",
    answer:
      "La commission aligne nos intérêts : quand vous vendez plus, on gagne plus. C'est la garantie que nous sommes mobilisés pour maximiser vos ventes — pas juste pour vous facturer des heures.",
  },
  {
    question: "Et si les résultats ne sont pas au rendez-vous ?",
    answer:
      "Le setup est à 500 € et les 6 premiers mois sont à mensualité fixe de 590 €. On construit ensemble sans vous engager sur des années. Si à l'issue de la période les résultats ne sont pas là, vous êtes libre de partir.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView()

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="bg-fog py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-jade-deep text-[11px] tracking-[0.25em] uppercase font-medium mb-4">
            Questions fréquentes
          </p>
          <h2 className="text-obsidian text-[clamp(1.8rem,4vw,3rem)] font-extralight leading-tight tracking-tight">
            On répond à vos objections<br className="hidden sm:block" /> avant l'échange.
          </h2>
        </div>

        {/* Accordion */}
        <div
          className={`max-w-3xl transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border-b border-jade-light/50 last:border-b-0"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="text-[15px] text-obsidian font-light leading-snug group-hover:text-jade-deep transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className={`text-jade-deep shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {/* Answer — smooth max-height transition */}
              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{ maxHeight: openIndex === i ? '300px' : '0px' }}
              >
                <p className="text-smoke/65 text-[14px] font-light leading-relaxed pb-6 pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
