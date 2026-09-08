import { motion } from 'framer-motion'

const solutions = [
  {
    badge: 'Solución 1',
    title: 'Armario Cápsula Canónico',
    description: 'Un sistema inteligente que reduce tu armario a 45 prendas estratégicas, cada una seleccionada para maximizar combinaciones y minimizar la parálisis de decisión.',
    features: [
      'Catálogo optimizado de 45 prendas base',
      'Combinaciones calculadas matemáticamente',
      'Eliminación de redundancia en el guardarropa',
      'ROI máximo por cada prenda adquirida',
    ],
    icon: '👔',
  },
  {
    badge: 'Solución 2',
    title: 'Motor de Reglas CSP',
    description: 'Un algoritmo determinista de Satisfacción de Restricciones que cruza colorimetría HSL, formalidad y contexto para generar outfits perfectos en milisegundos.',
    features: [
      'Análisis colorimétrico Delta E (CIE76)',
      'Restricciones de formalidad contextual',
      'Backtracking optimizado con poda',
      'Tiempo de respuesta < 200ms',
    ],
    icon: '⚙️',
  },
  {
    badge: 'Solución 3',
    title: 'Compras Inteligentes CPA',
    description: 'Cuando detectamos vacíos en tu armario canónico, te conectamos directamente con las mejores opciones de tiendas afiliadas, ganando comisión solo si compras.',
    features: [
      'Detección automática de prendas faltantes',
      'Enlaces directos a inventario real',
      'Comparativa de precios en tiempo real',
      'Modelo de afiliación transparente',
    ],
    icon: '🛒',
  },
]

function SolutionVisual({ icon }) {
  return (
    <div className="relative">
      <div className="bg-white/60 backdrop-blur-3xl border border-white/50 rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-mint" />
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-lavender/30 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-mint/30 rounded-full blur-xl" />

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lavender to-mint flex items-center justify-center text-xl">
            {icon}
          </div>
          <div>
            <h4 className="font-bold text-gray-800">En acción</h4>
            <p className="text-sm text-gray-500">Preview del sistema</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-h-[250px]">
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lavender/20 to-mint/20" />
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-gray-100 rounded w-1/2" />
                </div>
                <div className="w-8 h-8 rounded-full bg-mint/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolutionSection() {
  return (
    <section id="solucion" className="py-24 relative">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(135deg, #A3B1FF 25%, transparent 25%), linear-gradient(225deg, #B5EAD7 25%, transparent 25%)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-white/25 backdrop-blur-xl border border-white/30 rounded-full text-sm font-medium text-gray-600 mb-4">
            Cómo Funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tecnología que <span className="bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">transforma</span> tu forma de vestir
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tres pilares fundamentales que convierten la compra de ropa de una experiencia estresante a una decisión informada y rentable.
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((sol, i) => {
            const isReversed = i % 2 !== 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? '' : ''}`}
              >
                <div className={isReversed ? 'md:order-2' : ''}>
                  <span className="inline-block px-4 py-2 bg-white/25 backdrop-blur-xl border border-white/30 rounded-full text-sm font-medium text-lavender mb-4">
                    {sol.badge}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{sol.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{sol.description}</p>
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
                        <div className="w-6 h-6 rounded-full bg-mint/30 flex items-center justify-center">
                          <span className="text-mint-dark text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={isReversed ? 'md:order-1' : ''}>
                  <SolutionVisual icon={sol.icon} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}