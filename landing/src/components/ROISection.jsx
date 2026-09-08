import { motion } from 'framer-motion'

const metrics = [
  { value: '+20%', label: 'Conversión', description: 'Aumento en tasa de conversión promedio' },
  { value: '+40%', label: 'Ticket Promedio', description: 'Incremento en valor por transacción' },
  { value: '-65%', label: 'Devoluciones', description: 'Reducción en tasa de devoluciones' },
  { value: '3.2x', label: 'ROI', description: 'Retorno de inversión en el primer trimestre' },
]

export default function ROISection() {
  return (
    <section id="roi" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-lavender via-lavender-dark to-lavender rounded-[40px] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-8 left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-8 right-8 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-6">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <span className="text-xs font-bold text-white uppercase tracking-wider">ROI Comprobado</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
                Aumenta la conversión un <span className="text-white/80">20%</span> y el Ticket Promedio un <span className="text-white/80">40%</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                Integrando nuestro <strong className="text-white">Widget de Estilismo</strong> en tu E-commerce. Sin cambios en tu stack tecnológico actual.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-center cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">{m.value}</div>
                  <div className="text-sm font-bold text-white/90 mb-1">{m.label}</div>
                  <div className="text-[10px] text-white/50 font-medium">{m.description}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-lavender-dark px-10 py-4 rounded-2xl font-black shadow-xl text-sm"
              >
                Solicitar Demo B2B
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-sm"
              >
                Ver Documentación API
              </motion.button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-white/50 font-medium"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span>Cifrado AES-256</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>SOC 2 Type II</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}