export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                V
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-white">
                Verdant
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-light">
              Premier landscape design and build firm serving the greater Houston area. Elevating outdoor living through expert craftsmanship.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
              <span>Licensed</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>Bonded</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>Insured</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Landscape Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hardscaping & Patios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pools & Water Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outdoor Kitchens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-light">
              <li><a href="tel:+18005550199" className="hover:text-white transition-colors">(800) 555-0199</a></li>
              <li><a href="mailto:hello@verdantlandscapes.com" className="hover:text-white transition-colors">hello@verdantlandscapes.com</a></li>
              <li className="mt-2 text-gray-500">
                1234 Design Blvd, Suite 100<br />
                Houston, TX 77002
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Verdant Landscapes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
