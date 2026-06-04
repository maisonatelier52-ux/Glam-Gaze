import Link from "next/link";
import Head from "next/head";
import Contact from "../component/Contact";

export const metadata = {
  title: "Contact Us | THE GLAM GAZE",
  description:
    "Get in touch with The Glam Gaze team. Reach out for brand partnerships, editorial collaborations, media inquiries, or general feedback. We respond within 24–48 hours.",
   alternates: {
    canonical: "https://www.theglamgaze.com/contact",
  },
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
        url: "https://www.theglamgaze.com/glam_gaze.png",
        width: 1200,
        height: 630,
        alt: "Contact The Glam Gaze — Beauty, Style & Culture",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | The Glam Gaze",
    description:
      "Get in touch for partnerships, editorial collaborations, or media inquiries. The Glam Gaze team responds within 24–48 hours.",
    images: ["https://www.theglamgaze.com/glam_gaze.png"],
    creator: "@omelet81720",
  },
 
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
  return (
    <>
      <main className="min-h-screen bg-white text-black">
        {/* Hero */}
        <section className="border-b border-black px-6 md:px-16 py-20">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4">
              Get In Touch
            </p>

            <h1
              className="text-5xl md:text-7xl font-serif font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Contact Us
            </h1>

            <div className="w-12 h-px bg-[#b8972e] mt-6 mb-8" />

            <p className="text-neutral-600 text-lg leading-8 max-w-3xl">
              The Glam Gaze welcomes feedback, story ideas, corrections,
              partnership inquiries, and media requests. Our editorial team
              reviews all submissions and directs them to the appropriate
              department.
            </p>
          </div>
        </section>

        {/* Contact Sections */}
        <section className="px-6 md:px-16 py-16">
          <div className="max-w-6xl mx-auto grid gap-12">

            {/* General */}
            <div className="border-b border-neutral-200 pb-10">
              <h2
                className="text-3xl font-serif mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                General Inquiries
              </h2>

              <p className="text-neutral-600 leading-7 max-w-3xl">
                For questions about The Glam Gaze, our content, or general
                assistance, please contact our editorial team.
              </p>

            </div>

            {/* Editorial */}
            <div className="border-b border-neutral-200 pb-10">
              <h2
                className="text-3xl font-serif mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Editorial & News Tips
              </h2>

              <p className="text-neutral-600 leading-7 max-w-3xl">
                Have a story idea, press release, interview opportunity, or
                breaking news tip? Our editors welcome pitches related to
                fashion, beauty, luxury lifestyle, celebrity news, entertainment,
                wellness, and culture.
              </p>

              <a
                href="mailto:editorial@theglamgaze.com"
                className="inline-block mt-4 text-[#b8972e] hover:text-black transition-colors"
              >
                editorial@theglamgaze.com
              </a>
            </div>

            {/* Corrections */}
            <div className="border-b border-neutral-200 pb-10">
              <h2
                className="text-3xl font-serif mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Corrections & Updates
              </h2>

              <p className="text-neutral-600 leading-7 max-w-3xl">
                Accuracy is important to us. If you believe any article contains
                an error or requires clarification, please notify our editorial
                staff with supporting information.
              </p>

              <a
                href="mailto:corrections@theglamgaze.com"
                className="inline-block mt-4 text-[#b8972e] hover:text-black transition-colors"
              >
                corrections@theglamgaze.com
              </a>
            </div>

            {/* Advertising */}
            <div className="border-b border-neutral-200 pb-10">
              <h2
                className="text-3xl font-serif mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Advertising & Brand Partnerships
              </h2>

              <p className="text-neutral-600 leading-7 max-w-3xl">
                The Glam Gaze works with brands, agencies, publicists, and
                organizations seeking advertising opportunities, sponsored
                content, brand campaigns, and strategic partnerships.
              </p>

            </div>

            {/* Media */}
            <div className="border-b border-neutral-200 pb-10">
              <h2
                className="text-3xl font-serif mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Media & Press Requests
              </h2>

              <p className="text-neutral-600 leading-7 max-w-3xl">
                Journalists, reporters, and media organizations seeking comments,
                interviews, or information about The Glam Gaze may contact our
                communications team.
              </p>

            </div>

            {/* Careers */}
            <div className="border-b border-neutral-200 pb-10">
              <h2
                className="text-3xl font-serif mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Careers & Contributors
              </h2>

              <p className="text-neutral-600 leading-7 max-w-3xl">
                Interested in contributing to The Glam Gaze? We welcome pitches
                from writers, editors, photographers, videographers, and industry
                experts.
              </p>

            </div>

          </div>
        </section>

        {/* Editorial Commitment */}
        <section className="bg-neutral-50 border-y border-neutral-200 px-6 md:px-16 py-20">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl font-serif mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Editorial Commitment
            </h2>

            <p className="text-neutral-600 leading-8">
              The Glam Gaze is committed to responsible journalism, editorial
              independence, fact-checking, transparency, and accountability. We
              continuously review our content to ensure accuracy and relevance
              for our readers.
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-6 md:px-16 py-20 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4">
            The Glam Gaze
          </p>

          <h2
            className="text-4xl md:text-5xl font-serif font-light"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            We'd Love To Hear From You
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 leading-7">
            Whether you're a reader, contributor, brand partner, or member of
            the press, our team is here to help.
          </p>

          <Link
            href="/our-team"
            className="inline-flex mt-8 border border-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            Meet Our Team
          </Link>
        </section>
        
        <Contact />

      </main>
    </>
  );
}