import type { ReactElement } from "react";

export interface TabContextProps {
  children: ReactElement | ReactElement[];
  value: string;
}

export interface TabsProps {
  className?: string;
  options: { label: string | ReactElement; value: string }[];
  value: string;
  onChange: (label: string) => void;
  gap?: number;
}

export interface TabGroupProps {
  className?: string;
  value: string;
  children: ReactElement[];
  onChange: (value: string) => void;
  gap?: number;
}

export interface TabProps {
  label: string | ReactElement;
  value: string;
}
