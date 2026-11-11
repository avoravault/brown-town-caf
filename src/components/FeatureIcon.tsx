// Simple line illustrations in brand colours.
const paths = {
  cup: <><path d="M10 20h22v12a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9z" /><path d="M32 23h3a4 4 0 0 1 0 8h-3" /><path d="M16 9c0 3 3 3 3 6M22 9c0 3 3 3 3 6" /></>,
  matcha: <><path d="M8 24h32a16 16 0 0 1-32 0z" /><path d="M14 18c4-6 16-6 20 0" /><path d="M24 6v12" /></>,
  pin: <><path d="M24 43s13-12 13-23a13 13 0 0 0-26 0c0 11 13 23 13 23z" /><circle cx="24" cy="20" r="5" /></>,
  bakery: <><path d="M6 30c2-10 10-16 18-16s16 6 18 16c-6 4-30 4-36 0z" /><path d="M16 17l3 12M24 14v15M32 17l-3 12" /></>,
} as const;

export function FeatureIcon({ name, className = "" }: { name: keyof typeof paths; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={`text-espresso ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="23" fill="var(--caramel)" fillOpacity=".18" stroke="none" />
      {paths[name]}
    </svg>
  );
}
