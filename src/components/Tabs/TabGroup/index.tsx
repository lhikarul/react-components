import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { TabGroupProps } from "../types";

const TabsScrollWrapper = styled.div`
  position: relative;
`;

const StyledTabGroup = styled.div<{ gap?: number }>`
  display: flex;
  > div:not(:last-of-type) {
    margin-right: ${(props) => (props.gap ? props.gap : 8)}px;
  }
`;

const MovingLine = styled.div<{ left: number; width: number }>`
  position: absolute;
  bottom: -9px;
  left: ${(props) => props.left}px;
  height: 4px;
  width: ${(props) => props.width}px;
  background: #1976d2;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

function TabGroup(props: TabGroupProps) {
  const { className, value, children, onChange, gap } = props;
  const [activeIndex, setActiveIndex] = useState(
    children.findIndex((child) => child.key === value)
  );
  const [tabList, setTabList] = useState<{ left: number; width: number }[]>([]);
  const tabGroupRef = useRef<HTMLDivElement | null>(null);

  const handleClickTab = ({
    tabValue,
    tabIndex,
  }: {
    tabValue: string;
    tabIndex: number;
  }) => {
    onChange(tabValue);
    setActiveIndex(tabIndex);
  };

  const handleUpdateTabList = useCallback(() => {
    const tabGroupCurrent = tabGroupRef.current;
    const tabNumber = React.Children.count(children);

    if (tabGroupCurrent) {
      setTabList(
        [...Array(tabNumber)].map((_, tabIndex) => ({
          width: (tabGroupCurrent.children[tabIndex] as HTMLDivElement)
            .offsetWidth,
          left: (tabGroupCurrent.children[tabIndex] as HTMLDivElement)
            .offsetLeft,
        }))
      );
    }
  }, [children]);

  useEffect(() => {
    handleUpdateTabList();
    window.addEventListener("resize", handleUpdateTabList);
    return () => {
      window.removeEventListener("resize", handleUpdateTabList);
    };
  }, [handleUpdateTabList]);

  return (
    <TabsScrollWrapper className={className}>
      <StyledTabGroup ref={tabGroupRef} gap={gap}>
        {React.Children.map(children, (child, tabIndex) =>
          React.cloneElement(child, {
            onClick: () =>
              handleClickTab({
                tabValue: child.props.value,
                tabIndex,
              }),
            isActive: child.props.value === value,
          })
        )}
      </StyledTabGroup>
      <MovingLine
        left={tabList[activeIndex]?.left || 0}
        width={tabList[activeIndex]?.width || 0}
      />
    </TabsScrollWrapper>
  );
}

export default TabGroup;
