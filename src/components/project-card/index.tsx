import { Project } from "@/types";
import { ActionButtons } from "./action-buttons";
import { TagList } from "../tag-list";
import { IconWrapper } from "@/components";
import { StarIcon } from "@/components/icons";

const ICON_SIZE = 16;

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    content,
    tags,
    title,
    featured,
    imageUrl,
    repoUrl,
    titleClassName,
    videoUrl,
    category,
  } = project;
  return (
    <div className="h-full border border-gray-400 hover:shadow-lg shadow-md hover:border-amber-400 border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center mb-2"
        src={imageUrl}
        alt={title}
      />
      <div className="p-5 mb-2">
        <div className="flex flex-row">
          {featured && (
            <IconWrapper
              className={"text-amber-400 mr-1"}
              size={ICON_SIZE}
              icon={<StarIcon />}
            />
          )}
          <h2 className="tracking-widest text-xs title-font font-medium text-slate-700-500 mb-1">
            {category}
          </h2>
        </div>
        <h1
          className={`text-lg font-medium text-gray-900 mb-7 ${titleClassName}`}
        >
          {title}
        </h1>
        <p className="leading-relaxed mb-3">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <ActionButtons project={project} />
      </div>

      <div className="p-2 mb-4">
        <TagList tags={project.tags} />
      </div>
    </div>
  );
};
