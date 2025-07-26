type PageHeaderProps = {
  title: string; // Le titre principal (ex : "Détartrage dentaire")
  subtitle?: string; // Le sous-titre (par défaut : "Au cabinet BioSmile à Marrakech")
  description: string; // Le texte d'accroche personnalisé
};

export default function PageHeader({
  title,
  subtitle = "Au cabinet BioSmile à Marrakech",
  description,
}: PageHeaderProps) {
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{subtitle}</h2>
      <p className="text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed text-base md:text-lg">
        {description}
      </p>
    </div>
  );
}
