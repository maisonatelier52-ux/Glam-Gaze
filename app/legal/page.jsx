import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const SITE_URL = "https://www.theglamgaze.com";
const PAGE_URL = `${SITE_URL}/legal-information`;
const SITE_NAME = "Glam Gaze";
const PAGE_TITLE = "Legal Information - Glam Gaze";
const PAGE_DESCRIPTION =
  "Read GLAM GAZE's legal information regarding content ownership, editorial content, external links, affiliate disclosures, liability limitations, and policy updates.";
const IMAGE = `${SITE_URL}/glam_gaze.png`;

export async function generateMetadata() {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: PAGE_URL,
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: IMAGE,
          width: 1200,
          height: 630,
          alt: PAGE_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@theglamgaze",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [IMAGE],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Legal Information",
  description:
    "Learn about GLAM GAZE's legal information, content ownership, editorial content, affiliate disclosures, liability limitations, and website policies.",
  url: "https://www.theglamgaze.com/legal-information",
  publisher: {
    "@type": "Organization",
    name: "GLAM GAZE",
    url: "https://www.theglamgaze.com",
    email: "editorial@theglamgaze.com",
  },
};

export default function LegalInformation() {
  const sections = [
    {
      title: "Content Ownership",
      content:
        "Unless otherwise stated, all articles, images, graphics, logos, and other content published on GLAM GAZE are protected by copyright and intellectual property laws. Content may not be copied, republished, distributed, or reproduced without prior written permission, except where permitted by applicable law.",
    },
    {
      title: "Editorial Content",
      content:
        "The information published on GLAM GAZE is provided for general informational and entertainment purposes. While we strive for accuracy, we cannot guarantee that all information will always be complete, current, or free from error. Readers should use their own judgment when relying on information published on the website.",
    },
    {
      title: "External Links",
      content:
        "Some articles may include links to third-party websites for additional information or reference. GLAM GAZE does not control or endorse the content, policies, or practices of external websites and is not responsible for their content or availability.",
    },
    {
      title: "Opinions and Views",
      content:
        "Opinions expressed in articles, interviews, or guest contributions belong to the respective authors and do not necessarily reflect the views of GLAM GAZE as a whole.",
    },
    {
      title: "Affiliate Disclosure",
      content:
        "Some content may contain affiliate links. If readers make purchases through these links, GLAM GAZE may earn a commission at no additional cost to the reader. These relationships do not influence our editorial decisions or coverage.",
    },
    {
      title: "Limitation of Liability",
      content:
        "GLAM GAZE, its writers, editors, contributors, and affiliates shall not be held liable for any loss, damage, or inconvenience resulting from the use of information published on this website. Use of the website and its content is at the reader's own discretion.",
    },
    {
      title: "Changes to Policies",
      content:
        "We may update our policies, guidelines, and legal information from time to time. Any updates will be reflected on this page. Continued use of the website after changes are published constitutes acceptance of those changes.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Legal Information
            </p>

            <h1
              className="text-5xl md:text-7xl font-serif font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Welcome To
              <br />
              GLAM GAZE
            </h1>

            <div className="mt-8 w-12 h-px bg-[#b8972e]" />

            <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl">
              By accessing and using GLAM GAZE, you agree to use the website
              in a lawful and respectful manner. These guidelines help
              protect our readers, contributors, and the content published
              across our platform.
            </p>
          </div>
        </section>

        {/* LEGAL SECTIONS */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 py-12 ${
                  index !== sections.length - 1
                    ? "border-b border-neutral-200"
                    : ""
                }`}
              >
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-serif"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {section.title}
                  </h2>
                </div>

                <div>
                  <p className="text-neutral-600 leading-8 text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-neutral-200 px-6 md:px-16 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Contact Us
            </p>

            <h2
              className="text-3xl md:text-5xl font-serif font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Questions About Our Policies?
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              If you have questions regarding this Legal Information page
              or any of our policies, please contact our editorial team.
            </p>

            <a
              href="mailto:editorial@theglamgaze.com"
              className="mt-8 inline-flex items-center gap-3 border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
            >
              <FaEnvelope />
              editorial@theglamgaze.com
            </a>

            <div className="mt-6">
              <Link
                href="/contact"
                className="text-sm tracking-[0.2em] uppercase text-[#b8972e] hover:text-black transition-colors"
              >
                Visit Contact Page
              </Link>
            </div>
          </div>
        </section>

        {/* COMMITMENT */}
        <section className="border-t border-black px-6 md:px-16 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Our Commitment
            </p>

            <h2
              className="text-4xl md:text-6xl font-serif font-light leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Transparency,
              <br />
              Responsibility &
              <br />
              Respect
            </h2>

            <div className="w-12 h-px bg-[#b8972e] mx-auto my-10" />

            <p className="text-lg md:text-xl text-neutral-600 leading-9 max-w-3xl mx-auto">
              GLAM GAZE is committed to maintaining a transparent,
              responsible, and respectful digital environment for readers,
              contributors, and partners.
            </p>

            <p className="mt-8 text-neutral-700 leading-8 max-w-3xl mx-auto">
              We believe trust is built through openness, accountability,
              and clear communication.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
