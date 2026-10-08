export type Mod = { path: string; title: string; desc: string };

export const artistModules: Mod[] = [
  { path: "dashboard", title: "Dashboard", desc: "Release counts, balances, charts, recent activity and quick actions." },
  { path: "releases", title: "Releases", desc: "All releases by status, drafts, review history and delivery status." },
  { path: "wallet", title: "Wallet", desc: "Available and pending balance, transactions, adjustments and payout history." },
  { path: "sales", title: "Sales", desc: "Revenue by track, release, store and territory with CSV export." },
  { path: "analytics", title: "Analytics", desc: "Streams and listeners where reported, with date ranges." },
  { path: "reports", title: "Reports", desc: "Royalty, sales, release, distribution and payout reports." },
  { path: "insights", title: "Insights", desc: "Best-performing tracks and trends, labelled estimated or reported." },
  { path: "audience", title: "Audience", desc: "Listeners, territories and platforms from valid data sources only." },
  { path: "royalty-splits", title: "Royalty Splits", desc: "Collaborators, roles, percentages and acceptance status." },
  { path: "greenlist", title: "Greenlist", desc: "Authorized rights-management entries and approved collaborators." },
  { path: "blocklist", title: "Blocklist", desc: "Blocked entities with reasons, dates and audit history." },
  { path: "profile-defender", title: "Profile Defender", desc: "Sessions, login history, MFA and suspicious activity alerts." },
  { path: "release-links", title: "Release Links", desc: "Verified store links and smart links where supported." },
  { path: "priority-pitch", title: "Priority Pitch", desc: "Pitch a release with artist story and marketing plan." },
  { path: "usage-discovery", title: "Usage Discovery", desc: "Verified or imported usage reports by platform and territory." },
  { path: "chart-registration", title: "Chart Registration", desc: "Register releases for charts with supporting documents." },
  { path: "cover-song-licensing", title: "Cover Song Licensing", desc: "Original-song details, rights holders, territories and documents." },
  { path: "audio-recognition", title: "Audio Recognition", desc: "Registered tracks and detected usage via an authorized provider." },
  { path: "spotify-discovery", title: "Spotify Discovery Mode", desc: "Eligibility and documentation. SONORA cannot control Spotify without authorization." },
  { path: "tiktok-cml", title: "TikTok CML", desc: "Eligible tracks and delivery status where authorized." },
  { path: "promotional-assets", title: "Promotional Assets", desc: "Social graphics, posters, banners, links and QR codes." },
  { path: "fan-blast", title: "Fan Blast", desc: "Audience segments, consented campaigns and unsubscribe handling." },
  { path: "ai-mastering", title: "AI Mastering", desc: "Upload, presets and preview. Inactive until a real processing engine is connected." },
  { path: "award-monitoring", title: "Award Monitoring", desc: "Award opportunities and deadlines from verified sources." },
  { path: "conflict-resolution", title: "Conflict Resolution", desc: "Disputes with evidence, status and full history." },
  { path: "distribution-platforms", title: "Distribution Platforms", desc: "Platform directory showing catalog size versus operational destinations." },
  { path: "settings", title: "Settings", desc: "Account, privacy, email, connected services and deletion requests." },
  { path: "preferences", title: "Preferences", desc: "Language, timezone, currency, theme and accessibility." },
  { path: "notifications", title: "Notifications", desc: "Unread and all notifications, mark as read and delete." },
  { path: "support", title: "Support", desc: "Tickets, live chat, help articles and conversation history." },
];

export const adminModules: Mod[] = [
  "dashboard", "artists", "releases", "distribution-platforms", "distributor-providers", "deliveries", "royalties", "payouts",
  "support", "support-agents", "announcements", "pricing", "cms", "blog", "faq", "contact-messages", "reports", "audit-logs",
  "security", "integrations", "settings",
].map((p) => ({ path: p, title: p.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" "), desc: `Administration of ${p.replace(/-/g, " ")}. Server-side permission checks apply.` }));

export const clerkModules: Mod[] = ["dashboard", "inbox", "tickets", "profile", "settings"].map((p) => ({
  path: p, title: p[0].toUpperCase() + p.slice(1), desc: `Support agent ${p}. Agents only see conversations assigned to them.`,
}));
