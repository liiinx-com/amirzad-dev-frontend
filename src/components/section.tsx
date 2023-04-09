import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  sectionId: string;
}

export const Section = ({
  sectionId,
  children,
  className = "",
}: SectionProps) => {
  return (
    <section
      id={sectionId}
      className={`${className} text-gray-600 body-font my-12`}
    >
      {children}
    </section>
  );
};
