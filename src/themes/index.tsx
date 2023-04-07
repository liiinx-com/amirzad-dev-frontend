import { GreenTheme } from "./green";

export interface Theme {
  body: {
    className: string;
    linkClassName: string;
    textClassName: string;
  };

  navbar: {
    logoClassName: string;
    sloganClassName: string;
    className: string;
  };
}

export const getTheme = (themeName: string = "spring"): Theme => {
  console.log("getTheme", themeName);
  return GreenTheme;
};
