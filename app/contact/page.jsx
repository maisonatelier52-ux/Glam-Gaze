import Link from "next/link";
import { FaEnvelope, FaClock, FaGlobe, FaArrowRight } from "react-icons/fa";

export const metadata = {
  // Core
  title: "Contact Us | THE GLAM GAZE",
  description:
    "Get in touch with The Glam Gaze team. Reach out for brand partnerships, editorial collaborations, media inquiries, or general feedback. We respond within 24–48 hours.",
 
  // Canonical
  alternates: {
    canonical: "https://www.theglamgaze.com/contact",
  },
 
  // Open Graph
  openGraph: {
    title: "Contact Us | The Glam Gaze",
    description:
      "Have a question, collaboration proposal, or media inquiry? Reach out to The Glam Gaze and we'll get back to you within 24–48 hours.",
    url: "https://www.theglamgaze.com/contact",
    siteName: "The Glam Gaze",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.theglamgaze.com/og/contact.jpg", // swap for your actual OG image
        width: 1200,
        height: 630,
        alt: "Contact The Glam Gaze — Beauty, Style & Culture",
      },
    ],
  },
 
  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | The Glam Gaze",
    description:
      "Get in touch for partnerships, editorial collaborations, or media inquiries. The Glam Gaze team responds within 24–48 hours.",
    images: ["https://www.theglamgaze.com/og/contact.jpg"],
    // creator: "@theglamgaze",  // uncomment if you have a Twitter handle
  },
 
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
 
  // App / PWA
  applicationName: "The Glam Gaze",
  keywords: [
    "contact the glam gaze",
    "beauty blog contact",
    "glam gaze partnerships",
    "beauty editorial collaboration",
    "fashion blog inquiry",
    "media inquiry beauty",
    "brand partnership beauty blog",
  ],
  authors: [{ name: "The Glam Gaze", url: "https://www.theglamgaze.com" }],
  creator: "The Glam Gaze",
  publisher: "The Glam Gaze",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
 
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.theglamgaze.com/contact#webpage",
        url: "https://www.theglamgaze.com/contact",
        name: "Contact Us | The Glam Gaze",
        description:
          "Get in touch with The Glam Gaze team for brand partnerships, editorial collaborations, media inquiries, or general feedback.",
        inLanguage: "en-US",
        isPartOf: {
          "@id": "https://www.theglamgaze.com/#website",
        },
        breadcrumb: {
          "@id": "https://www.theglamgaze.com/contact#breadcrumb",
        },
      },
 
      // Website entity
      {
        "@type": "WebSite",
        "@id": "https://www.theglamgaze.com/#website",
        url: "https://www.theglamgaze.com/",
        name: "The Glam Gaze",
        description:
          "The Glam Gaze — Beauty, Style & Culture editorial destination.",
        publisher: {
          "@id": "https://www.theglamgaze.com/#organization",
        },
        inLanguage: "en-US",
      },
 
      // Organization entity
      {
        "@type": "Organization",
        "@id": "https://www.theglamgaze.com/#organization",
        name: "The Glam Gaze",
        url: "https://www.theglamgaze.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.theglamgaze.com/logo.png", // swap for actual logo URL
          width: 200,
          height: 60,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "orbitingomelet@gmail.com",
          contactType: "customer support",
          availableLanguage: "English",
          contactOption: "TollFree",
        },
        sameAs: [
          "https://www.instagram.com/the_glamgaze/",
          "https://x.com/omelet81720"
        ],
      },
 
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.theglamgaze.com/contact#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.theglamgaze.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://www.theglamgaze.com/contact",
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-[#faf8f5] text-gray-900 font-[family-name:var(--font-body)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
        
        :root {
          --brand: #b08d6e;
          --brand-light: #c9a882;
          --brand-dark: #8a6b51;
          --brand-tint: #f7f1ea;
          --brand-tint-2: #ede3d6;
          --ink: #1a1714;
          --ink-muted: #6b5f54;
          --surface: #ffffff;
        }


        .contact-card {
          background: var(--surface);
          border: 1px solid #e8ded4;
          border-radius: 2px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 0;
          background: var(--brand);
          transition: height 0.4s ease;
        }

        .contact-card:hover::before { height: 100%; }
        .contact-card:hover {
          border-color: var(--brand-light);
          box-shadow: 0 8px 40px rgba(176, 141, 110, 0.12);
          transform: translateY(-2px);
        }

        .icon-wrap {
          width: 48px; height: 48px;
          background: var(--brand-tint);
          border: 1px solid var(--brand-tint-2);
          border-radius: 1px;
          display: flex; align-items: center; justify-content: center;
          color: var(--brand);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .contact-card:hover .icon-wrap {
          background: var(--brand);
          color: white;
          border-color: var(--brand);
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(to right, var(--brand), transparent);
          margin: 1.5rem 0;
        }

        .mailto-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--brand);
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: all 0.35s ease;
          border: 1px solid var(--brand);
          position: relative;
          overflow: hidden;
        }

        .mailto-cta::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: rgba(255,255,255,0.12);
          transition: left 0.35s ease;
        }

        .mailto-cta:hover { background: var(--brand-dark); border-color: var(--brand-dark); }
        .mailto-cta:hover::after { left: 100%; }
        .mailto-cta:hover svg { transform: translateX(4px); }
        .mailto-cta svg { transition: transform 0.3s ease; }

        .ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--brand);
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding-bottom: 2px;
          border-bottom: 1px solid var(--brand-tint-2);
          transition: all 0.3s ease;
        }

        .ghost-btn:hover { border-bottom-color: var(--brand); gap: 0.75rem; }

        .section-tag {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 1.25rem;
        }

        .hero-rule {
          width: 60px;
          height: 2px;
          background: var(--brand);
          margin: 1.5rem 0;
        }

        .panel-right {
          background: var(--ink);
          border-radius: 2px;
          padding: 3rem;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .panel-right::before {
          content: '"';
          position: absolute;
          top: -20px; right: 24px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 180px;
          color: rgba(176, 141, 110, 0.12);
          line-height: 1;
          pointer-events: none;
        }

        .collab-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .collab-item:last-child { border-bottom: none; }

        .collab-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: var(--brand);
          line-height: 1;
          min-width: 2rem;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-1 { animation: fadeUp 0.7s ease both; }
        .animate-2 { animation: fadeUp 0.7s 0.12s ease both; }
        .animate-3 { animation: fadeUp 0.7s 0.24s ease both; }
        .animate-4 { animation: fadeUp 0.7s 0.36s ease both; }
      `}</style>

      {/* ── Hero ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fdf8f3 0%, #faf8f5 50%, #f4ede4 100%)",
          borderBottom: "1px solid #e8ded4",
        }}
        className="relative overflow-hidden"
      >
        {/* decorative large letter */}
        <span
          className="display pointer-events-none absolute -right-4 -top-8 select-none text-[220px] font-light leading-none"
          style={{ color: "rgba(176,141,110,0.07)" }}
        >
          G
        </span>

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl animate-1">
            <span className="section-tag">The Glam Gaze · Contact</span>
            <h1
              className="display text-6xl font-light leading-[1.05] tracking-tight text-[#1a1714] sm:text-7xl"
              style={{ fontStyle: "italic" }}
            >
              Get In <span style={{ color: "var(--brand)" }}>Touch</span>
            </h1>
            <div className="hero-rule" />
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--ink-muted)", fontWeight: 300 }}
            >
              Have a question, collaboration proposal, or media inquiry? We'd
              love to hear from you. Reach out to the team at{" "}
              <span style={{ color: "var(--brand)", fontWeight: 500 }}>
                The Glam Gaze
              </span>{" "}
              and we'll be in touch within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* ── Left: Contact Info ── */}
          <div>
            <div className="animate-2">
              <span className="section-tag">Reach Out</span>
              <h2
                className="display text-4xl font-light leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Contact Information
              </h2>
              <p
                className="mt-4 text-sm leading-7"
                style={{ color: "var(--ink-muted)", fontWeight: 300 }}
              >
                Whether you're reaching out about editorial opportunities,
                partnerships, advertising, or general inquiries — our team is
                here to help.
              </p>
            </div>

            <div className="mt-10 space-y-4 animate-3">
              {/* Email */}
              <div className="contact-card flex items-start gap-5">
                <div className="icon-wrap">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <div>
                  <h3
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:orbitingomelet@gmail.com"
                    className="mt-2 inline-block text-base font-light transition hover:underline"
                    style={{ color: "var(--ink)", textDecorationColor: "var(--brand)" }}
                  >
                    orbitingomelet@gmail.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="contact-card flex items-start gap-5">
                <div className="icon-wrap">
                  <FaGlobe className="h-4 w-4" />
                </div>
                <div>
                  <h3
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    Website
                  </h3>
                  <Link
                    href="https://www.theglamgaze.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-base font-light transition hover:underline"
                    style={{ color: "var(--ink)", textDecorationColor: "var(--brand)" }}
                  >
                    www.theglamgaze.com
                  </Link>
                </div>
              </div>

              {/* Response Time */}
              <div className="contact-card flex items-start gap-5">
                <div className="icon-wrap">
                  <FaClock className="h-4 w-4" />
                </div>
                <div>
                  <h3
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    Response Time
                  </h3>
                  <p
                    className="mt-2 text-base font-light"
                    style={{ color: "var(--ink)" }}
                  >
                    Within 24–48 business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-12 animate-4">
              <div className="divider-line" />
              <p
                className="mb-5 text-sm"
                style={{ color: "var(--ink-muted)", fontWeight: 300 }}
              >
                Ready to start a conversation? Drop us an email directly.
              </p>
              <a href="mailto:orbitingomelet@gmail.com" className="mailto-cta">
                <FaEnvelope className="h-3.5 w-3.5" />
                Write to us
                <FaArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* ── Right: Dark Panel — What We Collaborate On ── */}
          <div className="panel-right animate-3">
            <div className="noise-overlay" />
            <div className="relative z-10">
              <span
                className="section-tag"
                style={{ color: "var(--brand-light)" }}
              >
                Work With Us
              </span>
              <h2 className="display text-4xl font-light leading-tight text-white">
                What We{" "}
                <em style={{ color: "var(--brand-light)" }}>Collaborate</em> On
              </h2>
              <p
                className="mt-4 text-sm leading-7"
                style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
              >
                The Glam Gaze works with brands, creators, and publications who
                share our passion for beauty, style, and culture.
              </p>

              <div className="mt-10">
                {[
                  {
                    label: "Brand Partnerships",
                    desc: "Long-form campaigns, product features, and sponsored editorials aligned with our audience.",
                  },
                  {
                    label: "Editorial Contributions",
                    desc: "Guest articles, expert commentary, and creative collaborations with our editorial team.",
                  },
                  {
                    label: "Media & PR Inquiries",
                    desc: "Press mentions, interview requests, and media kit access for journalists and publicists.",
                  },
                  {
                    label: "General Feedback",
                    desc: "Reader stories, corrections, topic suggestions, or anything else on your mind.",
                  },
                ].map((item, i) => (
                  <div className="collab-item" key={i}>
                    <span className="collab-num">0{i + 1}</span>
                    <div>
                      <p
                        className="text-sm font-medium tracking-wide text-white"
                        style={{ marginBottom: "0.25rem" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-light leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 rounded-sm p-5"
                style={{ background: "rgba(176,141,110,0.12)", border: "1px solid rgba(176,141,110,0.25)" }}
              >
                <p
                  className="display text-xl font-light leading-snug"
                  style={{ color: "var(--brand-light)", fontStyle: "italic" }}
                >
                  "Every great collaboration starts with a single message."
                </p>
                <p
                  className="mt-3 text-xs font-light uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  — The Glam Gaze Editorial Team
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="https://www.theglamgaze.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-btn"
                  style={{ color: "var(--brand-light)", borderBottomColor: "rgba(176,141,110,0.3)" }}
                >
                  Explore Our Work
                  <FaArrowRight className="h-2.5 w-2.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Strip ── */}
      <section
        className="border-t"
        style={{ borderColor: "#e8ded4", background: "var(--brand-tint)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left lg:px-8">
          <p
            className="display text-lg font-light italic"
            style={{ color: "var(--ink)" }}
          >
            The Glam Gaze
          </p>
          <p
            className="text-xs font-light uppercase tracking-widest"
            style={{ color: "var(--ink-muted)" }}
          >
            Beauty · Style · Culture
          </p>
          <a
            href="mailto:orbitingomelet@gmail.com"
            className="ghost-btn text-xs"
            style={{ color: "var(--brand)" }}
          >
            orbitingomelet@gmail.com
            <FaArrowRight className="h-2.5 w-2.5" />
          </a>
        </div>
      </section>
    </main>
  );
}