import { useEffect, useRef, useState } from 'react'
import { Globe2 } from 'lucide-react'

const languages = [
  {
    lang: 'Arabe',
    flag: '🇲🇦',
    level: 'Courant',
    levelLabel: 'Langue Maternelle',
    percent: 100,
    color: 'from-green-500 to-emerald-600',
    stars: 5,
    description: "Langue maternelle, maîtrisée à l'écrit et à l'oral.",
  },
  {
    lang: 'Français',
    flag: '🇫🇷',
    level: 'Intermédiaire',
    levelLabel: 'B2 — Avancé',
    percent: 72,
    color: 'from-blue-500 to-indigo-600',
    stars: 4,
    description: "Langue principale de formation. Utilisée quotidiennement à l'ENSET Mohammedia.",
  },
  {
    lang: 'Anglais',
    flag: '🇺🇸',
    level: 'Intermédiaire',
    levelLabel: 'B1 — Opérationnel',
    percent: 60,
    color: 'from-violet-500 to-purple-600',
    stars: 3,
    description: "Compréhension technique avancée. Documentation, tutoriels et communications professionnelles.",
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i <= count ? 'bg-gradient-to-r from-blue-500 to-violet-600' : 'bg-slate-200 dark:bg-gray-700'
          }`}
        />
      ))}
    </div>
  )
}

export default function Languages() {
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
    <section id="languages" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-950" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-4">
            <Globe2 className="w-4 h-4" />
            Maîtrise Linguistique
          </div>
          <h2 className="section-title">Langues</h2>
          <p className="section-subtitle">
            Trilingue — capable de collaborer dans des environnements multiculturels.
          </p>
        </div>

        {/* Language cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, idx) => (
            <div
              key={lang.lang}
              className={`card p-8 text-center transition-all duration-700 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="text-5xl mb-4">{lang.flag}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{lang.lang}</h3>
              <div className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-1">{lang.level}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-4">{lang.levelLabel}</div>

              <div className="flex justify-center mb-4">
                <StarRating count={lang.stars} />
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-slate-400 dark:text-gray-600 mb-1">
                  <span>Maîtrise</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{lang.percent}%</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${lang.color} transition-all duration-1000`}
                    style={{
                      width: animate ? `${lang.percent}%` : '0%',
                      transitionDelay: `${idx * 150 + 300}ms`,
                    }}
                  />
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{lang.description}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className={`text-center text-sm text-slate-400 dark:text-gray-600 mt-8 italic transition-all duration-700 ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          L'anglais est ma langue principale pour la documentation technique et les ressources informatiques.
        </p>
      </div>
    </section>
  )
}