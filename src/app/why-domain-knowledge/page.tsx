import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/why-domain-knowledge"));

const audienceCards = [
  {
    title: "Operations teams",
    text: "Use domain knowledge to serve customers effectively.",
  },
  {
    title: "IT teams",
    text: "Translate business needs into software and technology solutions.",
  },
];

const importancePoints = [
  "Understand the business context",
  "Build more relevant solutions",
  "Validate whether solutions meet business needs",
  "Identify inaccuracies or hallucinations in AI responses",
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="grid size-[38px] place-items-center rounded-[11px] bg-[#2563eb] font-display text-[17px] font-extrabold text-white">
        K
      </div>
      <span
        className={`font-display text-[17px] font-extrabold ${
          inverse ? "text-white" : "text-[#11213a]"
        }`}
      >
        KDD Educations
      </span>
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#eaf2ff] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.05em] text-[#2563eb]">
      {children}
    </span>
  );
}

function Header() {
  return <SiteHeader active="explore" />;
}

function FramedImage({
  src,
  alt,
  dark = false,
}: {
  src: string;
  alt: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[24px] p-3 shadow-[0_22px_60px_rgba(17,49,84,0.11)] ${
        dark
          ? "border border-white/10 bg-[#102e50]"
          : "border border-[#b9d2ff] bg-white"
      }`}
    >
      <div className="relative aspect-[1.84] overflow-hidden rounded-[16px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 597px, 100vw"
        />
      </div>
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
          href="#"
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
            <Logo inverse />
            <p className="mt-4 max-w-[377px] text-sm leading-[1.55] text-[#9fb1c7]">
              Helping learners bridge industry knowledge and real-world application
              through courses, books, and practical resources.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-bold text-white">Explore</h3>
              <div className="mt-4 grid gap-2.5 text-sm text-[#9fb1c7]">
                <Link href="/why-domain-knowledge">Why Domain Knowledge</Link>
                <Link href="/kdd-framework">KDD Framework</Link>
                <Link href="/industry-knowledge-structure">Industry Knowledge Structure</Link>
                <Link href="/use-cases">Use Cases</Link>
                <Link href="/industry-aware-students">Industry-Aware Students</Link>
                <Link href="/">Learning Resources</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white">Social Links</h3>
              <div className="mt-4 grid gap-2.5 text-sm text-[#9fb1c7]">
                {[
                  ["YouTube", "/figma-assets/youtube.svg"],
                  ["LinkedIn", "/figma-assets/linkedin.svg"],
                  ["Instagram", "/figma-assets/instagram.svg"],
                ].map(([label, icon]) => (
                  <a key={label} href="#" className="flex items-center gap-3">
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
                <div className="flex items-center gap-3">
                  <Image src="/figma-assets/phone.svg" alt="" width={24} height={24} />
                  +91 987 654 3210
                </div>
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

export default function WhyDomainKnowledge() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <Header />

      <section className="bg-[radial-gradient(circle_at_18%_15%,#ffffff_0%,#f5f9ff_45%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-16 pt-12 lg:min-h-[868px] lg:grid-cols-[minmax(0,597px)_minmax(0,597px)] lg:items-start lg:gap-[86px] lg:px-0">
          <div>
            <p className="text-[13px] font-bold text-[#2563eb]">
              Explore KDD / Why Domain Knowledge
            </p>
            <div className="mt-12">
              <Pill>Why Domain Knowledge</Pill>
            </div>
            <h1 className="mt-5 max-w-[597px] font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#11213a] sm:text-[58px] lg:text-[70px]">
              Understand the industry behind the work.
            </h1>
            <p className="mt-7 max-w-[597px] text-lg leading-[1.6] text-[#64748b]">
              Domain knowledge helps professionals understand how an industry works,
              what customers need, and how solutions should be designed and delivered.
            </p>
            <div className="mt-8 grid gap-[15px] sm:grid-cols-2">
              {audienceCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[15px] border border-[#dbe5f3] bg-white p-5"
                >
                  <h2 className="font-display text-[17px] font-bold text-[#081c35]">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.6] text-[#64748b]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-r-[15px] border-l-4 border-[#2563eb] bg-white p-5">
              <p className="font-bold leading-[1.6] text-[#081c35]">
                Domain knowledge is a crucial skill for every working professional.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[597px]">
            <div className="relative aspect-[1.78] overflow-hidden rounded-[20px] shadow-[0_28px_70px_rgba(8,28,53,0.22)]">
              <Image
                src="/figma-assets/domain-hero.png"
                alt="Professionals mapping business domain knowledge"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 597px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-20 lg:grid-cols-[minmax(0,597px)_minmax(0,597px)] lg:items-center lg:gap-[86px] lg:px-0 lg:py-[100px]">
          <FramedImage
            src="/figma-assets/domain-challenge.png"
            alt="Industry knowledge scattered across documents, systems, people, and projects"
            dark
          />
          <div>
            <Pill>The Knowledge Challenge</Pill>
            <h2 className="mt-5 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#11213a] sm:text-[52px]">
              Challenges in acquiring domain knowledge
            </h2>
            <p className="mt-5 text-[19px] font-semibold leading-[1.6] text-[#081c35]">
              Industry knowledge is critical, but it is often difficult to acquire.
            </p>
            <p className="mt-5 text-[17px] leading-[1.6] text-[#64748b]">
              Knowledge is spread across documents, systems, people, projects, and
              experience in unstructured forms. This creates a long and inconsistent
              learning curve.
            </p>
            <p className="mt-7 font-display text-[22px] font-bold leading-[1.4] text-[#64748b]">
              If industry knowledge could be structured, learning could become
              faster and more systematic.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fc]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-20 lg:grid-cols-[minmax(0,597px)_minmax(0,597px)] lg:items-center lg:gap-[86px] lg:px-0 lg:py-[100px]">
          <div>
            <Pill>A Growing Differentiator</Pill>
            <h2 className="mt-5 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.055em] text-[#11213a] sm:text-[54px]">
              The growing importance of domain knowledge
            </h2>
            <p className="mt-5 text-[19px] font-semibold leading-[1.6] text-[#081c35]">
              As technology and AI simplify implementation, domain knowledge becomes
              increasingly important.
            </p>
            <div className="mt-7 grid gap-[13px] sm:grid-cols-2">
              {importancePoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-[14px] border border-[#dbe5f3] bg-white p-4"
                >
                  <span className="grid size-[27px] shrink-0 place-items-center rounded-full bg-[#eaf2ff] text-base font-extrabold text-[#2563eb]">
                    &#10003;
                  </span>
                  <p className="font-bold leading-[1.6] text-[#11213a]">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-r-[15px] border-l-4 border-[#2563eb] bg-white p-5">
              <p className="font-bold leading-[1.6] text-[#081c35]">
                Technology accelerates execution. Domain knowledge ensures that
                execution is relevant and correct.
              </p>
            </div>
          </div>
          <FramedImage
            src="/figma-assets/domain-importance.png"
            alt="Professional reviewing structured industry knowledge and AI systems"
          />
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
