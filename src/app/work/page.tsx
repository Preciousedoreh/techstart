import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoutingEngineVisual from "@/components/visuals/RoutingEngineVisual";
import DataFlowVisual from "@/components/visuals/DataFlowVisual";
import VisionScanVisual from "@/components/visuals/VisionScanVisual";

export const metadata: Metadata = {
  title: "Work/Projects - Radan Tech",
};

export default function WorkPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      <Header active="work" />
      <main className="flex-grow pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        <section className="mb-xl text-center md:text-left">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-sm">
            Our Projects
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            High-performance automation and software solutions engineered for scale and
            precision.
          </p>
        </section>

        <div className="flex flex-wrap gap-sm mb-lg border-b border-white/10 pb-sm">
          <button className="px-4 py-2 rounded-full font-label-md text-label-md bg-primary-container text-on-primary-container transition-colors">
            All
          </button>
          <button className="px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors border border-white/10 hover:border-white/20">
            Custom Apps
          </button>
          <button className="px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors border border-white/10 hover:border-white/20">
            Automation
          </button>
          <button className="px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors border border-white/10 hover:border-white/20">
            AI/ML
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <Link
            href="/nexus-freight"
            className="card-gradient rounded-xl border border-white/10 overflow-hidden hover-lift flex flex-col group"
          >
            <div className="h-48 md:h-56 relative overflow-hidden bg-surface-lowest transition-transform duration-700 group-hover:scale-105">
              <RoutingEngineVisual />
              <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded font-label-sm text-label-sm text-primary border border-primary/20">
                Automation
              </div>
            </div>
            <div className="p-gutter flex flex-col flex-grow">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs group-hover:text-primary transition-colors">
                Nexus Freight Engine
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                A comprehensive logistics automation platform designed to dynamically route
                fleets and optimize fuel consumption in real-time using predictive modeling.
              </p>
              <div className="mt-auto pt-sm border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-fixed-dim">
                  <span className="material-symbols-outlined text-[20px]">speed</span>
                  <span className="font-label-md text-label-md">
                    10,000+ daily routes optimized
                  </span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>

          <article className="card-gradient rounded-xl border border-white/10 overflow-hidden hover-lift flex flex-col group">
            <div className="h-48 md:h-56 relative overflow-hidden bg-surface-lowest transition-transform duration-700 group-hover:scale-105">
              <DataFlowVisual />
              <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded font-label-sm text-label-sm text-primary border border-primary/20">
                Custom Apps
              </div>
            </div>
            <div className="p-gutter flex flex-col flex-grow">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs group-hover:text-primary transition-colors">
                Aether Sync Protocol
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                A secure, high-throughput data synchronization microservice built for financial
                institutions to ensure real-time ledger consistency across global nodes.
              </p>
              <div className="mt-auto pt-sm border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-fixed-dim">
                  <span className="material-symbols-outlined text-[20px]">sync</span>
                  <span className="font-label-md text-label-md">&lt;5ms global latency</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
            </div>
          </article>

          <article className="card-gradient rounded-xl border border-white/10 overflow-hidden hover-lift flex flex-col group">
            <div className="h-48 md:h-56 relative overflow-hidden bg-surface-lowest transition-transform duration-700 group-hover:scale-105">
              <VisionScanVisual />
              <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded font-label-sm text-label-sm text-primary border border-primary/20">
                AI/ML
              </div>
            </div>
            <div className="p-gutter flex flex-col flex-grow">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs group-hover:text-primary transition-colors">
                Vanguard Quality Vision
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                An edge-deployed machine learning computer vision system that identifies
                micro-defects in semiconductor manufacturing pipelines faster than human
                capability.
              </p>
              <div className="mt-auto pt-sm border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-fixed-dim">
                  <span className="material-symbols-outlined text-[20px]">
                    center_focus_strong
                  </span>
                  <span className="font-label-md text-label-md">99.98% defect catch rate</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
