import { useRef, useState } from "react";
import Header from "./Header";
import { Wrapper, PanelAnimation } from "./Accordion.style";
import { PanelProps } from "./types";

function Panel(props: PanelProps) {
  const { header, children } = props;
  const [display, setDisplay] = useState<"block" | "none">("none");
  const panelRef = useRef<HTMLDivElement | null>(null);
  const scrollHeight = panelRef.current?.scrollHeight || 0;
  const handlePanelClick = () => {
    setDisplay((val) => (val === "block" ? "none" : "block"));
  };
  return (
    <Wrapper
      //@ts-ignore
      onClick={props.onClick}
    >
      <Header isUp={display === "block"} onClick={() => handlePanelClick()}>
        {header}
      </Header>
      <PanelAnimation
        ref={panelRef}
        maxHeight={display === "block" ? scrollHeight : 0}
      >
        <div>{children}</div>
      </PanelAnimation>
    </Wrapper>
  );
}

export default Panel;
