import { SEO } from "../components/seo/SEO";
import Layout from "../components/common/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="À propos du cabinet dentaire BioSmile Marrakech"
        description="Découvrez notre équipe, notre philosophie et notre approche centrée sur le patient. Cabinet dentaire BioSmile à Marrakech."
        image="/images/og-about.jpg"
      />

      <main className="p-6">
        <h1 className="text-2xl font-bold">À propos de nous</h1>
        <p className="mt-4">
          Le cabinet BioSmile est composé d’une équipe passionnée au service de
          votre santé bucco-dentaire.
        </p>
      </main>
    </Layout>
  );
}
