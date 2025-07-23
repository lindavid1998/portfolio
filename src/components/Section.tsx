import type { ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
  title?: string;
}

export default function Section({ className, children, title }: SectionProps) {
  return (
    <section className={`flex flex-col items-center ${className}`}>
      {title && (
        <div className="relative mb-8 flex items-center justify-center">
          {/* Hollow tilted box background */}
          <div className="absolute inset-0 -rotate-3 border-4 border-[#3b27f4] rounded-lg -z-10 w-full h-full scale-110" />
          <h1 className="relative px-8 py-3 text-white z-10">{title}</h1>
        </div>
      )}
      {children}
    </section>
  );
}
