/**
 * CONDITIONS GÉNÉRALES DE VENTE — JDE Agency
 *
 */

export default function CGV() {
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
          Conditions générales de vente
        </h1>
        <p className="text-white/25 text-sm font-light mb-12">
          Dernière mise à jour :{" "}
          {new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="bg-jade/8 border border-jade/15 rounded-xl px-5 py-4 mb-12">
          <p className="text-jade/80 text-[12.5px] font-light leading-relaxed">
            Ces conditions générales de vente constituent une base contractuelle
            de présentation. Elles doivent être adaptées à la réalité de vos
            modalités commerciales et validées avant usage définitif.
          </p>
        </div>

        <div className="space-y-12 text-white/50 text-[14px] font-light leading-relaxed">
          <CGVSection title="1. Objet et champ d'application">
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les
              relations contractuelles entre JDE Agency, EURL au capital social
              de 100 €, immatriculée sous le numéro 900202355, ayant son siège
              social à Ain Nadjaa Sud Djenane Sfari Résidence Immar, Alger,
              Algérie (ci-après « le Prestataire »), et tout client
              professionnel ou particulier (ci-après « le Client ») souhaitant
              bénéficier de ses services.
            </p>
            <p className="mt-3">
              Toute commande implique l’acceptation pleine et entière des
              présentes CGV. Elles prévalent sur tout autre document émanant du
              Client, sauf accord écrit contraire.
            </p>
          </CGVSection>

          <CGVSection title="2. Description des services">
            <p>JDE Agency propose notamment les prestations suivantes :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside marker:text-jade/40">
              <li>Gestion complète des sessions live TikTok Shop</li>
              <li>Création et optimisation de la boutique TikTok Shop</li>
              <li>Stratégie d’affiliation et coordination de créateurs</li>
              <li>Gestion de campagnes publicitaires TikTok Ads</li>
              <li>Accompagnement performance et reporting</li>
              <li>Stratégie de contenu et optimisation du catalogue produit</li>
            </ul>
            <p className="mt-3">
              Le détail précis des prestations, du périmètre, des volumes, des
              livrables et du calendrier d’exécution est défini dans le devis,
              la proposition commerciale ou tout document contractuel signé par
              le Client.
            </p>
          </CGVSection>

          <CGVSection title="3. Formation du contrat">
            <p>
              Le contrat est formé à compter de l’acceptation écrite du devis ou
              de la proposition commerciale émise par JDE Agency, accompagnée,
              le cas échéant, du versement d’un acompte lorsque celui-ci est
              prévu.
            </p>
            <p className="mt-3">
              Sauf mention contraire sur le devis, toute proposition commerciale
              non acceptée dans un délai de 30 jours pourra être considérée
              comme caduque.
            </p>
          </CGVSection>

          <CGVSection title="4. Tarification et modalités de paiement">
            <p>
              Les tarifs sont établis sur devis personnalisé, en fonction du
              volume de prestations, du niveau d’accompagnement, du potentiel de
              la marque, des objectifs fixés et des ressources mobilisées.
            </p>
            <p className="mt-3">
              À titre indicatif, JDE Agency peut proposer une structure de
              rémunération combinant :
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside marker:text-jade/40">
              <li>des frais de setup ou de mise en place,</li>
              <li>une mensualité fixe d’accompagnement,</li>
              <li>une commission variable liée à la performance ou au chiffre d’affaires généré.</li>
            </ul>
            <p className="mt-3">
              Les conditions financières exactes sont précisées dans le devis ou
              la proposition commerciale validée par le Client.
            </p>
            <p className="mt-3">
              Sauf mention contraire, les factures sont payables à réception ou
              dans le délai indiqué sur la facture. Tout retard de paiement
              pourra entraîner l’application de pénalités et/ou la suspension
              des prestations en cours.
            </p>
          </CGVSection>

          <CGVSection title="5. Durée et résiliation">
            <p>
              La durée de la mission est définie dans le devis ou la proposition
              commerciale. Elle peut être ponctuelle, reconductible ou assortie
              d’une durée minimale d’engagement selon la nature de
              l’accompagnement.
            </p>
            <p className="mt-3">
              Toute résiliation anticipée par le Client reste soumise aux
              conditions prévues dans les documents contractuels signés. En cas
              d’engagement minimum, les sommes déjà dues ou engagées restent
              exigibles selon les termes convenus.
            </p>
            <p className="mt-3">
              JDE Agency se réserve également le droit de suspendre ou résilier
              la relation contractuelle en cas de manquement grave du Client,
              notamment en cas de défaut de paiement, absence de collaboration,
              fourniture d’informations erronées ou non-conformité des produits
              commercialisés.
            </p>
          </CGVSection>

          <CGVSection title="6. Obligations des parties">
            <p className="font-medium text-white/40 mb-2">
              JDE Agency s’engage à :
            </p>
            <ul className="space-y-2 list-disc list-inside marker:text-jade/40 mb-4">
              <li>Exécuter les prestations convenues avec sérieux et professionnalisme</li>
              <li>Mettre en œuvre les moyens humains et techniques nécessaires à la mission</li>
              <li>Informer le Client de l’avancement général de la mission</li>
              <li>Préserver la confidentialité des informations transmises</li>
            </ul>

            <p className="font-medium text-white/40 mb-2">
              Le Client s’engage à :
            </p>
            <ul className="space-y-2 list-disc list-inside marker:text-jade/40">
              <li>Fournir les accès, informations et éléments nécessaires à la mission</li>
              <li>Répondre dans des délais raisonnables aux demandes de validation</li>
              <li>S’acquitter des paiements dans les délais convenus</li>
              <li>Garantir la licéité, la conformité et la disponibilité des produits commercialisés</li>
              <li>Ne pas entraver la bonne exécution des prestations</li>
            </ul>
          </CGVSection>

          <CGVSection title="7. Limitation de responsabilité">
            <p>
              JDE Agency est tenue à une obligation de moyens et non de résultat.
              Les performances observées ou attendues dépendent notamment du
              positionnement de la marque, de la qualité de l’offre, de la
              compétitivité du produit, du budget alloué, des conditions de
              marché, des algorithmes des plateformes et d’autres facteurs
              extérieurs indépendants de la volonté de JDE Agency.
            </p>
            <p className="mt-3">
              En conséquence, JDE Agency ne saurait garantir un niveau
              déterminé de chiffre d’affaires, de commandes ou de conversion,
              sauf engagement spécifique expressément convenu par écrit.
            </p>
            <p className="mt-3">
              En toute hypothèse, la responsabilité de JDE Agency ne pourra
              excéder le montant total effectivement versé par le Client au titre
              de la mission concernée.
            </p>
          </CGVSection>

          <CGVSection title="8. Propriété intellectuelle">
            <p>
              Les contenus, supports, recommandations, scripts, documents ou
              éléments créés spécifiquement pour le Client dans le cadre de la
              mission pourront être utilisés par le Client dans le périmètre
              prévu au contrat, sous réserve du paiement intégral des sommes
              dues.
            </p>
            <p className="mt-3">
              JDE Agency conserve la propriété de ses méthodes, savoir-faire,
              outils internes, process, modèles, structures d’analyse et plus
              généralement de tous les éléments préexistants à la mission.
            </p>
            <p className="mt-3">
              Sauf opposition écrite du Client, JDE Agency pourra faire mention
              de la collaboration à titre de référence commerciale.
            </p>
          </CGVSection>

          <CGVSection title="9. Confidentialité">
            <p>
              Les parties s’engagent à conserver strictement confidentielles les
              informations, documents, données commerciales, financières,
              stratégiques ou techniques échangés dans le cadre de leur relation
              contractuelle, sauf obligation légale ou judiciaire contraire.
            </p>
          </CGVSection>

          <CGVSection title="10. Protection des données personnelles">
            <p>
              Les données personnelles collectées dans le cadre de la relation
              commerciale sont traitées uniquement pour la gestion des échanges,
              des devis, des prestations, de la facturation et du suivi de la
              relation client.
            </p>
            <p className="mt-3">
              Pour toute demande relative à vos données personnelles, vous pouvez
              contacter JDE Agency à l’adresse suivante :{" "}
              <a
                href="mailto:jdeagency.live@gmail.com"
                className="text-jade hover:underline"
              >
                jdeagency.live@gmail.com
              </a>
              .
            </p>
          </CGVSection>

          <CGVSection title="11. Règlement des litiges">
            <p>
              En cas de différend, les parties s’engagent à rechercher en
              priorité une solution amiable avant toute action contentieuse.
            </p>
            <p className="mt-3">
              À défaut d’accord amiable, le litige sera soumis à la juridiction
              compétente selon les règles de droit applicables et la qualité des
              parties concernées.
            </p>
          </CGVSection>

          <CGVSection title="12. Loi applicable">
            <p>
              Les présentes CGV sont interprétées conformément au cadre juridique
              applicable à la relation contractuelle conclue entre les parties.
            </p>
          </CGVSection>
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

function CGVSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-white/5 pt-8">
      <h2 className="text-white text-lg font-light tracking-tight mb-5">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  )
}