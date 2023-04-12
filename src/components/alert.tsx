import { ReactNode } from "react";
interface AlertProps {
  type?: "WARNING";
  title?: string;
  content?: string | ReactNode;
}

// TODO: add more alert types SUCCESS | INFO | ERROR

export const Alert = ({ title, content }: AlertProps) => {
  return (
    <div>
      <div
        className="bg-orange-100 border-t-4 shadow dark:bg-gray-700 dark:text-gray-300 border-orange-500 text-orange-700 p-4 m-7"
        role="alert"
      >
        <div className="font-bold">{title}</div>
        <p>{content}</p>
      </div>
    </div>
  );
};
