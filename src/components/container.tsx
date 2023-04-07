import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`${className} container px-5 py-24 mx-auto`}>
      {children}
    </div>
  );
};
