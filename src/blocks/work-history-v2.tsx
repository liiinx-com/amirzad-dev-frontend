import { Title, Section, Container } from "@/components";
import { WorkHistoryItem } from "@/types";
import { TagList } from "@/components/tag-list";

interface WorkHistoryProps {
  history: WorkHistoryItem[];
}

const WorkItem = ({
  item: { title, duration, companyIntro, content, tags, titleClassName, role },
}: {
  item: WorkHistoryItem;
}) => {
  return (
    <li>
      <article>
        <a
          rel="noopener noreferrer"
          className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
        >
          <div className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
            <h3 className={"mb-1 font-semibold " + titleClassName}>
              <span>{title}</span>
              <span className="text-green-600"> - {role}</span>
            </h3>
            <h4 className="mb-4 font-normal dark:text-gray-400 text-zinc-700">
              <span>{companyIntro}</span>
            </h4>
          </div>
          <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 font-semibold dark:text-gray-300 flex flex-col">
            <span>{duration[1]}</span>
            <span>{duration[0]}</span>
          </time>
          <div className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
            <ul className="list-disc list-inside space-y-1">
              {content.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <TagList containerClassName="justify-start" tags={tags} />
          </div>
        </a>
      </article>
    </li>
  );
};

export const WorkHistoryV2 = ({ history }: WorkHistoryProps) => {
  return (
    <Section sectionId="work" className="overflow-hidden">
      <Container>
        <div className="flex flex-col text-center w-full">
          <Title title="most recent work history" uppercaseTitle />
        </div>
        <div>
          <ul className="p-3 lg:p-8 dark:bg-gray-800 dark:text-gray-100 space-y-6">
            {history.map((i) => (
              <WorkItem key={i.id} item={i} />
            ))}
            <li>
              <Title
                title=""
                uppercaseTitle
                subtitle={
                  <span className="dark:text-gray-300">
                    For the full work history, please visit my{" "}
                    <a
                      className="text-blue-700 font-semibold bg-blue-200 p-1 rounded-md"
                      href="https://www.linkedin.com/in/amir-m-zad/"
                      target="_blank"
                    >
                      Linkedin
                    </a>{" "}
                    page.
                  </span>
                }
              />
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};
