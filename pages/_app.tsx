import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO_CONFIG from "@/lib/seo-config";

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
    <>
      {/* SEO Configuration globale */}
      <DefaultSeo {...SEO_CONFIG} />

      {/* Application */}
      <Component {...pageProps} />
    </>
  );
}
