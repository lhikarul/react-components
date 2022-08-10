import React from "react";
import { RadioGroupProps } from "./types";
import { RadioGroupStyled } from "./Radio.style";

function RadioGroup(props: RadioGroupProps) {
  const { value, onChange, children, className, row = false } = props;

  const handleOnClick = (value: string) => {
    onChange(value);
  };
  return (
    <RadioGroupStyled className={className} row={row}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onChange: () => handleOnClick(child.props.value),
          checked: child.props.value === value,
        })
      )}
    </RadioGroupStyled>
  );
}

export default RadioGroup;
