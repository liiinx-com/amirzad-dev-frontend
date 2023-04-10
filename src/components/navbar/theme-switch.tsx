import { SunIcon, MoonIcon } from "@/components/icons";
import { IconWrapper } from "@/components";
import { useTheme } from "@/contexts/theme/theme-context";

export const ThemeSwitch = () => {
  const { theme, isDark, toggle } = useTheme();
  return (
    <span>
      <IconWrapper
        onClick={toggle}
        className={theme.body.textClassName}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
      />
    </span>
  );
};
