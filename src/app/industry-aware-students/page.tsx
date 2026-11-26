import { udemyCourseUrl } from "@/lib/course";
import SiteLogo from "@/components/SiteLogo";
import { socialLinks } from "@/lib/social-links";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/industry-aware-students"));

const sections = [
  {
    eyebrow: "Section 1: Domain knowledge and students",
    title: "Domain skill is crucial for software development",
    image: "/images/software-development-domain-skills.png",
    imageAlt:
      "Software development skills: domain knowledge, soft skills, AI and digital skills, and technology skills.",
    imageWidth: 1536,
    imageHeight: 1024,
    text: [
      "Software implements domain knowledge for bringing in sensible automation in executing business processes of an organisation.",
      "IKS makes it possible to introduce industry knowledge in academia in a formal way, plugging an open industry-academia gap.",
    ],
    imageFirst: true,
  },
  {
    title: "Industry knowledge is key to a management student",
    image: "/images/management-student-skills.png",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Four skills for management students: domain skills, digital skills, analytical skills, and soft skills, with examples for each.",
    text: [
      "Management colleges traditionally focus on horizontal domains such as HR and Marketing.",
      "Knowledge of vertical domain that are industries such as life insurance, Banking and Healthcare - are needed so that the students can work effectively in these industries. IKS makes it easy to learn industry knowledge.",
    ],
    imageFirst: true,
  },
  {
    eyebrow: "Section 2: Gaining IKS Skill in Five Steps",
    title: "Learning IKS - From Foundation to Industry Application",
    image: "/images/iks-five-step-learning.png",
    imageAlt:
      "Five steps to learn IKS: learn the structure, apply it to life insurance, discover it through banking, practice in other industries, and apply it in industry assignments.",
    imageWidth: 1774,
    imageHeight: 887,
    text: [
      "In the 5 step learning process, the first 3 can be acquired by going through the Udemy course link provided in the landing page.",
      "For Step 4, page Domain Knowledge Details provides glimpses of other industries using IKS so that students can themselves start applying IKS to other industries.",
      "Step 5 needs practitioner level skill and KDD Educations can be connected for the same.",
    ],
    muted: true,
  },
  {
    eyebrow: "Section 3: Fast tracking IKS for interview",
    title: "Preparing industry aware students",
    image: "/new/2.png",
    imageAlt:
      "Eight-hour IKS interview preparation path: introductory session, Udemy course, industry exposure session, and self-practice creating IKS artefacts.",
    imageWidth: 2375,
    imageHeight: 979,
    text: [
      "In approximately 8 hours students can comfortably add IKS in their CV and gain advantage of this differentiating skill in the interview.",
      "It will be split into four steps, understanding why IKS is required for students, going through Udemy course, a session by KDD Educations to enhance their understanding of IKS and finally producing a couple of artefacts based on IKS of the domain of the interviewing company.",
    ],
    imageFirst: true,
  },
  {
    eyebrow: "Section 4: Updating CV - An example",
    title: "Tips on what to update in the CV",
    image: "/images/iks-cv-example.png",
    imageAlt:
      "Example CV showing how to present Industry Knowledge Structure skills, a profile summary, and course completion.",
    imageWidth: 1672,
    imageHeight: 940,
    text: [
      "A sample is provided on how to update CV to reflect this skill. There are 3 places where the CV need to be updated.",
      "1. Add a line in the summary section of the CV.",
      "2. Add Industry Knowledge Structure (IKS) in the skill section.",
      "3. Provide a hyperlink of the Udemy course completion for better credibility.",
    ],
    muted: true,
  },
];


function Header() {
  return <SiteHeader active="applications" />;
}

function PhotoCard() {
  return (
    <div className="relative aspect-[1.64] w-full overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(8,28,53,0.22)]">
      <Image
        src="/figma-assets/industry-aware-students.png"
        alt="Student learning industry knowledge"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 590px, 100vw"
      />
    </div>
  );
}

function ContentSection({
  section,
}: {
  section: (typeof sections)[number];
}) {
  const image = (
    <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_28px_70px_rgba(8,28,53,0.12)]">
      <Image
        src={section.image}
        alt={section.imageAlt}
        width={section.imageWidth}
        height={section.imageHeight}
        className="h-auto w-full object-contain"
        sizes="(min-width: 1024px) 616px, 100vw"
      />
    </div>
  );
  const text = (
    <div>
      {section.eyebrow ? (
        <p className="mb-10 text-center text-[22px] font-bold leading-[1.2] text-[#2563eb] sm:text-[28px] lg:text-left">
          {section.eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[34px] font-extrabold leading-[1.07] tracking-[-0.045em] text-[#11213a] sm:text-[56px]">
        {section.title}
      </h2>
      <div className="mt-6 space-y-5 text-lg leading-[1.58] text-[#64748b]">
        {section.text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );

  return (
    <section className={section.muted ? "bg-[#f6f8fc]" : "bg-white"}>
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:px-0 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          {section.imageFirst ? (
            <>
              {image}
              {text}
            </>
          ) : (
            <>
              {text}
              {image}
            </>
          )}
        </div>
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

export default function IndustryAwareStudents() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <Header />

      <section className="bg-[radial-gradient(circle_at_15%_15%,#ffffff_0%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-16 pt-12 lg:min-h-[725px] lg:grid-cols-[minmax(0,627px)_minmax(0,579px)] lg:items-start lg:px-0">
          <div>
            <p className="text-[13px] font-bold text-[#2563eb]">
              Applications of KDD / Industry-Aware Students
            </p>
            <h1 className="mt-20 max-w-[627px] font-display text-[42px] font-extrabold leading-[1.02] tracking-[-0.057em] text-[#11213a] sm:text-[58px] lg:text-[74px]">
              Prepare students for the{" "}
              <span className="text-[#2563eb]">world of industry.</span>
            </h1>
            <p className="mt-8 max-w-[627px] text-[19px] leading-[1.6] text-[#64748b]">
              Helping students become industry-aware is one of the 36 identified use
              cases of KDD - and a current focus area.
            </p>
            <p className="mt-6 max-w-[627px] text-[19px] leading-[1.6] text-[#64748b]">
              The objective is to bridge academia and industry through structured
              exposure to real-world business environments, strengthening understanding
              and employability.
            </p>
            <p className="mt-6 max-w-[627px] text-[19px] leading-[1.6] text-[#64748b]">
              Here are the details through which students gain an overall exposure of industry knowledge.
            </p>
          </div>
          <PhotoCard />
        </div>
      </section>

      {sections.map((section) => (
        <ContentSection key={section.title} section={section} />
      ))}

      <CtaSection />
      <Footer />
    </main>
  );
}
