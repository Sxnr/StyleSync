import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-lavender via-lavender-dark to-lavender rounded-[40px] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute inset-0">
            <div className="absolute top-8 left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-8 right-8 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
          </div>

          <div className="relative z-10 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Únete ahora</span>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Empieza a rentabilizar tu armario hoy.
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed mb-10">
              Únete a miles de usuarios que ya descubrieron que tienen más outfits de los que creían. <strong className="text-white">Sin comprar nada nuevo</strong>.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white text-lavender-dark px-8 py-4 rounded-2xl font-black shadow-xl text-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-normal">Descargar en</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white text-lavender-dark px-8 py-4 rounded-2xl font-black shadow-xl text-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-normal">Disponible en</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </motion.button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 text-xs text-white/50 font-medium"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Cumplimiento ISO 9241</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span>Privacidad de Datos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>ISO/IEC 40500</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}