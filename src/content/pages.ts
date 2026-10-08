export type Section = { h: string; p: string };
export type Info = { title: string; intro: string; sections: Section[]; legal?: boolean };

const legalNote = "Template text for development. Have a qualified lawyer review and adapt it before launch.";

export const infoPages: Record<string, Info> = {
  about: { title: "About SONORA", intro: "SONORA is built to give independent artists one clear place to manage releases, royalties and support.",
    sections: [{ h: "Our aim", p: "Make release management understandable: clear statuses, clear statements, and a real person to ask when something is unclear." },
      { h: "Honest by design", p: "SONORA labels what is live, what is sandboxed and what still needs a delivery partner. We do not claim partnerships or results we do not have." }] },
  features: { title: "Features", intro: "Everything an independent artist needs to run releases, in one dashboard.",
    sections: [{ h: "Release management", p: "A multi-step wizard for metadata, tracks, artwork, territories and rights, with drafts, review and change requests." },
      { h: "Royalty reporting", p: "A ledger of earnings by period, store and territory, with statements and payout requests." },
      { h: "Analytics", p: "Sales and audience data shown only where a valid data source reports it, with estimated and reported figures labelled." },
      { h: "Support", p: "Live chat and tickets with a persistent history." }] },
  "how-it-works": { title: "How it works", intro: "From upload to payout in five steps.",
    sections: [{ h: "1. Create your account", p: "Sign up and verify your email." }, { h: "2. Build a release", p: "Add tracks, artwork, credits and territories. Save drafts any time." },
      { h: "3. Submit for review", p: "Our team checks metadata and files and may request changes." },
      { h: "4. Delivery", p: "Approved releases are delivered through authorized delivery providers. Availability depends on each destination." },
      { h: "5. Track earnings", p: "Imported statements appear in your wallet. Request a payout once funds are available." }] },
  distribution: { title: "Distribution", intro: "Delivery to stores and platforms through authorized providers.",
    sections: [{ h: "What distribution means here", p: "SONORA prepares and submits your release. Actual delivery requires an active integration with a distributor or store." },
      { h: "Statuses you will see", p: "Catalog Only, Integration Required, Sandbox, Configured, Active, Temporarily Unavailable and Unsupported." }] },
  "distribution-platforms": { title: "Distribution platforms", intro: "A directory of music destinations and their current integration status.",
    sections: [{ h: "Catalog vs operational", p: "The total catalog is larger than the set of destinations with an active integration. The dashboard shows both numbers separately." },
      { h: "Verification", p: "Each entry carries an official URL and last verification date once verified by our team." }] },
  "supported-platforms": { title: "Supported platforms", intro: "Which destinations are operational today.",
    sections: [{ h: "Current status", p: "No delivery integrations are connected in this development build. This page will list active destinations once providers are configured." }] },
  "artist-resources": { title: "Artist resources", intro: "Guides for metadata, artwork, rights and release planning.",
    sections: [{ h: "Artwork checklist", p: "Square, high resolution, no third-party logos, no blurred text." },
      { h: "Metadata checklist", p: "Correct spelling of names, accurate credits, correct language and explicit flag." },
      { h: "Rights", p: "Only upload music you own or are licensed to distribute." }] },
  help: { title: "Help centre", intro: "Answers to common questions.", sections: [{ h: "Getting started", p: "Create an account, complete your artist profile, then start your first release." },
    { h: "Still stuck?", p: "Use the contact page or open a support chat from your dashboard." }] },
  terms: { title: "Terms of service", intro: legalNote, legal: true, sections: [{ h: "Use of the service", p: "Placeholder section: describe account duties, acceptable use and termination." }, { h: "Content and rights", p: "Placeholder section: describe the licence you need to deliver content." }] },
  privacy: { title: "Privacy policy", intro: legalNote, legal: true, sections: [{ h: "Data we collect", p: "Placeholder section: list account, release, usage and payment data." }, { h: "Your rights", p: "Placeholder section: access, correction and deletion requests." }] },
  "copyright-policy": { title: "Copyright policy", intro: legalNote, legal: true, sections: [{ h: "Infringement claims", p: "Placeholder section: how rights holders submit notices and how disputes are handled." }] },
  "payout-policy": { title: "Payout policy", intro: legalNote, legal: true, sections: [{ h: "Payout review", p: "Placeholder section: minimums, review steps and timing. A payout is only marked paid after the payment provider confirms it." }] },
  "anti-fraud": { title: "Anti-fraud policy", intro: legalNote, legal: true, sections: [{ h: "Artificial streaming", p: "Placeholder section: describe prohibited activity and the consequences." }] },
  cookies: { title: "Cookie policy", intro: legalNote, legal: true, sections: [{ h: "Cookies we use", p: "Placeholder section: list essential, authentication and preference cookies." }] },
};

export const faqs = [
  { q: "Is SONORA actually delivering music to stores?", a: "Not in this development build. Delivery needs authorized provider integrations, which are configured separately." },
  { q: "Can I edit my balance?", a: "No. Balances come from an append-only ledger that only administrators can add to." },
  { q: "Do I keep my rights?", a: "Final terms are set in the Terms of Service. The current text is a template." },
  { q: "How do I get support?", a: "Open a chat or ticket from your dashboard once signed in." },
];

export const posts = [
  { slug: "preparing-your-first-release", title: "Preparing your first release (sample post)", body: "Sample content. Check your metadata, artwork and credits before submitting. Names should match exactly across every track." },
  { slug: "understanding-royalty-statements", title: "Understanding royalty statements (sample post)", body: "Sample content. Statements are grouped by reporting period, store and territory, and often arrive weeks after the streams." },
];
