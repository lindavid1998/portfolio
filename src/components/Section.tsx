import type { ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
}

export default function Section({ className, children }: SectionProps) {
  return <section className={`flex flex-col items-center ${className}`}>{children}</section>;
}
