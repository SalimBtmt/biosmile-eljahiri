import Image from "next/image";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/212663588400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
      aria-label="Discuter avec nous sur WhatsApp"
    >
      {/* Mobile = bouton rond */}
      <div className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out md:hidden">
        <Image
          src="/images/whatsapp.png"
          alt="Logo WhatsApp"
          width={28}
          height={28}
          priority
        />
      </div>

      {/* Desktop = bulle avec texte */}
      <div className="hidden md:flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl px-5 py-3 transition-all duration-300 ease-out hover:scale-105">
        <Image
          src="/images/whatsapp.png"
          alt="Logo WhatsApp"
          width={32}
          height={32}
          priority
        />
        <span className="text-base font-medium">Discuter maintenant</span>
      </div>
    </a>
  );
}
