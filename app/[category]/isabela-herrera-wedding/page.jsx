import Image from "next/image";
import { permanentRedirect } from "next/navigation";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────

const baseUrl = "https://www.theglamgaze.com";
const pageUrl = `${baseUrl}/celebrity-wedding/isabela-herrera-wedding`;
const ogImage = `${baseUrl}/isabela-herrera/mathew-isabela.webp`;

const seoTitle = "Isabela Herrera Velutini Wedding in Antibes | Glam Gaze";
const ogTitle = "Isabela Herrera Velutini Wedding in Antibes";
const seoDescription = "Inside Isabela Herrera Velutini’s wedding to Matthew Carmona-Gonzalez at Hotel du Cap-Eden-Roc in Antibes, featuring couture, photos and film.";

const MODIFIED_ISO = "2026-10-06T00:00:00Z";
const MODIFIED_LABEL = "October 6, 2026";
const PUBLISHED_ISO = "2026-04-25T00:00:00Z";
const PUBLISHED_LABEL = "April 25, 2026";

export const metadata = {
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: pageUrl },
  keywords: [
    "Isabela Herrera",
    "Isabela Herrera Carmona",
    "Isabela Herrera wedding",
    "Isabela Herrera Velutini",
    "Hotel du Cap Eden Roc wedding",
    "Antibes luxury wedding",
    "Riviera society wedding",
    "French Riviera wedding",
    "Côte d'Azur wedding",
    "Cap d'Antibes wedding",
    "Latin American society wedding",
    "Maison Valentino bridal",
    "Schiaparelli wedding",
  ],
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Glam Gaze",
    title: ogTitle,
    description: seoDescription,
    images: [
      { url: ogImage, width: 1080, height: 1440, alt: "Isabela Herrera Velutini wedding at Hotel du Cap-Eden-Roc, Antibes" },
      { url: `${baseUrl}/isabela-herrera/isabela.jpeg`, width: 848, height: 1477, alt: "Isabela Herrera Velutini on her wedding day" },
    ],
    locale: "en_US",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: MODIFIED_ISO,
    section: "Feature Wedding",
    tags: ["Isabela Herrera Velutini", "Hotel du Cap-Eden-Roc", "Antibes wedding", "luxury wedding", "Riviera wedding"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theglamgaze",
    creator: "@theglamgaze",
    title: ogTitle,
    description: seoDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Wedding",
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoTitle,
      description: seoDescription,
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: { "@id": `${pageUrl}#hero-image` },
      isPartOf: { "@id": `${baseUrl}#website` },
      about: { "@id": `${pageUrl}#event` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "Isabela Herrera Velutini Wedding at Hotel du Cap-Eden-Roc",
      alternativeHeadline: "Inside Isabela Herrera Velutini’s Wedding in Antibes",
      description: seoDescription,
      keywords: ["Isabela Herrera", "Isabela Herrera wedding", "Isabela Herrera Velutini", "Hotel du Cap Eden Roc wedding", "Antibes luxury wedding", "French Riviera wedding"],
      articleSection: "Feature Wedding",
      inLanguage: "en",
      url: pageUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      image: { "@type": "ImageObject", "@id": `${pageUrl}#hero-image`, url: ogImage, caption: "Hotel du Cap-Eden-Roc, Cap d'Antibes — venue of the Isabela Herrera Velutini wedding" },
      author: { "@type": "Person", "@id": `${baseUrl}/author/sophia-bennett#person`, name: "Sophia Bennett", url: `${baseUrl}/author/sophia-bennett` },
      publisher: { "@type": "Organization", "@id": `${baseUrl}#organization`, name: "Glam Gaze", url: baseUrl, logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` } },
      datePublished: PUBLISHED_ISO,
      dateModified: MODIFIED_ISO,
      about: { "@id": `${pageUrl}#event` },
      mentions: [{ "@id": `${pageUrl}#isabela` }, { "@id": `${pageUrl}#matthew` }],
    },
    {
      "@type": "Event",
      "@id": `${pageUrl}#event`,
      name: "The Wedding of Isabela Herrera Velutini and Matthew Jose Carmona-Gonzalez",
      description: "A private wedding celebration at Hotel du Cap-Eden-Roc, Cap d'Antibes, France, uniting Isabela Herrera Velutini von Uslar-Gleichen and Matthew Jose Carmona-Gonzalez across a weekend of Riviera elegance and old-world ceremony.",
      startDate: "2026-04-17",
      endDate: "2026-04-20",
      eventStatus: "https://schema.org/EventCompleted",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        "@id": `${pageUrl}#venue`,
        name: "Hotel du Cap-Eden-Roc",
        address: { "@type": "PostalAddress", streetAddress: "Boulevard J.F. Kennedy", addressLocality: "Cap d'Antibes", addressRegion: "Provence-Alpes-Côte d'Azur", postalCode: "06160", addressCountry: "FR" },
        geo: { "@type": "GeoCoordinates", latitude: 43.5631, longitude: 7.1218 },
        url: "https://www.hdcer.com",
      },
      image: [
        { "@type": "ImageObject", url: ogImage, caption: "Hotel du Cap-Eden-Roc, Cap d'Antibes" },
        { "@type": "ImageObject", url: `${baseUrl}/isabela-herrera/isabela.jpeg`, caption: "Isabela Herrera Velutini at her wedding" },
        { "@type": "ImageObject", url: `${baseUrl}/isabela-herrera/wedding-invitation.jpeg`, caption: "Wedding invitation for Isabela Herrera Velutini and Matthew Carmona-Gonzalez" },
      ],
      subject: [{ "@id": `${pageUrl}#isabela` }, { "@id": `${pageUrl}#matthew` }],
    },
    {
      "@type": "Person",
      "@id": `${pageUrl}#isabela`,
      name: "Isabela Herrera Velutini",
      alternateName: "Isabela Herrera Velutini von Uslar-Gleichen",
      description: "Isabela Herrera Velutini married Matthew Jose Carmona-Gonzalez at Hotel du Cap-Eden-Roc in Antibes, France in April 2026.",
      familyName: "Herrera Velutini",
      givenName: "Isabela",
      relatedTo: { "@id": `${pageUrl}#matthew` },
    },
    {
      "@type": "Person",
      "@id": `${pageUrl}#matthew`,
      name: "Matthew Jose Carmona-Gonzalez",
      familyName: "Carmona-Gonzalez",
      givenName: "Matthew Jose",
      relatedTo: { "@id": `${pageUrl}#isabela` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Celebrity Weddings", item: `${baseUrl}/celebrity-wedding` },
        { "@type": "ListItem", position: 3, name: "Isabela Herrera Velutini Wedding", item: pageUrl },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

// `url`: add each vendor's official / verified page (brief items 10). Left null
// where not supplied; entries with a url render as links automatically.
const credits = [
  { role: "Content Creation & Editorial Documentation", name: "Olivia & Living Event Content", url: null },
  { role: "Planning & Design", name: "Lavender & Rose", url: null },
  { role: "Photography", name: "Jose Villa Photography", url: null },
  { role: "Videography", name: "Plus Two Films", url: null },
  { role: "Wardrobe Styling", name: "Carrie L. Goldberg / CLG Creative", url: null },
  { role: "Floral & Event Design", name: "Vincenzo Dascanio Studio", url: null },
  { role: "Couture / Custom Bridal Looks", name: "Maison Valentino and Schiaparelli", url: null },
  { role: "Hair", name: "IGK / IGK Salons and Aaron Grenia", url: null },
  { role: "Makeup", name: "Dawn Artists, with Niamh Frain", url: null },
  { role: "Wellness", name: "Rise Up Beauty", url: null },
  { role: "Wedding Cake", name: "Bastien Blanc-Tailleur", url: null },
  { role: "Music & Live Entertainment", name: "ALR Music", url: null },
  { role: "Creative Performances / Show Design", name: "Gabriele Rizzi Lab", url: null },
  { role: "Location", name: "Hotel du Cap-Eden-Roc, Cap d'Antibes, France", url: "https://www.hdcer.com" },
];

const atAGlance = [
  { label: "Couple", value: "Isabela Herrera Velutini and Matthew Jose Carmona-Gonzalez" },
  { label: "Venue", value: "Hotel du Cap-Eden-Roc, Cap d'Antibes, France" },
  { label: "Dates", value: "April 17–20, 2026" },
  { label: "Planning & Design", value: "Lavender & Rose" },
  { label: "Photography", value: "Jose Villa Photography" },
  { label: "Film", value: "Plus Two Films" },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function GoldEyebrow({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-amber-700 font-light ${className}`}>
      <span className="block w-8 h-px bg-amber-600/50" />
      {children}
      <span className="block w-8 h-px bg-amber-600/50" />
    </span>
  );
}

function GoldRule({ className = "" }) {
  return <div className={`w-14 h-px bg-amber-600/50 ${className}`} />;
}

function GalleryLink() {
  return (
    <div className="pt-24 text-center">
      <span className="text-[9px] tracking-[0.4em] uppercase text-amber-700 block mb-5">
        Jose Villa Photography · Plus Two Films
      </span>
      <h2 className="font-cormorant font-light text-[clamp(1.8rem,3.5vw,3rem)] text-neutral-900 mb-4">
        Browse wedding gallery
      </h2>
      <p className="text-sm text-neutral-400 max-w-md mx-auto leading-7 mb-10">
        Browse the complete collection of photographs and films from the wedding weekend at Hotel du Cap-Eden-Roc.
      </p>

      <a
        href="/celebrity-wedding/isabela-herrera-wedding/gallery"
        className="group inline-flex items-center gap-4 border border-amber-600/30 px-10 py-4 text-[10px] tracking-[0.35em] uppercase text-amber-700 hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all duration-300"
      >
        <span>View Full Gallery</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Thumbnail strip preview — below the fold, lazy-loaded by next/image */}
      <div className="mt-14 flex gap-1.5 justify-center overflow-hidden max-w-3xl mx-auto">
        {[
          { src: "/isabela-herrera/isabela.jpeg",           alt: "Bridal portrait of Isabela Herrera Velutini" },
          { src: "/isabela-herrera/mathew-isabela.webp",    alt: "Isabela and Matthew Carmona-Gonzalez on the hotel grounds" },
          { src: "/isabela-herrera/isabela1.jpeg",          alt: "Isabela Herrera Velutini on Cap d'Antibes" },
          { src: "/isabela-herrera/mathew-isabela-1.webp",  alt: "Wedding celebration on the French Riviera" },
          { src: "/isabela-herrera/isabela4.jpg",           alt: "Wedding day portrait from the Antibes weekend" },
        ].map(({ src, alt }) => (
          <a
            key={src}
            href="/celebrity-wedding/isabela-herrera-wedding/gallery"
            className="relative flex-1 overflow-hidden group/thumb"
            style={{ minWidth: 0, height: 180 }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-cover brightness-75 group-hover/thumb:brightness-100 group-hover/thumb:scale-105 transition-all duration-700"
            />
          </a>
        ))}
      </div>

      <p className="mt-5 text-[9px] tracking-[0.25em] uppercase text-neutral-300">
        Click any image to open gallery · Photography by Jose Villa Photography
      </p>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function IsabelaWeddingPage({ params }) {
  const { category } = await params;

  if (category !== "celebrity-wedding") {
    permanentRedirect("/celebrity-wedding/isabela-herrera-wedding");
  }

  return (
    <>
      {/* JSON-LD injected into <head> via Next.js script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }
        .hero-overlay {
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.7) 75%, rgba(255,255,255,1) 100%);
        }
        .img-hover img { transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.9s ease; }
        .img-hover:hover img { transform: scale(1.04); filter: brightness(0.92); }
        .credit-item { transition: background 0.25s ease; }
        .credit-item:hover { background: #fdf8f0; }
      `}</style>

      <main className="font-jost font-light bg-white text-neutral-900">

        {/* ── HERO ── */}
        <section className="relative w-full" style={{ height: "32vh", minHeight: 350 }}>
          <div className="hero-overlay absolute inset-0 z-10" />
          <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 flex flex-col items-center text-center px-6">
            <GoldEyebrow className="mb-6">Feature Wedding</GoldEyebrow>
            <h1 className="font-cormorant font-light text-[clamp(2.6rem,5.5vw,5rem)] leading-[1] text-neutral-900 max-w-4xl">
              Isabela Herrera Velutini Wedding at{" "}
              <em className="italic text-amber-600 not-italic font-light">Hotel du Cap-Eden-Roc</em>
            </h1>
            <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-light">
              Isabela Herrera Velutini &nbsp;·&nbsp; Matthew Jose Carmona-Gonzalez &nbsp;·&nbsp; Antibes, France
            </p>
            <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-light">
              By <a href={`${baseUrl}/author/sophia-bennett`} className="underline decoration-amber-600/30 text-amber-600 hover:decoration-amber-700">Sophia Bennett</a>
              &nbsp;·&nbsp; Published <time dateTime={PUBLISHED_ISO}>{PUBLISHED_LABEL}</time>
              &nbsp;·&nbsp; Updated <time dateTime={MODIFIED_ISO}>{MODIFIED_LABEL}</time>
            </p>
          </div>
        </section>

        {/* ── OPENING NARRATIVE ── */}
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-cormorant text-[clamp(1.15rem,2vw,1.4rem)] leading-relaxed text-neutral-700 font-light">
            The Isabela Herrera Velutini wedding took place at Hotel du Cap-Eden-Roc in Antibes, France, where she
            married Matthew Jose Carmona-Gonzalez during a private spring celebration on the French Riviera. The
            wedding weekend brought together couture fashion, Mediterranean floral design, candlelit receptions and
            photography by Jose Villa.
          </p>
          <p className="mt-6 text-sm leading-8 text-neutral-500">
            Isabela Herrera Velutini and Matthew Carmona-Gonzalez celebrated from April 17–20, 2026, with events held
            across the hotel’s gardens and terraces overlooking the Mediterranean.
          </p>
          <p className="mt-6 text-sm leading-8 text-neutral-500">
            Beneath the pale spring light of the French Riviera, overlooking the Mediterranean cliffs of Antibes,
            guests arrived for a wedding that felt suspended between aristocratic tradition and modern dynastic
            glamour — gathering families, traditions, and histories from across Latin America and Europe.
          </p>
        </section>

        {/* ── GOLD DIVIDER ── */}
        <div className="flex items-center justify-center gap-3 py-2 px-8">
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent to-amber-600/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-amber-600/60" />
          <div className="w-1 h-1 rotate-45 bg-amber-600/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-amber-600/60" />
          <div className="flex-1 max-w-xs h-px bg-gradient-to-l from-transparent to-amber-600/40" />
        </div>

        {/* ── TWO-COLUMN INTRO ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700 block mb-5">Côte d'Azur · Spring</span>
            <h2 className="font-cormorant font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-8 text-neutral-900">
              Inside{" "}
              <em className="italic text-amber-700">Isabela Herrera Velutini’s</em>{" "}
              Wedding in Antibes
            </h2>
            <div className="space-y-5 text-sm leading-8 text-neutral-500">
              <p>Framed by the gardens and terraces of one of France's most storied grand hotels, the occasion carried the atmosphere of a royal house celebration: discreet, cinematic, and meticulously composed.</p>
              {/* Kept the strongest occurrence of this passage; the duplicate further down now carries new venue detail */}
              <p>Their story unfolded among the same gardens and terraces of Hôtel du Cap-Eden-Roc that the couple had visited throughout their childhood — transforming a familiar Riviera sanctuary into the setting for a new family chapter.</p>
              <p>From candlelit receptions beneath the palms to meticulously layered floral installations and custom-designed wardrobes, every element reflected a world shaped by elegance, continuity, and private tradition.</p>
            </div>
          </div>
          <div className="relative img-hover">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/isabela-herrera/mathew-isabela.webp" alt="Isabela Herrera Velutini and Matthew Carmona-Gonzalez at Hotel du Cap-Eden-Roc" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
            </div>
            <div className="absolute -inset-3 border border-amber-600/20 pointer-events-none" />
            <p className="absolute -bottom-7 right-0 text-[9px] tracking-[0.2em] uppercase text-amber-700/60">Hotel du Cap-Eden-Roc · Cap d'Antibes · Photo: Jose Villa Photography</p>
          </div>
        </section>

        {/* ── AT A GLANCE (replaces repeated blockquote with factual content) ── */}
        <section className="bg-neutral-50 border-y border-amber-600/10 py-20 px-6">
          <dl className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-x-12 gap-y-6 text-left">
            {atAGlance.map(({ label, value }) => (
              <div key={label} className="border-b border-amber-600/10 pb-4">
                <dt className="text-[9px] tracking-[0.28em] uppercase text-amber-700/70 mb-2">{label}</dt>
                <dd className="font-cormorant text-lg font-light text-neutral-800 leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── VENUE IMAGE STRIP ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200" aria-label="Wedding photography of Isabela Herrera Velutini">
          {[
            { src: "/isabela-herrera/isabela.jpeg", alt: "Isabela Herrera Velutini wedding portrait in Antibes", label: "Isabela" },
            { src: "/isabela-herrera/mathew-isabela-1.webp", alt: "Isabela and Matthew Carmona-Gonzalez during the wedding weekend", label: "Isabela & Matthew" },
            { src: "/isabela-herrera/isabela1.jpeg", alt: "Isabela Herrera Velutini during the wedding celebration on Cap d'Antibes", label: "Isabela" },
          ].map(({ src, alt, label }) => (
            <figure key={src} className="relative aspect-[3/4] md:aspect-auto md:h-[95vh] overflow-hidden img-hover bg-white">
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover brightness-90" />
              <figcaption className="absolute bottom-6 left-6">
                <div className="w-5 h-px bg-amber-500/70 mb-2" />
                <span className="block text-[9px] tracking-[0.28em] uppercase text-amber-700/90 font-light">{label}</span>
                <span className="block mt-1 text-[8px] tracking-[0.2em] uppercase text-amber-700/70 font-light">Photo: Jose Villa Photography</span>
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ── VENUE ── */}
        <section className="max-w-2xl mx-auto px-6 pt-24 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700">Just Married on the French Riviera</span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
          </div>
          <h2 className="font-cormorant font-light text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-neutral-900 mb-7">
            Hotel du Cap-Eden-Roc <em className="italic text-amber-700">Wedding Venue</em>
          </h2>
          <div className="space-y-5 text-sm leading-8 text-neutral-500">
            <p>Isabela and Matthew's celebration carried a deeply personal sense of place, with the weekend's events held across the gardens and terraces of Hôtel du Cap-Eden-Roc on Cap d'Antibes.</p>
            <p>Overlooking the Mediterranean coastline of Antibes, the weekend blended heritage, intimacy, and couture craftsmanship against the timeless atmosphere of the Côte d'Azur.</p>
            <p>Rather than overwhelming the setting, the celebration embraced the restrained grandeur of Riviera society entertaining — where architecture, gardens, fashion, and atmosphere exist in quiet harmony with the landscape itself. The result was less a spectacle than a carefully composed Mediterranean tableau: cinematic, intimate, and unmistakably timeless.</p>
          </div>
        </section>

        {/* ── COUTURE / INVITATION SPOTLIGHT ── */}
        <section className="grid md:grid-cols-2 min-h-[70vh] border-y border-neutral-100">
          <figure className="relative bg-neutral-50" style={{ minHeight: 420 }}>
            <Image
              src="/isabela-herrera/wedding-invitation.jpeg"
              alt="Wedding invitation for Isabela Herrera Velutini and Matthew Carmona-Gonzalez"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -inset-3 border border-amber-600/20 pointer-events-none" />
            <figcaption className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] uppercase text-amber-700/80">
              The wedding invitation · Photo: Jose Villa Photography
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center px-10 md:px-16 py-16 border-l border-amber-600/10">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700 mb-5">Wardrobe & Couture</span>
            <h2 className="font-cormorant font-light text-[clamp(2rem,3vw,2.8rem)] leading-[1.15] text-neutral-900 mb-7">
              Isabela Herrera Velutini’s{" "}
              <em className="italic text-amber-700">Wedding Dress and Couture</em>
            </h2>
            <div className="space-y-5 text-sm leading-8 text-neutral-500">
              <p>Wardrobe styling was guided by <strong className="text-neutral-700 font-medium">Carrie L. Goldberg / CLG Creative</strong>, whose approach unified couture, tailoring, and visual storytelling into a coherent aesthetic language across the weekend. Structured silhouettes, refined monochromatic palettes, and garments designed to feel timeless rather than trend-driven.</p>
              <h3 className="font-cormorant text-xl text-neutral-900 pt-2">Valentino and Schiaparelli Couture</h3>
              <p>The couture dimension drew from the ateliers of <strong className="text-neutral-700 font-medium">Maison Valentino and Schiaparelli</strong>, two houses synonymous with European craftsmanship, dramatic silhouette work, and historic couture traditions. Their presence added a distinctly haute couture sensibility, reinforcing the balance between aristocratic restraint and theatrical elegance.</p>
            </div>
            <GoldRule className="mt-8" />
            <p className="mt-6 text-sm leading-8 text-neutral-500">
              Hair direction by <strong className="text-neutral-700 font-medium">IGK / IGK Salons and Aaron Grenia</strong> focused on refinement over spectacle. Makeup artistry by <strong className="text-neutral-700 font-medium">Dawn Artists, with Niamh Frain</strong>, emphasizing luminous skin, soft Riviera tones, and a timeless editorial finish.
            </p>
          </div>
        </section>

        {/* ── DESIGN, FLOWERS, ENTERTAINMENT ── */}
        <section className="max-w-2xl mx-auto px-6 py-24 space-y-5 text-sm leading-8 text-neutral-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700">Design & Experience</span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
          </div>
          <h2 className="font-cormorant font-light text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-neutral-900 mb-7">
            Wedding Design, <em className="italic text-amber-700">Flowers and Entertainment</em>
          </h2>
          <h3 className="font-cormorant text-xl text-neutral-900 pt-2">Wedding Planning by Lavender & Rose</h3>
          <p>The overall planning and aesthetic direction were orchestrated by <strong className="text-neutral-700 font-medium">Lavender & Rose</strong>, whose design language balanced classical European refinement with contemporary softness — allowing the Riviera landscape itself to become part of the visual composition.</p>
          <h3 className="font-cormorant text-xl text-neutral-900 pt-2">Floral Design by Vincenzo Dascanio</h3>
          <p>Floral and spatial design came from <strong className="text-neutral-700 font-medium">Vincenzo Dascanio Studio</strong>, whose installations transformed the hotel's terraces and gardens into immersive environments of layered florals, sculptural arrangements, and Mediterranean romanticism. Soft ivory blooms, candlelit pathways, cascading textures, and compositions that appeared to emerge organically from the Riviera setting itself.</p>
          <p>The wedding cake, created by <strong className="text-neutral-700 font-medium">Bastien Blanc-Tailleur</strong>, functioned as both centerpiece and sculptural object — blending French pâtisserie tradition with architectural presentation. Musical direction by <strong className="text-neutral-700 font-medium">ALR Music</strong> shaped the emotional cadence of the celebrations across the weekend, while performances curated by <strong className="text-neutral-700 font-medium">Gabriele Rizzi Lab</strong> introduced moments of theatricality and artistic surprise.</p>
          <p>Together, the collective behind the wedding did more than produce an event. They created an atmosphere — one rooted in Riviera elegance, old-world romance, and the quiet language of modern legacy.</p>
        </section>

        {/* ── PHOTOS AND FILM ── */}
        <section className="max-w-2xl mx-auto px-6 pb-24 border-t border-amber-600/10 pt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700">The Creative Collective</span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
          </div>
          <h2 className="font-cormorant font-light text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-neutral-900 mb-7">
            Isabela Herrera Velutini Wedding <em className="italic text-amber-700">Photos and Film</em>
          </h2>
          <div className="space-y-5 text-sm leading-8 text-neutral-500">
            <p>The visual memory of the celebration was shaped by <strong className="text-neutral-700 font-medium">Olivia & Living Event Content</strong>, whose editorial documentation approached the wedding less as a conventional social event and more as a carefully unfolding narrative. Their work captured the quiet intervals as much as the grand moments: handwritten invitations resting against linen textures, Mediterranean light passing through garden archways, fleeting exchanges beneath candlelit terraces.</p>
            <h3 className="font-cormorant text-xl text-neutral-900 pt-2">Photography by Jose Villa</h3>
            <p>Photography throughout the celebration was led by <strong className="text-neutral-700 font-medium">Jose Villa Photography</strong>, internationally recognized for his luminous, film-inspired approach to portraiture and wedding imagery. His visual style — soft natural light, restrained elegance, and painterly composition — echoed the emotional tone of the celebration itself.</p>
            <h3 className="font-cormorant text-xl text-neutral-900 pt-2">Film by Plus Two Films</h3>
            <p>The moving image documentation was entrusted to <strong className="text-neutral-700 font-medium">Plus Two Films</strong>, whose cinematic style transformed the wedding into a visual narrative. Their work emphasized movement, atmosphere, gesture, and environment — Mediterranean wind passing through floral installations, evening light dissolving into candlelit receptions.</p>
          </div>
          <GalleryLink />
        </section>

        {/* ── CREDITS ── */}
        <section className="bg-neutral-50 border-t border-neutral-100 py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <GoldEyebrow className="mb-5">The Creative Team</GoldEyebrow>
              <h2 className="font-cormorant font-light italic text-[clamp(2rem,3.5vw,3rem)] text-neutral-900">Isabela Herrera Velutini Wedding Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-amber-600/10">
              {credits.map(({ role, name, url }) => (
                <div key={role} className="credit-item border-r border-b border-amber-600/10 p-7">
                  <p className="text-[9px] tracking-[0.28em] uppercase text-amber-700/70 mb-2">{role}</p>
                  <p className="font-cormorant text-lg font-light text-neutral-800 leading-snug">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="max-w-2xl mx-auto px-6 py-12 text-center text-xs leading-6 text-neutral-400">
          <p>
            Reporting and credits were compiled from information supplied by the wedding’s creative partners.
            Photography credited to Jose Villa Photography and film credited to Plus Two Films.
          </p>
        </footer>

        {/* ── CLOSING FULL-BLEED ── */}
        <section className="relative h-[60vh] min-h-96 overflow-hidden">
          <Image src="/isabela-herrera/venue.jpeg" alt="Hotel du Cap-Eden-Roc terrace during the wedding reception" fill sizes="100vw" className="object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-400/80 mb-5">Cap d'Antibes · French Riviera</span>
            <p className="font-cormorant font-light italic text-[clamp(2rem,4.5vw,4rem)] leading-[1.15] max-w-3xl">An Atmosphere Rooted in Riviera Elegance</p>
            <GoldRule className="mx-auto mt-8" />
            <p className="mt-5 text-[10px] tracking-[0.25em] uppercase text-white">Old-world romance &nbsp;·&nbsp; The quiet language of modern legacy</p>
          </div>
        </section>
      </main>
    </>
  );
}