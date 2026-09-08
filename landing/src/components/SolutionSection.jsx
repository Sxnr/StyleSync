import { motion } from 'framer-motion'

const solutions = [
  {
    badge: 'Solución 1',
    title: 'Clóset Virtual Canónico',
    description: 'Marca lo que tienes. Nosotros hacemos las matemáticas. Digitaliza tu armario en minutos y descubre cuántos outfits puedes crear con lo que ya posees.',
    features: [
      'Digitalización rápida por categorías',
      'Análisis automático de compatibilidades',
      'Cálculo de outfits posibles',
      'Alertas de prendas sin usar',
    ],
    icon: '👔',
    visual: {
      title: 'Tu Clóset Digital',
      items: ['Camisa azul', 'Pantalón beige', 'Zapatos marrón'],
      stats: { prendas: 24, outfits: 87 },
    },
  },
  {
    badge: 'Solución 2',
    title: 'Comunidad Pragmática',
    description: 'Inspírate en hombres reales. Mira cómo la comunidad combina las mismas prendas que tú ya tienes en tu armario. Sin influencers, sin filtros, solo estilo real.',
    features: [
      'Feed de outfits reales de usuarios',
      'Filtro por prendas que tú tienes',
      'Guarda combinaciones que te gusten',
      'Comparte tus looks con la comunidad',
    ],
    icon: '👥',
    visual: {
      title: 'Comunidad Activa',
      users: ['Carlos', 'Andrés', 'Miguel'],
      posts: 1247,
    },
  },
  {
    badge: 'Solución 3',
    title: 'Compras Inteligentes',
    description: 'Si te falta una prenda clave, te decimos exactamente cuál comprar para desbloquear 10 nuevos outfits. Compra directo en tiendas aliadas con certeza total.',
    features: [
      'Detección de prendas faltantes',
      'Cálculo de outfits desbloqueados',
      'Precios comparados en tiempo real',
      'Compra directa en tiendas aliadas',
    ],
    icon: '🛒',
    visual: {
      title: 'Sugerencia Inteligente',
      suggestion: 'Pantalón cargo verde',
      unlocks: 12,
      price: '$34.990',
    },
  },
]

export default function SolutionSection() {
  return (
    <section id="solucion" className="py-28 relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #A3B1FF 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2.5 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full text-xs font-bold text-lavender uppercase tracking-wider mb-6">
            La Solución
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">
            Tu armario, <span className="bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">optimizado</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Tres pilares que transforman la forma en que te vistes, compras y te sientes cada día.
          </p>
        </motion.div>

        {/* Zigzag layout */}
        <div className="space-y-24">
          {solutions.map((sol, i) => {
            const isReversed = i % 2 !== 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <span className="inline-block px-4 py-2 bg-white/25 backdrop-blur-xl border border-white/30 rounded-full text-sm font-bold text-lavender mb-4">
                    {sol.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 tracking-tight">{sol.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 font-medium">{sol.description}</p>
                  <ul className="space-y-3">
                    {sol.features.map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-lavender to-mint flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="bg-white/50 backdrop-blur-3xl border border-white/60 rounded-3xl p-6 relative overflow-hidden group hover:bg-white/70 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-mint/5 opacity-50" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lavender to-mint flex items-center justify-center text-2xl shadow-lg">
                          {sol.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{sol.visual.title}</h4>
                          <p className="text-xs text-gray-400 font-medium">En tiempo real</p>
                        </div>
                      </div>

                      <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-5 border border-gray-100">
                        {i === 0 && (
                          <div className="space-y-3">
                            {sol.visual.items.map((item, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + j * 0.15 }}
                                className="flex items-center gap-3 bg-gradient-to-r from-lavender/5 to-transparent rounded-xl p-3"
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lavender/20 to-mint/20 flex items-center justify-center text-lg">
                                  {['👔', '👖', '👞'][j]}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                </div>
                              </motion.div>
                            ))}
                            <div className="flex gap-2 mt-4">
                              <div className="flex-1 bg-lavender/10 rounded-xl p-3 text-center">
                                <p className="text-lg font-black text-lavender">{sol.visual.stats.prendas}</p>
                                <p className="text-[10px] text-gray-500 font-bold">Prendas</p>
                              </div>
                              <div className="flex-1 bg-mint/10 rounded-xl p-3 text-center">
                                <p className="text-lg font-black text-mint-dark">{sol.visual.stats.outfits}</p>
                                <p className="text-[10px] text-gray-500 font-bold">Outfits</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {i === 1 && (
                          <div className="space-y-3">
                            {sol.visual.users.map((user, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + j * 0.15 }}
                                className="flex items-center gap-3 bg-gradient-to-r from-mint/5 to-transparent rounded-xl p-3"
                              >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-mint flex items-center justify-center text-white text-xs font-bold">
                                  {user[0]}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-gray-700">{user}</span>
                                  <p className="text-[10px] text-gray-400">Publicó un outfit</p>
                                </div>
                                <div className="flex items-center gap-1 text-amber-400 text-xs">★★★★★</div>
                              </motion.div>
                            ))}
                            <div className="bg-gradient-to-r from-mint/10 to-lavender/10 rounded-xl p-3 text-center mt-4">
                              <p className="text-sm font-bold text-gray-700">{sol.visual.posts.toLocaleString()} outfits compartidos</p>
                            </div>
                          </div>
                        )}

                        {i === 2 && (
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-lavender/10 to-mint/10 rounded-xl p-4">
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Prenda Sugerida</p>
                              <p className="text-lg font-black text-gray-800">{sol.visual.suggestion}</p>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex-1 bg-mint/10 rounded-xl p-3 text-center">
                                <p className="text-lg font-black text-mint-dark">+{sol.visual.unlocks}</p>
                                <p className="text-[10px] text-gray-500 font-bold">Outfits nuevos</p>
                              </div>
                              <div className="flex-1 bg-lavender/10 rounded-xl p-3 text-center">
                                <p className="text-lg font-black text-lavender">{sol.visual.price}</p>
                                <p className="text-[10px] text-gray-500 font-bold">Precio</p>
                              </div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-gradient-to-r from-lavender to-mint text-white py-3 rounded-xl font-bold text-sm shadow-lg"
                            >
                              Comprar en Tienda Aliada →
                            </motion.button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}