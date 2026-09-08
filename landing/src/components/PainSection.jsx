import { motion } from 'framer-motion'

const pains = [
  {
    stat: '55%',
    label: 'Bracketing',
    description: 'Compran 3 tallas para devolver 2. El usuario no confía en el sistema de tallas del e-commerce.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
    gradient: 'from-rose-500 to-orange-500',
    bg: 'from-rose-500/10 to-orange-500/10',
    border: 'border-rose-500/20',
  },
  {
    stat: '40%',
    label: 'Pérdida Comercial',
    description: 'Del valor comercial total se evapora en logística inversa: transportes, reprocesamiento y obsolescencia.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-yellow-500',
    bg: 'from-amber-500/10 to-yellow-500/10',
    border: 'border-amber-500/20',
  },
  {
    stat: '77%',
    label: 'Devoluciones por Ajuste',
    description: 'La mayoría absoluta de devoluciones ocurren porque la prenda no se ajusta como el usuario esperaba.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-500',
    bg: 'from-violet-500/10 to-purple-500/10',
    border: 'border-violet-500/20',
  },
]

export default function PainSection() {
  return (
    <section id="dolor" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-5 py-2.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Dolor de Industria</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">
            Tu industria está <span className="text-rose-500">sangrando</span> dinero
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Las devoluciones no son un costo operativo: son un <strong className="text-gray-700">síntoma de fallo predictivo</strong>. Cada prenda devolvida destruye margen y confianza.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative group cursor-default`}
            >
              {/* Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${pain.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              <div className={`relative bg-white/50 backdrop-blur-3xl border ${pain.border} rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:bg-white/70`}>
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pain.bg} rounded-bl-full`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pain.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {pain.icon}
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <span className="text-5xl font-black text-gray-900 tracking-tight">{pain.stat}</span>
                  <span className="text-sm font-bold text-gray-400 ml-2 uppercase tracking-wider">{pain.label}</span>
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm font-medium">{pain.description}</p>

                {/* Bottom line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pain.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-xl border border-white/60 px-8 py-4 rounded-full shadow-sm">
            <span className="text-2xl font-black bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">$210B</span>
            <span className="text-sm text-gray-500 font-medium">Pérdida anual global por devoluciones en moda</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}