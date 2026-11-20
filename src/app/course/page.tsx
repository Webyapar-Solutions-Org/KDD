import CourseSections from "@/components/CourseSections";
import SiteLogo from "@/components/SiteLogo";
import { socialLinks } from "@/lib/social-links";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo, siteConfig } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/course"));

export default function Course() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Industry Knowledge Structure - Simplifying Life Insurance",
    description:
      "A beginner-friendly course that organizes Life Insurance industry knowledge through products, processes, and connected business concepts.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: socialLinks.map(({ href }) => href),
    logo: `${siteConfig.url}/branding/kdd-logo.png`,
  };

  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <SiteHeader active="course" />

      <CourseSections />

      <footer className="bg-[#061629]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-8 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
            <div>
              <SiteLogo inverse />
              <p className="mt-4 max-w-[377px] text-sm leading-[1.55] text-[#9fb1c7]">
                Helping learners bridge industry knowledge and real-world application
                through courses, books, and practical resources.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-bold text-white">Explore</h3>
                <div className="mt-4 grid gap-2.5 text-sm text-[#9fb1c7]">
                  <Link href="/faq-1">FAQs</Link>
                  <Link href="/why-domain-knowledge">Why Domain Knowledge</Link>
                  <Link href="/kdd-framework">KDD Framework</Link>
                  <Link href="/industry-knowledge-structure">Industry Knowledge Structure</Link>
                  <Link href="/use-cases">Use Cases</Link>
                  <Link href="/industry-aware-students">Industry-Aware Students</Link>
                  <Link href="/about-us">About Us</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white">Social Links</h3>
                <div className="mt-4 grid gap-2.5 text-sm text-[#9fb1c7]">
                  {socialLinks.map(({ label, icon, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="flex items-center gap-3">
                      <Image src={icon} alt="" width={24} height={24} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white">Connect</h3>
                <div className="mt-4 grid gap-2.5 text-sm text-[#9fb1c7]">
                  <a href="mailto:ceo@kddeducations.com" className="flex items-center gap-3 underline">
                    <Image src="/figma-assets/mail.svg" alt="" width={24} height={24} />
                    ceo@kddeducations.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-[#7f94ab] sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; 2026 KDD Educations. All rights reserved. Design &amp; Developed By:{" "}
              <a
                href="https://webyaparsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5659]"
              >
                Webyapar Solutions Pvt. Ltd.
              </a>
            </p>
            <p>
              <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
              <Link href="/terms-of-use">Terms of Use</Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
