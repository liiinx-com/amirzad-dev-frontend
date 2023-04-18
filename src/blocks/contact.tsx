import {
  IconWrapper,
  getIconByName,
  Title,
  Section,
  Container,
} from "@/components";
import { CheckCircleIcon } from "@/components/icons";
import { ContactInfo } from "@/types";

interface ContactProps {
  info: ContactInfo[];
}

const ICON_SIZE = 38;

const ContactInfo = ({
  info: { content, title, iconClassName, iconName, url },
}: {
  info: ContactInfo;
}) => {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <a href={url} target="_blank">
        <div className="shadow-md hover:shadow-2xl active:shadow-2xl w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 border border-green-400">
          <IconWrapper
            className={iconClassName}
            size={ICON_SIZE}
            icon={getIconByName(iconName)}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg dark:text-gray-400 title-font font-medium mb-3 hover:text-blue-600 hover:underline">
            {content}
          </h2>
        </div>
      </a>
    </div>
  );
};

export const Contact = ({ info }: ContactProps) => {
  return (
    <Section sectionId="contact" className="overflow-hidden">
      <Container>
        <div className="flex flex-col text-center w-full mb-20">
          <Title
            title="contact info"
            uppercaseTitle
            // subtitle={
            //   <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            //     Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            //     taxidermy. Gastropub indxgo juice poutine, ramps microdosing
            //     banh mi pug.
            //   </p>
            // }
          />
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
          {info.map((info) => (
            <ContactInfo key={info.id} info={info} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
