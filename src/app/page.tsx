// import { Inter } from "next/font/google";
import {
  About,
  Contact,
  Profile,
  Projects,
  Skills,
  WorkHistoryV2,
} from "@/blocks";
import {
  getSkillSets,
  getContactInfo,
  getWorkHistory,
  getProjects,
  getProfileItems,
} from "@/data";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl">
      <Profile />
      <Skills skillSets={getSkillSets()} />
      <Projects projects={getProjects()} />
      <About aboutItems={getProfileItems()} />
      <WorkHistoryV2 history={getWorkHistory()} />
      <Contact info={getContactInfo()} />
    </div>
  );
}
