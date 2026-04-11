export async function generateMetadata() {
  return {
    title: "Terms of Use",
    description:
      "Read the Terms of Use for accessing and using our website, including content usage, responsibilities, and legal terms.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TermsOfUse() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use",
    url: "https://yourdomain.com/terms",
    description:
      "Terms and conditions governing the use of this website and its content.",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Terms of Use
      </h1>

      <p className="mb-4 text-gray-600">
        Last updated: April 2026
      </p>

      <div className="space-y-6 text-gray-800 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using this website, you agree to comply with
            and be bound by these Terms of Use. If you do not agree,
            please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Use of Content
          </h2>
          <p>
            All content, including articles, images, and graphics, is
            provided for informational purposes only. You may not copy,
            reproduce, or distribute content without prior written
            permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. User Responsibilities
          </h2>
          <p>
            You agree to use this website lawfully and not engage in any
            activity that could harm, disrupt, or interfere with the
            website or its users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are
            not responsible for the content or practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Disclaimer
          </h2>
          <p>
            The information on this website is provided “as is” without
            warranties of any kind. We do not guarantee accuracy,
            completeness, or reliability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            We shall not be liable for any damages arising from the use
            or inability to use this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            7. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these Terms at any time.
            Continued use of the website means you accept the updated
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact
            us at: <span className="font-medium">your@email.com</span>
          </p>
        </section>

      </div>
    </div>
  );
}