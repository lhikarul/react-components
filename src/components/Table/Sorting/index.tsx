import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TableColumnsProps, TableDataSource, SortingType } from "../types";
import { Container, SortIcon } from "./sorting.style";

interface SortingProps {
  column: TableColumnsProps;
  unSortedDataSource: TableDataSource[];
  setDataSource: Dispatch<SetStateAction<TableDataSource[]>>;
  active: boolean;
  onChange: () => void;
}

function Sorting(props: SortingProps) {
  const { column, unSortedDataSource, setDataSource, active, onChange } = props;

  const [sorting, setSorting] = useState<SortingType>(SortingType.unset);

  const onSorting = () => {
    setSorting((sorting) =>
      sorting === SortingType.unset
        ? SortingType.asc
        : sorting === SortingType.asc
        ? SortingType.desc
        : SortingType.unset
    );
    onChange();
  };

  useEffect(() => {
    const { dataIndex } = column;
    if (!active) {
      setSorting(SortingType.unset);
    }
    if (sorting === SortingType.unset) {
      return setDataSource(unSortedDataSource);
    }
    if (sorting === SortingType.asc) {
      return setDataSource(
        [...unSortedDataSource].sort((a, b) =>
          a[dataIndex] - b[dataIndex] > 0 ? 1 : -1
        )
      );
    }
    if (sorting === SortingType.desc) {
      return setDataSource(
        [...unSortedDataSource].sort((a, b) =>
          a[dataIndex] - b[dataIndex] > 0 ? -1 : 1
        )
      );
    }
  }, [active, sorting, unSortedDataSource, setDataSource, column]);

  return (
    <Container onClick={onSorting}>
      <span>{column.title}</span>
      <span className="sort">
        <SortIcon
          asc={true}
          color={sorting === SortingType.asc ? "#f0b90b" : ""}
        />
        <SortIcon
          asc={false}
          color={sorting === SortingType.desc ? "#f0b90b" : ""}
        />
      </span>
    </Container>
  );
}

export default Sorting;
