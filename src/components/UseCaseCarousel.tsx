"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import styles from "./UseCaseCarousel.module.css";

const slides = [
  { title: "Industry Learning", alt: "Industry Learning use cases: job readiness, faster onboarding, structured domain understanding, reduced dependence on SMEs, industry transitions, and continuous upskilling." },
  { title: "Software Development", alt: "Software Development use cases: faster onboarding, knowledge transfer, a single source of truth, business validation of AI-generated code, impact analysis, and reusable enterprise knowledge." },
  { title: "Business Analysis and Testing", alt: "Business Analysis and Testing use cases: structured requirement gathering, complete requirements, solution design, test-case identification, test optimization, and requirement-to-test traceability." },
  { title: "Enterprise Knowledge Management", alt: "Enterprise Knowledge Management use cases: common knowledge structures, connection with industry knowledge, a central repository, knowledge transfer, institutional memory, and reuse across projects." },
  { title: "Academia and Research", alt: "Academia and Research use cases: student employability, structured curricula, industry assignments, interdisciplinary learning, knowledge representation research, and industry-academia collaboration." },
  { title: "Gen AI, RAG and Prompt Engineering", alt: "Gen AI, RAG and Prompt Engineering use cases: structured RAG input, accurate AI responses, reduced hallucinations, contextual prompts, domain-specific language models, and enterprise AI knowledge." },
];

export default function UseCaseCarousel() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div role="region" aria-label="KDD application area use cases" aria-roledescription="carousel" className="mt-10 min-w-0">
      <div className="overflow-hidden rounded-[22px] border border-[#dbe5f3] bg-white shadow-[0_16px_40px_rgba(17,33,58,0.07)]">
        <Swiper
          id="use-case-slides"
          className={styles.carousel}
          modules={[A11y, Keyboard, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          rewind
          grabCursor
          keyboard={{ enabled: true, onlyInViewport: true }}
          pagination={{ clickable: true }}
          a11y={{
            containerRoleDescriptionMessage: "carousel",
            itemRoleDescriptionMessage: "slide",
            paginationBulletMessage: "Go to application area {{index}}",
          }}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <figure>
                <Image
                  src={`/use-cases/application-${index + 1}.png`}
                  alt={slide.alt}
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  className="h-auto w-full object-contain"
                />
                <figcaption className="flex flex-col gap-3 border-t border-[#dbe5f3] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <h3 className="font-display text-lg font-bold sm:text-xl">{slide.title}</h3>
                  <a href={`/use-cases/application-${index + 1}.png`} target="_blank" rel="noopener noreferrer" className="w-fit text-sm font-bold text-[#2563eb] hover:underline">
                    View full image <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p aria-live="polite" aria-atomic="true" className="text-sm font-semibold text-[#64748b]">
          <span className="font-extrabold text-[#2563eb]">{String(activeIndex + 1).padStart(2, "0")}</span> / {String(slides.length).padStart(2, "0")}
          <span className="sr-only">: {slides[activeIndex].title}</span>
        </p>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous application area" aria-controls="use-case-slides" disabled={!swiper} onClick={() => swiper?.slidePrev()} className="grid size-11 place-items-center rounded-full border border-[#dbe5f3] bg-white text-xl text-[#2563eb] transition hover:border-[#2563eb] hover:bg-[#eaf2ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb] disabled:opacity-40"><span aria-hidden="true">←</span></button>
          <button type="button" aria-label="Next application area" aria-controls="use-case-slides" disabled={!swiper} onClick={() => swiper?.slideNext()} className="grid size-11 place-items-center rounded-full bg-[#2563eb] text-xl text-white transition hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb] disabled:opacity-40"><span aria-hidden="true">→</span></button>
        </div>
      </div>
    </div>
  );
}
