// import { Inter } from "next/font/google";
import {
  About,
  Contact,
  Profile,
  Projects,
  Skills,
  WorkHistoryV2,
} from "@/blocks";
import { Alert } from "@/components";
import {
  getSkillSets,
  getContactInfo,
  getWorkHistory,
  getProjects,
  getProfileItems,
  getHeroItem,
} from "@/data";

const alertContent = {
  title: "Heads up!",
  content: (
    <p>
      The videos are being updated! The next version will be available by{" "}
      <span className="underline font-semibold">
        the end of Sat April 15, 2023
      </span>
      .
    </p>
  ),
};

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl">
      <Alert {...alertContent} />
      <Profile />
      <Skills skillSets={getSkillSets()} />
      <Projects heroItem={getHeroItem()} projects={getProjects()} />
      <About aboutItems={getProfileItems()} />
      <WorkHistoryV2 history={getWorkHistory()} />
      <Contact info={getContactInfo()} />
    </div>
  );
}
