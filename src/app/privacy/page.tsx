import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Radan Tech",
};

export default function PrivacyPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-40 pb-xl px-margin-mobile md:px-margin-desktop max-w-[900px] mx-auto w-full">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-md">Privacy Policy</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder. Radan Tech&apos;s full privacy policy will be published
          here.
        </p>
      </main>
      <Footer />
    </div>
  );
}
