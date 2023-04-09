import React from "react";
import { Project } from "@/types";
import { Title, Section, Container, ProjectCard } from "@/components";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="flex flex-col text-center w-full mb-20">
          <Title title="my favorite/recent projects" uppercaseTitle />
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((p: Project) => (
            <div key={p.id} className="p-4 md:w-1/3">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
