import Image from "next/image";
import Link from "next/link";

type NavKey = "home" | "services" | "work" | "process" | "about" | "contact";

const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: "services", label: "Services", href: "/#services" },
  { key: "work", label: "Case studies", href: "/work" },
  { key: "process", label: "How we work", href: "/#process" },
  { key: "about", label: "Company", href: "/about" },
];

// Orange text plus an underline that wipes in from the left. The underline is a
// pseudo-element so hovering never shifts the surrounding layout.
const NAV_LINK =
  "relative font-label-md text-label-md transition-colors hover:text-primary " +
  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left " +
  "after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 " +
  "hover:after:scale-x-100";

export default function Header({ active }: { active?: NavKey }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-900/10 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Radan Tech home">
          <Image
            src="/logo-mark.png"
            alt=""
            width={276}
            height={256}
            priority
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display-lg text-xl font-bold tracking-[-0.05em] text-[#241611]">
            radan<span className="text-primary">tech</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`${NAV_LINK} ${active === item.key ? "text-[#241611]" : "text-slate-500"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="bg-[#241611] px-5 py-3 font-label-md text-label-md text-white transition-colors hover:bg-primary-container"
          href="/contact"
        >
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
