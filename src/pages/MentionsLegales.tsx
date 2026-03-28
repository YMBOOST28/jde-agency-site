/**
 * MENTIONS LÉGALES — JDE Agency
 *
 * ⚠️ Ce document contient encore quelques sections à adapter selon
 * l’outil de formulaire utilisé et les éventuels outils d’analyse.
 */

interface LegalSection {
  title: string
  content: React.ReactNode
}

const sections: LegalSection[] = [
  {
    title: '1. Éditeur du site',
    content: (
      <div className="space-y-2">
        <LegalRow label="Dénomination sociale" value="JDE Agency" />
        <LegalRow label="Forme juridique" value="EURL" />
        <LegalRow label="Capital social" value="100 €" />
        <LegalRow
          label="Siège social"
          value="Ain Nadjaa Sud Djenane Sfari Résidence Immar, Alger, Algérie"
        />
        <LegalRow label="N° SIREN" value="900202355" />
        <LegalRow label="N° TVA intracommunautaire" value="N/A" />
        <LegalRow label="Gérant" value="Djamil MOSTEGHANEMI" />
        <LegalRow
          label="Directeur de la publication"
          value="Djamil MOSTEGHANEMI"
        />
        <LegalRow label="Email de contact" value="jdeagency.live@gmail.com" />
      </div>
    ),
  },
  {
    title: '2. Hébergement',
    content: (
      <div className="space-y-2">
        <LegalRow label="Hébergeur" value="Vercel Inc." />
        <LegalRow
          label="Adresse"
          value="340 Pine Street, Suite 1350 — San Francisco, CA 94104, États-Unis"
        />
        <LegalRow label="Site web" value="vercel.com" />
      </div>
    ),
  },
  {
    title: '3. Propriété intellectuelle',
    content: (
      <p>
        L’ensemble des contenus présents sur ce site (textes, images, graphismes,
        logo, icônes, sons, logiciels, vidéos, structure, charte graphique) est
        la propriété exclusive de JDE Agency ou fait l’objet d’une autorisation
        d’utilisation. Toute reproduction, représentation, distribution,
        modification, adaptation ou exploitation, totale ou partielle, sans
        autorisation écrite préalable de JDE Agency est strictement interdite.
      </p>
    ),
  },
  {
    title: '4. Données personnelles & RGPD',
    content: (
      <div className="space-y-3">
        <p>
          JDE Agency collecte des données personnelles dans le cadre du
          formulaire de contact (nom, adresse e-mail, informations relatives à
          la marque ou au projet). Ces données sont utilisées exclusivement pour
          répondre aux demandes formulées et ne sont transmises à aucun tiers
          sans consentement, sauf obligation légale ou nécessité technique liée
          à l’hébergement ou au traitement du formulaire.
        </p>
        <p>
          Conformément au Règlement (UE) 2016/679 (RGPD) et à la réglementation
          applicable en matière de protection des données, vous disposez d’un
          droit d’accès, de rectification, de suppression, d’opposition et, le
          cas échéant, de limitation du traitement de vos données.
        </p>
        <p>
          Pour exercer ces droits, vous pouvez nous contacter à l’adresse
          suivante :{' '}
          <a
            href="mailto:jdeagency.live@gmail.com"
            className="text-jade hover:underline"
          >
            jdeagency.live@gmail.com
          </a>
        </p>
        <p className="text-white/30 text-xs italic">
          Si vous connectez plus tard un outil tiers de formulaire, pensez à
          préciser ici son nom, son rôle et le pays de traitement des données.
        </p>
      </div>
    ),
  },
  {
    title: '5. Cookies',
    content: (
      <p>
        Ce site peut utiliser des cookies strictement nécessaires à son bon
        fonctionnement. Aucun cookie publicitaire ou de mesure d’audience n’est
        activé sans information préalable adaptée. Vous pouvez configurer votre
        navigateur pour refuser ou supprimer les cookies.
        <span className="text-white/30 text-xs italic">
          {' '}
          Si vous ajoutez plus tard un outil d’analyse (ex. Google Analytics,
          Plausible, Meta Pixel…), pensez à mettre cette section à jour.
        </span>
      </p>
    ),
  },
  {
    title: '6. Liens hypertextes',
    content: (
      <p>
        JDE Agency ne peut être tenu responsable du contenu des sites tiers
        accessibles via des liens hypertextes présents sur ce site. Ces liens
        sont fournis à titre informatif uniquement.
      </p>
    ),
  },
  {
    title: '7. Loi applicable & juridiction',
    content: (
      <p>
        Le présent site et ses mentions légales sont soumis au droit applicable
        au regard de l’activité exercée. En cas de litige, une solution amiable
        sera recherchée en priorité avant toute action contentieuse.
      </p>
    ),
  },
]

function LegalRow({
  label,
  value,
  placeholder = false,
}: {
  label: string
  value: string
  placeholder?: boolean
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <span className="text-white/35 text-[13px] font-medium min-w-[200px] shrink-0">
        {label}
      </span>
      <span
        className={`text-[13px] font-light ${
          placeholder ? 'text-jade/50 italic' : 'text-white/65'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-obsidian">
      <div className="border-b border-white/5 sticky top-0 bg-obsidian/95 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <a
            href="#"
            className="text-[13px] text-white/40 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Retour au site
          </a>
          <span className="text-[12px] text-white/20 tracking-wide">
            JDE Agency
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <p className="text-jade text-[11px] tracking-[0.25em] uppercase font-medium mb-5">
          Légal
        </p>
        <h1 className="text-white text-3xl md:text-4xl font-extralight tracking-tight mb-3">
          Mentions légales
        </h1>
        <p className="text-white/25 text-sm font-light mb-12">
          Dernière mise à jour :{' '}
          {new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <div className="bg-jade/8 border border-jade/15 rounded-xl px-5 py-4 mb-12">
          <p className="text-jade/80 text-[12.5px] font-light leading-relaxed">
            Vérifiez les informations légales et adaptez les sections liées aux
            données personnelles et aux cookies selon les outils réellement
            utilisés sur le site avant mise en ligne.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="border-t border-white/5 pt-8">
              <h2 className="text-white text-lg font-light tracking-tight mb-5">
                {section.title}
              </h2>
              <div className="text-white/50 text-[14px] font-light leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <p className="text-[11px] text-white/15">
            © {new Date().getFullYear()} JDE Agency. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  )
}