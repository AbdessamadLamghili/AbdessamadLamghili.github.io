import { useEffect, useRef, useState } from 'react'
import { GraduationCap, BookOpen, Award, Calendar, MapPin, ChevronRight } from 'lucide-react'

const timeline = [
  {
    id: 1,
    type: 'current',
    degree: 'Cycle Ingénieur — Big Data & Cloud Computing',
    school: 'ENSET Mohammedia',
    location: 'Mohammedia, Maroc',
    period: '2026 — Présent',
    icon: GraduationCap,
    color: 'from-blue-500 to-violet-600',
    glow: 'shadow-glow-blue',
    description:
      "Formation d'ingénieur spécialisée dans les technologies de l'informatique distribuée, les architectures Big Data, le Cloud Computing et l'intelligence artificielle.",
    highlights: [
      'Systèmes distribués & Hadoop Ecosystem',
      'Cloud Native : Docker, Kubernetes',
      'Machine Learning & Data Engineering',
      'Architecture logicielle & DevOps',
    ],
    status: 'En cours',
  },
  {
    id: 2,
    type: 'done',
    degree: 'Classe Préparatoire TSI',
    school: 'CPGE — TSI',
    location: 'Maroc',
    period: '2023 — 2025',
    icon: BookOpen,
    color: 'from-violet-500 to-purple-700',
    glow: 'shadow-glow',
    description:
      "Deux années de formation intensive en mathématiques, physique, électrotechnique, informatique et sciences de l'ingénieur — préparation aux concours des grandes écoles.",
    highlights: [
      'Mathématiques & Algèbre Linéaire',
      'Électrotechnique & Automatique',
      'Informatique & Algorithmique',
      'Résistance des matériaux',
    ],
    status: 'Diplômé',
  },
  {
    id: 3,
    type: 'done',
    degree: 'Baccalauréat Sciences et Technologies Électriques',
    school: 'Lycée Technique',
    location: 'Maroc',
    period: '2022',
    icon: Award,
    color: 'from-emerald-500 to-teal-600',
    glow: '',
    description:
      "Baccalauréat Sciences et Technologies Électriques (STE) obtenu avec la mention Bien. Première formation en électricité, automatisation et informatique industrielle.",
    highlights: [
      'Électricité & Électronique',
      'Informatique Industrielle',
      'Mention : Bien',
      'Préparation aux filières technologiques',
    ],
    status: 'Mention Bien',
  },
]

function TimelineItem({ item, idx, animate }) {
  const Icon = item.icon

  return (
    <div
      className={`relative flex gap-6 md:gap-8 transition-all duration-700 ${
        animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${idx * 200}ms` }}
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 ${item.type === 'current' ? 'ring-4 ring-blue-500/30' : ''}`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        {idx < timeline.length - 1 && (
          <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-violet-300 to-transparent dark:from-violet-800" />
        )}
      </div>

      {/* Content */}
      <div className={`card p-6 md:p-8 flex-1 mb-8 ${item.type === 'current' ? 'border-blue-300 dark:border-blue-700' : ''}`}>
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                item.type === 'current'
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  : 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
              }`}
            >
              {item.type === 'current' && <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />}
              {item.status}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.degree}</h3>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                {item.school}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {item.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {item.period}
              </span>
            </div>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

        <div className="grid sm:grid-cols-2 gap-2">
          {item.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <ChevronRight className="w-4 h-4 text-violet-500 flex-shrink-0" />
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
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
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-950" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Parcours Académique
          </div>
          <h2 className="section-title">Ma Formation</h2>
          <p className="section-subtitle">
            Un parcours rigoureux de la prépa aux grandes écoles d'ingénieurs.
          </p>
        </div>

        {/* Timeline */}
        <div>
          {timeline.map((item, idx) => (
            <TimelineItem key={item.id} item={item} idx={idx} animate={animate} />
          ))}
        </div>

        {/* Future learning */}
        <div
          className={`mt-4 rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-violet-700 text-white transition-all duration-700 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-yellow-300" />
            <h3 className="font-bold text-lg">Apprentissage Continu</h3>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            En dehors du cursus officiel, je me forme continuellement via des MOOCs, des challenges de code et des projets personnels
            sur les technologies AWS, Spark, Docker, Machine Learning et plus encore.
          </p>
        </div>
      </div>
    </section>
  )
}