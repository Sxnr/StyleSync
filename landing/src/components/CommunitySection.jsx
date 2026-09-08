import { motion } from 'framer-motion'

const communityPosts = [
  { user: 'Carlos M.', outfit: 3, likes: 127, items: ['👔', '👖', '👞'] },
  { user: 'Andrés R.', outfit: 5, likes: 89, items: ['👕', '👖', '👟'] },
  { user: 'Miguel S.', outfit: 2, likes: 203, items: ['🧥', '👔', '👞'] },
]

export default function CommunitySection() {
  return (
    <section id="comunidad" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pearl via-white to-pearl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lavender/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full text-xs font-bold text-mint-dark uppercase tracking-wider mb-6">
            Comunidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">
            Hombres reales, <span className="bg-gradient-to-r from-mint-dark to-lavender bg-clip-text text-transparent">estilo real</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Únete a una comunidad de hombres pragmáticos que ya optimizaron su forma de vestir. Sin influencers, sin filtros, solo estilo funcional.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: '12K+', label: 'Usuarios activos' },
            { value: '48K', label: 'Outfits compartidos' },
            { value: '2.4M', label: 'Prendas digitalizadas' },
            { value: '4.9', label: 'Rating promedio' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 backdrop-blur-3xl border border-white/60 rounded-2xl p-5 text-center"
            >
              <p className="text-2xl font-black bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">{stat.value}</p>
              <p className="text-xs text-gray-500 font-bold mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feed Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {communityPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/50 backdrop-blur-3xl border border-white/60 rounded-3xl overflow-hidden group cursor-default"
            >
              {/* Outfit preview */}
              <div className="h-48 bg-gradient-to-br from-lavender/10 to-mint/10 p-6 flex items-center justify-center">
                <div className="flex gap-3">
                  {post.items.map((item, j) => (
                    <motion.div
                      key={j}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                      className="w-16 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-mint flex items-center justify-center text-white text-sm font-bold">
                      {post.user[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{post.user}</p>
                      <p className="text-[10px] text-gray-400 font-medium">Outfit #{post.outfit}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-rose-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    <span className="text-sm font-bold">{post.likes}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-100 hover:bg-lavender/10 text-gray-600 hover:text-lavender py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  Ver combinaciones →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(163,177,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-lavender to-mint text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-lavender/25 text-sm"
          >
            Explorar la Comunidad
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}