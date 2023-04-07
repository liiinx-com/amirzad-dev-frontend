import { SkillSet, WorkHistoryItem } from "./types";
import { orderBy } from "@/utils/lodash";

export const getWorkHistory = () => orderBy(workHistory, ["order"], ["asc"]);

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
  slug: "blockchain",
  title: "Blockchain",
  order: 3,
  skills: [
    { id: "1", order: 3, rate: 8, title: "Trading View API" },
    { id: "2", order: 4, rate: 8, title: "Moralis" },
    { id: "3", order: 1, rate: 8, title: "Binance API" },
    { id: "4", order: 2, rate: 8, title: "Hard-Hat" },
    { id: "5", order: 2, rate: 5, title: "Solidity" },
  ],
  containerClassName: "border-yellow-800",
};

const devopsSet: SkillSet = {
  id: "4",
  slug: "devops",
  title: "DevOps",
  order: 4,
  skills: [
    { id: "1", order: 1, rate: 8, title: "CI/CD Pipelines" },
    { id: "2", order: 2, rate: 8, title: "Docker" },
    { id: "3", order: 3, rate: 8, title: "Travis/Circle-CI" },
    { id: "4", order: 4, rate: 8, title: "Jenkins" },
  ],
  containerClassName: "border-pink-600",
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
  containerClassName: "border-green-300",
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
      title: "Redux/Zustand",
      rate: 7,
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
  containerClassName: "border-pink-300",
};

export const skillSets: SkillSet[] = [
  backendSet,
  frontendSet,
  blockchainSet,
  devopsSet,
];

// export const skills  = [
//   {
//     id: "1",
//     category: backendCat,
//     title: "Vexillologist pitchfork",
//   },
//   {
//     id: "2",
//     category: backendCat,
//     title: "Vexillologist pitchfork2",
//   },
//   {
//     id: "3",
//     category: backendCat,
//     title: "Vexillologist pitchfork",
//   },
//   {
//     id: "4",
//     category: backendCat,
//     title: "Vexillologist pitchfork",
//   },
// ];
