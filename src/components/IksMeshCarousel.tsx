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

const industries = [
  { name: "Agriculture", image: "/images/industry-mesh/2.png" },
  { name: "Retail", image: "/images/industry-mesh/3.png" },
  { name: "Pharmaceuticals", image: "/images/industry-mesh/4.png" },
];

export default function IksMeshCarousel() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div role="region" aria-label="Product-Process mesh for selected industries" aria-roledescription="carousel" className="mx-auto w-full min-w-0 max-w-[1000px]">
      <div className="overflow-hidden rounded-[18px] border border-[#dbe5f3] bg-white">
        <Swiper
          id="iks-mesh-slides"
          className={styles.carousel}
          modules={[A11y, Keyboard, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          rewind
          grabCursor
          observer
          observeParents
          keyboard={{ enabled: true, onlyInViewport: true }}
          pagination={{ clickable: true }}
          a11y={{ paginationBulletMessage: "Go to industry {{index}}" }}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        >
          {industries.map(({ name: industry, image }) => (
            <SwiperSlide key={industry}>
              <a href={image} target="_blank" rel="noopener noreferrer" aria-label={`View full ${industry} mesh diagram (opens in a new tab)`}>
                <Image src={image} alt={`Snippets of Industry Knowledge Structure: ${industry} Product-Process mesh`} width={1280} height={720} sizes="(min-width: 1024px) 1000px, 100vw" className="h-auto w-full object-contain" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p aria-live="polite" aria-atomic="true" className="text-sm font-semibold text-[#64748b]">
          <span className="font-extrabold text-[#2563eb]">{activeIndex + 1}</span> / {industries.length}
          <span className="sr-only">: {industries[activeIndex].name}</span>
        </p>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous industry" aria-controls="iks-mesh-slides" disabled={!swiper} onClick={() => swiper?.slidePrev()} className="grid size-11 place-items-center rounded-full border border-[#dbe5f3] bg-white text-xl text-[#2563eb] transition hover:bg-[#eaf2ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb] disabled:opacity-40"><span aria-hidden="true">←</span></button>
          <button type="button" aria-label="Next industry" aria-controls="iks-mesh-slides" disabled={!swiper} onClick={() => swiper?.slideNext()} className="grid size-11 place-items-center rounded-full bg-[#2563eb] text-xl text-white transition hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb] disabled:opacity-40"><span aria-hidden="true">→</span></button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4">
        {industries.map(({ name: industry, image }, index) => (
          <button key={industry} type="button" aria-label={`Show ${industry} mesh diagram`} aria-pressed={index === activeIndex} onClick={() => swiper?.slideTo(index)} className={`overflow-hidden rounded-lg border-2 bg-white p-1 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb] ${index === activeIndex ? "border-[#2563eb]" : "border-[#dbe5f3] hover:border-[#93c5fd]"}`}>
            <Image src={image} alt="" width={1280} height={720} sizes="(min-width: 1024px) 320px, 33vw" className="h-auto w-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
