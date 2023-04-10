import { Title, Section, Container, SkillSetBox } from "@/components";
import React from "react";

import { SkillSet } from "@/types";

interface SkillsProps {
  skillSets: SkillSet[];
}

export const Skills = ({ skillSets }: SkillsProps) => {
  return (
    <Section sectionId="skills" className="overflow-hidden">
      <Container>
        <div className="flex flex-col text-center w-full mb-20">
          <Title title="top skills / favorites" uppercaseTitle />
        </div>
        <div className="flex flex-wrap -m-4">
          {skillSets.map((s: SkillSet) => (
            <div key={s.id} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <SkillSetBox skillSet={s} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
