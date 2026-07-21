import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full py-xl border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-md">
        <div className="flex flex-col gap-sm col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary text-headline-sm">bolt</span>
            <span className="font-display-lg text-headline-sm font-bold text-primary">
              Radan Tech
            </span>
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
            © 2026 Radan Tech. Built for high-performance automation.
          </p>
        </div>
        <div className="col-span-1 md:col-span-3 flex justify-end gap-xl">
          <div className="flex flex-col gap-sm">
            <span className="font-label-md text-label-md text-on-surface mb-xs tracking-widest uppercase">
              Platform
            </span>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container dark:hover:text-primary-container transition-all hover:translate-x-1 duration-200"
              href="/#services"
            >
              Services
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container dark:hover:text-primary-container transition-all hover:translate-x-1 duration-200"
              href="/work"
            >
              Case Studies
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container dark:hover:text-primary-container transition-all hover:translate-x-1 duration-200"
              href="/#process"
            >
              Process
            </Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="font-label-md text-label-md text-on-surface mb-xs tracking-widest uppercase">
              Company
            </span>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container dark:hover:text-primary-container transition-all hover:translate-x-1 duration-200"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container dark:hover:text-primary-container transition-all hover:translate-x-1 duration-200"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container dark:hover:text-primary-container transition-all hover:translate-x-1 duration-200"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
