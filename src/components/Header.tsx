import Link from "next/link";

type NavKey = "home" | "services" | "work" | "process" | "about" | "contact";

const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/#services" },
  { key: "work", label: "Projects", href: "/work" },
  { key: "process", label: "Process", href: "/#process" },
  { key: "about", label: "About", href: "/about" },
];

export default function Header({ active }: { active?: NavKey }) {
  return (
    <header className="bg-surface/70 dark:bg-surface/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-xs cursor-pointer group">
          <span className="material-symbols-outlined text-primary text-headline-sm transition-transform group-hover:rotate-12">
            bolt
          </span>
          <span className="font-display-lg text-headline-sm font-bold tracking-tight text-primary dark:text-primary-fixed-dim">
            Radan Tech
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-lg">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                active === item.key
                  ? "font-label-md text-label-md text-primary border-b-2 border-primary pb-1"
                  : "font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="bg-primary-container text-on-primary-container font-label-md text-label-md px-lg py-sm rounded-DEFAULT hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] inline-block text-center"
          href="/contact"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
