import { udemyCourseUrl } from "@/lib/course";
import SiteLogo from "@/components/SiteLogo";
import { socialLinks } from "@/lib/social-links";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import UseCaseCarousel from "@/components/UseCaseCarousel";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/use-cases"));

const applicationAreas = [
  {
    number: "01",
    icon: "/figma-assets/use-case-icon-1.svg",
    title: "Industry Learning",
    text: "Understand different industries using a common structure.",
  },
  {
    number: "02",
    icon: "/figma-assets/use-case-icon-2.svg",
    title: "Software Development",
    text: "Connect domain knowledge with requirements, design, development, and testing.",
  },
  {
    number: "03",
    icon: "/figma-assets/use-case-icon-3.svg",
    title: "Business Analysis & Testing",
    text: "Access comprehensive details of processes and use it as a reference for requirement and testing.",
  },
  {
    number: "04",
    icon: "/figma-assets/use-case-icon-4.svg",
    title: "Enterprise Knowledge Management",
    text: "Structure and connect business and IT knowledge across an organisation.",
  },
  {
    number: "05",
    icon: "/figma-assets/use-case-icon-5.svg",
    title: "Academia & Research",
    text: "Help students, educators, and researchers explore industry knowledge structurally.",
  },
  {
    number: "06",
    icon: "/figma-assets/use-case-icon-6.svg",
    title: "GenAI, RAG & Prompt Engineering",
    text: "Use structured domain knowledge as AI context and GenAI to populate knowledge structures.",
  },
];


function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#eaf2ff] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.04em] text-[#2563eb]">
      {children}
    </span>
  );
}

function Header() {
  return <SiteHeader active="applications" />;
}

function CtaSection() {
  return (
    <section className="bg-[#2563eb]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-7 px-5 py-16 sm:flex-row sm:items-center sm:justify-between lg:min-h-[264px] lg:px-0">
        <div>
          <h2 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[46px]">
            Build industry knowledge that sets you apart.
          </h2>
          <p className="mt-3 text-[17px] leading-[1.55] text-[#dbeafe]">
            Start your 1-hour journey into Life Insurance and see the bigger picture.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#dbeafe]">
            <span>&#10003; 1-hour introductory course</span>
            <span>&#10003; Beginner friendly</span>
            <span>&#10003; Lifetime access</span>
          </div>
        </div>
        <a
          href={udemyCourseUrl} target="_blank" rel="noopener noreferrer"
          className="w-fit rounded-full bg-white px-[22px] py-3.5 font-bold text-[#2563eb]"
        >
          Enroll on Udemy &rarr;
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
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
                <a
                  href="mailto:ceo@kddeducations.com"
                  className="flex items-center gap-3 underline"
                >
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
  );
}

export default function UseCases() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <Header />

      <section className="bg-[radial-gradient(circle_at_18%_20%,#ffffff_0%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-16 pt-12 lg:min-h-[767px] lg:grid-cols-[minmax(0,624px)_minmax(0,579px)] lg:items-start lg:px-0">
          <div>
            <p className="text-[13px] font-bold text-[#2563eb]">
              Applications / Use Cases
            </p>
            <h1 className="mt-16 max-w-[624px] font-display text-[42px] font-extrabold leading-[1.02] tracking-[-0.057em] text-[#11213a] sm:text-[58px] lg:text-[75px]">
              Bringing structure to{" "}
              <span className="text-[#2563eb]">industry, enterprise, and project.</span>
            </h1>
            <p className="mt-8 max-w-[624px] text-[19px] leading-[1.58] text-[#64748b]">
              KDD makes this knowledge structured and therefore easier to learn, navigate, connect, and apply.
            </p>
            <p className="mt-6 max-w-[624px] text-[19px] leading-[1.58] text-[#64748b]">
              KDD makes this knowledge structured and therefore easier to learn, navigate, connect, and apply.
            </p>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(8,28,53,0.22)]">
            <Image
              src="/images/site-updates/kdd-knowledge-ecosystem.png"
              alt="KDD structured knowledge ecosystem connecting industry, enterprise, and project applications"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 579px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:px-0 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,538px)_minmax(0,657px)] lg:gap-[85px]">
            <div>
              <Pill>KDD Application Areas</Pill>
              <h2 className="mt-[18px] font-display text-[36px] font-extrabold leading-[1.07] tracking-[-0.047em] text-[#11213a] sm:text-[57px]">
                Six ways structured knowledge creates value.
              </h2>
            </div>
            <p className="text-lg leading-[1.58] text-[#64748b] lg:pt-[60px]">
              Each application area uses the same KDD principles while addressing a
              different learning, analysis, delivery, or knowledge-management challenge.
            </p>
          </div>

          <div className="mt-11 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {applicationAreas.map((area) => {
              const cardContent = (
                <>
                  <span className="absolute right-7 top-7 text-xs font-extrabold text-[#8aa1bb]">
                    {area.number}
                  </span>
                  <div
                    className={`grid size-[58px] place-items-center rounded-[17px] bg-[#eaf2ff]`}
                  >
                    <Image src={area.icon} alt="" width={30} height={30} />
                  </div>
                  <h3 className="mt-6 font-display text-[21px] font-bold leading-[1.25] text-[#11213a]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.58] text-[#64748b]">
                    {area.text}
                  </p>
                </>
              );

              const className = `relative rounded-[19px] border p-7 shadow-[0_10px_16px_rgba(23,59,105,0.05)] border-[#dbe5f3] bg-white`;

              return (
                <article key={area.number} className={className}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fc]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:px-0 lg:py-24">
          <Pill>Use Case Library</Pill>
          <h2 className="mt-[18px] font-display text-[36px] font-extrabold leading-[1.07] tracking-[-0.047em] text-[#11213a] sm:text-[57px]">
            Practical use cases for each application area.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#64748b]">
            Explore the list of use cases for each of the six KDD application areas. Swipe through the images or use the arrows to browse.
          </p>
          <UseCaseCarousel />
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
