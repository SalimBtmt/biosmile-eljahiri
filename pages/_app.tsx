import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO_CONFIG from "@/lib/seo-config";
import { Montserrat } from "next/font/google";
import FloatingWhatsapp from "@/components/common/FloatingWhatsapp";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700", // <— Only include weights you really use!
  ],
  display: "swap",
  preload: true, // ensures fast LCP
  variable: "--font-montserrat", // use with Tailwind or CSS
});

// Monitoring des Core Web Vitals
export function reportWebVitals(metric: any) {
  // Envoi vers Google Analytics (optionnel)
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", metric.name, {
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log pour développement
  console.log(`[${metric.name}]`, Math.round(metric.value * 1000) / 1000);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.variable}>
      {/* SEO Configuration globale */}
      <DefaultSeo {...SEO_CONFIG} />

      {/* Application */}
      <Component {...pageProps} />
      <FloatingWhatsapp />
    </div>
  );
}
