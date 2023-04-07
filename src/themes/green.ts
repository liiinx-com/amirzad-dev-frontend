import { Theme } from ".";

export const GreenTheme: Theme = {
  navbar: {
    className: "bg-white dark:bg-gray-800",
    logoClassName:
      "hover:text-lime-500 text-lime-600 dark:text-lime-500 dark:hover:text-lime-200",
    sloganClassName: "dark:text-purple-400 text-purple-800",
  },
  body: {
    className: "bg-smoke-white dark:bg-gray-900",
    linkClassName:
      "text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
    textClassName: "text-gray-600 dark:text-gray-300",
  },
};
