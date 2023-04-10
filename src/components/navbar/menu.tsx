import { getMenuItems } from "@/data";

export const Menu = () => {
  return (
    <>
      {getMenuItems().map(({ title, className = "", url }) => {
        return (
          <a
            target={url.includes("linkedin") ? "_blank" : "_self"}
            key={title.toLowerCase()}
            href={url}
            className={`px-3 py-2 font-semibold mx-3 mt-2 transition-colors transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${className}`}
          >
            {title}
          </a>
        );
      })}
    </>
  );
};
