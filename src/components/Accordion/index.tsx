import React from "react";
import Panel from "./Panel";
import { AccordionProps } from "./types";
function Accordion({ children, onChange }: AccordionProps) {
  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          onClick: () => onChange && onChange(index),
        })
      )}
    </>
  );
}

Accordion.Panel = Panel;

export default Accordion;
