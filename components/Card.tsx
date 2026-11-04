import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: Props) {
  return (
    <div
      className={`rounded-2xl bg-white border border-border p-6 sm:p-8 shadow-soft transition-all duration-300 ${
        hover ? "hover:shadow-lg hover:-translate-y-1.5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}