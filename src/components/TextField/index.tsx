import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import { StyledTextField, Input } from "./TextField.style";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  isError?: boolean;
  isDisabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  width?: number;
}

function TextField(props: TextFieldProps) {
  const {
    className,
    prefix,
    suffix,
    isError,
    isDisabled,
    onChange,
    value,
    width,
    ...restProps
  } = props;
  return (
    <StyledTextField
      className={className}
      isError={isError}
      isDisabled={isDisabled}
      width={width}
    >
      {prefix}
      <Input
        {...restProps}
        type="text"
        disabled={isDisabled}
        onChange={onChange}
        value={value}
      />
      {suffix}
    </StyledTextField>
  );
}

export default TextField;
