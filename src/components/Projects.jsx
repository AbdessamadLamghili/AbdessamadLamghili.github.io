import { useEffect, useRef, useState } from 'react'
import { FolderOpen, ExternalLink, BarChart3, Terminal, Car, TrendingUp, CheckCircle2, Zap } from 'lucide-react'
import { GithubIcon } from './Icons'

const projects = [
  {
    id: 1,
    title: 'Système de Gestion des Inventaires avec Analyse Prédictive',
    shortTitle: 'Gestion Inventaires IA',
    icon: BarChart3,
    emoji: '📊',
    category: 'Data & Analytics',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/10',
    borderColor: 'border-blue-200 dark:border-blue-800',
    description:
      "Application Python complète de gestion de stock avec tableau de bord interactif et module d'analyse prédictive pour anticiper les ruptures de stock et optimiser les commandes.",
    longDescription:
      "Ce projet implémente un système intelligent de gestion d'inventaires qui utilise des algorithmes de prédiction pour optimiser les niveaux de stock. Il intègre un dashboard en temps réel, des alertes automatiques et des rapports détaillés.",
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SQLite', 'Tkinter', 'Scikit-learn'],
    results: [
      'Réduction de 30% des ruptures de stock',
      'Dashboard interactif en temps réel',
      'Prédictions avec 85% de précision',
      'Gestion de +1000 références produits',
    ],
    github: 'https://github.com/AbdessamadLamghili',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Automatisation Système Linux",
    shortTitle: 'Linux Automation',
    icon: Terminal,
    emoji: '🐧',
    category: 'System & DevOps',
    color: 'from-violet-500 to-purple-700',
    bgColor: 'bg-violet-50 dark:bg-violet-900/10',
    borderColor: 'border-violet-200 dark:border-violet-800',
    description:
      "Suite de scripts Bash pour l'automatisation des tâches système : surveillance des processus, sauvegarde automatique, monitoring des ressources et alertes en temps réel.",
    longDescription:
      "Collection de scripts d'automatisation Linux couvrant la surveillance système, la gestion des sauvegardes, le monitoring de performance et les alertes automatiques par notification.",
    technologies: ['Bash', 'Linux', 'Cron', 'Shell Script', 'AWK', 'Sed', 'Grep'],
    results: [
      'Automatisation de 15+ tâches répétitives',
      'Monitoring 24/7 des ressources système',
      'Alertes automatiques par email/log',
      'Gain de temps : 3h/semaine',
    ],
    github: 'https://github.com/AbdessamadLamghili',
    demo: null,
    featured: false,
  },
  {
    id: 3,
    title: 'Plateforme de Location Automobile Intelligente',
    shortTitle: 'Auto-Location Platform',
    icon: Car,
    emoji: '🚗',
    category: 'Full Stack Web',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/10',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    description:
      "Application web complète de location de voitures avec système de réservation intelligent, recommandations personnalisées, gestion des clients et tableau de bord administrateur.",
    longDescription:
      "Plateforme full-stack de location automobile intégrant un moteur de recommandation basé sur l'historique utilisateur, un système de réservation en temps réel et une interface d'administration complète.",
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'AJAX'],
    results: [
      'Interface responsive multi-device',
      'Système de recommandation personnalisé',
      'Gestion complète des réservations',
      'Panel admin avec statistiques',
    ],
    github: 'https://github.com/AbdessamadLamghili',
    demo: null,
    featured: true,
  },
]

function ProjectCard({ project, idx, animate }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = project.icon

  return (
    <div
      className={`card overflow-hidden group transition-all duration-700 ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${project.featured ? 'ring-2 ring-violet-300/50 dark:ring-violet-700/50' : ''}`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      {/* Card header band */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-6 md:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5 gap-4">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800 mb-2">
                  <Zap className="w-3 h-3" />
                  Projet Phare
                </span>
              )}
              <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug">{project.title}</h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
          {expanded ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {/* Results */}
        <div className={`rounded-xl p-4 mb-5 ${project.bgColor} border ${project.borderColor}`}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Résultats Obtenus</span>
          </div>
          <ul className="space-y-2">
            {project.results.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm py-2 px-4"
            >
              <ExternalLink className="w-4 h-4" />
              Démo Live
            </a>
          ) : (
            <span className="text-xs text-slate-400 dark:text-gray-600 italic">Démo à venir...</span>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-auto text-xs text-violet-600 dark:text-violet-400 hover:underline font-medium"
          >
            {expanded ? 'Réduire ↑' : 'Voir plus ↓'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white dark:from-gray-900/80 dark:to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <FolderOpen className="w-4 h-4" />
            Portfolio de Projets
          </div>
          <h2 className="section-title">Mes Réalisations</h2>
          <p className="section-subtitle">
            Des projets concrets qui démontrent mes compétences en développement, data et automatisation.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} animate={animate} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-slate-500 dark:text-slate-400 mb-4">Retrouvez tous mes projets sur GitHub</p>
          <a
            href="https://github.com/AbdessamadLamghili"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <GithubIcon className="w-5 h-5" />
            Voir tous mes projets
          </a>
        </div>
      </div>
    </section>
  )
}