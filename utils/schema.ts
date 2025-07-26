export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "BioSmile Marrakech",
  url: "https://biosmile.ma",
  logo: "https://biosmile.ma/images/logo.png",
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
