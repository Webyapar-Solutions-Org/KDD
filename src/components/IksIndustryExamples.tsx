import Image from "next/image";

const industryVideos = [
  {
    title: "Life Insurance",
    image: "/images/iks-examples/life-insurance.png",
    url: "https://youtu.be/bzz4_mu8aM8",
  },
  {
    title: "Banking",
    image: "/images/iks-examples/banking.png",
    url: "https://youtu.be/ltADishFASg",
  },
];

function VideoThumbnail({
  title,
  image,
  url,
}: {
  title: string;
  image: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} (opens in a new tab)`}
      className="group/video relative block overflow-hidden rounded-[18px] border border-[#dbe5f3] bg-[#f6f8fc] shadow-[0_12px_24px_rgba(17,33,58,0.06)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
    >
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={title} fill sizes="(min-width: 1024px) 580px, 100vw" className="object-contain" />
        <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-[#061629]/5 transition group-hover/video:bg-[#061629]/15">
          <span className="grid size-16 place-items-center rounded-full bg-[#2563eb] text-white shadow-lg transition group-hover/video:scale-105">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-7"><path d="m8 5 11 7-11 7V5Z" /></svg>
          </span>
        </span>
      </div>
    </a>
  );
}

export default function IksIndustryExamples() {
  return (
    <div className="space-y-10">
      <div>
        <h4 className="font-display text-xl font-bold leading-snug text-[#11213a] sm:text-2xl">
          Introducing Industry Knowledge Structure through a short video
        </h4>
        <div className="mx-auto mt-6 max-w-[640px]">
          <VideoThumbnail title="Introducing Industry Knowledge Structure" image="/images/iks-examples/introduction.png" url="https://youtu.be/DqqUbPWAheY" />
        </div>
      </div>
      <div className="border-t border-[#dbe5f3] pt-10">
        <h4 className="font-display text-xl font-bold leading-snug text-[#11213a] sm:text-2xl">
          Quick run through of Life Insurance and Banking using IKS
        </h4>
        <div className="mt-6 grid gap-7 sm:grid-cols-2">
          {industryVideos.map((video) => (
            <div key={video.url}>
              <VideoThumbnail {...video} />
              <p className="mt-4 text-center font-display text-lg font-bold text-[#11213a]">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
