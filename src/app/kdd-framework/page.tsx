import FrameworkStructureSection from "@/components/FrameworkStructureSection";
import { udemyCourseUrl } from "@/lib/course";
import SiteLogo from "@/components/SiteLogo";
import { socialLinks } from "@/lib/social-links";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/kdd-framework"));

const knowledgeSteps = [
  {
    number: "01",
    title: "Industry Knowledge",
    text: "Generic knowledge about how an industry works.",
  },
  {
    number: "02",
    title: "Enterprise Knowledge",
    text: "Knowledge specific to an organisation - its products, processes, systems, and operations.",
    highlighted: true,
  },
  {
    number: "03",
    title: "Project Knowledge",
    text: "Detailed knowledge required to execute a specific project.",
  },
];


function Pill({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-2 text-xs font-extrabold uppercase tracking-[0.05em] ${
        dark ? "bg-[#3b82f62b] text-[#8fc0ff]" : "bg-[#eaf2ff] text-[#2563eb]"
      }`}
    >
      {children}
    </span>
  );
}

function Header() {
  return <SiteHeader active="explore" />;
}

function FrameworkImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(8,28,53,0.22)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 580px, 100vw"
      />
    </div>
  );
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
                <Link href="/learning-resources">Learning Resources</Link>
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

export default function KddFramework() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <Header />

      <section className="bg-[radial-gradient(circle_at_18%_18%,#ffffff_0%,#f3f8ff_48%,#e9f2ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-16 pt-12 lg:min-h-[796px] lg:grid-cols-[minmax(0,648px)_minmax(0,579px)] lg:items-start lg:px-0">
          <div>
            <p className="text-[13px] font-bold text-[#2563eb]">
              Explore KDD / KDD Framework
            </p>
            <h1 className="mt-20 max-w-[648px] font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.058em] text-[#11213a] sm:text-[62px] lg:text-[76px]">
              Structure knowledge. Improve execution.{" "}
              <span className="text-[#2563eb]">Accelerate delivery.</span>
            </h1>
            <p className="mt-7 max-w-[648px] text-[19px] leading-[1.58] text-[#64748b]">
              KDD is a Knowledge Structuring Framework that connects structured
              knowledge with execution. It helps organisations and professionals move
              from broad industry understanding to detailed, implementable knowledge.
            </p>
          </div>
          <FrameworkImage
            src="/images/site-updates/kdd-knowledge-to-execution.png"
            alt="KDD Framework connecting industry, enterprise, and project knowledge to business execution"
            className="aspect-[3/2] w-full"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:px-0 lg:py-[104px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,655px)_1fr] lg:items-center">
            <div>
              <Pill>Understanding KDD</Pill>
              <h2 className="mt-6 font-display text-[38px] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#11213a] sm:text-[58px]">
                From generic knowledge to implementable knowledge.
              </h2>
              <p className="mt-6 max-w-[655px] text-lg leading-[1.58] text-[#64748b]">
                Successful delivery requires the right balance of knowledge and execution. Too much focus on knowledge can delay execution, while execution without sufficient knowledge can compromise the output. KDD optimises knowledge and execution.
              </p>
            </div>
            <FrameworkImage
              src="/images/site-updates/kdd-implementable-knowledge.png"
              alt="Progression from generic knowledge to implementable knowledge"
              className="aspect-[3/2] w-full"
            />
          </div>

          <div className="mt-[54px] grid gap-5 md:grid-cols-3">
            {knowledgeSteps.map((step) => (
              <article
                key={step.number}
                className={`rounded-[18px] border p-7 shadow-[0_12px_18px_rgba(17,49,84,0.05)] ${
                  step.highlighted
                    ? "border-[#adcaff] bg-[#eaf2ff]"
                    : "border-[#dbe5f3] bg-white"
                }`}
              >
                <div
                  className={`grid size-11 place-items-center rounded-[13px] text-base font-extrabold text-[#2563eb] ${
                    step.highlighted ? "bg-white" : "bg-[#eaf2ff]"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-[21px] font-bold text-[#11213a]">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-[1.58] text-[#64748b]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#b9d2ff] bg-[#f1f6ff] p-[22px] text-center">
            <p className="font-display text-lg font-extrabold text-[#2563eb]">
              Generic Knowledge &rarr; Enterprise Knowledge &rarr; Implementable Knowledge
            </p>
          </div>
        </div>
      </section>

      <FrameworkStructureSection />

      <CtaSection />
      <Footer />
    </main>
  );
}
