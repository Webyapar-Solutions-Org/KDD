import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/terms-of-use"));

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <SiteHeader active="learning" />
      <div className="mx-auto max-w-4xl px-5 pb-12 pt-8">
        <div className="mt-14">
          <p className="text-sm font-bold uppercase tracking-[0.05em] text-[#2563eb]">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
            Terms of Use
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#64748b]">
            By using this website, you agree to use the content, courses, and
            resources provided by KDD Educations for lawful learning and informational
            purposes only.
          </p>
        </div>

        <div className="mt-12 space-y-8 text-base leading-7 text-[#64748b]">
          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              Use of Content
            </h2>
            <p className="mt-3">
              All educational content, page copy, visual material, and resources are
              provided for general learning. You may not reproduce, resell, or
              redistribute website materials without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              No Professional Advice
            </h2>
            <p className="mt-3">
              The information on this website is educational in nature and should not
              be treated as legal, financial, business, or career advice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              External Links
            </h2>
            <p className="mt-3">
              This website may link to third-party websites or course platforms. KDD
              Educations is not responsible for the content, policies, or availability
              of external websites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              Updates
            </h2>
            <p className="mt-3">
              These terms may be updated from time to time. Continued use of the
              website means you accept the latest version.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
