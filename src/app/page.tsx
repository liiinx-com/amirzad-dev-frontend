// import { Inter } from "next/font/google";
import { About, Contact, Profile, Projects, Skills } from "@/blocks";
import { WorkHistory } from "@/blocks/work-history";
import {
  getSkillSets,
  getWorkHistory,
  getProjects,
  getProfileItems,
} from "@/data";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl" id="home">
      <Profile />
      <Skills skillSets={getSkillSets()} />
      <Projects projects={getProjects()} />
      <About aboutItems={getProfileItems()} />
      <WorkHistory history={getWorkHistory()} />
      <Contact />
    </div>
  );
}
