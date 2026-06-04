import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="border-t border-black px-6 md:px-16 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Get in Touch
            </p>

            <h2
              className="text-3xl md:text-4xl font-serif font-light mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Editorial Enquiries
            </h2>

            <p className="text-neutral-600 leading-8 text-lg max-w-2xl mb-8">
              Questions about our editorial policy, corrections, or press
              enquiries? Reach our editorial team directly.
            </p>

            <a
              href="mailto:editorial@theglamgaze.com"
              className="inline-flex items-center gap-3 text-black border border-black px-6 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              <FaEnvelope className="text-[#b8972e] text-base flex-shrink-0" />
              editorial@theglamgaze.com
            </a>
          </div>
        </section>
    );
}