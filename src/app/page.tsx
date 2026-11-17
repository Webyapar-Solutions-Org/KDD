import { udemyCourseUrl } from "@/lib/course";
import { learningBooks as books } from "@/lib/learning-resources";
import SiteLogo from "@/components/SiteLogo";
import { socialLinks } from "@/lib/social-links";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo, siteConfig } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/"));

const darkBenefits = [
  {
    title: "Practical Udemy course",
    text: "Explore Industry Knowledge Structure through a practical introduction to Life Insurance.",
  },
  {
    title: "Extensive KDD literature",
    text: "Build your understanding through books, papers, articles, and other learning resources.",
  },
  {
    title: "KDD-based software tool in development",
    text: "A software tool based on KDD is in development. Coming soon.",
  },
  {
    title: "Present in many college syllabi",
    text: "KDD brings structured industry knowledge into academic learning.",
  },
  {
    title: "Built on proven building blocks",
    text: "A foundation of established concepts supports the KDD framework.",
  },
  {
    title: "Domain agnostic structure",
    text: "A common structure across industries that bridges the industry–academia gap.",
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
      <SiteHeader active="home" />

      <section className="bg-[radial-gradient(circle_at_25%_20%,#ffffff_0%,#f5f9ff_38%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] items-start gap-10 px-5 pb-10 pt-12 sm:pb-12 lg:grid-cols-[minmax(0,630px)_minmax(0,580px)] lg:px-0">
          <div>
            <Pill>Industry Knowledge Structure</Pill>
            <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#11213a] sm:text-[58px] lg:text-[70px]">
              Background to <span className="text-[#2563eb]">IKS</span>
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-[1.55] text-[#64748b]">
              Knowledge Driven Development, also known as KDD is a Knowledge Structuring framework aimed at structuring industry, enterprise and project knowledge for faster delivery. One of its constituents is Industry Knowledge Structure that provides a common structure to specify any industry.
            </p>
            <Link
              href="/industry-knowledge-structure"
              className="mt-7 inline-flex rounded-full bg-[#ff5659] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(255,86,89,0.22)]"
            >
              Explore IKS &rarr;
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[580px]">
            <div className="relative aspect-[640/427] overflow-hidden rounded-[14px] shadow-[0_20px_36px_rgba(17,33,58,0.2)]">
              <Image
                src="/images/site-updates/life-insurance-course-hero.png"
                alt="Life Insurance industry knowledge connecting policy, underwriting, premium, and claims"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 580px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="what-is-structure" className="bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24 xl:px-0">
          <div className="lg:col-start-2 lg:row-start-1">
            <Pill>Understanding IKS</Pill>
            <h2 id="what-is-structure" className="mt-6 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[44px] lg:text-[50px]">
              What is <span className="text-[#2563eb]">Structure</span>
            </h2>
            <p className="mt-6 text-lg leading-[1.7] text-[#64748b]">
              Knowledge is unstructured when it is in the form of documents, audio, video, blogs and such formats. Knowledge is structured in business process models, data flow diagrams and such formats. Industry Knowledge Structure specifies end to end industry knowledge.
            </p>
          </div>
          <div className="overflow-hidden rounded-[22px] border border-[#dbe5f3] bg-white p-3 shadow-[0_16px_36px_rgba(17,33,58,0.06)] sm:p-6 lg:col-start-1 lg:row-start-1">
            <Image
              src="/images/what-is-structure.png"
              alt="Unstructured knowledge in documents, audio, video and books becomes structured industry knowledge organized by domain, contextual, conceptual and operational knowledge, with products, processes, rules, data and actors."
              width={1280}
              height={640}
              sizes="(min-width: 1280px) 558px, (min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#061629]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-20 lg:min-h-[636px] lg:grid-cols-[minmax(0,520px)_minmax(0,628px)] lg:items-center lg:px-0">
          <div>
            <Pill>The KDD Foundation</Pill>
            <h2 className="mt-6 max-w-[480px] font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-[44px]">
              Research-backed. Practical. Academically relevant.
            </h2>
            <p className="mt-5 max-w-[430px] text-[15px] leading-[1.55] text-[#9fb4ca]">
              Explore the courses, literature, and building blocks that support KDD and connect industry knowledge with academic learning.
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

      {/* <section className="bg-white">
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
      </section> */}

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
                <div className="relative mx-auto h-[262px] w-[180px] self-start">
                  <Image
                    src={`/learning-resources/${book.image}`}
                    alt={`${book.title} book cover`}
                    fill
                    unoptimized={book.image.endsWith(".gif")}
                    sizes="180px"
                    className="object-contain object-top"
                  />
                </div>
                <div className="self-center">
                  <h3 className="font-display text-[21px] font-bold leading-[1.2] text-[#11213a]">
                    {book.title}
                  </h3>
                  {book.subtitle && <p className="mt-2 text-sm font-semibold text-[#64748b]">{book.subtitle}</p>}
                  <p className="mt-2 text-sm font-bold text-[#2563eb]">By Manoj Kumar Lal</p>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-[#64748b]">{book.publisher}</p>
                  <p className="mt-4 text-sm leading-[1.55] text-[#64748b]">{book.description}</p>
                  <a href={book.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-extrabold text-[#2563eb] hover:underline">
                    Read more on Amazon <span aria-hidden="true">&nbsp;↗</span><span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <Link href="/learning-resources" className="mt-8 inline-flex text-sm font-extrabold text-[#2563eb] hover:underline">
            View all learning resources &rarr;
          </Link>
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
            href={udemyCourseUrl} target="_blank" rel="noopener noreferrer"
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
