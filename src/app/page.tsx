// import { Inter } from "next/font/google";

import { About, Contact, Profile, Projects, Skills } from "@/blocks";
import { WorkHistory } from "@/blocks/work-history";
import { getSkillSets, getWorkHistory, getProjects } from "@/data";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl">
      <Profile />
      <About />
      <Skills skillSets={getSkillSets()} />
      {/* <WorkHistory history={getWorkHistory()} /> */}
      <Projects projects={getProjects()} />
      <Contact />
    </div>
  );
}
