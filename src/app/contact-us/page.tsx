import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/contact-us"));

const visionPoints = [
  "Structure and navigate knowledge across industries",
  "Complement software development and project methodologies",
  "Support enterprise knowledge management",
  "Bridge the gap between academia and industry",
  "Enable structured and reusable industry knowledge",
];

const focusCards = [
  {
    number: "01",
    title: "Students",
    text: "Gain meaningful industry exposure before entering the workforce.",
    highlighted: true,
  },
  {
    number: "02",
    title: "New Professionals",
    text: "Understand the language, systems, and context of a new domain faster.",
  },
  {
    number: "03",
    title: "Working Professionals",
    text: "Strengthen, connect, and expand existing industry knowledge.",
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
  return <SiteHeader active="contact" />;
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

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <Header />

      <section className="bg-[radial-gradient(circle_at_20%_15%,#ffffff_0%,#f5f9ff_42%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 pb-16 pt-12 lg:min-h-[669px] lg:grid-cols-[minmax(0,625px)_minmax(0,565px)] lg:items-start lg:px-0">
          <div>
            <p className="text-[13px] font-bold text-[#2563eb]">
              Home &gt; Learning Resources
            </p>
            <div className="mt-12">
              <Pill>About KDD Educations</Pill>
            </div>
            <h1 className="mt-5 max-w-[625px] font-display text-[42px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#11213a] sm:text-[58px] lg:text-[74px]">
              Knowledge made structured, accessible, and practical.
            </h1>
            <p className="mt-7 max-w-[625px] text-[19px] leading-[1.6] text-[#64748b]">
              KDD Educations is transforming how industry and enterprise knowledge
              is structured, learned, and applied.
            </p>
          </div>

          <aside
            id="contact"
            className="rounded-[24px] border border-[#b9d2ff] bg-white p-6 shadow-[0_18px_25px_rgba(18,54,94,0.09)] sm:p-[38px]"
          >
            <Pill>Contact Us</Pill>
            <h2 className="mt-4 font-display text-[28px] font-extrabold text-[#11213a]">
              Let&apos;s start a conversation.
            </h2>
            <p className="mt-3 text-[19px] leading-[1.6] text-[#64748b]">
              For questions related to our courses, research, and industry-academia
              initiatives, please contact us.
            </p>
            <a
              href="mailto:ceo@kddeducations.com"
              className="mt-8 flex items-center gap-[15px] rounded-2xl bg-[#eaf2ff] p-[18px]"
            >
              <span className="grid size-[45px] shrink-0 place-items-center rounded-[13px] bg-white text-base font-extrabold text-[#2563eb]">
                @
              </span>
              <span className="break-all text-sm font-extrabold text-[#2563eb]">
                ceo@kddeducations.com
              </span>
            </a>
            <p className="mt-7 text-sm font-bold text-[#11213a]">
              Connect with us on social media
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid size-[46px] place-items-center rounded-[14px] border border-[#dbe5f3]"
              >
                <Image src="/figma-assets/linkedin.svg" alt="" width={21} height={21} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid size-[46px] place-items-center rounded-[14px] border border-[#dbe5f3]"
              >
                <Image src="/figma-assets/youtube.svg" alt="" width={24} height={17} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-20 lg:min-h-[434px] lg:grid-cols-[minmax(0,502px)_minmax(0,679px)] lg:gap-[100px] lg:px-0 lg:py-24">
          <div>
            <Pill>Who We Are</Pill>
            <h2 className="mt-5 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#11213a] sm:text-[52px]">
              Connecting knowledge with execution.
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-[1.6] text-[#64748b] lg:pt-[50px]">
            <p>
              KDD Educations is an initiative focused on transforming how industry
              and enterprise knowledge is structured, learned, and applied.
            </p>
            <p>
              Built on research and practical experience, Knowledge-Driven Development
              (KDD) connects structured knowledge with execution to support better
              learning, project delivery, and knowledge management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081c35]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-20 lg:min-h-[645px] lg:grid-cols-[minmax(0,476px)_minmax(0,714px)] lg:items-center lg:gap-[90px] lg:px-0 lg:py-24">
          <div>
            <Pill dark>Our Vision</Pill>
            <h2 className="mt-5 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-[52px]">
              A reusable knowledge framework for industry and education.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-[#b6c5d8]">
              We envision KDD as a practical framework that strengthens how
              organizations, professionals, and students understand and apply
              knowledge.
            </p>
          </div>
          <div className="grid gap-3">
            {visionPoints.map((point) => (
              <div
                key={point}
                className="grid grid-cols-[42px_1fr] items-center gap-3.5 rounded-[15px] border border-white/10 bg-[#102e50] p-[18px] text-white"
              >
                <span className="grid size-9 place-items-center rounded-full bg-[#2563eb] text-base font-extrabold">
                  &#10003;
                </span>
                <p className="text-base leading-[1.6]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fc]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:min-h-[734px] lg:px-0 lg:py-24">
          <div className="max-w-[780px]">
            <Pill>Our Current Focus</Pill>
            <h2 className="mt-5 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#11213a] sm:text-[52px]">
              Structured Industry Knowledge
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-[#64748b]">
              We are developing introductory industry learning resources that help
              people understand their domain faster and connect knowledge with real work.
            </p>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {focusCards.map((card) => (
              <article
                key={card.number}
                className={`rounded-[18px] border p-7 shadow-[0_10px_15px_rgba(21,52,88,0.04)] ${
                  card.highlighted
                    ? "border-[#8ab4ff] bg-linear-to-b from-white to-[#eff5ff]"
                    : "border-[#dbe5f3] bg-white"
                }`}
              >
                <div className="grid size-11 place-items-center rounded-[13px] bg-[#eaf2ff] text-base font-extrabold text-[#2563eb]">
                  {card.number}
                </div>
                <h3 className="mt-5 font-display text-[21px] font-bold text-[#11213a]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#64748b]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-7 rounded-[18px] border border-[#b9d2ff] bg-[#eaf2ff] px-7 py-6">
            <p className="font-display text-xl font-bold text-[#2563eb]">
              Making industry knowledge more structured, accessible, and practical.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
