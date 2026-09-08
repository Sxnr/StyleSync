import { motion } from 'framer-motion'

function PhoneMockup() {
  return (
    <div className="w-[260px] md:w-[280px] rounded-[44px] p-[10px] bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] shadow-[0_80px_120px_-30px_rgba(163,177,255,0.35),0_40px_80px_-20px_rgba(181,234,215,0.25)] relative">
      {/* Notch */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-[#0f0f1a] rounded-b-2xl z-10" />

      <div className="rounded-[36px] overflow-hidden bg-gradient-to-b from-pearl via-white to-[#f0f2f5] h-[520px] relative">
        {/* Status bar */}
        <div className="flex justify-between items-center px-7 pt-3 pb-1 text-[10px] font-semibold text-gray-800 relative z-20">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
          </div>
        </div>

        <div className="px-5 pt-2">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Buenos días</p>
            <h3 className="text-lg font-black text-gray-900 mt-0.5">Tu outfit de hoy</h3>
          </motion.div>

          {/* Main outfit card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Outfit Recomendado</span>
              <span className="text-xs font-black text-mint-dark bg-mint/20 px-2 py-0.5 rounded-full">98%</span>
            </div>
            <div className="flex gap-2 mb-3">
              {['👔', '👖', '👞'].map((e, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  className="flex-1 h-20 bg-gradient-to-br from-lavender/5 to-mint/5 rounded-xl flex items-center justify-center text-2xl border border-lavender/10"
                >
                  {e}
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-9 bg-gray-50 rounded-lg flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-500">Reunión 10:00</span>
              </div>
              <div className="flex-1 h-9 bg-lavender/10 rounded-lg flex items-center justify-center">
                <span className="text-[10px] font-bold text-lavender">Formal</span>
              </div>
            </div>
          </motion.div>

          {/* Community preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-3 bg-white rounded-2xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                {['M', 'J', 'C'].map((l, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-lavender to-mint border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-bold text-gray-500">La comunidad usa las mismas prendas</span>
            </div>
            <div className="flex gap-1.5">
              {['👔', '👕', '🧥', '👖'].map((e, i) => (
                <div key={i} className="flex-1 h-12 bg-gradient-to-br from-mint/5 to-lavender/5 rounded-lg flex items-center justify-center text-base border border-mint/10">
                  {e}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-3 grid grid-cols-2 gap-2"
          >
            <div className="bg-lavender/10 rounded-xl p-2.5 text-center">
              <p className="text-base font-black text-lavender">12</p>
              <p className="text-[8px] text-gray-500 font-bold">Prendas</p>
            </div>
            <div className="bg-mint/10 rounded-xl p-2.5 text-center">
              <p className="text-base font-black text-mint-dark">48</p>
              <p className="text-[8px] text-gray-500 font-bold">Outfits posibles</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 py-2.5 px-6">
          <div className="flex justify-around">
            {[
              { label: 'Inicio', active: true },
              { label: 'Clóset', active: false },
              { label: 'Comunidad', active: false },
              { label: 'Tienda', active: false },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-0.5">
                <div className={`w-5 h-5 rounded-lg ${item.active ? 'bg-gradient-to-br from-lavender to-mint' : 'bg-gray-200'}`} />
                <span className={`text-[8px] font-bold ${item.active ? 'text-lavender' : 'text-gray-400'}`}>{item.label}</span>
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
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      {/* Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-lavender/20 rounded-full blur-[120px] -top-40 -left-40 animate-[blob_10s_ease-in-out_infinite]" />
      <div className="absolute w-[400px] h-[400px] bg-mint/20 rounded-full blur-[120px] bottom-0 right-0 animate-[blob_10s_ease-in-out_infinite_3s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/60 px-5 py-2.5 rounded-full mb-8 shadow-sm"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-lavender to-mint rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Ciencia del vestuario masculino</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
              Vístete con{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-lavender via-lavender-dark to-mint bg-clip-text text-transparent">lógica</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                  <path d="M2 7C40 2 80 3 100 5C120 7 160 3 198 6" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs><linearGradient id="grad" x1="0" y1="0" x2="200" y2="0"><stop stopColor="#A3B1FF" /><stop offset="1" stopColor="#B5EAD7" /></linearGradient></defs>
                </svg>
              </span>.
              <br />Despídete del estrés.
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-medium"
            >
              Digitaliza tus prendas básicas, recibe <strong className="text-gray-700">combinaciones matemáticas</strong> para cada ocasión y descubre cómo otros usuarios maximizan su estilo.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(163,177,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-lavender to-lavender-dark text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-lavender/25 text-sm"
              >
                Únete a la Comunidad
              </motion.button>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg text-xs font-bold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg text-xs font-bold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                  </svg>
                  Google Play
                </motion.button>
              </div>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {['F', 'G', 'C', 'M', 'L'].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-lavender to-mint border-[2.5px] border-white flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400 text-sm">★★★★★</div>
                <p className="text-xs text-gray-400 font-medium">4.9/5 · 2,847 reseñas verificadas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end"
            style={{ perspective: '1200px' }}
          >
            <div className="relative animate-[float_7s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute -inset-8 bg-gradient-to-r from-lavender/20 to-mint/20 rounded-[60px] blur-3xl" />
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(-5deg) rotateX(3deg); }
          50% { transform: translateY(-30px) rotateY(-5deg) rotateX(3deg); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
      `}</style>
    </section>
  )
}