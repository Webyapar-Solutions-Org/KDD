import { udemyCourseUrl } from "@/lib/course";
import SiteLogo from "@/components/SiteLogo";
import { socialLinks } from "@/lib/social-links";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import IksIndustryExamples from "@/components/IksIndustryExamples";
import IksMeshCarousel from "@/components/IksMeshCarousel";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/industry-knowledge-structure"));

const exampleTopics = [
  {
    title: "A quick run down of Life Insurance and Banking.",
    description:
      "Explore Life Insurance and Banking through the same three layers of IKS: contextual, conceptual, and operational knowledge. The structure connects an industry's big picture with its products, processes, business rules, and data.",
  },
  {
    title: "A schematic representation of contextual knowledge.",
    description:
      "Contextual knowledge provides a high-level view of an industry. The diagram brings together nine topics, including its introduction, evolution, characteristics, departments, stakeholders, regulatory influence, latest trends, IT applications, and glossary.",
    image: "/new/5.png",
    imageWidth: 1434,
    imageHeight: 1210,
    imageAlt: "Nine topics of contextual knowledge arranged around a central knowledge hub",
  },
  {
    title: "Product-Process mesh for selected industries",
  },
];

const challenges = [
  {
    group: "From Industry:",
    items: [
      {
        role: "Senior management:",
        text: "Why do our teams still struggle to understand the customer’s language despite years of relationship?",
      },
      {
        role: "Business analyst / Test analyst / Product Owner:",
        text: "Difficult to gain fit-for-purpose domain knowledge quickly.",
      },
      {
        role: "Project manager / Scrum master:",
        text: "I have to rely on team members’ status because I cannot understand their detailed work.",
      },
      {
        role: "Developer:",
        text: "Why do I need to keep going back to the BA/SME to clarify business logic and edge cases?",
      },
      {
        role: "Sales and marketing professionals:",
        text: "How do I understand and explain complex products in the customer’s language?",
      },
      {
        role: "Working professionals switching domain:",
        text: "If I switch industry, I need to learn the new domain from the beginning resulting in a long learning curve.",
      },
    ],
  },
  {
    group: "From Academia:",
    items: [
      {
        role: "Engineering and science students aiming to join IT industry:",
        text: "With AI in everyone’s CV, we need a differentiating skill to crack the interview.",
      },
      {
        role: "Students of business / management schools:",
        text: "I know marketing but to perform better in a life insurance company, I also need to know life insurance. My college does not teach me Life Insurance.",
      },
    ],
  },
];

const resolutions = [
  {
    group: "From Industry:",
    items: [
      {
        role: "Senior management:",
        text: "I liked the structured representation of information, let us implement it in the project for experience certainty.",
      },
      {
        role: "Business analyst / Test analyst / Product Owner:",
        text: "I need related nuggets such as business rules of operational knowledge for my day job.",
      },
      {
        role: "Project manager / Scrum master:",
        text: "Drill down from contextual to operational knowledge, the visibility I need from day one to perform my job better.",
      },
      {
        role: "Developer:",
        text: "I can connect contextual, conceptual and operational knowledge to understand not just what to build, but why and how it works and reduce the dependence on BA/SME.",
      },
      {
        role: "Sales and marketing consultant:",
        text: "I can connect product, process and business knowledge to help me explain the right product with confidence.",
      },
      {
        role: "Working professionals switching domain:",
        text: "The same Industry Knowledge Structure can be used to learn multiple industries shortening the learning curve significantly.",
      },
    ],
  },
  {
    group: "From Academia:",
    items: [
      {
        role: "Engineering and science students aiming to join IT industry:",
        text: "IKS exposes us to industry knowledge in a scientific and formal way, increasing our chances to clear the interview.",
      },
      {
        role: "Students of business / management schools:",
        text: "IKS is a new skill that can be used to learn multiple industries using a common structure allowing a student of marketing to learn life insurance as well and for that matter any other industry.",
      },
    ],
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
  return <SiteHeader active="explore" />;
}

function TextGroup({
  title,
  introduction,
  sections,
}: {
  title: string;
  introduction: string[];
  sections: typeof challenges;
}) {
  return (
    <section>
      <h2 className="font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#11213a] sm:text-[48px] lg:text-[56px]">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-lg leading-[1.58] text-[#64748b]">
        {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {sections.map((section) => (
          <div key={section.group} className="space-y-6">
            <h3 className="font-display text-2xl font-extrabold uppercase text-[#2563eb]">
              {section.group}
            </h3>
            {section.items.map((item) => (
              <div key={`${section.group}-${item.role}`}>
                <p className="text-lg font-bold leading-[1.58] text-black">
                  {item.role}
                </p>
                <p className="text-lg leading-[1.58] text-[#7c7c7c]">{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
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
                <Link href="/learning-resources">Learning Resources</Link>
                <a href={udemyCourseUrl} target="_blank" rel="noopener noreferrer">Udemy Course</a>
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

export default function IndustryKnowledgeStructure() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <Header />

      <section className="bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-16 pt-12 lg:min-h-[844px] lg:grid-cols-[minmax(0,600px)_minmax(0,579px)] lg:items-start lg:px-0">
          <div>
            <p className="text-[13px] font-bold text-[#2563eb]">
              Explore KDD / Industry Knowledge Structure (IKS)
            </p>
            <h1 className="mt-20 max-w-[600px] font-display text-[42px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#11213a] sm:text-[58px] lg:text-[74px]">
              Simplifying industry knowledge through a{" "}
              <span className="text-[#2563eb]">structured approach.</span>
            </h1>
            <p className="mt-8 max-w-[600px] text-[19px] leading-[1.58] text-[#64748b]">
              Every industry contains products, processes, activities, terminology, business rules, and business data amongst many other constituents that define it. Industry Knowledge Structure (IKS) organizes these constituents and makes their relationships easier to understand, navigate, and learn.
            </p>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(8,28,53,0.22)]">
            <Image
              src="/images/site-updates/iks-industry-knowledge-hub-business-data.png"
              alt="Industry Knowledge Structure as a connected industry knowledge hub"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 579px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fc]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:px-0 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,655px)_1fr] lg:items-center">
            <div>
              <Pill>Understanding IKS through examples</Pill>
              <h2 className="mt-6 font-display text-[38px] font-extrabold leading-[1.07] tracking-[-0.045em] text-[#11213a] sm:text-[56px]">
                See how knowledge is standardized across industries.
              </h2>
              <p className="mt-6 max-w-[655px] text-lg leading-[1.58] text-[#64748b]">
                The 'KDD Framework' page introduces the basic structure of IKS. Here we will exemplify IKS through three topics:
              </p>
              <ul className="mt-4 max-w-[655px] list-disc space-y-3 pl-6 text-lg leading-[1.58] text-[#64748b]">
                {exampleTopics.map((topic) => <li key={topic.title}>{topic.title}</li>)}
              </ul>
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(8,28,53,0.22)]">
              <Image
                src="/images/kdd-structure/industry-knowledge-structure.png"
                alt="Connected industry knowledge across industries"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 590px, 100vw"
              />
            </div>
          </div>

          <div className="mt-12 grid w-full gap-4">
            {exampleTopics.map((topic, index) => (
              <details
                key={topic.title}
                name="iks-example-topics"
                open={index === 0}
                className="group overflow-hidden rounded-[20px] border border-[#dbe5f3] bg-[#102e50] shadow-[0_12px_24px_rgba(17,33,58,0.05)] open:border-[#b9d2ff] open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#60a5fa] group-open:text-[#11213a] sm:gap-5 sm:p-7 [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#1d4775] text-sm font-extrabold text-[#93c5fd] group-open:bg-[#eaf2ff] group-open:text-[#2563eb]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-display text-base font-bold leading-snug sm:text-xl">{topic.title}</h3>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-[#93c5fd] transition-transform group-open:rotate-180 group-open:text-[#2563eb]">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="mx-5 grid gap-7 border-t border-[#dbe5f3] py-7 sm:mx-7 lg:items-start lg:gap-10">
                  {index === 0 ? (
                    <IksIndustryExamples />
                  ) : index === 1 ? (
                    <h4 className="font-display text-xl font-bold leading-snug text-[#11213a] sm:text-2xl">
                      The contextual knowledge is covered in 9 topics.
                    </h4>
                  ) : (
                    <IksMeshCarousel />
                  )}
                  {topic.image ? (
                    <figure className={index === 1 ? "mx-auto w-full min-w-0 max-w-[720px]" : "min-w-0"}>
                      <Image src={topic.image} alt={topic.imageAlt} width={topic.imageWidth} height={topic.imageHeight} sizes="(min-width: 1024px) 720px, 100vw" className="h-auto w-full rounded-[14px] border border-[#dbe5f3]" />
                      <figcaption className="mt-4">
                        <a href={topic.image} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#2563eb] hover:underline">
                          View full diagram <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-5 py-20 lg:px-0 lg:py-24">
          <TextGroup
            title="Domain related challenges from various stakeholders"
            introduction={[
              "Stakeholders are from both industry and academia",
              "Learning domain knowledge in a traditional way has a long learning curve",
            ]}
            sections={challenges}
          />
          <TextGroup
            title="Resolution to domain related challenges using IKS"
            introduction={[
              "IKS introduces a scientific way of learning industry knowledge that accelerates the learning path for stakeholders of industry and academia",
            ]}
            sections={resolutions}
          />
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
