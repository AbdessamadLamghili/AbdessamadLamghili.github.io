import { useEffect, useRef, useState } from 'react'
import { Briefcase, Plus, Calendar, MapPin, Rocket } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'Projet Académique',
    title: 'Développement de projets personnels',
    org: 'Auto-formation & Projets',
    period: '2023 — Présent',
    location: 'Maroc',
    description: 'Développement continu de projets en Python, Linux et Web pour approfondir mes compétences techniques et construire un portfolio solide.',
    color: 'from-blue-500 to-violet-600',
  },
  {
    id: 2,
    type: 'Formation Continue',
    title: 'Auto-formation Cloud & Big Data',
    org: 'Coursera, YouTube, Documentation officielle',
    period: '2024 — Présent',
    location: 'En ligne',
    description: 'Apprentissage autonome des technologies cloud (AWS, GCP), des frameworks Big Data (Hadoop, Spark) et des outils DevOps via des ressources en ligne.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    type: 'Participation',
    title: 'Challenges & Compétitions de Code',
    org: 'Plateformes diverses',
    period: '2024 — Présent',
    location: 'En ligne',
    description: 'Participation à des défis algorithmiques pour améliorer mes compétences en résolution de problèmes et en programmation compétitive.',
    color: 'from-violet-500 to-purple-700',
  },
]

function ActivityCard({ item, idx, animate }) {
  return (
    <div
      className={`card p-6 md:p-8 transition-all duration-700 ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="tag text-xs">{item.type}</span>
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h3>
          <div className="flex flex-wrap gap-4 mt-1 mb-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              {item.org}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-950" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Expériences & Activités
          </div>
          <h2 className="section-title">Mon Parcours</h2>
          <p className="section-subtitle">
            Activités académiques, projets et engagements professionnels.
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-6 mb-10">
          {activities.map((item, idx) => (
            <ActivityCard key={item.id} item={item} idx={idx} animate={animate} />
          ))}
        </div>

        {/* Stage CTA */}
        <div
          className={`card p-8 text-center border-dashed border-2 border-violet-300 dark:border-violet-700 transition-all duration-700 ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-glow">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
            À la Recherche d'un Stage
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Je suis activement à la recherche d'un stage en Big Data, Cloud Computing ou Data Engineering
            pour mettre en pratique mes compétences et contribuer à des projets innovants.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="tag">Big Data</span>
            <span className="tag">Cloud Engineering</span>
            <span className="tag">Data Engineering</span>
            <span className="tag">MLOps</span>
          </div>
          <div className="mt-6">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              <Plus className="w-4 h-4" />
              Me Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}