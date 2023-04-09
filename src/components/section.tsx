import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={`${className} text-gray-600 body-font`}>
      {children}
    </section>
  );
};
