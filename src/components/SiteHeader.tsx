"use client";

import Link from "next/link";
import { useState } from "react";

type ActiveSection = "explore" | "applications" | "learning" | "contact";

const exploreLinks = [
  { label: "Why Domain Knowledge", href: "/why-domain-knowledge" },
  { label: "KDD Framework", href: "/kdd-framework" },
  {
    label: "Industry Knowledge Structure",
    href: "/industry-knowledge-structure",
  },
];

const applicationLinks = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Industry-Aware Students", href: "/industry-aware-students" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="grid size-[38px] place-items-center rounded-[11px] bg-[#2563eb] font-display text-[17px] font-extrabold text-white">
        K
      </div>
      <span className="font-display text-[17px] font-extrabold text-[#11213a]">
        KDD Educations
      </span>
    </Link>
  );
}

function Dropdown({
  label,
  active,
  links,
}: {
  label: string;
  active: boolean;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={`py-2 text-sm font-semibold ${
          active ? "text-[#2563eb]" : "text-[#11213a]"
        }`}
      >
        {label}
      </button>
      <div className="invisible absolute right-0 top-full z-30 min-w-64 rounded-xl border border-[#dbe5f3] bg-white p-2 opacity-0 shadow-[0_18px_35px_rgba(17,33,58,0.12)] transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#11213a] hover:bg-[#eaf2ff] hover:text-[#2563eb]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SiteHeader({ active }: { active: ActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe5f3] bg-white/95 backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[78px] w-full max-w-[1280px] items-center justify-between gap-4 px-5 py-4 lg:px-0">
        <Logo />
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-lg border border-[#dbe5f3] text-[#11213a] md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>
        <nav className="hidden flex-1 flex-wrap items-center justify-end gap-x-6 gap-y-2 md:flex md:flex-none lg:gap-x-[30px]">
          <Dropdown
            label="Explore KDD"
            active={active === "explore"}
            links={exploreLinks}
          />
          <Dropdown
            label="Applications"
            active={active === "applications"}
            links={applicationLinks}
          />
          <Link
            href="/contact-us"
            className={`py-2 text-sm font-semibold ${
              active === "contact" ? "text-[#2563eb]" : "text-[#11213a]"
            }`}
          >
            Contact Us
          </Link>
          <a
            href="#"
            className="rounded-full bg-[#2563eb] px-[22px] py-3.5 text-sm font-bold text-white transition hover:bg-[#1d4ed8]"
          >
            Enroll on Udemy &rarr;
          </a>
        </nav>
      </div>
      {isOpen ? (
        <nav className="absolute left-0 right-0 top-full z-50 border-t border-[#dbe5f3] bg-white px-5 py-5 shadow-[0_18px_35px_rgba(17,33,58,0.12)] md:hidden">
          <div className="grid gap-5">
            <div>
              <p
                className={`text-sm font-extrabold ${
                  active === "explore" ? "text-[#2563eb]" : "text-[#11213a]"
                }`}
              >
                Explore KDD
              </p>
              <div className="mt-2 grid gap-1">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-[#64748b] hover:bg-[#eaf2ff] hover:text-[#2563eb]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p
                className={`text-sm font-extrabold ${
                  active === "applications" ? "text-[#2563eb]" : "text-[#11213a]"
                }`}
              >
                Applications
              </p>
              <div className="mt-2 grid gap-1">
                {applicationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-[#64748b] hover:bg-[#eaf2ff] hover:text-[#2563eb]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold ${
                active === "contact" ? "text-[#2563eb]" : "text-[#11213a]"
              }`}
            >
              Contact Us
            </Link>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="w-fit rounded-full bg-[#2563eb] px-[22px] py-3.5 text-sm font-bold text-white transition hover:bg-[#1d4ed8]"
            >
              Enroll on Udemy &rarr;
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
