import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About - Radan Tech",
};

const TEAM = [
  {
    name: "Elena Rostova",
    role: "Chief Systems Architect",
  },
  {
    name: "Marcus Chen",
    role: "Lead Automation Eng.",
  },
  {
    name: "Jordan Ellis",
    role: "Data Infrastructure",
  },
  {
    name: "David Kalu",
    role: "Security Operations",
  },
];

export default function AboutPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col relative tech-grid-pattern">
      <Header active="about" />

      {/* Mobile Navigation Drawer */}
      <div
        className="fixed inset-y-0 left-0 z-50 bg-surface-container dark:bg-surface-container-high rounded-r-xl h-full w-80 shadow-xl flex flex-col p-md gap-sm md:hidden transform -translate-x-full transition-transform"
        id="mobile-drawer"
      >
        <div className="mb-lg px-sm">
          <span className="font-display-lg text-headline-md text-primary">Radan Tech</span>
        </div>
        <nav className="flex flex-col gap-sm font-label-md text-label-md">
          <Link
            className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg active:scale-98"
            href="/"
          >
            <span className="material-symbols-outlined">home</span> Home
          </Link>
          <Link
            className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg active:scale-98"
            href="/#services"
          >
            <span className="material-symbols-outlined">settings_input_component</span> Services
          </Link>
          <Link
            className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg active:scale-98"
            href="/work"
          >
            <span className="material-symbols-outlined">account_tree</span> Projects
          </Link>
          <Link
            className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg active:scale-98"
            href="/#process"
          >
            <span className="material-symbols-outlined">account_tree</span> Process
          </Link>
          <Link
            className="flex items-center gap-sm px-sm py-xs bg-primary-container text-on-primary-container rounded-lg active:scale-98"
            href="/about"
          >
            <span className="material-symbols-outlined">info</span> About
          </Link>
        </nav>
      </div>

      <main className="flex-grow pt-24 pb-xl w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-xl">
        {/* Hero Section */}
        <section className="py-xl flex flex-col items-start gap-md border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none rounded-xl"></div>
          <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-container-high border border-white/10 font-label-sm text-label-sm text-primary-fixed-dim">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>/about/radan-tech.sh</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-background max-w-3xl">
            The Engineering Behind the{" "}
            <span className="text-primary-fixed-dim">Innovation</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-sm">
            We are a collective of architects, engineers, and automation specialists dedicated to
            building robust, high-performance systems that scale without friction.
          </p>
        </section>

        {/* Our Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center py-lg">
          <div className="flex flex-col gap-md">
            <h2 className="font-headline-md text-headline-md text-on-background">
              System Origins
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Founded on the principles of efficiency and reliability, Radan Tech began as a
              response to the sprawling, unmaintainable monoliths that dominate enterprise
              software. We recognized a critical need for precision engineering in automated
              workflows.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our approach strips away the superficial, focusing entirely on performance,
              security, and architectural integrity. Every line of code is deployed with intent.
            </p>
            <div className="mt-sm grid grid-cols-2 gap-md border-t border-white/10 pt-md">
              <div>
                <div className="font-display-lg text-headline-md text-primary-fixed-dim">
                  99.9%
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">
                  Uptime Reliability
                </div>
              </div>
              <div>
                <div className="font-display-lg text-headline-md text-primary-fixed-dim">
                  &lt;50ms
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">
                  Avg Response Time
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden glass-panel flex items-center justify-center p-xs group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
            <div className="absolute inset-0 rounded-xl overflow-hidden bg-[#241611] p-8">
              <div className="grid h-full grid-cols-4 gap-3 opacity-90">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span key={index} className={index % 5 === 0 ? "border border-primary-container bg-primary-container" : "border border-white/30 bg-white/10"} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-md left-md right-md z-20 flex justify-between items-end border-t border-primary/20 pt-sm">
              <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest">
                Core Infrastructure
              </span>
              <span className="material-symbols-outlined text-on-surface-variant">dns</span>
            </div>
          </div>
        </section>

        {/* Our Philosophy Grid */}
        <section className="py-lg">
          <div className="mb-lg">
            <h2 className="font-headline-md text-headline-md text-on-background">
              Operating Principles
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
              The axioms that govern our engineering process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="glass-panel p-lg rounded-2xl glow-effect transition-all duration-300 flex flex-col gap-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-white/10 text-primary-fixed-dim mb-xs">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background">
                Performance First
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Latency is friction. We engineer systems with rigorous performance budgets,
                ensuring sub-millisecond execution where it matters most.
              </p>
            </div>
            <div className="glass-panel p-lg rounded-2xl glow-effect transition-all duration-300 flex flex-col gap-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-white/10 text-primary-fixed-dim mb-xs">
                <span className="material-symbols-outlined">code_blocks</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background">
                Code as Craft
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Maintainability is not an afterthought. We write clean, self-documenting code
                heavily tested to withstand edge cases and entropy.
              </p>
            </div>
            <div className="glass-panel p-lg rounded-2xl glow-effect transition-all duration-300 flex flex-col gap-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-white/10 text-primary-fixed-dim mb-xs">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background">
                Scalable by Design
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Architectures must gracefully handle exponential load. We build decoupled,
                event-driven systems ready for elastic scaling from day one.
              </p>
            </div>
          </div>
        </section>

        {/* The Architects */}
        <section className="py-lg border-t border-white/5">
          <div className="mb-lg flex justify-between items-end">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-background">
                The Architects
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                Core contributors to the Radan Tech ecosystem.
              </p>
            </div>
            <Link
              className="hidden md:flex items-center gap-xs font-label-md text-label-md text-primary-fixed-dim hover:text-primary transition-colors"
              href="/work"
            >
              View Commit History{" "}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-xl bg-surface-container border border-white/5 p-sm flex flex-col gap-sm hover:border-primary/30 transition-colors"
              >
                <div className="aspect-square rounded-lg bg-primary-container text-[#2b160b] flex items-center justify-center font-display-lg text-4xl font-bold tracking-[-.08em]">
                  {member.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-background text-[18px]">
                    {member.name}
                  </div>
                  <div className="font-label-sm text-label-sm text-primary-fixed-dim mt-xs uppercase tracking-wider">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
