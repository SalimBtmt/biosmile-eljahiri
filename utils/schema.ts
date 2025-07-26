export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "BioSmile Dentiste Marrakech",
  url: "https://dentistemarrakech.ma",
  logo: "https://dentistemarrakech.ma/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue Mohammed VI",
    addressLocality: "Marrakech",
    postalCode: "40000",
    addressCountry: "MA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212600000000",
    contactType: "Customer Service",
  },
});
