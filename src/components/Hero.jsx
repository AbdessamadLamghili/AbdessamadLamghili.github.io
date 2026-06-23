import { useEffect, useRef, useState } from 'react'
import { Download, Mail, ChevronDown, MapPin, Sparkles, Database, Cloud } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const roles = [
  'Étudiant Ingénieur Big Data',
  'Cloud Computing Enthusiast',
  'Data Engineer en Devenir',
  'Python & Java Developer',
]

const stats = [
  { value: 3, label: 'Projets Réalisés', suffix: '+' },
  { value: 3, label: 'Langues', suffix: '' },
  { value: 12, label: 'Compétences Tech', suffix: '+' },
  { value: 1, label: 'Année ENSET', suffix: 'ère' },
]

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1500
        const step = (target / duration) * 16
        const timer = setInterval(() => {
          start += step
          if (start >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

function TypeWriter({ texts }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let timer

    if (!deleting && displayed.length < current.length) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % texts.length)
    }

    return () => clearTimeout(timer)
  }, [displayed, deleting, index, texts])

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-violet-500">|</span>
    </span>
  )
}

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/40 dark:from-gray-950 dark:via-blue-950/20 dark:to-violet-950/20" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/10 dark:bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/5 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="text-center lg:text-left space-y-6 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-200/50 dark:border-violet-800/50 text-sm font-medium text-violet-700 dark:text-violet-300">
              <Sparkles className="w-4 h-4" />
              <span>Ouvert aux opportunités de stage</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                Abdessamad
                <br />
                <span className="gradient-text">Lamghili</span>
              </h1>
            </div>

            {/* Typewriter */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 h-8">
              <TypeWriter texts={roles} />
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 justify-center lg:justify-start text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-violet-500" />
              <span className="text-sm">Maroc · ENSET Mohammedia</span>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
              Passionné par l'ingénierie des données, le Cloud Computing et l'Intelligence Artificielle.
              Je construis des solutions qui transforment les données en valeur.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="/cv-abdessamad-lamghili.pdf"
                download
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </a>
              <button
                onClick={() => handleScroll('contact')}
                className="btn-outline"
              >
                <Mail className="w-4 h-4" />
                Me Contacter
              </button>
              <button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                Voir les Projets
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/AbdessamadLamghili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
              >
                <GithubIcon className="w-5 h-5" />
                GitHub
              </a>
              <span className="text-slate-300 dark:text-gray-700">|</span>
              <a
                href="https://linkedin.com/in/abdessamad-lamghili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Avatar & floating tech badges */}
          <div className="flex justify-center items-center relative">
            <div className="relative">
              {/* Avatar circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-600 animate-spin-slow opacity-30 blur-sm" />
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Placeholder avatar with initials */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-violet-700 flex flex-col items-center justify-center">
                      <span className="text-7xl sm:text-8xl font-black text-white/90 tracking-tighter leading-none">AL</span>
                      <span className="text-white/60 text-xs mt-1 font-mono">&lt;dev /&gt;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-lg animate-float border border-blue-200/50 dark:border-blue-800/50" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Cloud Computing</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 shadow-lg animate-float border border-violet-200/50 dark:border-violet-800/50" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-violet-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Big Data</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 shadow-lg animate-float border border-emerald-200/50 dark:border-emerald-800/50" style={{ animationDelay: '4s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm">🐍</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card p-6 text-center hover:shadow-glow"
            >
              <div className="text-3xl font-black gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-violet-500 transition-colors animate-bounce-slow"
      >
        <span className="text-xs font-medium">Défiler</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  )
}