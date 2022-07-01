import React from "react";

export type SkeltonVariant = "circular" | "rectangular" | "text";

export interface SkeltonProps {
  variant?: SkeltonVariant;
  animation?: "slide" | "flash";
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}
