import { ReactNode } from "react";

interface IconWrapperProps {
  icon: ReactNode;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const IconWrapper = ({
  icon,
  onClick,
  size = 25,
  className = "text-gray-500 dark:text-gray-200", // TODO: from theme
}: IconWrapperProps) => {
  return (
    <span onClick={onClick} className={className} style={{ fontSize: size }}>
      {icon}
    </span>
  );
};
