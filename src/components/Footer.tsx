import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Services",
    links: [
      ["Software engineering", "/#services"],
      ["Intelligent automation", "/#services"],
      ["Product strategy", "/#process"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Case studies", "/work"],
      ["About us", "/about"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#241611] px-margin-mobile pb-8 pt-16 text-white md:px-margin-desktop">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Radan Tech home">
              <Image src="/logo-mark.png" alt="" width={276} height={256} className="h-12 w-auto" />
              <span className="font-display-lg text-3xl font-bold tracking-[-0.06em]">
                radan<span className="text-primary-fixed">tech</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-7 text-slate-300">
              Product-minded engineers building the systems ambitious companies grow on.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-primary-fixed">
                {group.title}
              </p>
              <ul className="mt-5 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link className="text-sm text-slate-300 transition-colors hover:text-primary-fixed" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-slate-400 sm:flex-row">
          <span>© 2026 Radan Tech. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
