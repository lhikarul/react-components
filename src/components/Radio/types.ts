import { ReactElement } from "react";

export interface RadioProps {
  value: string;
  label: string;
  checked?: boolean;
  className?: string;
  themeColor?: "primary" | "secondary" | string;
}

export interface RadioGroupProps {
  children: ReactElement[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
  row?: boolean;
}
