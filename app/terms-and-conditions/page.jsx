import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const SITE_URL = "https://www.theglamgaze.com";
const PAGE_URL = `${SITE_URL}/terms-and-conditions`;
const SITE_NAME = "Glam Gaze";
const PAGE_TITLE = "Terms and Conditions - Glam Gaze";
const PAGE_DESCRIPTION =
  "Read the Terms and Conditions for using GLAM GAZE, including website usage, intellectual property, liability limitations, and user responsibilities.";
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
  "@type": "WebPage",
  name: "Terms and Conditions",
  description:
    "Read the Terms and Conditions governing the use of GLAM GAZE, including intellectual property, user submissions, liability limitations, and website usage rules.",
  url: "https://www.theglamgaze.com/terms-and-conditions",
  publisher: {
    "@type": "Organization",
    name: "GLAM GAZE",
    url: "https://www.theglamgaze.com",
    email: "editorial@theglamgaze.com",
  },
};

export default function TermsAndConditions() {
  const terms = [
    {
      title: "Using Our Website",
      content:
        "GLAM GAZE is provided for personal, non-commercial use unless otherwise stated.",
      items: [
        "Use the website for unlawful purposes",
        "Attempt to disrupt or interfere with website operations",
        "Copy, reproduce, or distribute content without permission",
        "Misrepresent your identity or affiliation",
        "Upload or share harmful, misleading, or offensive material",
      ],
    },
    {
      title: "Intellectual Property",
      content:
        "All content published on GLAM GAZE, including articles, logos, graphics, images, videos, and website design elements, is protected by copyright and intellectual property laws. Unless permission is granted, content may not be copied, republished, modified, distributed, or used for commercial purposes.",
    },
    {
      title: "User Submissions",
      content:
        "If you submit comments, feedback, suggestions, or other content to GLAM GAZE, you grant us the right to review, edit, publish, or remove that content when necessary. Users remain responsible for the content they submit and must ensure it does not violate any laws or third-party rights.",
    },
    {
      title: "Accuracy of Information",
      content:
        "We work hard to provide accurate and up-to-date information. However, GLAM GAZE does not guarantee that all content will always be complete, current, or error-free. Information published on the website should be used at the reader's own discretion.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to external websites for additional information, products, services, or references. We are not responsible for the content, policies, or practices of third-party websites and encourage users to review their terms and privacy policies separately.",
    },
    {
      title: "Advertising and Sponsored Content",
      content:
        "GLAM GAZE may display advertisements, sponsored content, affiliate links, and promotional materials. Sponsored content and paid partnerships will be identified where appropriate. These relationships do not control our editorial decisions or reporting.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by law, GLAM GAZE, its owners, editors, writers, contributors, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the website or reliance on its content.",
    },
    {
      title: "Changes to These Terms",
      content:
        "We may update these Terms and Conditions from time to time as the website evolves. Any updates will be posted on this page, and continued use of the website after changes are published constitutes acceptance of the revised terms.",
    },
    {
      title: "Termination of Access",
      content:
        "We reserve the right to restrict, suspend, or terminate access to the website for users who violate these Terms and Conditions or engage in conduct that may harm the website, its readers, or its operations.",
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
        <section className="px-6 md:px-16 py-24 border-b border-zinc-300">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Terms and Conditions
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
              By accessing and using GLAM GAZE, you agree to follow these
              Terms and Conditions. These terms apply to all visitors,
              readers, contributors, and anyone who uses the website.
            </p>

            <p className="mt-4 text-neutral-600 leading-8 max-w-3xl">
              If you do not agree with these terms, please do not use the
              website.
            </p>
          </div>
        </section>

        {/* TERMS */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-5xl mx-auto">
            {terms.map((section, index) => (
              <div
                key={section.title}
                className={`grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 py-12 ${
                  index !== terms.length - 1
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

                  {section.items && (
                    <ul className="mt-8 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-neutral-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#b8972e]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
              Questions About These Terms?
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              If you have questions regarding these Terms and Conditions,
              please contact our editorial team.
            </p>

            <a
              href="mailto:editorial@theglamgaze.com"
              className="mt-8 inline-flex items-center gap-3 border border-zinc-300 px-6 py-3 hover:bg-black hover:text-white transition-colors"
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

        {/* FINAL NOTE */}
        <section className="border-t border-zinc-300 px-6 md:px-16 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Final Note
            </p>

            <h2
              className="text-4xl md:text-6xl font-serif font-light leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Inform.
              <br />
              Inspire.
              <br />
              Connect.
            </h2>

            <div className="w-12 h-px bg-[#b8972e] mx-auto my-10" />

            <p className="text-lg md:text-xl text-neutral-600 leading-9 max-w-3xl mx-auto">
              GLAM GAZE exists to inform, inspire, and connect readers
              with the latest stories in fashion, beauty, culture,
              lifestyle, and entertainment.
            </p>

            <p className="mt-8 text-neutral-700 leading-8 max-w-3xl mx-auto">
              By using our website, you help us maintain a respectful and
              enjoyable space for everyone.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}