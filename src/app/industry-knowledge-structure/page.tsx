import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/industry-knowledge-structure"));

const challenges = [
  {
    group: "From Industry:",
    items: [
      {
        role: "Senior management:",
        text: "Why do our teams still struggle to understand the customer's language despite years of relationship?",
      },
      {
        role: "Business analyst / Test analyst / Product Owner:",
        text: "Difficult to gain fit-for-purpose domain knowledge quickly.",
      },
      {
        role: "Project manager / Scrum master:",
        text: "I have to rely on team members' status because I cannot understand their detailed work.",
      },
      {
        role: "Developer:",
        text: "Why do I need to keep going back to the BA/SME to clarify business logic and edge cases?",
      },
      {
        role: "Sales and marketing professionals:",
        text: "How do I understand and explain complex products in the customer's language?",
      },
      {
        role: "Working professionals switching domain:",
        text: "If I switch industry, I need to learn the new domain from the beginning resulting in a long learning curve.",
      },
    ],
  },
  {
    group: "From Academic:",
    items: [
      {
        role: "Engineering and science students aiming to join IT Industry:",
        text: "With AI in everyone's CV, we need a differentiating skill to crack the interview.",
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
        role: "Engineering and science students aiming to join IT",
        text: "Use IKS as a differentiating foundation for interviews, projects, and industry readiness.",
      },
    ],
  },
];

const overviewCards = [
  {
    number: "01",
    title: "Industry Examples",
    text: "Understand IKS through Life Insurance and Banking.",
    highlighted: true,
  },
  {
    number: "02",
    title: "Four Mesh Layers",
    text: "Explore increasing levels of product-process detail.",
  },
  {
    number: "03",
    title: "Industry Comparison",
    text: "Compare top-level meshes across industries.",
  },
  {
    number: "04",
    title: "Challenges & Resolution",
    text: "See how IKS supports industry and academia.",
  },
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
  sections,
}: {
  title: string;
  sections: typeof challenges;
}) {
  return (
    <section>
      <h2 className="font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#11213a] sm:text-[48px] lg:text-[56px]">
        {title}
      </h2>
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
              Every industry contains products, processes, activities, terminology,
              business rules, and operational practices. IKS organizes these pieces
              and makes their relationships easier to understand, navigate, and learn.
            </p>
          </div>
          <div className="relative aspect-[1.29] w-full overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(8,28,53,0.22)]">
            <Image
              src="/figma-assets/industry-knowledge-structure.png"
              alt="Instructor explaining industry knowledge structure"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 579px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-5 py-20 lg:px-0 lg:py-24">
          <TextGroup
            title="Domain related challenges from various stakeholders"
            sections={challenges}
          />
          <TextGroup
            title="Resolution to domain related challenges using IKS"
            sections={resolutions}
          />
        </div>
      </section>

      <section className="bg-[#f6f8fc]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:px-0 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,655px)_1fr] lg:items-center">
            <div>
              <Pill>Understanding IKS</Pill>
              <h2 className="mt-6 font-display text-[38px] font-extrabold leading-[1.07] tracking-[-0.045em] text-[#11213a] sm:text-[56px]">
                See how knowledge connects across industries.
              </h2>
              <p className="mt-6 max-w-[655px] text-lg leading-[1.58] text-[#64748b]">
                The KDD Framework introduces the basic structure of IKS. This page
                focuses on applying that structure to real industries and addressing
                domain-knowledge challenges faced by stakeholders in industry and
                academia.
              </p>
            </div>
            <div className="relative aspect-[1.6] w-full overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(8,28,53,0.22)]">
              <Image
                src="/figma-assets/industry-knowledge-structure.png"
                alt="Industry knowledge structure overview"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 590px, 100vw"
              />
            </div>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map((card) => (
              <article
                key={card.number}
                className={`rounded-[18px] border p-7 shadow-[0_12px_18px_rgba(17,49,84,0.05)] ${
                  card.highlighted
                    ? "border-[#adcaff] bg-[#eaf2ff]"
                    : "border-[#dbe5f3] bg-white"
                }`}
              >
                <div
                  className={`grid size-10 place-items-center rounded-xl text-base font-extrabold text-[#2563eb] ${
                    card.highlighted ? "bg-white" : "bg-[#eaf2ff]"
                  }`}
                >
                  {card.number}
                </div>
                <h3 className="mt-[18px] font-display text-[18px] font-bold text-[#11213a] lg:text-[21px]">
                  {card.title}
                </h3>
                <p className="mt-[18px] text-sm leading-[1.58] text-[#64748b] lg:text-base">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
