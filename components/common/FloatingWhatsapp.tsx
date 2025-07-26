import type { SVGProps } from "react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/212663588400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white w-16 h-16 rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
    >
      <WhatsappIcon className="w-12 h-12" />
    </a>
  );
}

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fill="#40c351"
        d="M24 4C13 4 4 13 4 24c0 3.4.8 6.7 2.5 9.6L3.9 43c-.1.3 0 .7.3 1 .2.2.4.3.7.3.1 0 .2 0 .3 0l9.7-2.5c2.8 1.5 6 2.2 9.2 2.2 11 0 20-9 20-20S35 4 24 4z"
      />
      <path
        fill="#fff"
        d="M19.3 16c-.4-.8-.7-.8-1.1-.8s-.6 0-.9 0-.8.1-1.3.6c-.4.5-1.7 1.6-1.7 4s1.7 4.6 1.9 4.9 3.3 5.3 8.1 7.2c4 1.6 4.8 1.3 5.7 1.2.9-.1 2.8-1.1 3.2-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.4-.3-.9-.6s-2.8-1.4-3.2-1.5c-.4-.2-.8-.2-1.1.2-.3.5-1.2 1.5-1.5 1.9-.3.3-.6.4-1 .1-.5-.2-2-.7-3.8-2.4-1.4-1.3-2.4-2.8-2.6-3.3-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.6-1.2-1.5-3.5-1.9-4.6z"
      />
    </svg>
  );
}
