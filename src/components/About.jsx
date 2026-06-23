import { useEffect, useRef, useState } from 'react'
import { User, Target, Heart, GraduationCap, Lightbulb, ArrowRight } from 'lucide-react'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

const passions = [
  { icon: '☁️', label: 'Cloud Computing', desc: 'AWS, GCP, Azure' },
  { icon: '🗄️', label: 'Big Data', desc: 'Hadoop, Spark, Kafka' },
  { icon: '🤖', label: 'Intelligence Artificielle', desc: 'ML, Deep Learning' },
  { icon: '🐍', label: 'Python', desc: 'Data Science, Automation' },
]

export default function About() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950" />

      <div
        ref={sectionRef}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <User className="w-4 h-4" />
            À Propos de Moi
          </div>
          <h2 className="section-title">Qui suis-je ?</h2>
          <p className="section-subtitle">
            Un ingénieur en devenir, passionné par les technologies de l'avenir.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — main bio */}
          <div className="space-y-6">
            <div className="card p-8 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-glow-blue">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Présentation</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Je suis <strong className="text-violet-600 dark:text-violet-400">Abdessamad Lamghili</strong>, étudiant ingénieur en
                <strong className="text-blue-600 dark:text-blue-400"> Big Data & Cloud Computing</strong> à l'ENSET Mohammedia, Maroc.
                Diplômé d'une CPGE TSI (2023-2025), j'ai acquis des bases solides en mathématiques, physique et informatique.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Mon parcours m'a permis de développer une rigueur analytique et une capacité à résoudre des problèmes complexes,
                compétences essentielles pour l'ingénierie des données à grande échelle.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Je m'intéresse particulièrement aux architectures distribuées, au traitement de données massives et au déploiement
                d'applications cloud-native. Mon objectif est de contribuer à des projets d'envergure qui ont un impact réel.
              </p>
            </div>

            {/* Objectives */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Objectifs Professionnels</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Maîtriser les écosystèmes Hadoop, Spark et Kafka',
                  'Obtenir des certifications Cloud (AWS, GCP)',
                  'Contribuer à des projets open-source Big Data',
                  'Développer des solutions IA à grande échelle',
                ].map((obj) => (
                  <li key={obj} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <ArrowRight className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — passions & highlights */}
          <div className="space-y-6">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Mes Passions Tech</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {passions.map((p) => (
                  <div
                    key={p.label}
                    className="group p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-800/50 border border-slate-200 dark:border-gray-700 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 cursor-default"
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <div className="mt-2 font-semibold text-slate-800 dark:text-white text-sm">{p.label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">En Bref</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Établissement', value: 'ENSET Mohammedia' },
                  { label: 'Cycle', value: 'Ingénieur — Big Data & Cloud' },
                  { label: 'Localisation', value: 'Maroc' },
                  { label: 'Disponibilité', value: 'Stage & Alternance' },
                  { label: 'Email', value: 'Abdessamadlamghili2005@gmail.com' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-gray-800 last:border-0">
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.label}</span>
                    <span className="text-sm text-slate-800 dark:text-slate-200 font-semibold text-right max-w-[55%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun fact */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-violet-700 text-white">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Le savais-tu ?</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Chaque jour, l'humanité génère environ <strong className="text-yellow-300">2.5 quintillions</strong> d'octets de données.
                    C'est pour ça que les ingénieurs Big Data sont indispensables !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}