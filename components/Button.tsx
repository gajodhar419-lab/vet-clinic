import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50";

const variants: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-secondary shadow-soft hover:shadow-md",
  secondary: "bg-secondary text-white hover:bg-primary shadow-soft",
  ghost: "text-primary hover:bg-primary/5",
  outline: "border border-border text-foreground hover:border-primary hover:text-primary",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({ children, href, variant = "primary", size = "md", className = "", onClick, target, rel }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}