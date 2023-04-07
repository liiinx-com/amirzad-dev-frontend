import { ReactNode } from "react";

interface TitleProps {
  title: string;
  uppercaseTitle?: boolean;
  subtitle?: string | ReactNode;
}

export const Title = ({
  title,
  uppercaseTitle = false,
  subtitle,
}: TitleProps) => {
  return (
    <>
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
        {uppercaseTitle ? title.toUpperCase() : title}
      </h1>
      {subtitle && (
        <h3 className="lg:w-2/3 mx-auto leading-relaxed sm:text-xl text-lg text-gray-600">
          {subtitle}
        </h3>
      )}
    </>
  );
};
