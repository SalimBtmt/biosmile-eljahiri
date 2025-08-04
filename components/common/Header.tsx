import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import ContactUs from "@/components/ContactUs";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------------------------------
  // Effets : fermeture au clic extérieur + changement d’état au scroll
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleScroll = () => setScrolled(window.scrollY > 50);

    if (open) document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  // --------------------------------------------------------------------------
  // Rendu
  // --------------------------------------------------------------------------
  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow w-full transition-all duration-300 ${
        scrolled ? "py-2" : "py-0 sm:py-2"
      }`}
    >
      {/* Barre supérieure */}
      <nav className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Téléphone (desktop) */}
          <div className="flex justify-start">
            <a
              href="tel:+212663588400"
              className={`hidden md:flex items-center space-x-2 text-[#3784b4] hover:text-[#2d6b94] transition-all duration-200 font-medium ${
                scrolled ? "text-sm" : "text-2xl"
              }`}
            >
              <Phone size={scrolled ? 12 : 14} />
              <span>+212 6 63 58 84 00</span>
            </a>
          </div>

          {/* Logo centré */}
          <div className="flex justify-center">
            <img
              src="/images/logoReda.png"
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-20 md:h-17" : "h-28 md:h-25"
              }`}
            />
          </div>

          {/* Bouton menu (mobile & desktop) */}
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(true)}
              className="p-2 text-gray-700 hover:text-gray-900"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mega-menu"
            >
              <Menu size={scrolled ? 24 : 28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Téléphone (mobile) */}
      <div
        className={`md:hidden bg-gray-50 px-4 border-t border-gray-200 transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="flex justify-center">
          <a
            href="tel:+212663588400"
            className={`flex items-center space-x-1 text-[#3784b4] hover:text-[#2d6b94] font-medium ${
              scrolled ? "text-sm" : "text-2xl"
            }`}
          >
            <Phone size={scrolled ? 12 : 14} />
            <span>+212 6 63 58 84 00</span>
          </a>
        </div>
      </div>

      {/* Mega-menu */}
      <div
        ref={menuRef}
        id="mega-menu"
        className={`fixed top-0 left-0 w-full bg-[#F7F5EF] z-50 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        } max-h-[80vh] overflow-y-auto shadow-md rounded-b-xl`}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-8 px-4 text-center md:text-left relative">
          {/* Bouton fermeture */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:shadow-lg"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* ------------ COLONNE 1 ------------ */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              SOINS & PROTHÈSES & IMPLANTS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/soins-dentaires" className="hover:text-[#3784b4]">
                  Soins dentaires
                </Link>
              </li>
              <li>
                <Link
                  href="/protheses-implants"
                  className="hover:text-[#3784b4]"
                >
                  Prothèses & implants
                </Link>
              </li>
              <li>
                <Link
                  href="/soins-esthetiques"
                  className="hover:text-[#3784b4]"
                >
                  Soins esthétiques
                </Link>
              </li>
              <li>
                <Link href="/radiologie" className="hover:text-[#3784b4]">
                  Radiologie
                </Link>
              </li>
              <li>
                <Link
                  href="/urgences-dentaires"
                  className="hover:text-[#3784b4]"
                >
                  Urgences dentaires
                </Link>
              </li>
            </ul>
          </div>

          {/* ------------ COLONNE 2 ------------ */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              ESTHÉTIQUE & BLANCHIMENT
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/blanchiment-fauteuil-flash"
                  className="hover:text-[#3784b4]"
                >
                  Blanchiment fauteuil Fläsh
                </Link>
              </li>
              <li>
                <Link
                  href="/blanchiment-gouttiere"
                  className="hover:text-[#3784b4]"
                >
                  Blanchiment par gouttière
                </Link>
              </li>
              <li>
                <Link
                  href="/facettes-dentaires"
                  className="hover:text-[#3784b4]"
                >
                  Facettes dentaires
                </Link>
              </li>
            </ul>
          </div>

          {/* ------------ COLONNE 3 ------------ */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              ORTHODONTIE
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/orthodontie-adulte"
                  className="hover:text-[#3784b4]"
                >
                  Orthodontie adulte
                </Link>
              </li>
              <li>
                <Link
                  href="/orthodontie-enfant"
                  className="hover:text-[#3784b4]"
                >
                  Orthodontie enfant
                </Link>
              </li>
              <li>
                <Link
                  href="/gouttieres-invisibles"
                  className="hover:text-[#3784b4]"
                >
                  Gouttières invisibles
                </Link>
              </li>
            </ul>
          </div>

          {/* ------------ COLONNE 4 ------------ */}
          <div>
            <h3 className="font-bold text-[#3784b4] mb-4 text-lg">
              PÉDODONTIE
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/hygiene-bucco-dentaire-enfant"
                  className="hover:text-[#3784b4]"
                >
                  Hygiène bucco-dentaire enfant
                </Link>
              </li>
              <li>
                <Link
                  href="/scellement-sillon"
                  className="hover:text-[#3784b4]"
                >
                  Scellement de sillon
                </Link>
              </li>
              <li>
                <Link
                  href="/soins-conservateurs"
                  className="hover:text-[#3784b4]"
                >
                  Soins conservateurs
                </Link>
              </li>
              <li>
                <Link href="/extraction" className="hover:text-[#3784b4]">
                  Extraction
                </Link>
              </li>
              <li>
                <Link href="/traumatologie" className="hover:text-[#3784b4]">
                  Traumatologie
                </Link>
              </li>
            </ul>
          </div>

          {/* ------------ COLONNE 5 : CTA ------------ */}
          <div className="flex flex-col items-center space-y-6">
            {/* Téléphone (desktop) */}
            <div className="hidden md:flex flex-col items-center space-y-3 p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#3784b4] text-sm">
                Appelez-nous
              </h4>
              <a
                href="tel:+212663588400"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#3784b4] text-sm"
              >
                <Phone size={14} />
                <span>+212 6 63 58 84 00</span>
              </a>
            </div>

            {/* Formulaire / boutons de contact */}
            <ContactUs />
          </div>
        </div>
      </div>
    </header>
  );
}
