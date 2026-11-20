import Image from "next/image";
import Link from "next/link";

export default function SiteLogo({ inverse = false, showName = true }: { inverse?: boolean; showName?: boolean }) {
  return (
    <Link href="/" aria-label="KDD Educations home" className="flex shrink-0 items-center gap-2.5">
      <Image
        src="/branding/kdd-logo.png"
        alt="KDD Educations logo"
        width={1312}
        height={1199}
        sizes="72px"
        className={`h-auto w-[72px] shrink-0 ${inverse ? "brightness-[2]" : ""}`}
      />
      <span className="flex flex-col gap-1">
        {showName && (
          <span className={`font-display text-[16px] font-extrabold ${inverse ? "text-white" : "text-[#11213a]"}`}>
            KDD Educations
          </span>
        )}
        <span className={`text-[10px] font-semibold ${inverse ? "text-[#9fb1c7]" : "text-[#64748b]"}`}>
          Structuring Industry Knowledge
        </span>
      </span>
    </Link>
  );
}
