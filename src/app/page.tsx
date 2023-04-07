// import { Inter } from "next/font/google";

import { Profile, Skills } from "@/blocks";
import { WorkHistory } from "@/blocks/work-history";
import { skillSets, getWorkHistory } from "@/data";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl">
      <Profile />
      <Skills skillSets={skillSets} />
      <WorkHistory history={getWorkHistory()} />
    </div>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <h2 className={inter.className}>
    //       Templates <span>-&gt;</span>
    //     </h2>
    //     <p className={inter.className}>Explore the Next.js 13 playground.</p>
    //   </div>
    // </main>
  );
}
