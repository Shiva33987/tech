export const siteConfig = {
  name: "VRPI TECH SOLUTIONS",
  legalName: "VRPI Tech Solutions Private Limited",
  description:
    "We turn complexity into working software. Full-stack digital engineering partner building intelligent digital products, scalable software platforms, and cloud infrastructure.",
  url: "https://vrpisc.com",
  ogImage: "https://vrpisc.com/og.png",
  twitterHandle: "@vrpitech",
  foundingYear: 2021,
  contact: {
    email: "info@vrpigroup.co.in",
    sales: "info@vrpigroup.co.in",
    address: "2/27/163, Gandhi Nagar Street, Near Jammi Chettu, Wanaparthy, Telangana 509103, India",
  },
  links: {
    github: "https://github.com/vrpi-tech",
    linkedin: "https://linkedin.com/company/vrpi-tech-solutions",
    twitter: "https://twitter.com/vrpitech",
  },
};

export function constructMetadata({
  title = "VRPI TECH SOLUTIONS — Engineering the Digital Future",
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
} = {}) {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: "%s | VRPI TECH SOLUTIONS",
    },
    description,
    keywords: [
      "Digital Engineering",
      "Enterprise Software",
      "AI & Automation",
      "Cloud Infrastructure",
      "Full-stack Web Development",
      "Mobile Applications",
      "Scalable Systems",
      "Next.js Engineering",
    ],
    authors: [{ name: "VRPI Tech Solutions", url: siteConfig.url }],
    creator: "VRPI Tech Solutions",
    publisher: "VRPI Tech Solutions",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "VRPI TECH SOLUTIONS - Engineering the Digital Future",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: "2021",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.twitter],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "technical support & sales",
      email: siteConfig.contact.email,
      availableLanguage: ["English"],
    },
  };
}
