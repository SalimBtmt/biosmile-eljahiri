import { BUSINESS_INFO, SITE_CONFIG } from "./constants";

// Schema principal - Dentist + LocalBusiness
export const getDentistSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  "@id": `${SITE_CONFIG.url}#dentist`,
  name: BUSINESS_INFO.name,
  legalName: BUSINESS_INFO.legalName,
  description: BUSINESS_INFO.description,
  url: SITE_CONFIG.url,
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,

  // Adresse
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address.streetAddress,
    addressLocality: BUSINESS_INFO.address.addressLocality,
    addressRegion: BUSINESS_INFO.address.addressRegion,
    postalCode: BUSINESS_INFO.address.postalCode,
    addressCountry: BUSINESS_INFO.address.addressCountry,
  },

  // Géolocalisation
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_INFO.coordinates.latitude,
    longitude: BUSINESS_INFO.coordinates.longitude,
  },

  // Horaires d'ouverture
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],

  // Services médicaux
  medicalSpecialty: [
    "Dentistry",
    "Orthodontics",
    "Oral Surgery",
    "Periodontics",
    "Prosthodontics",
    "Endodontics",
  ],

  // Informations business
  priceRange: BUSINESS_INFO.priceRange,
  paymentAccepted: BUSINESS_INFO.paymentMethods,
  currenciesAccepted: "MAD",

  // Images
  image: [
    `${SITE_CONFIG.url}/images/cabinet-facade.jpg`,
    `${SITE_CONFIG.url}/images/cabinet-interieur.jpg`,
    `${SITE_CONFIG.url}/images/salle-soins.jpg`,
  ],
  logo: `${SITE_CONFIG.url}/images/logo-biosmile.png`,

  // Évaluations (à adapter selon vos vraies reviews)
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },

  // Réseaux sociaux
  sameAs: [
    BUSINESS_INFO.social.facebook,
    BUSINESS_INFO.social.instagram,
    `${SITE_CONFIG.url}`,
  ],

  // Zone de service
  areaServed: {
    "@type": "City",
    name: "Marrakech",
    sameAs: "https://fr.wikipedia.org/wiki/Marrakech",
  },

  // Langues parlées
  availableLanguage: BUSINESS_INFO.languages,
});

// Schema pour les services dentaires
export const getDentalServicesSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services Dentaires BioSmile Marrakech",
  description:
    "Services complets de soins dentaires proposés par le cabinet BioSmile",
  itemListElement: BUSINESS_INFO.services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "MedicalProcedure",
      name: service,
      provider: {
        "@type": "Dentist",
        name: BUSINESS_INFO.name,
        "@id": `${SITE_CONFIG.url}#dentist`,
      },
    },
  })),
});

// Schema FAQ pour la page d'accueil
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Où se trouve le cabinet dentaire BioSmile à Marrakech ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Le cabinet BioSmile est situé ${BUSINESS_INFO.address.fullAddress}. Nous sommes facilement accessibles dans le quartier Bokar.`,
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les horaires d'ouverture du cabinet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous sommes ouverts du lundi au vendredi de 9h à 19h, et le samedi de 9h à 14h. Fermé le dimanche.",
      },
    },
    {
      "@type": "Question",
      name: "Quels services dentaires proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons tous les soins dentaires : consultations, détartrage, soins de caries, implants, orthodontie, esthétique dentaire, chirurgie et urgences.",
      },
    },
    {
      "@type": "Question",
      name: "Comment prendre rendez-vous chez BioSmile ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Vous pouvez nous appeler au ${BUSINESS_INFO.phone} ou nous envoyer un email à ${BUSINESS_INFO.email} pour prendre rendez-vous.`,
      },
    },
  ],
});

// Schema pour page équipe/à propos
export const getDoctorSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_CONFIG.url}#doctor`,
  name: "Dr. El Jehiri",
  jobTitle: "Chirurgien-Dentiste",
  worksFor: {
    "@type": "Dentist",
    name: BUSINESS_INFO.name,
    "@id": `${SITE_CONFIG.url}#dentist`,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Docteur en Chirurgie Dentaire",
  },
  knowsAbout: [
    "Dentisterie générale",
    "Implantologie",
    "Esthétique dentaire",
    "Orthodontie",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Faculté de Médecine Dentaire",
  },
  memberOf: {
    "@type": "Organization",
    name: "Ordre National des Dentistes du Maroc",
  },
});
