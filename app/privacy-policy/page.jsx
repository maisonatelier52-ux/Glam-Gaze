// SEO Metadata
export async function generateMetadata() {
  return {
    title: "Privacy Policy",
    description:
      "Learn how we collect, use, and protect your personal information when you use our website.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://yourdomain.com/privacy",
    description:
      "Details about how user data is collected, used, and protected on this website.",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Privacy Policy
      </h1>

      <p className="mb-4 text-gray-600">
        Last updated: April 2026
      </p>

      <div className="space-y-6 text-gray-800 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and browsing data when you interact with our website,
            subscribe to newsletters, or contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Information
          </h2>
          <p>
            We use collected information to improve our content, respond
            to inquiries, send newsletters, and enhance user experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Cookies & Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to analyze traffic,
            personalize content, and improve functionality. You can
            control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Third-Party Services
          </h2>
          <p>
            We may use third-party services (such as analytics or
            advertising providers) that collect and process data on our
            behalf. These services have their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Data Protection
          </h2>
          <p>
            We take reasonable measures to protect your personal
            information, but no method of transmission over the internet
            is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Your Rights
          </h2>
          <p>
            Depending on your location, you may have rights to access,
            update, or delete your personal data. You can contact us to
            exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            7. Children's Privacy
          </h2>
          <p>
            Our website is not intended for children under 13. We do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time.
            Continued use of the website means you accept the updated
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            9. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, contact us
            at: <span className="font-medium">your@email.com</span>
          </p>
        </section>

      </div>
    </div>
  );
}