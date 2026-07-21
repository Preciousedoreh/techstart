import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/visuals/HeroVisual";
import RoutingEngineVisual from "@/components/visuals/RoutingEngineVisual";
import FinAgentVisual from "@/components/visuals/FinAgentVisual";

export default function HomePage() {
  return (
    <>
      <Header active="home" />
      <main className="pt-32 pb-xl">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-margin-desktop py-xl lg:py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-lg z-10">
            <div className="inline-flex items-center gap-xs px-sm py-xs border border-white/10 rounded-full w-max bg-surface-container/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                High-Performance Engineering
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface">
              Architecting <br />
              <span className="text-primary drop-shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                Intelligent Automation
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              We engineer precision software systems and custom automation pipelines that
              eliminate operational friction and accelerate enterprise growth.
            </p>
            <div className="flex items-center gap-md pt-sm">
              <Link
                className="bg-primary-container text-on-primary-fixed font-label-md text-label-md px-lg py-md rounded-DEFAULT hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-95 transition-all flex items-center gap-xs"
                href="/contact"
              >
                Book a Strategy Call
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                className="border border-white/20 text-on-surface font-label-md text-label-md px-lg py-md rounded-DEFAULT hover:border-primary hover:text-primary transition-colors bg-surface-container/30 backdrop-blur-sm flex items-center gap-xs"
                href="/work"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,229,255,0.05)]">
            <HeroVisual />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-[1440px] mx-auto px-margin-desktop py-xl">
          <div className="mb-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">
              Core Capabilities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Specialized technical solutions designed for scalability, security, and raw
              performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface-container rounded-[24px] p-lg border border-white/5 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden bg-gradient-to-b from-surface-container to-surface-container-low">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <span className="material-symbols-outlined text-[40px] text-primary mb-md block">
                settings_input_component
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
                Custom Application Development
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Full-stack engineering of robust, secure, and highly scalable applications
                tailored specifically to your complex business logic and architectural
                requirements.
              </p>
              <Link
                className="inline-flex items-center gap-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors mt-auto"
                href="/work"
              >
                View Architecture Specs{" "}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="bg-surface-container rounded-[24px] p-lg border border-white/5 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden bg-gradient-to-b from-surface-container to-surface-container-low">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <span className="material-symbols-outlined text-[40px] text-primary mb-md block">
                bolt
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
                Intelligent Automation
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Designing and deploying sophisticated autonomous agents and data pipelines that
                eliminate manual workflows, reducing overhead and exponentially increasing
                operational velocity.
              </p>
              <Link
                className="inline-flex items-center gap-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors mt-auto"
                href="/work"
              >
                Explore Automation Frameworks{" "}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="max-w-[1440px] mx-auto px-margin-desktop py-xl">
          <div className="flex justify-between items-end mb-lg">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">
                Featured Engineering
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Production-ready systems driving real-world impact.
              </p>
            </div>
            <Link
              className="hidden md:flex border border-white/20 text-on-surface font-label-md text-label-md px-md py-sm rounded-DEFAULT hover:border-primary hover:text-primary transition-colors"
              href="/work"
            >
              View All Case Studies
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <Link className="group cursor-pointer block" href="/nexus-freight">
              <div className="relative h-[360px] w-full rounded-2xl overflow-hidden border border-white/10 mb-md transition-transform duration-700 group-hover:scale-105">
                <RoutingEngineVisual />
                <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-primary mb-xs block">
                    Logistics / API Integration
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                    Nexus Freight Routing Engine
                  </h3>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  north_east
                </span>
              </div>
            </Link>
            <div className="group cursor-pointer">
              <div className="relative h-[360px] w-full rounded-2xl overflow-hidden border border-white/10 mb-md transition-transform duration-700 group-hover:scale-105">
                <FinAgentVisual />
                <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-primary mb-xs block">
                    FinTech / Machine Learning
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                    Finparse AI Agent
                  </h3>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  north_east
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="max-w-[1440px] mx-auto px-margin-desktop py-xl border-y border-white/5 bg-surface-container-lowest relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="relative z-10">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">
                The Radan Tech Process
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                A rigorous, deterministic methodology for delivering enterprise-grade software
                systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-md relative">
              <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
              <div className="hidden md:block absolute top-[40px] left-[10%] w-[25%] h-[1px] bg-primary shadow-[0_0_10px_rgba(0,229,255,0.8)] z-0"></div>
              {[
                {
                  n: "01",
                  title: "Discovery",
                  desc: "Deep architectural analysis and requirement mapping.",
                  activeStep: true,
                },
                {
                  n: "02",
                  title: "Architecture",
                  desc: "System design, technology stack selection, and API blueprinting.",
                },
                {
                  n: "03",
                  title: "Development",
                  desc: "Iterative engineering with strict testing protocols.",
                },
                {
                  n: "04",
                  title: "Deployment",
                  desc: "Seamless CI/CD rollout and post-launch telemetry monitoring.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div
                    className={
                      step.activeStep
                        ? "w-[80px] h-[80px] rounded-full bg-surface-container border border-primary/30 flex items-center justify-center mb-md shadow-[0_0_20px_rgba(0,229,255,0.1)] group-hover:border-primary transition-colors"
                        : "w-[80px] h-[80px] rounded-full bg-surface-container border border-white/10 flex items-center justify-center mb-md group-hover:border-primary/50 transition-colors"
                    }
                  >
                    <span
                      className={
                        step.activeStep
                          ? "font-label-md text-label-md text-primary"
                          : "font-label-md text-label-md text-on-surface-variant"
                      }
                    >
                      {step.n}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-lg">
                    {step.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm px-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-[1440px] mx-auto px-margin-desktop py-xl lg:py-[100px]">
          <div className="bg-surface-container rounded-[32px] p-xl text-center relative overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(0,229,255,0.03)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display-lg text-display-lg text-on-surface mb-md">
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                Schedule a technical consultation to discuss your specific engineering challenges
                and how Radan Tech can architect your solution.
              </p>
              <Link
                className="bg-primary-container text-on-primary-fixed font-label-md text-label-md px-xl py-lg rounded-DEFAULT hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] active:scale-95 transition-all text-lg font-bold inline-block text-center"
                href="/contact"
              >
                Initiate Project Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
