"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-md text-center py-xl relative z-10">
        <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
        <h2 className="font-headline-md text-headline-md text-on-surface">Inquiry Transmitted</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Thanks for reaching out. A Radan Tech architect will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6 relative z-10 flex-grow flex flex-col" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="firstName">
            FIRST_NAME
          </label>
          <input
            className="form-input w-full rounded-md px-4 py-3 font-body-md focus:ring-0"
            id="firstName"
            placeholder="Jane"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="lastName">
            LAST_NAME
          </label>
          <input
            className="form-input w-full rounded-md px-4 py-3 font-body-md focus:ring-0"
            id="lastName"
            placeholder="Doe"
            type="text"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="email">
          WORK_EMAIL
        </label>
        <input
          className="form-input w-full rounded-md px-4 py-3 font-body-md focus:ring-0"
          id="email"
          placeholder="jane.doe@company.com"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="company">
          ORGANIZATION
        </label>
        <input
          className="form-input w-full rounded-md px-4 py-3 font-body-md focus:ring-0"
          id="company"
          placeholder="Acme Corp"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="projectType">
          DEPLOYMENT_TYPE
        </label>
        <select
          className="form-input w-full rounded-md px-4 py-3 font-body-md focus:ring-0 appearance-none"
          id="projectType"
          defaultValue=""
        >
          <option disabled value="">
            Select an architectural framework...
          </option>
          <option value="workflow">Workflow Automation</option>
          <option value="data">Data Pipeline Engineering</option>
          <option value="system">System Integration</option>
          <option value="consulting">Strategic Consulting</option>
        </select>
      </div>
      <div className="space-y-2 flex-grow">
        <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="details">
          SYSTEM_REQUIREMENTS
        </label>
        <textarea
          className="form-input w-full rounded-md px-4 py-3 font-body-md focus:ring-0 resize-none h-full min-h-[120px]"
          id="details"
          placeholder="Detail your current infrastructure bottlenecks and operational objectives..."
          rows={5}
        ></textarea>
      </div>
      <div className="pt-4">
        <button
          className="btn-primary w-full md:w-auto px-8 py-4 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2"
          type="submit"
        >
          <span className="material-symbols-outlined">send</span>
          Transmit Inquiry
        </button>
      </div>
    </form>
  );
}
