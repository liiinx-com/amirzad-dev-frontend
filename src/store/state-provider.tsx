"use client";
import { ReactNode } from "react";
import { store } from "@/store/index";
import { Provider } from "react-redux";

interface ProviderProps {
  children: ReactNode;
}

export const StateProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
