import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/privacy-policy"));

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <SiteHeader active="learning" />
      <div className="mx-auto max-w-4xl px-5 pb-12 pt-8">
        <div className="mt-14">
          <p className="text-sm font-bold uppercase tracking-[0.05em] text-[#2563eb]">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#64748b]">
            KDD Educations respects your privacy. This page explains the basic ways
            information may be handled when you visit this website or contact us.
          </p>
        </div>

        <div className="mt-12 space-y-8 text-base leading-7 text-[#64748b]">
          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              Information We Collect
            </h2>
            <p className="mt-3">
              We may receive information you choose to share, such as your name,
              email address, phone number, or message when you contact us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              How We Use Information
            </h2>
            <p className="mt-3">
              Information is used to respond to enquiries, share relevant course or
              resource information, and improve communication with learners and
              partners.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              Third-Party Services
            </h2>
            <p className="mt-3">
              Links to external platforms, including course platforms or social
              networks, are governed by those platforms&apos; own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#11213a]">
              Contact
            </h2>
            <p className="mt-3">
              For privacy-related questions, contact us at ceo@kddeducations.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
