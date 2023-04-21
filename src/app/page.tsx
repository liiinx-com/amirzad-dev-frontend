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
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl">
      <Profile />
      <Skills skillSets={getSkillSets()} />
      <Projects heroItem={getHeroItem()} projects={getProjects()} />
      <About aboutItems={getProfileItems()} />
      <WorkHistoryV2 history={getWorkHistory()} />
      <Contact info={getContactInfo()} />
      <BackToTop />
    </div>
  );
}
