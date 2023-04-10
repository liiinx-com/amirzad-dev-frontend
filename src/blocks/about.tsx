import {
  Title,
  Section,
  Container,
  AboutItem as AboutItemComponent,
} from "@/components";
import { AboutItem } from "@/types";

interface AboutProps {
  aboutItems: AboutItem[];
}

export const About = ({ aboutItems }: AboutProps) => {
  return (
    <Section sectionId="about" className="overflow-hidden">
      <Container>
        <div className="flex flex-col text-center w-full mb-20">
          <Title title="about me" uppercaseTitle />
        </div>

        {aboutItems.map((item: AboutItem, index: number) => (
          <AboutItemComponent
            dir={index % 2 === 0 ? "ltr" : "rtl"}
            key={item.id}
            aboutItem={item}
          />
        ))}
      </Container>
    </Section>
  );
};
