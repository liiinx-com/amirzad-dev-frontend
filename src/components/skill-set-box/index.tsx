import { SkillSet } from "@/types";
import { SkillItem } from "./skill-item";

interface SkillSetBoxProps {
  skillSet: SkillSet;
}

export const SkillSetBox = ({
  skillSet: { title, skills, videoUrl, containerClassName = "" },
}: SkillSetBoxProps) => {
  return (
    <div
      className={`h-full p-6 rounded-lg border-2 hover:shadow-lg shadow-md border-gray-300 flex flex-col relative overflow-hidden ${containerClassName}`}
    >
      {/* <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
        badgeText
      </span> */}

      {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
        superTitle
      </h2> */}

      <h1 className="text-3xl text-gray-800 leading-none dark:text-gray-400 flex items-center pb-4 mb-4 border-b border-gray-200">
        <span>{title}</span>
        {/* <span className="text-lg ml-1 font-normal text-gray-500">/mo</span> */}
      </h1>

      <div className="grow">
        {skills.map((s) => (
          <SkillItem key={s.id} skill={s} />
        ))}
      </div>

      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          className="flex mt-6 items-center dark:bg-gray-800 dark:text-gray-400 justify-center dark:border-red-600 hover:text-white dark:hover:text-white text-red-600 bg-white border-[#ff0000] border py-2 px-4 w-full focus:outline-none hover:bg-[#ff0000] rounded"
        >
          Watch Video
        </a>
      )}
      {/* <p className="text-xs text-gray-500 mt-3">subTitle</p> */}
    </div>
  );
};
