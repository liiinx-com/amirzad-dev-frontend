import React, { ReactNode } from "react";
import * as Icons from "./icons";

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

export const getIconByName = (name: "email" | "location" | "linkedin") => {
  const icons = {
    email: <Icons.EmailIcon />,
    linkedin: <Icons.LinkedinIcon />,
    location: <Icons.MapPinIcon />,
  };

  return icons[name] || <Icons.ChevronRightIcon />;
};
