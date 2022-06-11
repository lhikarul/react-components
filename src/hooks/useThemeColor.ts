import { useTheme } from "@emotion/react";

export const useThemeColor = () => {
  const theme: any = useTheme();

  const makeColor = ({
    themeColor,
    disabled,
  }: {
    themeColor: string;
    disabled: boolean;
  }) => {
    const colorRegex = new RegExp(
      /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^)]*\)/
    );
    const isValidColorCode = colorRegex.test(themeColor?.toLocaleLowerCase());
    const madeColor = isValidColorCode
      ? themeColor
      : theme.color[themeColor] || theme.color.primary;
    return disabled ? theme.color.disable : madeColor;
  };
  return {
    makeColor,
  };
};
