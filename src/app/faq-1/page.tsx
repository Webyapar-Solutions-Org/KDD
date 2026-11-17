import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/faq-1"));

const faqs = [
  {
    question: "What is the motivation for creating this website?",
    answer: <p>Structure is always better than lack of structure. KDD provides a knowledge structure that is intuitive and has the potential to assist industry and academia in their quest for quality delivery. The purpose of this website is to bring KDD out from a concept to a stage where a knowledge worker can actually benefit.</p>,
  },
  {
    question: "What are the major challenges where KDD can assist?",
    answer: <>
      <p>Here are the four main challenges in industry and academia where KDD can positively influence:</p>
      <ul>
        <li>Project delivery issues related to gaps in requirement and test coverage and knowledge erosion due to attrition and not keeping the project artefacts up to date.</li>
        <li>Long learning curve in acquiring industry knowledge (such as knowledge of insurance, banking and retail) as it is considered vast, subjective and fathomless.</li>
        <li>Enterprise knowledge is stored in artefacts of heterogeneous formats (i.e., audio, video, presentation, spreadsheet, document, blog, wiki) resulting in delays in maintaining and retrieving it.</li>
        <li>Lack of formal exposure of industry knowledge in academia — it is a known industry-academia gap.</li>
      </ul>
    </>,
  },
  {
    question: "What is the root cause for these challenges?",
    answer: <p>These challenges allude to a lack of proper understanding of the domain knowledge related to the task being performed. The main challenge in learning domain (industry) knowledge is that it is vast, subjective and mostly available in unstructured formats. Manuals, specifications, blogs, audios, videos and presentations are examples of unstructured knowledge formats.</p>,
  },
  {
    question: "What is the KDD proposition to address these challenges?",
    answer: <p>Knowledge Driven Development (KDD) proposes a domain-agnostic structure that quantifies industry knowledge. It also extends this structure to cover enterprise knowledge and reuses it to drive software development in an artefact-less project delivery environment.</p>,
  },
  {
    question: "What is KDD?",
    answer: <>
      <p>Knowledge Driven Development (KDD) is a combination of a framework and a methodology based on the reuse of structured industry and enterprise knowledge that in turn streamlines execution activities leading to a high-quality working product.</p>
      <p className="rounded-xl border border-[#dbe5f3] bg-[#f1f6fd] p-5 font-bold text-[#2563eb]">Knowledge Driven Development (KDD) = Domain Knowledge Framework (DKF) + Atomic Knowledge Model (AKM)</p>
      <p><strong>Domain Knowledge Framework (DKF)</strong> is a simple and common framework to help acquire knowledge of multiple industries.</p>
      <p><strong>Atomic Knowledge Model (AKM)</strong> is a project delivery methodology based on a single source of structured project knowledge (based on enterprise knowledge structure) that is easy to specify and maintain and drives the project.</p>
    </>,
  },
  {
    question: "What differentiation does KDD bring?",
    answer: <ul>
      <li>Structuring industry and enterprise knowledge makes it quantifiable.</li>
      <li>Domain-agnostic industry and enterprise knowledge structure.</li>
      <li>Empowering IT project delivery without producing project delivery artefacts.</li>
      <li>One all-encompassing structure addressing multiple dimensions of industry and enterprise knowledge — product, process, business rule, business data, etc.</li>
      <li>Navigating from high-level to detailed-level knowledge seamlessly in four levels of hierarchy.</li>
    </ul>,
  },
  {
    question: "How can industry and academia benefit from KDD?",
    answer: <ul>
      <li>KDD structure is a conduit to link the mission and vision of an organization to the detailed knowledge required to drive initiatives and projects.</li>
      <li>KDD structure provides a single source of structured knowledge that may not only bring significant savings in project delivery without compromising on quality, but may also reduce the dependency on Subject Matter Experts (SMEs) and save on the onboarding cost of inducting a new employee.</li>
      <li>KDD is an asset to the learning and development function of an organization. It not only accelerates gaining domain competency, but also makes training measurable and accountable towards the day job of a knowledge worker.</li>
      <li>KDD formalizes exposing industry knowledge to students of computer science and management (due to its domain-agnostic structure), increasing their employability quotient.</li>
    </ul>,
  },
  {
    question: "How can I start the journey of gaining an understanding of KDD to realize the benefit it claims?",
    answer: <ul>
      <li>There are two books and many papers and articles in our <Link href="/learning-resources">Learning Resources</Link> that can be used to gain a basic understanding of KDD.</li>
      <li>A demo version of the KDD tool is planned to be made available through this website to help visualize how KDD can help a knowledge worker.</li>
      <li>We offer various aids to help industry and academia adopt this concept and benefit from it. Visit our <Link href="/about-us">About Us</Link> page to learn more.</li>
    </ul>,
  },
  {
    question: "Is KDD relevant in this age of generative AI where all the information is available to us — we just have to ask a relevant question?",
    answer: <>
      <p>Generative AI uses a combination of deep learning techniques and sophisticated neural network structures to understand and respond to a question. The more information generative AI has access to, the better answer it will generate. The generative AI structure is complex and not humanly readable.</p>
      <p>KDD is based on a combination of hierarchical and knowledge graph-based structures. It acts as a container to store information in a structured way both at high level and detailed level that is fit for purpose for a knowledge worker performing their day job. The structure is intuitive and humanly readable. The structure quantifies the information and reduces redundancy, duplicity and inconsistency, making it easily maintainable.</p>
      <p>It provides a mechanism where a knowledge worker can get the information they are looking for in up to four layers of hierarchy.</p>
      <p>To exploit generative AI effectively, one needs to know how to frame a relevant question. This is not easy, as demonstrated by the emergence of prompt engineering, and requires necessary domain knowledge. This gap can be filled by the KDD structures if their initial hierarchical levels are populated for the respective domains.</p>
      <p>The more information the KDD structure holds, the more useful it becomes for a knowledge worker. Generative AI can be used to populate information into the KDD structures, particularly at the detailed, later levels of the hierarchy, so that the full potential of KDD can be realized.</p>
    </>,
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <SiteHeader active="faq" />

      <section className="bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,#edf5ff_100%)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-12 sm:pb-20 xl:px-0">
          <p className="text-[13px] font-bold text-[#2563eb]"><Link href="/">Home</Link> / FAQs</p>
          <span className="mt-12 inline-flex rounded-full bg-[#eaf2ff] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.04em] text-[#2563eb]">Your questions, answered</span>
          <h1 className="mt-6 max-w-[850px] font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.05em] sm:text-[58px] lg:text-[70px]">Frequently asked <span className="text-[#2563eb]">questions.</span></h1>
          <p className="mt-6 max-w-[680px] text-lg leading-[1.65] text-[#64748b]">Understand Knowledge Driven Development, what it offers, and how it can support your learning and work.</p>
        </div>
      </section>

      <section aria-label="Questions and answers" className="bg-[#f6f8fc]">
        <div className="mx-auto grid w-full max-w-[1280px] items-start gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:py-24 xl:px-0">
          <div className="grid min-w-0 gap-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} id={`question-${index + 1}`} open={index === 0} className="group scroll-mt-28 rounded-[18px] border border-[#dbe5f3] bg-white shadow-[0_8px_20px_rgba(17,33,58,0.03)] open:border-[#b9d2ff]">
                <summary className="flex cursor-pointer list-none items-start gap-4 rounded-[18px] p-5 transition hover:bg-[#f1f6fd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb] sm:p-7 [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-[#eaf2ff] text-xs font-extrabold text-[#2563eb]">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="flex-1 pt-1 font-display text-base font-bold leading-[1.5] sm:text-lg">{faq.question}</h2>
                  <span aria-hidden="true" className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-[#f1f6fd] text-xl leading-none text-[#2563eb] group-open:hidden">+</span>
                  <span aria-hidden="true" className="mt-1 hidden size-7 shrink-0 place-items-center rounded-full bg-[#eaf2ff] text-xl leading-none text-[#2563eb] group-open:grid">−</span>
                </summary>
                <div className="mx-5 border-t border-[#e7edf6] py-6 text-[15px] leading-[1.8] text-[#64748b] sm:mx-7 sm:pl-12 [&_a]:font-bold [&_a]:text-[#2563eb] [&_a]:underline [&_a]:underline-offset-4 [&_li+li]:mt-3 [&_li]:pl-1 [&_li]:marker:text-[#2563eb] [&_p+p]:mt-4 [&_strong]:font-bold [&_strong]:text-[#11213a] [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_p+ul]:mt-4">{faq.answer}</div>
              </details>
            ))}
          </div>

          <aside className="grid gap-6 lg:sticky lg:top-28">
            <div className="rounded-[22px] border border-[#dbe5f3] bg-white p-7">
              <span aria-hidden="true" className="grid size-12 place-items-center rounded-[14px] bg-[#eaf2ff] font-display text-2xl font-extrabold text-[#2563eb]">?</span>
              <h2 className="mt-6 font-display text-[23px] font-extrabold leading-tight">Still have a question?</h2>
              <p className="mt-4 text-sm leading-[1.7] text-[#64748b]">Please reach us if you cannot find an answer to your question.</p>
              <a href="mailto:ceo@kddeducations.com" className="mt-5 inline-block break-all text-sm font-bold text-[#2563eb] hover:underline">ceo@kddeducations.com</a>
              <Link href="/about-us" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1d4ed8]">About Us <span aria-hidden="true">→</span></Link>
            </div>
            <div className="rounded-[22px] bg-[#061629] p-7 text-white">
              <p className="text-xs font-extrabold uppercase tracking-wide text-[#9fb4ca]">Continue learning</p>
              <h2 className="mt-4 font-display text-[23px] font-extrabold leading-tight">Explore KDD at your own pace.</h2>
              <p className="mt-4 text-sm leading-[1.7] text-[#9fb1c7]">Courses, videos, books and practical resources to help you get started.</p>
              <Link href="/learning-resources" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#93c5fd] hover:underline">Learning Resources <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
