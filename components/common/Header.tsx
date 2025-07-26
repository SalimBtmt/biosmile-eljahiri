import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import ContactUs from "../ContactUs";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleScroll() {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow w-full transition-all duration-300 ${
        scrolled ? "py-2" : "py-0 sm:py-2"
      }`}
    >
      {/* Navigation principale */}
      <nav className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Numéros de téléphone - gauche desktop, div invisible mobile */}
          <div className="flex justify-start">
            <div className="hidden md:flex flex-col space-y-1">
              <a
                href="tel:+212663588400"
                className={`flex items-center space-x-2 text-[#3784b4] hover:text-[#2d6b94] transition-all duration-200 font-medium ${
                  scrolled ? "text-sm" : "text-2xl"
                }`}
              >
                <Phone size={scrolled ? 12 : 14} />
                <span>+212 6 63 58 84 00</span>
              </a>
            </div>
            {/* Div invisible sur mobile pour équilibrer */}
            <div className="md:hidden w-10 h-10"></div>
          </div>

          {/* Logo - parfaitement centré */}
          <div className="flex justify-center">
            <img
              src="/images/logoReda.png"
              alt="Logo"
              className={`transition-all duration-300 object-contain ${
                scrolled
                  ? "h-20 md:h-17 w-auto" // Mobile: h-20, Desktop: h-17 when scrolled
                  : "h-28 md:h-25 w-auto" // Mobile: h-28, Desktop: h-25 when not scrolled
              }`}
            />
          </div>

          {/* Menu Button - droite, même largeur que les numéros */}
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mega-menu"
            >
              <Menu size={scrolled ? 24 : 28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Numéros de téléphone mobile - sous le logo */}
      <div
        className={`md:hidden bg-gray-50 px-4 border-t border-gray-200 transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="flex justify-center space-x-6">
          <a
            href="tel:+212663588400"
            className={`flex items-center space-x-1 text-[#3784b4] hover:text-[#2d6b94] transition-all duration-200 font-medium ${
              scrolled ? "text-sm" : "text-2xl"
            }`}
          >
            <Phone size={scrolled ? 12 : 14} />
            <span>+212 6 63 58 84 00</span>
          </a>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        ref={menuRef}
        id="mega-menu"
        className={`fixed top-0 left-0 w-full bg-[#F7F5EF] z-50 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        } max-h-[80vh] overflow-y-auto shadow-md rounded-b-xl`}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-8 px-4 text-center md:text-left relative">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:shadow-lg transition-shadow duration-200"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Colonne 1 */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              SOINS & PROTHÈSES & IMPLANTS
            </h3>
            <ul className="space-y-2 hidden md:block text-gray-700">
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Soins dentaires
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Prothèses & implants
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Soins esthétiques
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Radiologie
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Urgences dentaires
              </li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              ESTHÉTIQUE & BLANCHIMENT
            </h3>
            <ul className="space-y-2 hidden md:block text-gray-700">
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Blanchiment sur fauteuil Fläsh
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Blanchiment par gouttière
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Facettes dentaires
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              ORTHODONTIE
            </h3>
            <ul className="space-y-2 hidden md:block text-gray-700">
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Orthodontie chez l'adulte
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Orthodontie chez l'enfant
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Gouttières invisibles
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              PÉDODONTIE
            </h3>
            <ul className="space-y-2 hidden md:block text-gray-700">
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Hygiène bucco-dentaire chez l'enfant
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Scellement de sillon
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Soins conservateurs
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Extraction
              </li>
              <li className="hover:text-[#3784b4] transition-colors cursor-pointer">
                Traumatologie
              </li>
            </ul>
          </div>

          {/* Colonne 5 : Actions */}
          <div className="flex flex-col items-center space-y-4">
            {/* Numéros de téléphone dans le menu (desktop seulement) */}
            <div className="hidden md:flex flex-col items-center space-y-3 mb-6 p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#3784b4] text-sm">
                Appelez-nous
              </h4>
              <a
                href="tel:+212663588400"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#3784b4] transition-colors duration-200 text-sm"
              >
                <Phone size={14} />
                <span>+212 6 63 58 84 00</span>
              </a>
            </div>

            {/* Boutons d'action */}

            <ContactUs />
          </div>
        </div>
      </div>
    </header>
  );
}
