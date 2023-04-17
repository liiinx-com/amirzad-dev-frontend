"use client";
import { useEffect, useCallback, useRef } from "react";
import { IconWrapper } from "@/components/icon-wrapper";
import { ChevronUpIcon } from "@/components/icons";

const showMoveToTopOnHeight = 100;

export const BackToTop = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    if (!buttonRef.current) return;
    if (
      document.body.scrollTop > showMoveToTopOnHeight ||
      document.documentElement.scrollTop > showMoveToTopOnHeight
    )
      buttonRef.current.style.display = "block";
    else buttonRef.current.style.display = "none";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      style={{ display: "none" }}
      className="fixed inline-block p-4 bg-green-600 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg 
        focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
      onClick={handleClick}
    >
      <IconWrapper
        className={"dark:text-gray-800 text-white"}
        icon={<ChevronUpIcon />}
      />
    </button>
  );
};
