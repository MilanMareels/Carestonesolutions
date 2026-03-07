export default function StructuredData() {
  const siteUrl = "https://www.carestonesolutions.be";
  const bedrijfsNaam = process.env.NEXT_PUBLIC_COMPANY_NAME || "Carestonesolutions";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: bedrijfsNaam,
        description: "Specialist in dak- en gevelreiniging, coatings en vastgoedonderhoud in Antwerpen",
        inLanguage: "nl-BE",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: bedrijfsNaam,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo-carestonesolutions.webp`,
          width: 500,
          height: 500,
        },
        sameAs: ["https://www.facebook.com/carestonesolutions", "https://www.instagram.com/carestonesolutions"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+32 494 29 33 34",
          contactType: "customer service",
          areaServed: "BE",
          availableLanguage: "Dutch",
        },
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        name: bedrijfsNaam,
        image: `${siteUrl}/og-image.jpg`,
        telephone: "+32 494 29 33 34",
        email: "info@carestonesolutions.be",
        address: {
          "@type": "PostalAddress",
          streetAddress: "De Vis 85",
          addressLocality: "Brasschaat",
          postalCode: "2930",
          addressCountry: "BE",
        },
        areaServed: [
          { "@type": "City", name: "Antwerpen" },
          { "@type": "City", name: "Merksem" },
          { "@type": "City", name: "Brasschaat" },
          { "@type": "Region", name: "Provincie Antwerpen" },
        ],
        priceRange: "$$",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
