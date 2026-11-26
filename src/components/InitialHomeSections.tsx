import Image from "next/image";
import Link from "next/link";
import HeroVideoPreview from "@/components/HeroVideoPreview";
import { udemyCourseUrl } from "@/lib/course";

const heroStats = [
  { icon: "/figma-assets/clock.svg", label: "1 hour" },
  { icon: "/figma-assets/book-open.svg", label: "Beginner friendly" },
  { icon: "/figma-assets/signal.svg", label: "Lifetime access" },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#eaf2ff] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.04em] text-[#2563eb]">
      {children}
    </span>
  );
}

export default function InitialHomeSections() {
  return (
      <section className="bg-[radial-gradient(circle_at_25%_20%,#ffffff_0%,#f5f9ff_38%,#edf5ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] items-start gap-10 px-5 pb-16 pt-12 sm:pb-20 lg:min-h-[767px] lg:grid-cols-[minmax(0,630px)_minmax(0,580px)] lg:px-0">
          <div>
            <p className="mb-8 text-[13px] font-bold text-[#2563eb]"><Link href="/">Home</Link> / Learning Resources</p>
            <Pill>Udemy Course</Pill>
            <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#11213a] sm:text-[58px] lg:text-[70px]">
              Industry Knowledge Structure -{" "}
              <span className="text-[#2563eb]">Simplifying Life Insurance</span>
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-[1.55] text-[#64748b]">
              Learn Industry Knowledge Structure (IKS) as a practical skill. Learn Life Insurance using IKS. Understand how banking knowledge can be learnt using IKS. Finally, learn how structured learning helps improve project delivery and operational effectiveness.
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
              href={udemyCourseUrl} target="_blank" rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#ff5659] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(255,86,89,0.22)]"
            >
              Enroll on Udemy &rarr;
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[580px]">
            <HeroVideoPreview videoId="xlOg7u7ksww" />
          </div>
        </div>
      </section>
  );
}
