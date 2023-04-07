import { Tag } from "@/types";
import { Button } from "./button";

interface TagListProps {
  tags: Tag[] | null;
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-wrap -m-4">
      {tags?.map(({ className, title }) => (
        <span
          className={`cursor-default mx-auto mt-16 font-semibold py-1 px-2  rounded-xl text-sm ${className}`}
        >
          {title}
        </span>
      ))}
    </div>
  );
};
