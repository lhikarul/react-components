import type { ReactElement } from "react";

export interface PanelProps {
  header: ReactElement;
  children: ReactElement;
}

export interface HeaderProps {
  children: ReactElement | string;
  isUp: boolean;
  onClick: () => void;
}

export interface AccordionProps {
  children: ReactElement | ReactElement[];
  onChange?: (index: number) => void;
}
