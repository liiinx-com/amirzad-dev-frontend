import { ReactNode } from "react";
import { Section, Title } from "@/components";

interface CallToActionProps {
  title: string;
  content: ReactNode;
  subContent?: ReactNode;
  media: ReactNode;
  buttons?: ReactNode[];
  featuredButton: ReactNode;
}

export const CallToAction = ({
  content,
  title,
  subContent,
  media,
  buttons,
  featuredButton,
}: CallToActionProps) => {
  return (
    <Section sectionId="profile">
      <div className="flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Title title={title} />
          <p className="mb-8 text-lg leading-relaxed">{content}</p>

          {subContent && (
            <p className="text-lg mt-2 mb-8 w-full">{subContent}</p>
          )}

          <div className="flex lg:flex-row md:flex-col">
            {buttons?.map((btn, i) => (
              <span
                key={i}
                // className={`bg-gray-100 dark:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center hover:shadow-xl shadow-lg ${
                className={`dark:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center hover:shadow-xl shadow-md ${
                  i > 0 ? "lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0" : ""
                } hover:bg-gray-200 focus:outline-none`}
              >
                {btn}
              </span>
            ))}
            {featuredButton}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">{media}</div>
      </div>
    </Section>
  );
};
