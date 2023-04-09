import React from "react";
import Image from "next/image";
import { CallToAction } from "@/components/call-to-action";
import { IconWrapper } from "@/components";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const Profile = () => {
  return (
    <div>
      <CallToAction
        title="Full-Stack Engineer"
        content={
          <span>
            Hi, my name is <span className="text-logo-primary">Amir</span>. A
            software engineer with more than 8 years of experience in Web
            Development. Highly Passionate about{" "}
            <span className="text-[#FF8F00] font-medium">Blockchain</span>
            {", "}
            <span className="text-[#1E88E5] font-medium">Web3</span>
            {", "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Devops
            </span>
            {", "}
            <span className="text-[#FF9900] font-medium">
              Cloud
            </span>
            {"  and "}
            <span className="text-[#9C27B0] font-medium">SAAS</span>.
          </span>
        }
        subContent={
          <span>
            Ready and eager to step out of my comfort zone to tackle complex,
            real-world problems.
          </span>
        }
        buttons={[
          <a key="linkedin" href="https://www.linkedin.com/in/amir-m-zad/" target="_blank">
            <IconWrapper className="text-[#0a66c2]" icon={<LinkedinIcon />} />
          </a>,
          <a key="github" href="https://github.com/liiinx-com" target="_blank">
            <IconWrapper className="text-[#171515]" icon={<GithubIcon />} />
          </a>,
        ]}
        media={
          <Image
            src="/assets/profile-image.jpg"
            alt="Amir Zad - Full stack engineer"
            // width={480}
            // height={360}
            width={360}
            height={300}
            className={`object-cover object-center rounded-lg border-gray-600 border`}
          />
        }
      />
    </div>
  );
};
