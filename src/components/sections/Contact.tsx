import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { CheckCircle2, Lock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  brand: string
  category: string
  message: string
}

const inputClass =
  'w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 rounded-lg px-4 py-3.5 text-[14px] font-light focus:outline-none focus:border-jade/50 focus:bg-white/8 transition-all duration-200'

const pricingRows = [
  { label: 'Setup & configuration', value: '— — —' },
  { label: 'Accompagnement mensuel', value: '— — —' },
  { label: 'Commission performance', value: '— — —' },
  { label: 'Options complémentaires', value: '— — —' },
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    brand: '',
    category: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  const EMPTY_FORM: FormData = { name: '', email: '', phone: '', brand: '', category: '', message: '' }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('https://formspree.io/f/mvzvzvyz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm(EMPTY_FORM)
      } else {
        const data = await res.json().catch(() => ({}))
        const msg = (data as { error?: string }).error
        setError(msg ?? "L'envoi a échoué. Réessayez ou contactez-nous directement.")
      }
    } catch {
      setError('Problème de connexion. Vérifiez votre réseau et réessayez.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-obsidian py-24 md:py-32 relative overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 700px 500px at 50% 100%, rgba(143,180,160,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >

          {/* ── LEFT: CTA copy + pricing card ── */}
          <div className="flex flex-col justify-center">
            <p className="text-jade text-[11px] tracking-[0.25em] uppercase font-medium mb-6">
              Contact
            </p>
            <h2 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-extralight leading-tight tracking-tight mb-5">
              Votre prochain live<br />commence ici.
            </h2>
            <p className="text-white/28 text-[15px] font-light leading-relaxed mb-10 max-w-sm">
              Dites-nous qui vous êtes. On analyse votre marque et on revient
              vers vous sous 24h avec un retour honnête.
            </p>

            {/* Pricing card — locked */}
            <div className="relative border border-white/8 rounded-xl overflow-hidden">

              {/* Card header */}
              <div className="px-6 pt-5 pb-4 border-b border-white/5">
                <p className="text-[11px] text-jade/50 uppercase tracking-[0.2em] font-medium">
                  Structure tarifaire
                </p>
                <p className="text-white/20 text-[12px] font-light mt-1">
                  Adapté à votre volume, votre marché et vos objectifs.
                </p>
              </div>

              {/* Blurred rows */}
              <div className="px-6 py-5 space-y-3.5">
                {pricingRows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[13px] text-white/25 font-light">{row.label}</span>
                    <span
                      className="text-[13px] text-white/50 font-medium tracking-wider select-none"
                      style={{ filter: 'blur(4px)' }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Lock overlay + CTA */}
              <div className="px-6 pb-5 border-t border-white/5 pt-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-jade/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock size={12} className="text-jade" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[12.5px] text-white/50 font-light leading-snug">
                      Le chiffrage détaillé est débloqué lors de votre{' '}
                      <span className="text-jade">audit stratégique gratuit</span>.
                    </p>
                    <p className="text-[11px] text-white/20 font-light mt-1">
                      Pas de tarif standard — chaque accompagnement est dimensionné selon votre potentiel.
                    </p>
                  </div>
                </div>
              </div>

              {/* À partir de — subtle indicator */}
              <div className="px-6 pb-5">
                <div className="flex items-center gap-2 bg-jade/6 border border-jade/12 rounded-lg px-4 py-3">
                  <span className="text-[11px] text-white/30 font-light tracking-wide">
                    À partir de
                  </span>
                  <span className="text-[13px] text-jade/70 font-medium">
                    500 € de setup · 590 €/mois · 10% commission
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <CheckCircle2 size={40} className="text-jade mb-5" strokeWidth={1} />
                <h3 className="text-white text-xl font-extralight mb-3">
                  Message envoyé.
                </h3>
                <p className="text-white/35 text-[14px] font-light leading-relaxed max-w-xs">
                  Nous avons bien reçu votre demande. Nous revenons vers vous sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-white/22 uppercase tracking-[0.15em] font-medium mb-2">
                      Prénom & Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sophie Martin"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/22 uppercase tracking-[0.15em] font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sophie@mamarque.fr"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-white/22 uppercase tracking-[0.15em] font-medium mb-2">
                      Nom de la marque
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                      placeholder="Ma Marque"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/22 uppercase tracking-[0.15em] font-medium mb-2">
                      Catégorie produit
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#1A1A1A]">Sélectionner…</option>
                      <option value="cosmetique" className="bg-[#1A1A1A]">Cosmétique / Skincare</option>
                      <option value="mode" className="bg-[#1A1A1A]">Mode & Accessoires</option>
                      <option value="alimentation" className="bg-[#1A1A1A]">Alimentation</option>
                      <option value="sante" className="bg-[#1A1A1A]">Santé & Bien-être</option>
                      <option value="maison" className="bg-[#1A1A1A]">Maison & Déco</option>
                      <option value="autre" className="bg-[#1A1A1A]">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-white/22 uppercase tracking-[0.15em] font-medium mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+33 6 00 00 00 00"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-white/22 uppercase tracking-[0.15em] font-medium mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre marque, vos objectifs, vos questions…"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-jade text-obsidian font-medium py-4 px-8 rounded-lg hover:bg-jade-deep hover:text-white transition-all duration-200 text-[14px] tracking-wide mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Envoi en cours…' : 'Envoyer ma demande →'}
                </button>

                {error && (
                  <p className="text-center text-[12px] text-red-400/70 font-light leading-relaxed">
                    {error}
                  </p>
                )}

                <p className="text-center text-[11.5px] text-white/12 font-light tracking-wide">
                  Pas de démarchage. Pas de relance agressive.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
