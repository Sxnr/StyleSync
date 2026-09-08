import { motion } from 'framer-motion'

const trends = [
  { name: 'Colores tierra', growth: '+34%', width: '85%' },
  { name: 'Formal casual', growth: '+28%', width: '72%' },
  { name: 'Sostenibilidad', growth: '+45%', width: '92%' },
]

export default function B2BSection() {
  return (
    <section id="b2b" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-3xl border border-white/50 rounded-[40px] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lavender/20 to-mint/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-mint/20 to-lavender/20 rounded-full blur-3xl" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left */}
            <div>
              <span className="inline-block px-4 py-2 bg-white/25 backdrop-blur-xl border border-white/30 rounded-full text-sm font-medium text-gray-600 mb-4">
                Para Tiendas B2B
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Data <span className="bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">Insights</span> para la industria textil
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Monetiza las tendencias de consumo que genera StyleSync. Vendemos inteligencia de mercado anonimizada a fabricantes y distribuidores.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '12K+', label: 'Usuarios activos', color: 'text-lavender' },
                  { value: '85%', label: 'Precisión CSP', color: 'text-mint-dark' },
                  { value: '3.2M', label: 'Interacciones/mes', color: 'text-lavender' },
                  { value: '98%', label: 'Satisfacción', color: 'text-mint-dark' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 text-center">
                    <div className={`text-3xl font-bold ${s.color} mb-1`}>{s.value}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Solicitar Demo B2B
              </motion.button>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8">
                <h4 className="font-bold text-gray-800 mb-6">Tendencias Detectadas</h4>

                <div className="space-y-4 mb-8">
                  {trends.map((t, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{t.name}</span>
                        <span className="text-sm text-mint-dark font-semibold">{t.growth}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: t.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-gradient-to-r from-lavender to-mint rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-lavender/10 to-mint/10 rounded-2xl p-4">
                  <p className="text-sm text-gray-600 italic">
                    "StyleSync nos proporcionó insights que redujeron nuestras devoluciones en un 23%."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">— Director de E-commerce, ModaMasculina.cl</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}