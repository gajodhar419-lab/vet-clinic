import FadeIn from "./FadeIn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <FadeIn className={`max-w-2xl ${a} mb-12`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-secondary">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">{subtitle}</p>}
    </FadeIn>
  );
}