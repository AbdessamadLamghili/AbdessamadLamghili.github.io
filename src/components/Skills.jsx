import { useEffect, useRef, useState } from 'react'
import { Layers, Code, Server, Database } from 'lucide-react'

const skillCategories = [
  {
    category: 'Langages de Programmation',
    icon: Code,
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'Python', level: 82, icon: '🐍', color: '#3776AB' },
      { name: 'Java', level: 72, icon: '☕', color: '#ED8B00' },
      { name: 'C', level: 65, icon: '⚙️', color: '#555' },
      { name: 'JavaScript', level: 68, icon: '🟨', color: '#F7DF1E' },
      { name: 'SQL', level: 78, icon: '🗄️', color: '#336791' },
    ],
  },
  {
    category: 'Web & Développement',
    icon: Layers,
    color: 'from-violet-500 to-purple-700',
    skills: [
      { name: 'HTML / CSS', level: 80, icon: '🌐', color: '#E34F26' },
      { name: 'Git & GitHub', level: 75, icon: '🔀', color: '#F05032' },
      { name: 'Linux', level: 70, icon: '🐧', color: '#FCC624' },
    ],
  },
  {
    category: 'Infrastructure & Données',
    icon: Server,
    color: 'from-emerald-500 to-teal-700',
    skills: [
      { name: 'Réseaux Informatiques', level: 65, icon: '🌐', color: '#00758F' },
      { name: 'Bases de Données', level: 77, icon: '🗃️', color: '#F29111' },
      { name: 'Big Data', level: 55, icon: '📊', color: '#E25A1C' },
      { name: 'Cloud Computing', level: 50, icon: '☁️', color: '#4285F4' },
    ],
  },
]

const techLogos = [
  { name: 'Python', emoji: '🐍' },
  { name: 'Java', emoji: '☕' },
  { name: 'Linux', emoji: '🐧' },
  { name: 'SQL', emoji: '🗄️' },
  { name: 'Git', emoji: '🔀' },
  { name: 'Cloud', emoji: '☁️' },
  { name: 'HTML', emoji: '🌐' },
  { name: 'C', emoji: '⚙️' },
]

function SkillBar({ skill, delay = 0, animate }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-slate-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-violet-50/50 dark:from-blue-950/20 dark:via-gray-950 dark:to-violet-950/20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Compétences Techniques
          </div>
          <h2 className="section-title">Mon Arsenal Technologique</h2>
          <p className="section-subtitle">
            Compétences acquises au fil de ma formation et de mes projets personnels.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, catIdx) => {
            const Icon = cat.icon
            return (
              <div key={cat.category} className="card p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{cat.category}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      animate={animate}
                      delay={catIdx * 100 + skillIdx * 120}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech chips scroll */}
        <div className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wider">Technologies maîtrisées</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Java', 'C', 'JavaScript', 'HTML/CSS',
              'SQL', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Linux',
              'Bash', 'Réseaux TCP/IP', 'Big Data', 'Cloud Computing',
              'REST API', 'OOP', 'Algorithmes',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-glow transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills legend */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { range: '90-100%', label: 'Expert', color: 'text-emerald-600 dark:text-emerald-400' },
            { range: '70-89%', label: 'Avancé', color: 'text-blue-600 dark:text-blue-400' },
            { range: '50-69%', label: 'Intermédiaire', color: 'text-violet-600 dark:text-violet-400' },
            { range: '< 50%', label: 'Débutant', color: 'text-slate-500 dark:text-slate-400' },
          ].map((l) => (
            <div key={l.range} className="flex items-center gap-2 justify-center">
              <span className={`font-bold text-sm ${l.color}`}>{l.range}</span>
              <span className="text-slate-400 dark:text-gray-600">→</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}