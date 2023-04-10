import { Skill } from "@/types";
import { IconWrapper } from "@/components";
import { CheckCircleIcon } from "@/components/icons";

interface SkillItemProps {
  skill: Skill;
  iconClassName?: string;
}

const ICON_SIZE = 17;

export const SkillItem = ({
  skill: { id, title, rate },
  iconClassName = "text-lime-600",
}: SkillItemProps) => {
  return (
    <p className="flex items-center text-gray-600 mb-2">
      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-400 rounded-full flex-shrink-0 ">
        <IconWrapper
          className={iconClassName}
          size={ICON_SIZE}
          icon={<CheckCircleIcon />}
        />
      </span>
      {title}
    </p>
  );
};
