import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Skelton from "../Skelton";
import { TableDataSource, TableProps } from "./types";
import { TableStyled, Td, Th } from "./table.style";
import Sorting from "./Sorting";

function Table(props: TableProps) {
  const {
    columns,
    className,
    height = "100%",
    minWidth = 1280,
    striped = false,
    skeletonOfRows,
    onRowClick,
  } = props;
  const [dataSource, setDataSource] = useState<Array<TableDataSource>>([]);
  const [sortedColumnIndex, setSortedColumnIndex] = useState<number>(-1);
  const { width: windowWidth } = useWindowSize();
  const isFixed = minWidth >= windowWidth ? true : false;

  useEffect(() => {
    setDataSource(props.dataSource);
  }, [props.dataSource]);

  return (
    <div
      className={className}
      style={{
        width: "100%",
        overflow: "auto",
        height: typeof height === "string" ? height : height + "px",
      }}
    >
      <TableStyled
        style={{ minWidth: isFixed ? minWidth + "px" : "100%" }}
        striped={striped}
        rowClick={!!onRowClick}
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <Th
                key={index}
                style={{ width: column.width }}
                fixed={isFixed && column.fixed}
              >
                {column.sortable ? (
                  <Sorting
                    column={column}
                    unSortedDataSource={props.dataSource}
                    setDataSource={setDataSource}
                    active={sortedColumnIndex === index}
                    onChange={() => setSortedColumnIndex(index)}
                  />
                ) : (
                  column.title
                )}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.length === 0 &&
            [...Array(skeletonOfRows)].map((_, index) => (
              <React.Fragment key={index}>
                <tr>
                  {[...Array(columns.length)].map((_, index) => (
                    <Td key={index}>
                      <Skelton width={"100%"} height={20} animation="flash" />
                    </Td>
                  ))}
                </tr>
              </React.Fragment>
            ))}

          {dataSource.map((data, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <tr onClick={() => onRowClick && onRowClick(data)}>
                {columns.map((column) => {
                  const { dataIndex } = column;
                  const foundCellData = column.render
                    ? column.render(data)
                    : typeof data[dataIndex] === "function"
                    ? data[dataIndex]()
                    : data[dataIndex];
                  return (
                    <Td key={column.key} fixed={isFixed && column.fixed}>
                      {foundCellData || "-"}
                    </Td>
                  );
                })}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </TableStyled>
    </div>
  );
}

export default Table;
