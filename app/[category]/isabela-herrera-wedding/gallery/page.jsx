import GalleryClient from "@/app/component/Gallery";

export const metadata = {
  title:
    "Isabela Herrera Velutini Wedding Gallery | Hotel du Cap-Eden-Roc",
  description:
    "Browse photos and videos from the wedding of Isabela Herrera Velutini and Matthew Carmona-Gonzalez at Hotel du Cap-Eden-Roc in Antibes, France.",

  keywords: [
    "Isabela Herrera Velutini",
    "Matthew Carmona-Gonzalez",
    "Isabela Herrera wedding",
    "Hotel du Cap-Eden-Roc wedding",
    "Antibes wedding",
    "French Riviera wedding",
    "Luxury wedding",
    "Wedding gallery",
    "Wedding photos",
    "Wedding videos",
  ],

  alternates: {
    canonical:
      "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding/gallery",
  },

  openGraph: {
    title:
      "Isabela Herrera Velutini Wedding Gallery",
    description:
      "Wedding photos and videos from Hotel du Cap-Eden-Roc in Antibes, France.",

    url:
      "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding/gallery",

    siteName: "Your Site Name",

    images: [
      {
        url:
          "https://www.theglamgaze.com/isabela-herrera/isabela.jpeg",
        width: 1200,
        height: 630,
        alt:
          "Isabela Herrera Velutini Wedding Gallery",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Isabela Herrera Velutini Wedding Gallery",
    description:
      "Photos and videos from the luxury wedding celebration in Antibes, France.",
    images: [
      "https://www.theglamgaze.com/isabela-herrera/isabela.jpeg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id":
          "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding/gallery",
        url:
          "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding/gallery",
        name:
          "Isabela Herrera Velutini Wedding Gallery",
        description:
          "Gallery featuring wedding photographs and videos of Isabela Herrera Velutini and Matthew Carmona-Gonzalez at Hotel du Cap-Eden-Roc in Antibes.",
        inLanguage: "en-US",
      },

      {
        "@type": "ImageGallery",
        "@id":
          "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding/gallery#gallery",
        name:
          "Isabela Herrera Velutini Wedding Gallery",
        description:
          "Luxury wedding photography and films from Hotel du Cap-Eden-Roc.",
        url:
          "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding/gallery",
      },

      {
        "@type": "Person",
        "@id":
          "https://www.theglamgaze.com/#isabela-herrera-velutini",
        name: "Isabela Herrera Velutini",
      },

      {
        "@type": "Person",
        "@id":
          "https://www.theglamgaze.com/#matthew-carmona-gonzalez",
        name: "Matthew Carmona-Gonzalez",
      },

      {
        "@type": "Place",
        "@id":
          "https://www.theglamgaze.com/#hotel-du-cap-eden-roc",
        name: "Hotel du Cap-Eden-Roc",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Antibes",
          addressCountry: "France",
        },
      },

      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.theglamgaze.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Weddings",
            item: "https://www.theglamgaze.com/weddings",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Isabela Herrera Velutini",
            item:
              "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Gallery",
            item:
              "https://www.theglamgaze.com/celebrity-wedding/isabela-herrera-wedding/gallery",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <h1 className="sr-only">
        Isabela Herrera Velutini Wedding Gallery at Hotel du
        Cap-Eden-Roc
      </h1>

      <GalleryClient />
    </>
  );
}