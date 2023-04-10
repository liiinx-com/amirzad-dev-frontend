import { StarIcon } from "@/components/icons";
import { IconWrapper } from "@/components";

const ICON_SIZE = 45;

export const ImageSection = () => {
  return (
    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-yellow-400 flex-shrink-0">
      <IconWrapper
        className="hover:text-amber-400"
        size={ICON_SIZE}
        icon={<StarIcon />}
      />
    </div>
  );
};
