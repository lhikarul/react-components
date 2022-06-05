import { ReactElement } from "react";
import { StyledButton, Loading, Prepend, Append } from "./Button.style";

export type Variant = "contained" | "outlined" | "text";

interface ButtonProps {
  variant: Variant;
  children: ReactElement | string;
  loading?: boolean;
  disalbed?: boolean;
  prependIcon?: ReactElement;
  appendIcon?: ReactElement;
  color?: string;
}

function Button(props: ButtonProps) {
  const {
    loading,
    children,
    variant,
    color = "#1976d2",
    disalbed,
    appendIcon,
    prependIcon,
  } = props;
  return (
    <StyledButton variant={variant} color={color} disabled={disalbed}>
      {loading && (
        <Loading
          size={16}
          variant={variant}
          color={variant === "contained" ? "#FFFFFF" : color}
        />
      )}
      <>
        {prependIcon && <Prepend>{prependIcon}</Prepend>}
        <span>{children}</span>
        {appendIcon && <Append>{appendIcon}</Append>}
      </>
    </StyledButton>
  );
}

export default Button;
