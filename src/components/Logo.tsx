export default function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-2" aria-label="SONORA">
      <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#2D336B" />
        <g fill="none" stroke="#FFF2F2" strokeWidth="4" strokeLinecap="round">
          <path d="M24 30v14" /><path d="M32 20v28" /><path d="M40 28v16" /><path d="M16 40v0" /><path d="M48 36v0" />
        </g>
      </svg>
      <span className="text-lg font-bold tracking-[0.2em] text-koamaru dark:text-blush">SONORA</span>
    </span>
  );
}
