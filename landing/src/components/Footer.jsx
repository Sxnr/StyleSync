import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-lavender to-mint flex items-center justify-center shadow-lg shadow-lavender/20">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tight">StyleSync</span>
            </div>
            <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-xs mb-6">
              Motor de recomendación prescriptiva basado en satisfacción de restricciones (CSP) y colorimetría HSV. API para e-commerce.
            </p>
            <div className="flex items-center gap-3">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-lavender/10 flex items-center justify-center text-gray-400 hover:text-lavender transition-all">
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Producto</h4>
            <ul className="space-y-2.5">
              {['API REST', 'Widget E-Commerce', 'Fit Score SDK', 'Dashboard B2B', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-lavender font-medium transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {['Sobre nosotros', 'Blog técnico', 'Case studies', 'Empleo', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-lavender font-medium transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                'Política de Privacidad',
                'Términos de Servicio',
                'Política de Datos Biométricos',
                'Cumplimiento ISO 9241',
                'Accesibilidad (WCAG 2.1)',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-lavender font-medium transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-medium">
            © 2026 StyleSync. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-300 font-medium">
            <a href="#" className="hover:text-gray-500 transition-colors">ISO 9241 - Usabilidad</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-500 transition-colors">ISO/IEC 40500 - Accesibilidad</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-500 transition-colors">RGPD / LOPD</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-500 transition-colors">CCPA</a>
          </div>
          <p className="text-[10px] text-gray-300 font-medium">
            Ingeniería Civil en Informática · UTFSM
          </p>
        </div>
      </div>
    </footer>
  )
}