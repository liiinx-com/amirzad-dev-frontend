import { getMenuItems } from "@/data";

export const Footer = () => {
  return (
    <footer className="bg-transparent dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            {/* <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> */}
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {getMenuItems().map(({ title, url, order }) => (
              <a
                key={order}
                href={url}
                className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {title}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © Copyright 2023. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            <a
              href={process.env.APP_URL}
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Version {process.env.VERSION}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
