import Image from "next/image";

const credits = [
  { role: "Content Creation & Editorial Documentation", name: "Olivia & Living Event Content" },
  { role: "Planning & Design", name: "Lavender & Rose" },
  { role: "Photography", name: "Jose Villa Photography" },
  { role: "Videography", name: "Plus Two Films" },
  { role: "Wardrobe Styling", name: "Carrie L. Goldberg / CLG Creative" },
  { role: "Floral & Event Design", name: "Vincenzo Dascanio Studio" },
  { role: "Couture / Custom Bridal Looks", name: "Maison Valentino and Schiaparelli" },
  { role: "Hair", name: "IGK / IGK Salons and Aaron Grenia" },
  { role: "Makeup", name: "Dawn Artists, with Niamh Frain" },
  { role: "Wellness", name: "Rise Up Beauty" },
  { role: "Wedding Cake", name: "Bastien Blanc-Tailleur" },
  { role: "Music & Live Entertainment", name: "ALR Music" },
  { role: "Creative Performances / Show Design", name: "Gabriele Rizzi Lab" },
  { role: "Location", name: "Hotel du Cap-Eden-Roc, Cap d'Antibes, France" },
];

function GoldEyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-amber-700 font-light ${className}`}
    >
      <span className="block w-8 h-px bg-amber-600/50" />
      {children}
      <span className="block w-8 h-px bg-amber-600/50" />
    </span>
  );
}

function GoldRule({ className = "" }) {
  return <div className={`w-14 h-px bg-amber-600/50 ${className}`} />;
}

export default function IsabelaWeddingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
        .hero-overlay {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0) 40%,
            rgba(255,255,255,0.7) 75%,
            rgba(255,255,255,1) 100%
          );
        }
        .img-hover img {
          transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.9s ease;
        }
        .img-hover:hover img {
          transform: scale(1.04);
          filter: brightness(0.92);
        }
        .credit-item {
          transition: background 0.25s ease;
        }
        .credit-item:hover { background: #fdf8f0; }
      `}</style>

      <main className="font-jost font-light bg-white text-neutral-900">

        {/* ── HERO ── */}
        <section className="relative w-full" style={{ height: "32vh", minHeight: 350 }}>
          <div className="hero-overlay absolute inset-0 z-10" />
          <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 flex flex-col items-center text-center px-6">
            <GoldEyebrow className="mb-6">Feature Wedding</GoldEyebrow>
            <h1 className="font-cormorant font-light text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.08] text-neutral-900 max-w-4xl">
              The Wedding of a{" "}
              <em className="italic text-amber-600 not-italic font-light">Latin American Princess</em>
            </h1>
            <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-light">
              Isabela Herrera Velutini &nbsp;·&nbsp; Matthew Jose Carmona-Gonzalez &nbsp;·&nbsp; Antibes, France
            </p>
          </div>
        </section>

        {/* ── OPENING NARRATIVE ── */}
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-cormorant text-[clamp(1.15rem,2vw,1.4rem)] leading-relaxed text-neutral-700 font-light">
            Beneath the pale spring light of the French Riviera, overlooking the Mediterranean cliffs of Antibes,
            guests arrived at Hotel du Cap-Eden-Roc for a wedding that felt suspended between aristocratic tradition
            and modern dynastic glamour.
          </p>
          <p className="mt-6 text-sm leading-8 text-neutral-500">
            The marriage of Isabela Herrera Velutini von Uslar-Gleichen and Matthew Jose Carmona-Gonzalez unfolded
            across a weekend of private celebrations, Riviera elegance, and old-world ceremony — gathering families,
            traditions, and histories from across Latin America and Europe.
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
          {/* Text */}
          <div>
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700 block mb-5">
              Côte d'Azur · Spring
            </span>
            <h2 className="font-cormorant font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-8 text-neutral-900">
              Inside the Wedding of{" "}
              <em className="italic text-amber-700">Isabela Herrera Velutini</em>{" "}
              in Antibes
            </h2>
            <div className="space-y-5 text-sm leading-8 text-neutral-500">
              <p>
                Framed by the gardens and terraces of one of France's most storied grand hotels, the occasion carried
                the atmosphere of a royal house celebration: discreet, cinematic, and meticulously composed.
              </p>
              <p>
                Their story unfolded among the same gardens and terraces of Hôtel du Cap-Eden-Roc that the couple had
                visited throughout their childhood — transforming a familiar Riviera sanctuary into the setting for a
                new family chapter.
              </p>
              <p>
                From candlelit receptions beneath the palms to meticulously layered floral installations and
                custom-designed wardrobes, every element reflected a world shaped by elegance, continuity, and private
                tradition.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative img-hover">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/isabela-herrera/venue.jpeg"
                alt="Isabela at Hotel du Cap-Eden-Roc"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -inset-3 border border-amber-600/20 pointer-events-none" />
            <p className="absolute -bottom-7 right-0 text-[9px] tracking-[0.2em] uppercase text-amber-700/60">
              Hotel du Cap-Eden-Roc · Cap d'Antibes
            </p>
          </div>
        </section>

        {/* ── PULL QUOTE ── */}
        <section className="bg-neutral-50 border-y border-amber-600/10 py-24 px-6 text-center">
          <p className="text-amber-700/40 font-cormorant text-6xl leading-none mb-4">"</p>
          <blockquote className="font-cormorant font-light italic text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.5] text-neutral-800 max-w-4xl mx-auto">
            The occasion carried the atmosphere of a royal house celebration —
            discreet, cinematic, and{" "}
            <span className="text-amber-700 not-italic">meticulously composed.</span>
          </blockquote>
          <GoldRule className="mx-auto mt-8" />
        </section>

        {/* ── VENUE IMAGE STRIP ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {[
                { src: "/isabela-herrera/isabela.jpeg"},
                { src: "/isabela-herrera/isabela1.jpeg"},
                { src: "/isabela-herrera/isabela2.jpeg"}
            ].map(({ src }) => (
            <div key={src} className="relative aspect-[3/4] md:aspect-auto md:h-[95vh] overflow-hidden img-hover bg-white">
              <Image src={src} alt="Isabela Herrera" fill className="object-cover brightness-90" />
              <div className="absolute bottom-6 left-6">
                <div className="w-5 h-px bg-amber-500/70 mb-2" />
                <span className="text-[9px] tracking-[0.28em] uppercase text-amber-700/90 font-light">Isabela Herrera</span>
              </div>
            </div>
          ))}
        </section>

        {/* ── EDITORIAL BODY ── */}
        <section className="max-w-2xl mx-auto px-6 py-24 space-y-14">

          {/* Just Married */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700">
                Just Married on the French Riviera
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
            </div>
            <h3 className="font-cormorant font-light text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-neutral-900 mb-7">
              A <em className="italic text-amber-700">Riviera Sanctuary</em> Made New
            </h3>
            <div className="space-y-5 text-sm leading-8 text-neutral-500">
              <p>
                Isabela and Matthew's celebration carried a deeply personal sense of place. Their story unfolded
                among the same gardens and terraces of Hôtel du Cap-Eden-Roc that the couple had visited throughout
                their childhood — transforming a familiar Riviera sanctuary into the setting for a new family chapter.
              </p>
              <p>
                Overlooking the Mediterranean coastline of Antibes, the weekend blended heritage, intimacy, and
                couture craftsmanship against the timeless atmosphere of the Côte d'Azur.
              </p>
              <p>
                Rather than overwhelming the setting, the celebration embraced the restrained grandeur of Riviera
                society entertaining — where architecture, gardens, fashion, and atmosphere exist in quiet harmony
                with the landscape itself. The result was less a spectacle than a carefully composed Mediterranean
                tableau: cinematic, intimate, and unmistakably timeless.
              </p>
            </div>
          </div>

          {/* Creative team intro */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700">
                The Creative Collective
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
            </div>
            <h3 className="font-cormorant font-light text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-neutral-900 mb-7">
              A Weekend Shaped by <em className="italic text-amber-700">World-Class Artistry</em>
            </h3>
            <div className="space-y-5 text-sm leading-8 text-neutral-500">
              <p>
                The visual memory of the celebration was shaped by{" "}
                <strong className="text-neutral-700 font-medium">Olivia & Living Event Content</strong>, whose
                editorial documentation approached the wedding less as a conventional social event and more as a
                carefully unfolding narrative. Their work captured the quiet intervals as much as the grand moments:
                handwritten invitations resting against linen textures, Mediterranean light passing through garden
                archways, fleeting exchanges beneath candlelit terraces.
              </p>
              <p>
                The overall planning and aesthetic direction were orchestrated by{" "}
                <strong className="text-neutral-700 font-medium">Lavender & Rose</strong>, whose design language
                balanced classical European refinement with contemporary softness — allowing the Riviera landscape
                itself to become part of the visual composition.
              </p>
              <p>
                Photography throughout the celebration was led by{" "}
                <strong className="text-neutral-700 font-medium">Jose Villa Photography</strong>, internationally
                recognized for his luminous, film-inspired approach to portraiture and wedding imagery. His visual
                style — soft natural light, restrained elegance, and painterly composition — echoed the emotional
                tone of the celebration itself.
              </p>
              <p>
                The moving image documentation was entrusted to{" "}
                <strong className="text-neutral-700 font-medium">Plus Two Films</strong>, whose cinematic style
                transformed the wedding into a visual narrative. Their work emphasized movement, atmosphere, gesture,
                and environment — Mediterranean wind passing through floral installations, evening light dissolving
                into candlelit receptions.
              </p>
            </div>
          </div>
        </section>

        {/* ── INVITATION SPOTLIGHT ── */}
        <section className="grid md:grid-cols-2 min-h-[70vh] border-y border-neutral-100 p-3">
          {/* Image */}
          <div className="relative bg-neutral-50" style={{ minHeight: 420 }}>
            <Image
              src="/isabela-herrera/wedding-invitation.jpeg"
              alt="Wedding invitation on linen"
              fill
            />
            <div className="absolute -inset-3 border border-amber-600/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-16 border-l border-amber-600/10">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700 mb-5">
              Wardrobe & Couture
            </span>
            <h3 className="font-cormorant font-light text-[clamp(2rem,3vw,2.8rem)] leading-[1.15] text-neutral-900 mb-7">
              Old-World Sensibility.{" "}
              <em className="italic text-amber-700">Haute Couture</em> Presence.
            </h3>
            <div className="space-y-5 text-sm leading-8 text-neutral-500">
              <p>
                Wardrobe styling was guided by{" "}
                <strong className="text-neutral-700 font-medium">Carrie L. Goldberg / CLG Creative</strong>, whose
                approach unified couture, tailoring, and visual storytelling into a coherent aesthetic language
                across the weekend. Structured silhouettes, refined monochromatic palettes, and garments designed
                to feel timeless rather than trend-driven.
              </p>
              <p>
                The couture dimension drew from the ateliers of{" "}
                <strong className="text-neutral-700 font-medium">Maison Valentino and Schiaparelli</strong>, two
                houses synonymous with European craftsmanship, dramatic silhouette work, and historic couture
                traditions. Their presence added a distinctly haute couture sensibility, reinforcing the balance
                between aristocratic restraint and theatrical elegance.
              </p>
            </div>
            <GoldRule className="mt-8" />
            <p className="mt-6 text-sm leading-8 text-neutral-500">
              Hair direction by{" "}
              <strong className="text-neutral-700 font-medium">IGK / IGK Salons and Aaron Grenia</strong> focused
              on refinement over spectacle. Makeup artistry by{" "}
              <strong className="text-neutral-700 font-medium">Dawn Artists, with Niamh Frain</strong>, emphasizing
              luminous skin, soft Riviera tones, and a timeless editorial finish.
            </p>
          </div>
        </section>

        {/* ── FINAL NARRATIVE ── */}
        <section className="max-w-2xl mx-auto px-6 py-24 space-y-5 text-sm leading-8 text-neutral-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-700">Design & Experience</span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
          </div>
          <p>
            Floral and spatial design came from{" "}
            <strong className="text-neutral-700 font-medium">Vincenzo Dascanio Studio</strong>, whose installations
            transformed the hotel's terraces and gardens into immersive environments of layered florals, sculptural
            arrangements, and Mediterranean romanticism. Soft ivory blooms, candlelit pathways, cascading textures,
            and compositions that appeared to emerge organically from the Riviera setting itself.
          </p>
          <p>
            The wedding cake, created by{" "}
            <strong className="text-neutral-700 font-medium">Bastien Blanc-Tailleur</strong>, functioned as both
            centerpiece and sculptural object — blending French pâtisserie tradition with architectural
            presentation. Musical direction by{" "}
            <strong className="text-neutral-700 font-medium">ALR Music</strong> shaped the emotional cadence of
            the celebrations across the weekend, while performances curated by{" "}
            <strong className="text-neutral-700 font-medium">Gabriele Rizzi Lab</strong> introduced moments of
            theatricality and artistic surprise.
          </p>
          <p>
            Together, the collective behind the wedding did more than produce an event. They created an atmosphere
            — one rooted in Riviera elegance, old-world romance, and the quiet language of modern legacy.
          </p>
        </section>

        {/* ── CREDITS ── */}
        <section className="bg-neutral-50 border-t border-neutral-100 py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <GoldEyebrow className="mb-5">The Creative Team</GoldEyebrow>
              <h2 className="font-cormorant font-light italic text-[clamp(2rem,3.5vw,3rem)] text-neutral-900">
                Behind the Celebration
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-amber-600/10">
              {credits.map(({ role, name }) => (
                <div
                  key={role}
                  className="credit-item border-r border-b border-amber-600/10 p-7"
                >
                  <p className="text-[9px] tracking-[0.28em] uppercase text-amber-700/70 mb-2">{role}</p>
                  <p className="font-cormorant text-lg font-light text-neutral-800 leading-snug">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING FULL-BLEED ── */}
        <section className="relative h-[60vh] min-h-96 overflow-hidden">
          <Image
            src="/isabela-herrera/venue.jpeg"
            alt="Hotel du Cap-Eden-Roc at dusk"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
            <span className="text-[9px] tracking-[0.38em] uppercase text-amber-400/80 mb-5">
              Cap d'Antibes · French Riviera
            </span>
            <h2 className="font-cormorant font-light italic text-[clamp(2rem,4.5vw,4rem)] leading-[1.15] max-w-3xl">
              An Atmosphere Rooted in Riviera Elegance
            </h2>
            <GoldRule className="mx-auto mt-8" />
            <p className="mt-5 text-[10px] tracking-[0.25em] uppercase text-white">
              Old-world romance &nbsp;·&nbsp; The quiet language of modern legacy
            </p>
          </div>
        </section>

      </main>
    </>
  );
}