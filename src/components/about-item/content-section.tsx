import { StarIcon } from "@/components/icons";
import { IconWrapper } from "@/components";
import { AboutItemProps } from ".";

const ITEM_ICON_SIZE = 25;

export const ContentSection = ({
  dir = "ltr",
  aboutItem: { title, content, iconClassName = "", titleClassName = "" },
}: AboutItemProps) => {
  return (
    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
      <h1
        className={`text-gray-800 text-2xl title-font font-medium mb-2 ${titleClassName}`}
      >
        {title}
      </h1>
      {content.map((c, i) => (
        <div key={i} className="flex flex-row mt-2 ">
          <IconWrapper
            size={ITEM_ICON_SIZE}
            className={`text-amber-400 ${iconClassName}`}
            icon={<StarIcon />}
          />
          <p className="ml-2 leading-relaxed text-base">{c}</p>
        </div>
      ))}
    </div>
  );
};
