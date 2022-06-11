export interface SwitchButtonProps {
  themeColor?: "primary" | "secondary" | string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  checkedText?: string;
  unCheckedText?: string;
  isChecked?: boolean;
}
