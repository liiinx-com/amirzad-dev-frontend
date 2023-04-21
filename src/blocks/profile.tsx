import React from "react";
import Image from "next/image";
import { CallToAction } from "@/components/call-to-action";
import { IconWrapper } from "@/components";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons";

export const Profile = () => {
  return (
    <div>
      <CallToAction
        title="Full-Stack Engiiineer"
        content={
          <span className="shadow-md">
            Hi, my name is <span className="text-logo-primary">Amir</span>. A
            software engineer with more than 8 years of experience in Web
            Development. Highly Passionate about{" "}
            <span className="text-[#FF8F00] font-medium">Blockchain</span>
            {", "}
            <span className="text-green-500 font-medium">Tokenization</span>
            {", "}
            <span className="text-[#1E88E5] font-medium">Web3/DAAP</span>
            {", "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              DevOps
            </span>
            {", "}
            <span className="text-[#FF9900] font-medium">Cloud</span>
            {"  and "}
            <span className="text-[#9C27B0] font-medium">SaaS</span>.
          </span>
        }
        subContent={
          <span>
            Ready and eager to step out of my comfort zone to tackle complex,
            real-world problems.{" "}
            <span className="inline text-2xl"> &#x1F680; </span>
          </span>
        }
        buttons={[
          <a
            key="linkedin"
            href="https://www.linkedin.com/in/amir-m-zad/"
            target="_blank"
          >
            <IconWrapper className="text-[#0a66c2]" icon={<LinkedinIcon />} />
          </a>,
          <a key="github" href="https://github.com/liiinx-com" target="_blank">
            <IconWrapper className="text-[#171515]" icon={<GithubIcon />} />
          </a>,
        ]}
        featuredButton={
          <a
            key="intro"
            className="flex flex-col items-center ml-3 bg-[#FF0000]  py-3 px-5 border border-gray-300 hover:border-gray-800 rounded-lg text-white hover:shadow-xl shadow-lg"
            href="https://youtu.be/WvaWaTACxqk"
            target="_blank"
          >
            <IconWrapper className="text-white" icon={<YoutubeIcon />} />
            Quick Intro About Me
          </a>
        }
        media={
          <Image
            src="/assets/profile-image-01.jpg"
            alt="Amir Zad - Full stack engineer"
            // width={480}
            // height={360}
            width={360}
            height={300}
            className={`object-cover object-center rounded-lg border-gray-600 border hover:shadow-lg shadow-md`}
          />
        }
      />
    </div>
  );
};
