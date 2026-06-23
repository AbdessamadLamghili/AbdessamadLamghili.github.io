import { useEffect, useRef, useState } from 'react'
import { Award, Lock, ExternalLink, Cloud, Database, Brain, Code2 } from 'lucide-react'

const futureCerts = [
  {
    id: 1,
    name: 'AWS Cloud Practitioner',
    org: 'Amazon Web Services',
    category: 'Cloud',
    icon: Cloud,
    color: 'from-orange-400 to-yellow-500',
    status: 'En préparation',
    progress: 35,
    expected: '2025',
  },
  {
    id: 2,
    name: 'Google Associate Cloud Engineer',
    org: 'Google Cloud Platform',
    category: 'Cloud',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    status: 'Planifié',
    progress: 10,
    expected: '2026',
  },
  {
    id: 3,
    name: 'Databricks Data Engineer Associate',
    org: 'Databricks',
    category: 'Big Data',
    icon: Database,
    color: 'from-red-400 to-orange-500',
    status: 'Planifié',
    progress: 0,
    expected: '2026',
  },
  {
    id: 4,
    name: 'TensorFlow Developer Certificate',
    org: 'Google',
    category: 'IA / ML',
    icon: Brain,
    color: 'from-violet-400 to-purple-600',
    status: 'Planifié',
    progress: 0,
    expected: '2026',
  },
  {
    id: 5,
    name: 'Python Professional (PCPP)',
    org: 'Python Institute',
    category: 'Développement',
    icon: Code2,
    color: 'from-blue-500 to-indigo-600',
    status: 'Planifié',
    progress: 20,
    expected: '2025',
  },
]

const categories = ['Tous', 'Cloud', 'Big Data', 'IA / ML', 'Développement']

function CertCard({ cert, idx, animate }) {
  const Icon = cert.icon
  const isPreparing = cert.status === 'En préparation'

  return (
    <div
      className={`card p-6 transition-all duration-700 ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isPreparing ? 'ring-2 ring-blue-300/50 dark:ring-blue-700/50' : ''}`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                isPreparing
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  : 'bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {isPreparing ? (
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              ) : (
                <Lock className="w-3 h-3" />
              )}
              {cert.status}
            </span>
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">{cert.name}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cert.org}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Progression</span>
          <span className="font-semibold text-violet-600 dark:text-violet-400">{cert.progress}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${cert.color} transition-all duration-1000`}
            style={{ width: `${cert.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="tag text-xs">{cert.category}</span>
        <span className="text-xs text-slate-400 dark:text-gray-600">Objectif : {cert.expected}</span>
      </div>
    </div>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)
  const [filter, setFilter] = useState('Tous')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filtered = filter === 'Tous' ? futureCerts : futureCerts.filter(c => c.category === filter)

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certifications
          </div>
          <h2 className="section-title">Mes Certifications</h2>
          <p className="section-subtitle">
            Certifications visées pour valider mon expertise en Cloud, Data et IA.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-glow-blue'
                  : 'bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-slate-400 hover:border-violet-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => (
            <CertCard key={cert.id} cert={cert} idx={idx} animate={animate} />
          ))}
        </div>

        {/* Banner */}
        <div
          className={`mt-12 rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-violet-700 text-white text-center transition-all duration-700 ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Award className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
          <h3 className="font-bold text-xl mb-2">Investir dans l'excellence</h3>
          <p className="text-white/80 text-sm max-w-lg mx-auto">
            Les certifications officielles sont un moyen concret de valider et démontrer les compétences techniques.
            Je m'y prépare activement en parallèle de mon cursus ingénieur.
          </p>
        </div>
      </div>
    </section>
  )
}