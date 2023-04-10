import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`container px-5 py-20 mx-auto ${className}`}>
      {children}
    </div>
  );
};
