import { motion } from 'framer-motion'

export default function Navbar() {
  const links = [
    { label: 'El Problema', href: '#problema' },
    { label: 'La Solución', href: '#solucion' },
    { label: 'Comunidad', href: '#comunidad' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-white/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-lavender to-mint flex items-center justify-center shadow-lg shadow-lavender/20 group-hover:shadow-lavender/40 transition-shadow">
            <span className="text-white font-black text-lg">S</span>
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">StyleSync</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-lavender after:to-mint hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(163,177,255,0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-lavender to-lavender-dark text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-lg shadow-lavender/25 transition-all"
        >
          Descargar App Gratis
        </motion.button>
      </div>
    </motion.nav>
  )
}