import { IconWrapper } from "@/components";
import { ProjectCardProps } from "./index";
import { YoutubeIcon, GithubIcon } from "@/components/icons";

const ICON_SIZE = 16;

export const ActionButtons = ({
  project: { videoUrl, repoUrl },
}: ProjectCardProps) => {
  return (
    <div className="flex items-center flex-wrap ">
      <a
        href={videoUrl}
        className="inline-flex text-sm items-center md:mb-2 lg:mb-0 p-1 border text-red-600 bg-white hover:text-white border-[#ff0000]  hover:bg-[#ff0000] rounded-md"
      >
        Watch Intro
      </a>
      <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm  ">
        <a href={repoUrl} target="_blank">
          <IconWrapper
            className="hover:text-gray-800"
            size={ICON_SIZE}
            icon={<GithubIcon />}
          />
        </a>
      </span>
    </div>
  );
};
