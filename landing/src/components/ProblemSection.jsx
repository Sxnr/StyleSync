import { motion } from 'framer-motion'

const problems = [
  {
    stat: '15',
    unit: 'min perdidos al día',
    description: 'Tiempo promedio que un hombre dedica a decidir qué ponerse, acumulando fricción transaccional.',
    icon: '⏱️',
    gradient: 'from-red-400 to-orange-400',
    borderColor: 'border-red-400/20',
  },
  {
    stat: '70',
    unit: '% de ropa sin usar',
    description: 'Del armario promedio, la mayoría de prendas nunca se usan por falta de planificación inteligente.',
    icon: '👕',
    gradient: 'from-amber-400 to-yellow-400',
    borderColor: 'border-amber-400/20',
  },
  {
    stat: '25',
    unit: '% de devoluciones',
    description: 'En tiendas online, una de cada cuatro prendas se devuelve por mala elección o "bracketing".',
    icon: '📦',
    gradient: 'from-rose-400 to-pink-400',
    borderColor: 'border-rose-400/20',
  },
]

export default function ProblemSection() {
  return (
    <section id="problema" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/25 backdrop-blur-xl border border-white/30 rounded-full text-sm font-medium text-gray-600 mb-4">
            El Problema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            La moda masculina tiene un <span className="text-rose-500">problema</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Millones de hombres enfrentan diariamente la misma batalla: elegir ropa sin un sistema que les garantice acertar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-white/60 backdrop-blur-3xl border ${p.borderColor} rounded-3xl p-8 relative overflow-hidden group cursor-default`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.gradient} opacity-20 rounded-bl-full`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                {p.icon}
              </div>

              <div className="mb-4">
                <span className="text-5xl font-black text-gray-900">{p.stat}</span>
                <span className="text-lg text-gray-500 ml-2">{p.unit}</span>
              </div>

              <p className="text-gray-600 leading-relaxed">{p.description}</p>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}