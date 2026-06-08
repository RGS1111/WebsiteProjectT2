import { companyDetails } from "@/config/site-config";
import type { FC } from "react";

/**
 * Builds a complete LocalBusiness JSON-LD schema object from site config.
 * Ensures NAP consistency (Name, Address, Phone) across all pages.
 */
export function getLocalBusinessSchema() {
  const { name, legalName, phone, email, address, workingHours, social } =
    companyDetails;

  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${legalName}#organization`,
    name,
    legalName,
    telephone: phone.display,
    email,
    url: "https://www.eliteroofingnottingham.co.uk",
    logo: "https://www.eliteroofingnottingham.co.uk/images/logo.png",
    image: "https://www.eliteroofingnottingham.co.uk/images/og-default.jpg",
    description:
      "5★ rated roofing company based in Nottingham. Roof repairs, new roof installations, flat roofs, guttering, fascias & soffits, emergency roofing, and chimney repairs. Covering Nottingham, West Bridgford, Beeston, Mansfield, Derby and all NG postcodes.",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postcode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.9548,
      longitude: -1.1581,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
      bestRating: "5",
    },
    sameAs: [social.facebook, social.instagram, social.nextdoor],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.9548,
        longitude: -1.1581,
      },
      geoRadius: "48280", // 30 miles in meters
    },
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repairs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Roof Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Roofs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Guttering & Drainage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fascias & Soffits" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chimney Repairs" } },
      ],
    },
  };
}

/**
 * Builds a BreadcrumbList JSON-LD schema for a given page.
 */
export function getBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
}

/**
 * Builds an FAQPage JSON-LD schema for local SEO.
 */
export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
