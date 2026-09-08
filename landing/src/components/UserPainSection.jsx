import { motion } from 'framer-motion'

const pains = [
  {
    stat: '84%',
    label: 'sufren estrés',
    description: 'de las personas sufren estrés al elegir qué ponerse cada mañana. La parálisis de decisión afecta tu productividad.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-rose-500 to-orange-500',
    bg: 'from-rose-500/10 to-orange-500/10',
    border: 'border-rose-500/20',
    emoji: '⏰',
  },
  {
    stat: '80%',
    label: 'inactivo',
    description: 'de tu clóset está inactivo. Solo usas el 20% de tu ropa. El resto es capital muerto ocupando espacio.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-yellow-500',
    bg: 'from-amber-500/10 to-yellow-500/10',
    border: 'border-amber-500/20',
    emoji: '👕',
  },
  {
    stat: '73%',
    label: 'dudas frecuentes',
    description: 'Las dudas al vestir afectan tu confianza. Usa la ciencia del color a tu favor para siempre sentirte seguro.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-500',
    bg: 'from-violet-500/10 to-purple-500/10',
    border: 'border-violet-500/20',
    emoji: '✨',
  },
]

export default function UserPainSection() {
  return (
    <section id="problema" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/60 px-5 py-2.5 rounded-full mb-6 shadow-sm"
          >
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">El Problema Diario</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">
            Tu rutina de vestir está <span className="text-rose-500">rota</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Cada mañana enfrentas las mismas decisiones sin herramientas que te ayuden. <strong className="text-gray-700">Es tiempo de cambiar el juego</strong>.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group cursor-default"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${pain.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              <div className={`relative bg-white/50 backdrop-blur-3xl border ${pain.border} rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:bg-white/70`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pain.bg} rounded-bl-full`} />

                <div className="text-4xl mb-4">{pain.emoji}</div>

                <div className="mb-4">
                  <span className="text-5xl font-black text-gray-900 tracking-tight">{pain.stat}</span>
                  <span className="text-sm font-bold text-gray-400 ml-2 uppercase tracking-wider">{pain.label}</span>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm font-medium">{pain.description}</p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pain.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}