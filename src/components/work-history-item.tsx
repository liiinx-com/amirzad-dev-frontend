import { WorkHistoryItem as IWorkHistory } from "@/types";
import { TagList } from "./tag-list";

interface WorkHistoryProps {
  historyItem: IWorkHistory;
}

export const WorkHistoryItem = ({ historyItem }: WorkHistoryProps) => {
  return (
    <>
      <img
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
        alt={historyItem?.title}
        src={historyItem?.imageUrl}
      />
      <div className="flex flex-col text-center w-full">
        <h1
          className={`text-2xl font-medium  mb-2 ${historyItem?.titleClassName}`}
        >
          <a href={historyItem?.companyUrl} target="_blank">
            {historyItem?.title}
          </a>
        </h1>
        <h2 className="text-xl font-medium mb-10 text-gray-700">
          {historyItem?.companyIntro}
        </h2>
        <h3 className="text-xl font-medium mb-1 text-gray-600">
          {historyItem?.role}
        </h3>
        <p className="text-gray-500 text-lg font-normal">
          {historyItem?.duration}
        </p>

        {historyItem?.content?.map((c: string, i: number) => (
          <p key={i} className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {c}
          </p>
        ))}
        <TagList tags={historyItem?.tags} />
      </div>
    </>
  );
};
