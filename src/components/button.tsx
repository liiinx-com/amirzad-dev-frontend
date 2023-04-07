import { ReactNode } from "react";
import { IconWrapper } from "@/components";

interface ButtonProps {
  iconComponent?: ReactNode;
  buttonClassName?: string;
  supperTitle?: string;
  title: string;
  subtitle?: string;
}

export const Button = ({
  iconComponent,
  title,
  buttonClassName = "",
  subtitle,
  supperTitle,
}: ButtonProps) => {
  return (
    <button
      className={`bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none ${buttonClassName}`}
    >
      {iconComponent && <IconWrapper icon={iconComponent} />}

      {/* <span className="ml-4 flex items-start flex-col leading-none">*/}
      <span className="flex items-start flex-col leading-none">
        {supperTitle && (
          <span className="text-xs text-gray-600 mb-1">{supperTitle}</span>
        )}
        <span className="title-font font-medium">{title}</span>
        {subtitle && (
          <span className="text-xs text-gray-600 mb-1">{subtitle}</span>
        )}
      </span>
    </button>
  );
};
