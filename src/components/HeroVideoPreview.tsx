"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroVideoPreview({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative aspect-[640/427] w-full overflow-hidden rounded-[14px] bg-black shadow-[0_20px_36px_rgba(17,33,58,0.2)]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          title="Introducing Industry Knowledge Structure"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        aria-label="Play introduction to Industry Knowledge Structure"
        className="group relative block aspect-[640/427] w-full cursor-pointer overflow-hidden rounded-[14px] shadow-[0_20px_36px_rgba(17,33,58,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
      >
        <Image
          src="/images/site-updates/life-insurance-course-hero.png"
          alt="Life Insurance industry knowledge connecting policy, underwriting, premium, and claims"
          fill
          preload
          className="object-contain"
          sizes="(min-width: 1024px) 580px, 100vw"
        />
        <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-[#061629]/10 transition group-hover:bg-[#061629]/20">
          <span className="grid size-16 place-items-center rounded-full bg-white/95 shadow-[0_18px_34px_rgba(17,33,58,0.25)] transition group-hover:scale-110 motion-reduce:transform-none">
            <Image src="/figma-assets/play-course-preview.svg" alt="" width={24} height={24} />
          </span>
        </span>
      </button>
  );
}
