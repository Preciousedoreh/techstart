import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Radan Tech",
};

export default function ContactPage() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-2"></div>
      <Header active="contact" />
      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        <div className="mb-16 max-w-3xl">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-sm">
            Initiate Connection
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Engage our architectural team to conceptualize and deploy high-performance automation
            frameworks tailored to your technical ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-xl p-md md:p-lg h-full flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-surface-highest/20 to-transparent pointer-events-none"></div>
              <h2 className="font-headline-md text-headline-md text-primary-fixed-dim mb-lg flex items-center gap-xs relative z-10">
                <span className="material-symbols-outlined fill">terminal</span>
                Start Your Technical Evolution
              </h2>
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-gutter">
            <div className="glass-panel glow-border rounded-xl p-md md:p-lg flex-grow flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">calendar_month</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm relative z-10">
                Book a Strategy Call
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg relative z-10">
                Schedule a 30-minute discovery session with a Lead Architect to evaluate your
                workflow.
              </p>
              <div className="bg-surface-container-lowest rounded-lg border border-outline-variant flex-grow min-h-[300px] flex items-center justify-center relative z-10">
                <div className="text-center">
                  <span className="material-symbols-outlined text-outline text-4xl mb-2">
                    event_available
                  </span>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Calendar Integration Active
                  </p>
                  <p className="font-body-md text-body-md text-outline text-sm mt-1">
                    Select a time slot
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-md flex flex-col gap-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center group-hover:border-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim transition-colors">
                    mail
                  </span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface mb-1">
                    Direct Protocol
                  </h3>
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                    href="mailto:hello@radantech.io"
                  >
                    hello@radantech.io
                  </a>
                </div>
              </div>
              <div className="w-full h-px bg-white/5"></div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center group-hover:border-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim transition-colors">
                    location_on
                  </span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface mb-1">
                    Headquarters
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    2048 Silicon Blvd, Suite 404
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
