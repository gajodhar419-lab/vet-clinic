import * as Lucide from "lucide-react";
import React from "react";

type IconProps = { name: string; className?: string; size?: number };

const brandIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.36-1.67a11.84 11.84 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.42zM12.06 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.78 1 1.01-3.68-.23-.38a9.86 9.86 0 0 1-1.5-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.9z" />
    </svg>
  ),
};

export default function Icon({ name, className, size = 24 }: IconProps) {
  if (brandIcons[name]) {
    return <span className={className} style={{ width: size, height: size, display: "inline-flex" }}>{brandIcons[name]}</span>;
  }
  const lib = Lucide as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>;
  const Comp = lib[name] || lib[`${name}Icon`];
  if (!Comp) return null;
  return <Comp className={className} size={size} />;
}