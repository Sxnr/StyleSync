import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-lavender to-lavender-dark rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Transforma tu forma de vestir hoy
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg mb-10 max-w-2xl mx-auto"
            >
              Únete a miles de hombres que ya optimizaron su armario con inteligencia artificial. Descarga StyleSync y nunca más pierdas tiempo decidiendo qué ponerte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[
                { store: 'App Store', sub: 'Descarga en' },
                { store: 'Google Play', sub: 'Disponible en' },
              ].map((btn) => (
                <motion.button
                  key={btn.store}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs opacity-80">{btn.sub}</p>
                    <p className="text-sm font-semibold">{btn.store}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-white/70"
            >
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">ISO 9241 - Usabilidad</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">ISO/IEC 40500 - Accesibilidad</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}