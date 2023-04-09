import { SkillSet, WorkHistoryItem, Project } from "./types";
import { orderBy } from "@/utils/lodash";

export const getWorkHistory = () => orderBy(workHistory, ["order"], ["asc"]);

export const getSkillSets = () => {
  skillSets.forEach((s) => {
    s.skills = orderBy(s.skills, ["order", "rate"], ["asc", "asc"]);
  });
  return orderBy(skillSets, ["order"], ["asc"]);
};

export const getProjects = () => {
  const projects: Project[] = [
    {
      id: "1",
      order: 1,
      slug: "royal-wallet",
      category: "Royal Crypto Startup (MVP)",
      content: [
        "here goes some content about the crypto wallet project along with some images",
      ],
      title: "Royal Crypto Wallet",
      titleClassName: "text-teal-500",
      imageUrl: "/assets/rw-01.png",
      featured: true,
      repoUrl: "https://github.com/liiinx-com/rwallet",
      videoUrl: "",
      tags: [
        {
          className: "bg-[#61DBFB] text-[#282C34]",
          order: 1,
          title: "React Native",
        },
        {
          className: "bg-[#F7452A] text-white",
          order: 2,
          title: "Swift",
        },
        {
          className: "bg-[#9FC037] text-[#000]",
          order: 2,
          title: "Android",
        },
        {
          className: "bg-yellow-300 text-[#232323]",
          order: 2,
          title: "UI/UX",
        },
        {
          className: "bg-green-200 text-black",
          order: 1,
          title: "Cypress Testing",
        },
        {
          className: "bg-purple-700 text-white",
          order: 2,
          title: "Product/Release Management",
        },
      ],
    },
    {
      id: "2",
      order: 2,
      slug: "crypto-trader-bot",
      content: [""],
      category: "Royal Crypto Startup (MVP)",
      title: "Royal Crypto Trader Bot",
      titleClassName: "text-teal-500",
      featured: true,
      imageUrl: "/assets/trader-bot-02.png",
      repoUrl: "https://github.com/liiinx-com/falcon-backend",
      videoUrl: "",
      tags: [
        {
          className: "bg-green-700 text-white",
          order: 1,
          title: "Microservices",
        },
        {
          className: "bg-[#645FA1] text-white",
          order: 2,
          title: "Heroku",
        },
        {
          className: "bg-[#E0234E] text-white",
          order: 2,
          title: "NestJS",
        },
        {
          className: "bg-violet-700 text-white",
          order: 2,
          title: "Rest API",
        },
        {
          className: "bg-[#336791] text-white",
          order: 2,
          title: "Postgresql",
        },
        {
          className: "bg-[#A41E11] text-white",
          order: 4,
          title: "Redis",
        },
        {
          className: "bg-[#0088CC] text-white",
          order: 3,
          title: "Telegram",
        },
      ],
    },
    {
      id: "3",
      order: 3,
      slug: "personal-portfolio",
      category: "Personal Project",
      content: [""],
      featured: false,
      title: "Personal Portfolio",
      titleClassName: "text-purple-600",
      imageUrl: "/assets/portfolio-01.jpg",
      repoUrl: "https://github.com/liiinx-com/amirzad-dev-backend",
      videoUrl: "",
      tags: [
        {
          className: "bg-black text-gray-100",
          order: 1,
          title: "NextJS 13.2",
        },
        {
          className: "bg-[#683CB9] text-gray-200",
          order: 1,
          title: "React-Redux",
        },
        {
          className: "bg-[#161616] text-gray-100",
          order: 2,
          title: "Circle-CI",
        },
        {
          className: "bg-[#3BF7F0] text-black",
          order: 2,
          title: "Tailwind 3",
        },
        {
          className: "bg-[#FF9900] text-black",
          order: 2,
          title: "AWS",
        },
      ],
    },
  ];
  return orderBy(projects, ["order"], ["asc"]);
};

const workHistory: WorkHistoryItem[] = [
  {
    id: "1",
    order: 1,
    title: "IIROC",
    titleClassName: "text-yellow-600",
    role: "Senior Full-Stack Engineer",
    duration: ["Nov 2020 - Present"],
    companyUrl:
      "https://www.linkedin.com/company/iiroc-investment-industry-regulatory-organization-of-canada-/mycompany/verification/",
    content: [""],
    companyIntro: "Investment Industry Regulatory Organization of Canada",
    tags: [
      {
        className: "bg-[#306998] text-[#FFD43B]",
        order: 1,
        title: "Python3",
      },
    ],
    imageUrl:
      "https://media.licdn.com/dms/image/C560BAQHDYdZqS4n_Uw/company-logo_200_200/0/1673464453435?e=1689206400&v=beta&t=MM-UhYdrQK9SMujRqNnhK77Mem6sI5F-isDAXGxb2Fs",
  },
  {
    id: "2",
    order: 2,
    title: "AUDELA",
    duration: ["May 2019 - Nov 2020"],
    companyUrl: "https://www.linkedin.com/company/audela-ca/",
    titleClassName: "text-purple-700",
    role: "Senior Full-Stack Engineer",
    content: [""],
    companyIntro:
      "Providing AI-Based solutions to Communication Service Providers",
    tags: [],
    imageUrl:
      "https://media.licdn.com/dms/image/C4E0BAQExS8yLpBlCeA/company-logo_200_200/0/1651241768344?e=1689206400&v=beta&t=zYMxgZG5OxduEeha460TSxG42trZr83ZMj_BeGPrr6Y",
  },
  {
    id: "3",
    order: 3,
    title: "C2RO",
    duration: ["Feb 2018 - May 2019"],
    titleClassName: "text-violet-500",
    companyUrl: "https://www.linkedin.com/company/c2ro/",
    role: "Senior Full-Stack Engineer",
    content: [""],
    tags: [],
    companyIntro: "Video Analytics AI-SaaS Platform",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D0BAQECpPGX60PQMw/company-logo_200_200/0/1620787122457?e=1689206400&v=beta&t=LNx01_yKJaV1ubONHUcPxBYupPSK62cVYRwBCnmz9HU",
  },
  {
    id: "4",
    order: 4,
    title: "Rayan Bourse",
    duration: ["Apr 2015 - Jun 2017"],
    titleClassName: "text-sky-500",
    companyUrl: "https://www.linkedin.com/company/rayan-bourse/",
    role: "Senior Full-Stack Engineer",

    companyIntro:
      "Providing Software Solutions to Stock Exchange Organization of Iran",
    content: [
      "Designed and developed Analytics data portal which is an internal tool about big data ...",
    ],
    tags: [],
    imageUrl:
      "https://media.licdn.com/dms/image/C4E0BAQGag6mKgnDPkw/company-logo_200_200/0/1594701534232?e=1689206400&v=beta&t=RMdqJTbCrDExTz7np_ZqJuuO_nyTLkHfY0hbzOIiJbc",
  },
];

const blockchainSet: SkillSet = {
  id: "3",
  slug: "crypto",
  title: "BChain/Crypto",
  order: 3,
  skills: [
    { id: "1", order: 3, rate: 8, title: "Trading View API/Libs" },
    { id: "2", order: 4, rate: 8, title: "Moralis" },
    { id: "3", order: 1, rate: 8, title: "Binance API/Websocket" },
    { id: "4", order: 2, rate: 8, title: "Hard-Hat" },
    { id: "4", order: 2, rate: 8, title: "Ganache" },
    { id: "4", order: 2, rate: 8, title: "XRPL.js" },
    { id: "4", order: 2, rate: 8, title: "Pine Script" },
    { id: "4", order: 2, rate: 8, title: "Algo-Trading/Scalping" },
    { id: "5", order: 2, rate: 5, title: "Solidity" },
  ],
  containerClassName: "border-yellow-500",
  videoUrl: "https://www.youtube.com/watch?v=_sEgB9TmCEY",
};

const devopsSet: SkillSet = {
  id: "4",
  slug: "devops",
  title: "DevOps/Cloud",
  order: 4,
  skills: [
    {
      id: "1",
      order: 2,
      rate: 8,
      title: "EC2, S3, EMR",
    },
    {
      id: "1",
      order: 3,
      rate: 8,
      title: "Redshift, DynamoDB",
    },
    { id: "1", order: 1, rate: 8, title: "CI/CD Pipelines" },
    { id: "1", order: 4, rate: 8, title: "Code Commit/Deploy" },
    { id: "2", order: 7, rate: 8, title: "Docker" },
    { id: "3", order: 6, rate: 8, title: "Travis-CI/Circle-CI" },
    { id: "4", order: 5, rate: 8, title: "Jenkins" },
  ],
  containerClassName: "border-pink-400",
  videoUrl: "https://www.youtube.com/watch?v=_sEgB9TmCEY",
};

const backendSet: SkillSet = {
  id: "1",
  slug: "backend",
  title: "Backend",
  order: 1,
  videoUrl: "https://www.youtube.com/watch?v=_sEgB9TmCEY",
  skills: [
    {
      id: "1",
      order: 1,
      title: "NestJS",
      rate: 7,
    },
    {
      id: "2",
      order: 2,
      title: "NodeJS",
      rate: 7,
    },
    {
      id: "3",
      order: 3,
      title: "Python 3",
      rate: 6,
    },
    {
      id: "3",
      order: 3,
      title: "Django",
      rate: 6,
    },
    {
      id: "4",
      order: 5,
      title: "Mongo/Mongoose",
      rate: 7,
    },
    {
      id: "5",
      order: 4,
      title: "Postgres/TypeORM",
      rate: 6,
    },
    {
      id: "6",
      order: 6,
      title: "BullJS/Celery",
      rate: 6,
    },
    {
      id: "7",
      order: 6,
      title: "Redis/RabbitMQ",
      rate: 6,
    },
    {
      id: "8",
      order: 6,
      title: "Unit/Int/E2E Testing",
      rate: 6,
    },
    {
      id: "8",
      order: 6,
      title: "REST API Designing",
      rate: 6,
    },
    {
      id: "8",
      order: 6,
      title: "Microservices Arch",
      rate: 6,
    },
  ],
  containerClassName: "border-green-500",
};

const frontendSet: SkillSet = {
  id: "2",
  title: "Frontend",
  slug: "frontend",
  order: 2,
  skills: [
    {
      id: "2",
      order: 1,
      title: "UI/UX Design",
      rate: 7,
    },
    {
      id: "1",
      order: 1,
      title: "React",
      rate: 7,
    },
    {
      id: "1",
      order: 1,
      title: "NextJS 13",
      rate: 7,
    },
    {
      id: "1",
      order: 1,
      title: "React Native",
      rate: 7,
    },
    {
      id: "1",
      order: 1,
      title: "Redux/Zustand",
      rate: 7,
    },

    {
      id: "3",
      order: 9,
      title: "Micro-Frontend",
      rate: 5,
    },
    {
      id: "3",
      order: 9,
      title: "Angular/Vue",
      rate: 5,
    },
    {
      id: "8",
      order: 6,
      title: "MUI/Tailwind/...",
      rate: 6,
    },
    {
      id: "8",
      order: 6,
      title: "Unit/E2E Testing",
      rate: 6,
    },
  ],
  containerClassName: "border-purple-400",
  videoUrl: "https://www.youtube.com/watch?v=_sEgB9TmCEY",
};

const skillSets: SkillSet[] = [
  backendSet,
  frontendSet,
  blockchainSet,
  devopsSet,
];
