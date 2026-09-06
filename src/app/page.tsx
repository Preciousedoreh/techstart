import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    number: "01",
    title: "Custom software engineering",
    copy: "From the first technical decision to production, we build durable web platforms, internal tools, and customer-facing products.",
  },
  {
    number: "02",
    title: "Intelligent automation",
    copy: "We turn slow, manual operations into dependable automated workflows powered by connected data and practical AI.",
  },
  {
    number: "03",
    title: "Systems modernization",
    copy: "Move beyond brittle legacy systems with an incremental plan that protects business continuity and unlocks speed.",
  },
  {
    number: "04",
    title: "Product discovery & delivery",
    copy: "Clarify what to build, validate the opportunity, and bring focused product teams together around a measurable outcome.",
  },
];

const BENEFITS = [
  ["Business-first teams", "Senior product, design, and engineering perspectives in one room from day one."],
  ["Momentum without the chaos", "A clear delivery cadence means you can see what is moving and what comes next."],
  ["Built to evolve", "We design for the next phase of your business, not only the next launch date."],
];

export default function HomePage() {
  return (
    <>
      <Header active="home" />
      <main className="overflow-hidden pt-[76px]">
        <section className="border-b border-slate-900/10 bg-background">
          <div className="mx-auto grid min-h-[660px] max-w-[1440px] lg:grid-cols-[1.05fr_.95fr]">
            <div className="flex flex-col justify-center px-margin-mobile py-16 md:px-margin-desktop lg:py-24">
              <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary">
                Technology that moves business forward
              </p>
              <h1 className="mt-7 max-w-3xl font-display-lg text-[clamp(3rem,6vw,6.25rem)] font-bold leading-[0.96] tracking-[-0.065em] text-[#241611]">
                Build what&apos;s next.
                <span className="block text-primary">Run it better.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                Radan Tech partners with ambitious teams to create software, automate complex work,
                and make technology a real advantage.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link className="bg-[#241611] px-6 py-4 font-label-md text-label-md text-white transition-colors hover:bg-primary-container" href="/contact">
                  Start a conversation <span aria-hidden="true">↗</span>
                </Link>
                <Link className="border border-slate-900/20 px-6 py-4 font-label-md text-label-md text-[#241611] transition-colors hover:border-[#241611]" href="/work">
                  See our work
                </Link>
              </div>
            </div>
            <div className="relative min-h-[430px] overflow-hidden bg-[#241611] p-7 lg:min-h-0 md:p-10">
              <div className="absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full border-[44px] border-primary-container" />
              <div className="absolute left-[14%] top-[20%] h-[40%] w-[58%] border border-white/35" />
              <div className="absolute left-[22%] top-[30%] h-[40%] w-[58%] border border-primary-fixed" />
              <div className="absolute bottom-[23%] left-0 right-0 h-px bg-white/20" />
              <div className="absolute bottom-[23%] left-[22%] h-px w-[58%] bg-primary-container" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between text-white">
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-primary-fixed">Radan Tech / 2026</p>
                  <p className="mt-3 max-w-[230px] text-sm leading-6 text-orange-100">Systems designed for the pace of change.</p>
                </div>
                <span className="font-display-lg text-6xl tracking-[-.1em] text-primary-fixed">↗</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1440px] px-margin-mobile py-20 md:px-margin-desktop md:py-28">
          <div className="grid gap-8 border-b border-slate-900/15 pb-10 lg:grid-cols-[.8fr_1.2fr] lg:pb-14">
            <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary">What we do</p>
            <div>
              <h2 className="max-w-3xl font-display-lg text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-[#241611] md:text-6xl">
                The right technology, deliberately applied.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We connect strategy, design, and engineering to solve the operational problems that hold growing businesses back.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <article key={service.number} className={`group border-b border-slate-900/15 py-8 md:p-10 ${index % 2 === 0 ? "md:border-r" : ""}`}>
                <div className="flex items-start justify-between gap-6">
                  <span className="font-label-sm text-label-sm text-primary">{service.number}</span>
                  <span className="text-2xl text-[#241611] transition-transform group-hover:translate-x-1">↗</span>
                </div>
                <h3 className="mt-16 max-w-md font-display-lg text-3xl font-bold leading-tight tracking-[-.045em] text-[#241611]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md leading-7 text-slate-600">{service.copy}</p>
                <Link href="/contact" className="mt-8 inline-block font-label-md text-label-md text-[#241611] underline decoration-primary decoration-2 underline-offset-4">
                  Discuss this service
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#ecf0e7] px-margin-mobile py-20 md:px-margin-desktop md:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary">Why Radan Tech</p>
              <h2 className="mt-6 font-display-lg text-4xl font-bold leading-[1.03] tracking-[-.055em] text-[#241611] md:text-5xl">
                A partner who stays close to the outcome.
              </h2>
            </div>
            <div className="divide-y divide-slate-900/15 border-t border-slate-900/15">
              {BENEFITS.map(([title, copy], index) => (
                <div className="grid gap-4 py-8 md:grid-cols-[70px_1fr]" key={title}>
                  <span className="font-label-sm text-label-sm text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="font-display-lg text-2xl font-bold tracking-[-.04em] text-[#241611]">{title}</h3>
                    <p className="mt-3 max-w-xl leading-7 text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-margin-mobile py-20 md:px-margin-desktop md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary">Selected work</p>
              <h2 className="mt-5 font-display-lg text-4xl font-bold tracking-[-.055em] text-[#241611] md:text-5xl">Technology in the real world.</h2>
            </div>
            <Link href="/work" className="font-label-md text-label-md text-[#241611] underline decoration-primary decoration-2 underline-offset-4">View all case studies</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link href="/nexus-freight" className="group block">
              <div className="relative h-[360px] overflow-hidden bg-[#241611] p-7 text-white md:p-9">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-container" />
                <div className="relative flex h-full flex-col justify-between border border-white/40 p-5">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-primary-fixed">Routing intelligence</span>
                  <div className="grid grid-cols-3 gap-2"><span className="h-20 bg-primary-container" /><span className="h-20 bg-white/20" /><span className="h-20 bg-white/20" /></div>
                </div>
              </div>
              <p className="mt-5 font-label-sm text-label-sm uppercase tracking-[0.14em] text-primary">Logistics / automation</p>
              <div className="mt-2 flex items-start justify-between gap-4"><h3 className="font-display-lg text-3xl font-bold tracking-[-.045em] text-[#241611]">Nexus Freight Routing Engine</h3><span className="text-2xl">↗</span></div>
            </Link>
            <div className="group">
              <div className="relative h-[360px] overflow-hidden bg-[#ee5a11] p-7 text-white md:p-9">
                <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full border-[34px] border-white/50" />
                <div className="relative flex h-full flex-col justify-between border border-white/55 p-5">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-white">Automation agent</span>
                  <div className="ml-auto grid w-3/4 grid-cols-4 gap-2"><span className="h-20 bg-[#241611]" /><span className="h-20 bg-white/25" /><span className="h-20 bg-white/25" /><span className="h-20 bg-white/25" /></div>
                </div>
              </div>
              <p className="mt-5 font-label-sm text-label-sm uppercase tracking-[0.14em] text-primary">Fintech / AI</p>
              <div className="mt-2 flex items-start justify-between gap-4"><h3 className="font-display-lg text-3xl font-bold tracking-[-.045em] text-[#241611]">Finparse AI Agent</h3><span className="text-2xl">↗</span></div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#241611] px-margin-mobile py-20 text-white md:px-margin-desktop md:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 border-b border-white/20 pb-12 lg:grid-cols-[.8fr_1.2fr]">
              <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary-fixed">How we work</p>
              <div><h2 className="max-w-3xl font-display-lg text-4xl font-bold leading-[1.02] tracking-[-.055em] md:text-6xl">A clear path from problem to progress.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">No black box. Just the right people, shared context, and an accountable delivery plan.</p></div>
            </div>
            <div className="grid md:grid-cols-4">
              {["Understand", "Shape", "Build", "Improve"].map((step, index) => <div key={step} className="border-b border-white/20 py-8 md:border-b-0 md:border-r md:px-7 md:last:border-r-0"><span className="font-label-sm text-label-sm text-primary-fixed">0{index + 1}</span><h3 className="mt-16 font-display-lg text-2xl font-bold tracking-[-.04em]">{step}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{["Get to the root of the business need and technical reality.", "Turn the opportunity into a focused roadmap and delivery plan.", "Ship in purposeful increments with quality built into the work.", "Learn from what is live and keep creating more value."][index]}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-primary-container px-margin-mobile py-20 md:px-margin-desktop md:py-28">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div><p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-[#8d3100]">Let&apos;s make progress</p><h2 className="mt-6 max-w-3xl font-display-lg text-5xl font-bold leading-[.98] tracking-[-.06em] text-[#2b160b] md:text-7xl">What could your technology make possible?</h2></div>
            <Link href="/contact" className="shrink-0 bg-[#241611] px-7 py-5 font-label-md text-label-md text-white transition-transform hover:-translate-y-1">Talk to our team <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
