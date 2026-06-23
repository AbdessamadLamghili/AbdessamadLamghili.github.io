import { Mail, Heart, Code2, ArrowUp, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const quickLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À Propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Formation', href: '#education' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/AbdessamadLamghili',
    color: 'hover:text-white hover:bg-gray-800',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abdessamad-lamghili',
    color: 'hover:text-white hover:bg-blue-600',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:Abdessamadlamghili2005@gmail.com',
    color: 'hover:text-white hover:bg-violet-600',
  },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-glow-blue">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-xl gradient-text font-mono">Abdessamad Lamghili</div>
                <div className="text-xs text-gray-500">Big Data & Cloud Computing Engineer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Étudiant ingénieur passionné par les technologies Big Data, le Cloud Computing et l'Intelligence Artificielle.
              Basé au Maroc, ouvert aux opportunités mondiales.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${s.color} hover:border-transparent hover:shadow-glow`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gray-700 group-hover:bg-violet-500 transition-colors duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Abdessamadlamghili2005@gmail.com"
                  className="text-gray-500 hover:text-violet-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 group-hover:text-violet-400" />
                  <span className="break-all">Abdessamadlamghili2005@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AbdessamadLamghili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-violet-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <GithubIcon className="w-4 h-4" />
                  AbdessamadLamghili
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abdessamad-lamghili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-violet-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  abdessamad-lamghili
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="text-gray-600 text-sm flex items-center gap-2">
                <span>📍</span>
                Maroc — ENSET Mohammedia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Abdessamad Lamghili. Fait avec
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            et
            <Code2 className="w-3.5 h-3.5 text-violet-400" />
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-xs font-mono">React + Tailwind CSS + Vite</span>
            <button
              onClick={scrollTop}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}