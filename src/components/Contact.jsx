import { useEffect, useRef, useState } from 'react'
import { Mail, Send, MessageSquare, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Abdessamadlamghili2005@gmail.com',
    href: 'mailto:Abdessamadlamghili2005@gmail.com',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'AbdessamadLamghili',
    href: 'https://github.com/AbdessamadLamghili',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'abdessamad-lamghili',
    href: 'https://linkedin.com/in/abdessamad-lamghili',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Maroc — ENSET Mohammedia',
    href: null,
    color: 'from-emerald-500 to-teal-600',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Nom requis'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email invalide'
    if (!form.subject.trim()) e.subject = 'Sujet requis'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message trop court (min 10 caractères)'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-800 border ${
      errors[field]
        ? 'border-red-400 dark:border-red-600'
        : 'border-slate-200 dark:border-gray-700 focus:border-violet-400 dark:focus:border-violet-600'
    } text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-gray-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/20 text-sm`

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Entrons en Contact
          </div>
          <h2 className="section-title">Me Contacter</h2>
          <p className="section-subtitle">
            Une question, une opportunité de stage ou de collaboration ? Je réponds sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="card p-8">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-violet-500" />
                Coordonnées
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-gray-800/50 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors group">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.label}</div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors break-all">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>
            </div>

            {/* Availability note */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-violet-700 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="font-bold">Disponible pour un stage</span>
              </div>
              <p className="text-white/80 text-sm">
                Je suis ouvert aux opportunités de stage, d'alternance ou de collaboration sur des projets Big Data, Cloud et IA.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div
            className={`transition-all duration-700 ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-sm py-2 px-4"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <Send className="w-5 h-5 text-violet-500" />
                    Envoyer un message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          placeholder="Votre nom"
                          value={form.name}
                          onChange={handleChange('name')}
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder="votre@email.com"
                          value={form.email}
                          onChange={handleChange('email')}
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        placeholder="Proposition de stage, collaboration..."
                        value={form.subject}
                        onChange={handleChange('subject')}
                        className={inputClass('subject')}
                      />
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Décrivez votre projet, opportunité ou question..."
                        value={form.message}
                        onChange={handleChange('message')}
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full btn-primary justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}