"use client";
import { Title, Section, Container } from "@/components";
import { useState, useEffect } from "react";

import { WorkHistoryItem } from "@/types";
import { WorkHistoryItem as WorkHistoryItemComponent } from "@/components/work-history-item";

interface WorkHistoryProps {
  history: WorkHistoryItem[];
}

const TabItem = ({
  selected,
  onClick,
  item: { id, title, titleClassName = "" },
}: {
  selected: boolean;
  onClick: () => void;
  item: WorkHistoryItem;
}) => (
  <span
    onClick={onClick}
    key={id}
    className={`cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 font-medium inline-flex items-center leading-none border-gray-200  tracking-wider ${titleClassName} ${
      selected ? "border-green-500" : ""
    }`}
  >
    {title}
  </span>
);

export const WorkHistory = ({ history }: WorkHistoryProps) => {
  const [selectedItem, setSelectedItem] = useState<WorkHistoryItem>(
    {} as WorkHistoryItem
  );

  useEffect(() => {
    if (!history || !history.length) return;
    setSelectedItem(history[0]);
  }, [history]);

  if (history.length === 0) return null;

  return (
    <Section sectionId="work" className="overflow-hidden">
      <Container>
        <div className="flex flex-col text-center w-full mb-20">
          <Title
            title="most recent work history"
            uppercaseTitle
            subtitle={
              <span>
                For full work experience, please visit my{" "}
                <a
                  className="text-blue-700 font-semibold"
                  href="https://www.linkedin.com/in/amir-m-zad/"
                  target="_blank"
                >
                  Linkedin
                </a>{" "}
                page.
              </span>
            }
          />
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="container px-5 py-16 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-20">
              {history.map((i) => (
                <TabItem
                  key={i.id}
                  onClick={() => setSelectedItem(i)}
                  selected={selectedItem?.id === i.id}
                  item={i}
                />
              ))}
            </div>
            <WorkHistoryItemComponent historyItem={selectedItem} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
