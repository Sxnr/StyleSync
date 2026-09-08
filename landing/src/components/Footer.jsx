export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-mint flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800">StyleSync</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Motor de recomendación prescriptiva basado en satisfacción de restricciones y colorimetría HSL.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">API B2B</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 StyleSync. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-400">Ingeniería Civil en Informática — Universidad Técnica Federico Santa María</p>
        </div>
      </div>
    </footer>
  )
}