import { Tag } from "@/types";

interface TagListProps {
  tags: Tag[] | null;
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tags?.map(({ className, title }) => (
        <span
          className={`cursor-default ml-2 mt-2 font-semibold py-1 px-2 rounded-xl text-xs ${className}`}
        >
          {title}
        </span>
      ))}
    </div>
  );
};
