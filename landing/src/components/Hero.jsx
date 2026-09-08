import { motion } from 'framer-motion'

function PhoneMockup() {
  return (
    <div className="w-64 md:w-72 rounded-[40px] p-3 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] shadow-[0_50px_100px_-20px_rgba(163,177,255,0.4),0_30px_60px_-30px_rgba(181,234,215,0.3)]">
      <div className="rounded-[30px] overflow-hidden bg-gradient-to-b from-pearl to-[#E8EAF0] h-[480px]">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 py-2 text-xs text-gray-500">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-gray-400 rounded-sm" />
            <div className="w-1 h-2 bg-gray-400 rounded-sm" />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-2">
          <p className="text-xs text-gray-500">Buenos días</p>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Tu outfit de hoy</h3>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white rounded-2xl p-3 shadow-md mb-3"
          >
            <div className="h-24 bg-gradient-to-br from-lavender/20 to-mint/20 rounded-xl mb-2 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2">
                <div className="w-10 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-lg">👔</div>
                <div className="w-10 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-lg">👖</div>
                <div className="w-10 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-lg">👞</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-gray-800">Look Formal</p>
                <p className="text-[10px] text-gray-500">98% compatibilidad</p>
              </div>
              <div className="w-6 h-6 bg-mint rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-lavender/20 rounded-xl p-2 text-center">
              <p className="text-lg font-bold text-lavender">12</p>
              <p className="text-[9px] text-gray-600">Prendas</p>
            </div>
            <div className="bg-mint/20 rounded-xl p-2 text-center">
              <p className="text-lg font-bold text-mint-dark">8</p>
              <p className="text-[9px] text-gray-600">Outfits</p>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-lavender to-lavender-dark text-white py-2 rounded-xl text-sm font-semibold">
            Ver más outfits
          </button>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg py-2 px-4">
          <div className="flex justify-around">
            {[
              { label: 'Inicio', active: true },
              { label: 'Armario', active: false },
              { label: 'Buscar', active: false },
              { label: 'Perfil', active: false },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className={`w-6 h-6 rounded-md ${item.active ? 'bg-lavender' : 'bg-gray-200'}`} />
                <span className={`text-[8px] mt-1 ${item.active ? 'text-lavender' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Blobs */}
      <div className="absolute w-96 h-96 bg-lavender/40 rounded-full blur-[80px] top-20 -left-48 animate-[blob_8s_ease-in-out_infinite]" />
      <div className="absolute w-80 h-80 bg-mint/40 rounded-full blur-[80px] bottom-20 right-10 animate-[blob_8s_ease-in-out_infinite_2s]" />
      <div className="absolute w-64 h-64 bg-lavender/30 rounded-full blur-[80px] top-1/2 left-1/3 animate-[blob_8s_ease-in-out_infinite_4s]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-mint rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 font-medium">Motor algorítmico de nueva generación</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Vístete con <span className="bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">lógica</span>.<br />
              Compra con <span className="bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">certeza</span>.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              El motor algorítmico que optimiza tu armario y elimina la parálisis de decisión. Basado en colorimetría HSL y satisfacción de restricciones (CSP).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { store: 'App Store', sub: 'Disponible en' },
                { store: 'Google Play', sub: 'Consíguelo en' },
              ].map((btn) => (
                <motion.button
                  key={btn.store}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
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
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {['A', 'B', 'C', 'D', 'E'].map((l) => (
                  <div key={l} className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-mint border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-amber-400">★★★★★</div>
                <p className="text-sm text-gray-500">4.9/5 • 2,847 reseñas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end"
            style={{ perspective: '1000px' }}
          >
            <div className="relative animate-[float_6s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-lavender/30 to-mint/30 rounded-[50px] blur-2xl" />
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(-5deg) rotateX(5deg); }
          50% { transform: translateY(-25px) rotateY(-5deg) rotateX(5deg); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </section>
  )
}