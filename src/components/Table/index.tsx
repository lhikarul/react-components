import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { TableDataSource, TableProps } from "./types";
import { TableStyled, Td, Th } from "./table.style";

function Table(props: TableProps) {
  const {
    columns,
    className,
    height = "100%",
    minScrollWidth = 1280,
    sortPosition,
    striped = false,
    skeletonOfRows,
    onRowClick,
  } = props;
  const [dataSource, setDataSource] = useState<Array<TableDataSource>>([]);
  const { width: windowWidth } = useWindowSize();
  const isFixed = minScrollWidth >= windowWidth ? true : false;

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
        style={{ minWidth: isFixed ? minScrollWidth + "px" : "100%" }}
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
                {column.sortable ? <div>sort</div> : column.title}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
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
                  console.log(column.title, isFixed, column.fixed);
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
