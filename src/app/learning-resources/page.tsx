import InitialHomeSections from "@/components/InitialHomeSections";
import { learningBooks as books } from "@/lib/learning-resources";
import Image from "next/image";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { createMetadata, getRouteSeo } from "@/lib/seo";

export const metadata = createMetadata(getRouteSeo("/learning-resources"));

const categories = [
  ["Videos", "videos"],
  ["Books", "books"],
  ["Presentation", "presentation"],
  ["Articles & more", "articles"],
];
const shortVideos = [
  { title: "What is Industry Knowledge Structure?", image: "short-video-1.png", url: "https://www.youtube.com/watch?v=xlOg7u7ksww" },
  { title: "Why do we need Industry Knowledge Structure?", image: "short-video-2.png", url: "https://youtu.be/DqqUbPWAheY" },
  { title: "How is Industry Knowledge Structure organized?", image: "short-video-3.png", url: "https://www.youtube.com/watch?v=U8t4_IFo8Go" },
];
const longVideos = [
  { title: "Industry Knowledge Structure · Part 1: Introduction & high-level understanding", image: "long-video-1.png", url: "https://www.youtube.com/watch?v=Aq898dFD7z4" },
  { title: "Industry Knowledge Structure · Part 2: From context to knowledge nodes", image: "long-video-2.png", url: "https://www.youtube.com/watch?v=LzRxbqnzNUg" },
];

const articles = [
  {
    type: "Article · BA Digest",
    title: "A common structure to learn multiple industry domains",
    description: "An article in the Q1 2023 edition of BA Digest (at Page 41) explains KDD in a layman language particularly relevant to the business analysis community.",
    url: "https://www.blackmetric.com/wp-content/uploads/2023/01/BA-Digest-23-Q1-v1.pdf",
    action: "Read article",
  },
  {
    type: "Conference · ISEC 2024 / ACM",
    title: "A Framework for Structured Industry Knowledge for Requirement Understanding in Software Development",
    description: "A half-day tutorial based on the KDD concept, delivered in ISEC 2024 at IIIT Bangalore.",
    url: "https://dl.acm.org/doi/abs/10.1145/3641399.3641429",
    action: "View paper",
  },
  {
    type: "Research · Compute 2022 / ACM",
    title: "Seeding industry knowledge in computer science education",
    description: "A paper based on the KDD concept, presented at the Compute conference 2022 of ACM at Manipal University, Jaipur.",
    url: "https://dl.acm.org/doi/10.1145/3561833.3564559",
    action: "View paper",
  },
  {
    type: "Blog · Cambridge University Press",
    title: "Knowledge Driven Development supplements DevOps",
    description: "A blog from the website of Cambridge University Press links KDD to contemporary ideas.",
    url: "https://www.cambridge.org/core/blog/2018/12/13/knowledge-driven-development-supplements-devops/",
    action: "Read article",
  },
  {
    type: "Article · Medium",
    title: "Can structuring knowledge contain the tide of current information overload?",
    description: "KDD is deterministic and scopes knowledge quantifiably. It can therefore arrest the current tide of information overload. This short article explains this further.",
    url: "https://medium.com/analysts-corner/can-structuring-knowledge-contain-the-tide-of-current-information-overload-b3f3ad1a9baa",
    action: "Read article",
  },
  {
    type: "Webinar · Skill Darpan",
    title: "Digitising industry knowledge for Software Development",
    description: "In this webinar organised by Skill Darpan, the latest concept of KDD is explained in Hinglish.",
    url: "https://www.youtube.com/watch?v=yy40Rfvmf6M",
    action: "Watch webinar",
  },
  {
    type: "Book reference · YourStory",
    title: "Foundations and frontiers: how knowledge management improves organisational learning and business excellence",
    description: "Mr. Madanmohan Rao mentions the book on KDD in this post on yourstory.com.",
    url: "https://yourstory.com/2021/02/foundations-and-frontiers-how-knowledge-management",
    action: "Read article",
  },
  {
    type: "Webinar · Hindi & English",
    title: "KDD for New Government Polytechnic, Patna",
    description: "A webinar on KDD delivered by Anil sir in Hindi and English for students.",
    url: "https://youtu.be/yDh93uF94I0?si=58x5U1RnP_h161tZ",
    action: "Watch webinar",
  },
  {
    type: "Book review · LinkedIn",
    title: "Dr. Randhir Pushpa review",
    description: "Review of the book ‘Knowledge Driven Development’ by Dr. Randhir Pushpa, CEO, ACIES Innovations.",
    url: "https://www.linkedin.com/posts/dr-randhir-pushpa_kdd-knowledgemanagement-reuse-activity-6691558186920636417-TfgX?utm_source=share&utm_medium=member_desktop",
    action: "View review",
  },
];

const container = "mx-auto w-full max-w-[1280px] px-5 py-20 xl:px-0 lg:py-24";
const heading = "font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[46px]";
const button = "inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]";

function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-[#eaf2ff] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.04em] text-[#2563eb]">{children}</span>;
}

function ExternalLink({ href, children, className = "", showArrow = true }: { href: string; children: ReactNode; className?: string; showArrow?: boolean }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}{showArrow && <span aria-hidden="true"> ↗</span>}<span className="sr-only"> (opens in a new tab)</span></a>;
}

function VideoCard({ video }: { video: (typeof shortVideos)[number] }) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-[#dbe5f3] bg-white shadow-[0_10px_24px_rgba(17,33,58,0.05)]">
      <ExternalLink href={video.url} showArrow={false} className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]">
        <div className="relative aspect-video overflow-hidden bg-[#eaf2ff]">
          <Image src={`/learning-resources/${video.image}`} alt="" fill sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw" className="object-contain transition duration-300 group-hover:scale-[1.03]" />
          <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-[#061629]/10"><span className="grid size-14 place-items-center rounded-full bg-white/95 text-xl text-[#2563eb] shadow-lg">▶</span></span>
        </div>
        <div className="p-6">
          <h4 className="font-display text-lg font-bold leading-snug">{video.title}</h4>
          <p className="mt-4 text-sm font-extrabold text-[#2563eb]">Watch on YouTube <span aria-hidden="true">↗</span></p>
        </div>
      </ExternalLink>
    </article>
  );
}

export default function LearningResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-[#11213a]">
      <SiteHeader active="learning" />

      <InitialHomeSections />

      <section className="bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,#edf5ff_100%)]">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2`}>
          <div>

            <Pill>Learning Resources</Pill>
            <h2 className="mt-6 font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.05em] sm:text-[58px] lg:text-[68px]">Build knowledge.<br /><span className="text-[#2563eb]">Connect the dots.</span></h2>
            <h2 className="mt-7 text-base font-bold">Learning objective</h2>
            <p className="mt-3 max-w-[610px] text-lg leading-[1.65] text-[#64748b]">Explore courses, videos, books, presentations and articles that explain how Knowledge Driven Development (KDD) and its constituent Industry Knowledge Structure (IKS) can support industry and academia as a foundational skill.</p>

          </div>
          <div className="overflow-hidden rounded-[24px] border border-[#dbe5f3] bg-white p-4 shadow-[0_24px_60px_rgba(17,33,58,0.12)] sm:p-7">
            <Image src="/learning-resources/resources-overview.png" alt="KDD learning resources: courses, videos, books, presentations, and articles" width={1200} height={600} preload className="h-auto w-full rounded-xl" />
            <div className="mt-5 flex flex-wrap justify-center gap-2 border-t border-[#dbe5f3] pt-5">{categories.map(([label, id]) => <a key={id} href={`#${id}`} className="rounded-full bg-[#f1f6fd] px-3 py-2 text-xs font-bold text-[#2563eb] transition hover:bg-[#dbeafe]">{label}</a>)}</div>
          </div>
        </div>
      </section>

      <nav aria-label="Resource categories" className="border-y border-[#dbe5f3] bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap gap-x-8 gap-y-2 px-5 py-5 xl:px-0">{categories.map(([label, id], index) => <a key={id} href={`#${id}`} className="rounded-md py-2 text-sm font-bold text-[#64748b] transition hover:text-[#2563eb]"><span className="mr-2 text-xs text-[#2563eb]">0{index + 1}</span>{label}</a>)}</div>
      </nav>

      <section id="videos" className="scroll-mt-28 bg-[#f6f8fc]">
        <div className={container}>
          <Pill>Watch & Learn</Pill>
          <h2 className={`${heading} mt-5`}>IKS and KDD, introduced through videos.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#64748b]">Start with three short introductions, then explore the concepts in more depth.</p>
          <h3 className="mt-10 font-display text-xl font-bold">Introducing Industry Knowledge Structure through three short videos</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shortVideos.map(video => <VideoCard key={video.url} video={video} />)}</div>
          <h3 className="mt-12 font-display text-xl font-bold">Introducing Industry Knowledge Structure through long videos</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{longVideos.map(video => <VideoCard key={video.url} video={video} />)}</div>
        </div>
      </section>

      <section id="books" className="scroll-mt-28">
        <div className={container}>
          <Pill>Read & Explore</Pill>
          <h2 className={`${heading} mt-5`}>Books on Knowledge Driven Development.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">{books.map(book => (
            <article key={book.url} className="grid gap-7 rounded-[20px] border border-[#dbe5f3] bg-white p-6 shadow-[0_16px_30px_rgba(18,54,94,0.06)] sm:grid-cols-[160px_1fr]">
              <div className="relative mx-auto h-[250px] w-[160px] self-start"><Image src={`/learning-resources/${book.image}`} alt={`${book.title} book cover`} fill unoptimized={book.image.endsWith(".gif")} sizes="160px" className="object-contain object-top" /></div>
              <div><p className="text-xs font-bold leading-relaxed text-[#2563eb]">{book.publisher}</p><h3 className="mt-3 font-display text-[23px] font-bold leading-tight">{book.title}</h3>{book.subtitle && <p className="mt-2 text-sm font-semibold text-[#64748b]">{book.subtitle}</p>}<p className="mt-4 text-sm leading-[1.65] text-[#64748b]">{book.description}</p><ExternalLink href={book.url} className="mt-5 inline-flex text-sm font-extrabold text-[#2563eb] hover:underline">Read more on Amazon</ExternalLink></div>
            </article>
          ))}</div>
        </div>
      </section>

      <section id="presentation" className="scroll-mt-28 bg-[#061629]">
        <div className={`${container} flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between`}>
          <div className="max-w-[780px]"><Pill>KDD Proposition · PDF</Pill><h2 className={`${heading} mt-5 text-white`}>A short presentation on the potential of KDD.</h2><p className="mt-5 text-lg leading-relaxed text-[#9fb1c7]">Explore the KDD proposition in a downloadable presentation.</p></div>
          <a href="/learning-resources/kdd-proposition.pdf" download className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#2563eb] transition hover:bg-[#eaf2ff]">Download PDF <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="articles" className="scroll-mt-28 bg-[#f6f8fc]">
        <div className={container}>
          <Pill>Keep Exploring</Pill>
          <h2 className={`${heading} mt-5 max-w-[850px]`}>Articles, conferences, webinars, reviews and references.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map(article => (
            <article key={article.url} className="flex flex-col rounded-[20px] border border-[#dbe5f3] bg-white p-7 shadow-[0_10px_24px_rgba(17,33,58,0.04)]">
              <p className="text-xs font-extrabold uppercase leading-relaxed tracking-wide text-[#2563eb]">{article.type}</p>
              <h3 className="mt-5 font-display text-xl font-bold leading-snug">{article.title}</h3>
              <p className="mb-6 mt-4 text-sm leading-[1.7] text-[#64748b]">{article.description}</p>
              <ExternalLink href={article.url} className="mt-auto w-fit text-sm font-extrabold text-[#2563eb] hover:underline">{article.action}</ExternalLink>
            </article>
          ))}</div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
