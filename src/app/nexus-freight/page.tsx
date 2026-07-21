import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoutingEngineVisual from "@/components/visuals/RoutingEngineVisual";
import Avatar from "@/components/visuals/Avatar";

export const metadata: Metadata = {
  title: "Nexus Freight Case Study | Radan Tech",
};

const STACK = [
  { icon: "database", label: "PostgreSQL" },
  { icon: "hub", label: "Apache Kafka" },
  { icon: "memory", label: "Rust" },
  { icon: "cloud", label: "Kubernetes" },
  { icon: "api", label: "GraphQL" },
];

export default function NexusFreightPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md text-body-md">
      <Header active="work" />
      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-xl">
          <div className="glass-panel rounded-[24px] p-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-xl">
            <div className="z-10 flex-1">
              <div className="flex items-center gap-sm mb-md">
                <span className="bg-primary-container/20 text-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm border border-primary-container/30 uppercase tracking-widest">
                  Logistics &amp; Automation
                </span>
                <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm border border-white/10 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
                  Live System
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
                Nexus Freight Routing Engine
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                A real-time, high-availability optimization system designed to continuously
                reroute thousands of freight vehicles based on live traffic, weather, and cargo
                constraints.
              </p>
            </div>
            <div className="flex-1 w-full relative h-[400px] rounded-xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 opacity-70">
                <RoutingEngineVisual />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="bg-surface-container rounded-xl p-md border border-white/10 flex flex-col gap-sm hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">timer</span>
              <h3 className="font-display-lg text-display-lg text-primary text-glow">18%</h3>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Reduction in Transit Time
              </p>
            </div>
            <div className="bg-surface-container rounded-xl p-md border border-white/10 flex flex-col gap-sm hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">
                verified_user
              </span>
              <h3 className="font-display-lg text-display-lg text-primary text-glow">99.9%</h3>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                System Uptime
              </p>
            </div>
            <div className="bg-surface-container rounded-xl p-md border border-white/10 flex flex-col gap-sm hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">route</span>
              <h3 className="font-display-lg text-display-lg text-primary text-glow">2.4M</h3>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Routes Optimized Daily
              </p>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-xl grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="glass-panel p-lg rounded-xl flex flex-col gap-md">
            <div className="flex items-center gap-xs text-error">
              <span className="material-symbols-outlined">warning</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">The Challenge</h2>
            </div>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Nexus Freight was operating on a legacy dispatch system that relied on static
              routing tables updated only twice daily. This rigidity led to severe inefficiencies
              during unexpected weather events or traffic anomalies, resulting in missed delivery
              windows and excessive fuel consumption. They required a system capable of
              continuous ingestion and evaluation of geospatial data streams.
            </p>
          </div>
          <div className="glass-panel p-lg rounded-xl flex flex-col gap-md border-l-4 border-l-primary">
            <div className="flex items-center gap-xs text-primary">
              <span className="material-symbols-outlined">lightbulb</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">The Solution</h2>
            </div>
            <p className="text-on-surface-variant font-body-md text-body-md">
              We engineered a distributed, event-driven routing engine built on Kafka and
              Kubernetes. By integrating real-time API feeds from weather and traffic services,
              the system utilizes a proprietary pathfinding algorithm to continuously recalculate
              optimal routes for the entire fleet, pushing updates directly to driver terminals
              in under 300 milliseconds.
            </p>
          </div>
        </section>

        {/* Tech Stack & Testimonial */}
        <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-xl grid grid-cols-1 md:grid-cols-12 gap-xl">
          <div className="md:col-span-5 bg-surface-container rounded-xl p-lg border border-white/10">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">
              Architecture Stack
            </h3>
            <div className="flex flex-wrap gap-sm">
              {STACK.map((tech) => (
                <span
                  key={tech.label}
                  className="px-3 py-1 rounded bg-[#201f1f] border border-outline-variant text-on-surface-variant font-label-md text-label-md flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">{tech.icon}</span>{" "}
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 relative pl-xl py-md">
            <span className="material-symbols-outlined text-6xl text-primary/20 absolute left-0 top-0">
              format_quote
            </span>
            <blockquote className="font-headline-sm text-headline-sm text-on-surface italic leading-relaxed mb-md">
              &quot;The routing engine Radan Tech built didn&apos;t just solve our latency issues;
              it completely redefined our operational capabilities. We&apos;re now preempting
              bottlenecks before our drivers even encounter them.&quot;
            </blockquote>
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-surface-bright overflow-hidden border border-white/10 relative">
                <Avatar name="Sarah Jenkins" className="w-full h-full" />
              </div>
              <div>
                <div className="font-label-md text-label-md text-on-surface">Sarah Jenkins</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  VP of Operations, Nexus Freight
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="glass-panel p-xl rounded-[24px] flex flex-col items-center gap-md border border-primary/20">
            <h2 className="font-display-lg text-display-lg text-on-surface">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-sm">
              Let&apos;s discuss how our high-performance automation solutions can streamline your
              most complex operational challenges.
            </p>
            <Link
              className="bg-primary-container text-on-primary-container px-xl py-sm rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all active:scale-95 shadow-[0_0_15px_rgba(0,229,255,0.3)] inline-block text-center"
              href="/contact"
            >
              Schedule a Technical Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
