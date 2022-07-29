import type { ReactElement } from "react";

export enum SortingType {
  desc = "descending",
  asc = "ascending",
  unset = "unset",
}

type CompareFn<T> = (a: T, b: T, sorting: SortingType) => number;

export interface TableColumnsProps {
  key: string | number;
  dataIndex: string;
  title: string;
  width?: number | string;
  render?: (data: any) => ReactElement;
  sortable?: boolean;
  sorter?: CompareFn<unknown>;
  fixed?: boolean;
}

export interface TableDataSource {
  [key: string]: any;
}

export interface TableProps {
  columns: TableColumnsProps[];
  dataSource: TableDataSource[];
  className?: string;
  height?: string | number;
  minWidth?: number | string;
  onRowClick?: (data: any) => void;
  sortPosition?: "start" | "center" | "end";
  striped?: boolean;
  skeletonOfRows?: number;
}
