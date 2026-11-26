import Image from "next/image";
import { frameworkStructure } from "@/lib/framework-structure";

export default function FrameworkStructureSection() {
  return (
    <section aria-labelledby="kdd-structure-heading" className="bg-[#071b34]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 lg:py-24 xl:px-0">
        <div className="grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <div>
            <span className="inline-flex rounded-full bg-[#3b82f62b] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.05em] text-[#8fc0ff]">How KDD Works</span>
            <h2 id="kdd-structure-heading" className="mt-6 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-[52px]">KDD structure, <span className="text-[#8fc0ff]">explained.</span></h2>
          </div>
          <p className="text-lg leading-[1.65] text-[#b8c7d9]">Explore the building blocks of KDD, how they connect industry and enterprise knowledge, and what changes when that knowledge drives delivery.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold text-[#b8c7d9]">
          <span className="rounded-full border border-white/15 px-4 py-2">{frameworkStructure.length} topics</span>
          <span className="rounded-full border border-white/15 px-4 py-2">Original framework diagrams</span>
          <span className="rounded-full border border-white/15 px-4 py-2">Select a topic to explore</span>
        </div>

        <div className="mt-8 grid gap-4">
          {frameworkStructure.map((topic, index) => (
            <details key={topic.title} name="kdd-structure-topics" open={index === 0} className="group overflow-hidden rounded-[20px] border border-white/15 bg-[#102e50] open:border-[#b9d2ff] open:bg-white">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#60a5fa] group-open:text-[#11213a] sm:gap-5 sm:p-7 [&::-webkit-details-marker]:hidden">
                <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#1d4775] text-sm font-extrabold text-[#93c5fd] group-open:bg-[#eaf2ff] group-open:text-[#2563eb]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="flex-1 font-display text-base font-bold leading-snug sm:text-xl">{topic.title}</h3>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-[#93c5fd] transition-transform group-open:rotate-180 group-open:text-[#2563eb]"><path d="m6 9 6 6 6-6" /></svg>
              </summary>
              <div className={`mx-5 grid gap-7 border-t border-[#dbe5f3] py-7 sm:mx-7 lg:items-start lg:gap-10 ${topic.image ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]" : ""}`}>
                <div className="space-y-4 text-base leading-[1.75] text-[#64748b]">{topic.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
                {topic.image ? (
                <figure className="min-w-0">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[14px] border border-[#dbe5f3] bg-[#f6f8fc]">
                    <Image src={topic.image.startsWith("/") ? topic.image : `/images/kdd-structure/${topic.image}`} alt={`${topic.title} diagram`} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-contain" />
                  </div>
                  <figcaption className="mt-4">
                    <a href={topic.image.startsWith("/") ? topic.image : `/images/kdd-structure/${topic.image}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#2563eb] hover:underline">View full diagram <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
                  </figcaption>
                </figure>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
