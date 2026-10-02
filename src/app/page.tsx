import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo, siteConfig } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/"));

const heroStats = [
  { icon: "/figma-assets/clock.svg", label: "1 hour" },
  { icon: "/figma-assets/book-open.svg", label: "Beginner friendly" },
  { icon: "/figma-assets/signal.svg", label: "Lifetime access" },
];

const learnerCards = [
  {
    icon: "/figma-assets/graduation-cap.svg",
    title: "IT Students",
    text: "Build domain knowledge alongside technical skills and create an extra edge.",
  },
  {
    icon: "/figma-assets/briefcase.svg",
    title: "Management Students",
    text: "Discover business industries and gain exposure to a specific industry vertical.",
  },
  {
    icon: "/figma-assets/layer-10.svg",
    title: "Working Professionals",
    text: "Strengthen your career domain understanding and connect knowledge with everyday work.",
  },
  {
    icon: "/figma-assets/laptop.svg",
    title: "IT Freelancers",
    text: "Understand client requirements, business processes, and project context with confidence.",
  },
];

const darkBenefits = [
  {
    title: "Understand industry knowledge structure",
    text: "Learn how products, processes, and business concepts fit together.",
  },
  {
    title: "Learn Life Insurance in a structured way",
    text: "A clear, beginner approach for entry-level understanding.",
  },
  {
    title: "Connect products and processes",
    text: "Understand how different areas of the industry are linked.",
  },
  {
    title: "Build practical domain exposure",
    text: "Gain a view of real-world business and system scenarios.",
  },
  {
    title: "Add a differentiating skill",
    text: "Stand out with valuable domain expertise.",
  },
];

const gains = [
  {
    number: "01",
    title: "Structured Understanding",
    text: "A clear framework for organizing industry knowledge.",
  },
  {
    number: "02",
    title: "Connected Knowledge",
    text: "See how products, processes, and concepts work together.",
  },
  {
    number: "03",
    title: "Practical Exposure",
    text: "Real-world examples that build confidence.",
  },
  {
    number: "04",
    title: "Differentiating Skill",
    text: "Add valuable domain knowledge to your career.",
  },
];

const books = [
  {
    title: "Knowledge Driven Development",
    coverTitle: "Knowledge Driven Development",
    coverSubtitle: "Bridging Waterfall and Agile Methodologies",
    gradient: "from-[#06182c] to-[#0e4778]",
    text: "A practical guide to building software systems using industry knowledge and agile methods.",
  },
  {
    title: "Digitizing Industry Knowledge for Software Development",
    coverTitle: "Digitizing Industry Knowledge",
    coverSubtitle: "For Software Development",
    gradient: "from-[#161b55] to-[#224e9d]",
    text: "Learn how to capture, organize, and digitize industry knowledge to build better systems.",
  },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
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
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#eaf2ff] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.04em] text-[#2563eb]">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <Pill>{eyebrow}</Pill>
      <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,660px)_minmax(0,540px)] lg:items-end lg:gap-20">
        <h2 className="font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#11213a] sm:text-[44px] lg:text-[50px]">
          {title}
        </h2>
        <p className="max-w-2xl text-[17px] leading-[1.55] text-[#64748b] lg:max-w-none">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
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
      <SiteHeader active="learning" />

      <section className="bg-[radial-gradient(circle_at_25%_20%,#ffffff_0%,#f5f9ff_38%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] items-start gap-10 px-5 pb-16 pt-12 sm:pb-20 lg:min-h-[767px] lg:grid-cols-[minmax(0,630px)_minmax(0,580px)] lg:px-0">
          <div>
            <Pill>Udemy Course</Pill>
            <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#11213a] sm:text-[58px] lg:text-[70px]">
              Industry Knowledge Structure -{" "}
              <span className="text-[#2563eb]">Simplifying Life Insurance</span>
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-[1.55] text-[#64748b]">
              A 1-hour introductory course that organizes Life Insurance knowledge
              through products, processes, and connected business concepts. Build a
              clear foundation for understanding how the industry works.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 text-xs font-extrabold text-[#11213a]">
                  <span className="grid size-5 place-items-center rounded-full bg-[#eaf2ff]">
                    <Image src={stat.icon} alt="" width={13} height={13} />
                  </span>
                  {stat.label}
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-7 inline-flex rounded-full bg-[#ff5659] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(255,86,89,0.22)]"
            >
              Enroll on Udemy &rarr;
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[580px]">
            <div className="relative aspect-[1.63] overflow-hidden rounded-[14px] shadow-[0_20px_36px_rgba(17,33,58,0.2)]">
              <Image
                src="/figma-assets/course-preview.png"
                alt="Course preview with instructor"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 580px, 100vw"
              />
            </div>
            <button
              type="button"
              aria-label="Play course preview"
              className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-[0_18px_34px_rgba(17,33,58,0.25)]"
            >
              <Image src="/figma-assets/play-course-preview.svg" alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:min-h-[640px] lg:px-0 lg:py-24">
          <SectionHeading
            eyebrow="For learning seekers"
            title="Designed for learners at every career stage."
            text="Whether you are starting your career or expanding your domain knowledge, this course provides a clear and practical introduction to the Life Insurance industry."
          />
          <div className="mt-11 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {learnerCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[10px] border border-[#dbe5f3] bg-white p-6 shadow-[0_10px_15px_rgba(21,52,88,0.04)]"
              >
                <Image src={card.icon} alt="" width={26} height={26} />
                <h3 className="mt-8 font-display text-base font-bold text-[#11213a]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] text-[#64748b]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061629]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-20 lg:min-h-[636px] lg:grid-cols-[minmax(0,520px)_minmax(0,628px)] lg:items-center lg:px-0">
          <div>
            <Pill>Course benefits</Pill>
            <h2 className="mt-6 max-w-[480px] font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-[44px]">
              Why enroll in this course?
            </h2>
            <p className="mt-5 max-w-[430px] text-[15px] leading-[1.55] text-[#9fb4ca]">
              Get a structured and practical introduction to Life Insurance. See
              the complete picture - from products and processes to the broader
              business context.
            </p>
          </div>
          <div className="grid gap-3">
            {darkBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`grid grid-cols-[28px_1fr] gap-3 rounded-md px-4 py-3 ${
                  index === 1 ? "bg-[#eff5ff] text-[#11213a]" : "bg-[#123b66] text-white"
                }`}
              >
                <span className="grid size-6 place-items-center rounded-full bg-[#2563eb] text-sm font-extrabold text-white">
                  &#10003;
                </span>
                <div>
                  <h3 className="text-[15px] font-bold leading-snug">{benefit.title}</h3>
                  <p className={`mt-1 text-[13px] leading-[1.55] ${index === 1 ? "text-[#64748b]" : "text-[#9fb4ca]"}`}>
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:min-h-[763px] lg:px-0 lg:py-24">
          <SectionHeading
            eyebrow="What you will gain"
            title="Learn the industry, not just individual concepts."
            text="Build a structured understanding of the Life Insurance industry, so you can see connections rather than isolated topics."
          />
          <div className="mt-11 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {gains.map((gain) => (
              <article
                key={gain.number}
                className="rounded-[18px] border border-[#dbe5f3] bg-white p-6 shadow-[0_10px_15px_rgba(21,52,88,0.04)]"
              >
                <div className="grid size-[52px] place-items-center rounded-[15px] bg-[#eaf2ff] text-xl font-extrabold text-[#2563eb]">
                  {gain.number}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[#11213a]">
                  {gain.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.55] text-[#64748b]">
                  {gain.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-[18px] rounded-2xl border border-[#b9d2ff] bg-[#eff5ff] px-6 py-5 text-[#2563eb]">
            <span className="grid size-[52px] shrink-0 place-items-center rounded-[15px] bg-[#eaf2ff] text-xl font-extrabold">
              &#9678;
            </span>
            <p className="text-[17px] font-extrabold leading-snug sm:text-[19px]">
              Build industry knowledge alongside your technical or management skills.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f6fd]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:min-h-[767px] lg:px-0 lg:py-24">
          <SectionHeading
            eyebrow="Course resources"
            title="Continue learning with Knowledge-Driven Development."
            text="Explore books that deepen your understanding of industry knowledge and its application in software development."
          />
          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            {books.map((book) => (
              <article
                key={book.title}
                className="grid gap-6 rounded-[20px] border border-[#dbe5f3] bg-white p-6 shadow-[0_16px_22px_rgba(18,54,94,0.08)] sm:grid-cols-[180px_1fr]"
              >
                <div
                  className={`relative min-h-[262px] overflow-hidden rounded-[7px] bg-linear-to-br ${book.gradient} px-[18px] py-[22px] shadow-[12px_12px_24px_rgba(8,28,53,0.2)]`}
                >
                  <h3 className="font-display text-[19px] font-bold leading-[1.15] text-white">
                    {book.coverTitle}
                  </h3>
                  <p className="mt-5 text-[13px] leading-[1.55] text-[#bcd8fa]">
                    {book.coverSubtitle}
                  </p>
                  <div className="absolute bottom-8 left-[-20px] h-[58px] w-[220px] opacity-80 [background:linear-gradient(165deg,rgba(22,116,212,0)_20%,#1674d4_21%,#1674d4_44%,#40a8ff_45%,#40a8ff_63%,rgba(64,168,255,0)_64%)]" />
                </div>
                <div className="self-center">
                  <h3 className="font-display text-[21px] font-bold leading-[1.2] text-[#11213a]">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-[#2563eb]">By Manoj Kumar Lal</p>
                  <p className="mt-4 text-sm leading-[1.55] text-[#64748b]">{book.text}</p>
                  <a href="#" className="mt-5 inline-flex text-sm font-extrabold text-[#2563eb]">
                    Read More &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                  <Link href="/contact-us">Contact Us</Link>
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
                  <a href="mailto:ceo@kddeducations.com" className="flex items-center gap-3 underline">
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
    </main>
  );
}
