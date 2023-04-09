interface MenuItem {
  title: string;
  url: string;
  order: number;
  className?: string;
}
const menuItems: MenuItem[] = [
  {
    order: 1,
    url: "#home",
    title: "Home",
  },
  {
    order: 2,
    url: "#skills",
    title: "Skills",
  },
  {
    order: 3,
    url: "#projects",
    title: "Projects",
  },
  {
    order: 4,
    url: "#about",
    title: "About",
  },
  {
    order: 5,
    url: "#work",
    title: "Work History",
  },
  {
    order: 6,
    url: "#contact",
    title: "Contact",
  },
  {
    order: 7,
    className: "text-blue-700",
    title: "Linkedin",
    url: "https://www.linkedin.com/in/amir-m-zad/",
  },
];

export const Menu = () => {
  return (
    <>
      {menuItems.map(({ title, className = "", url }) => {
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
