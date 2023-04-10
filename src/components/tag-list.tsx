import { Tag } from "@/types";

interface TagListProps {
  tags: Tag[] | null;
  containerClassName?: string;
}

export const TagList = ({
  tags,
  containerClassName = "justify-center",
}: TagListProps) => {
  return (
    <div className={`flex flex-wrap ${containerClassName}`}>
      {tags?.map(({ className, title }) => (
        <span
          key={title.toLocaleLowerCase()}
          className={`cursor-default ml-2 mt-2 font-semibold py-1 px-2 rounded-xl text-xs ${className}`}
        >
          {title}
        </span>
      ))}
    </div>
  );
};
