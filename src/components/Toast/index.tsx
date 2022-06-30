import { useEffect, useRef, useState } from "react";
import { createPortal, render } from "react-dom";
import { ToastProps } from "./types";
import SuccessIcon from "../../Icons/Success";
import { Wrapper } from "./Toast.styles";
import { getContainer } from "./utils";
import { createRoot } from "react-dom/client";
const iconMap = {
  success: <SuccessIcon />,
};

function Toast(props: ToastProps) {
  const { type = "success", content, duration = 3000 } = props;
  const [visible, setVisible] = useState(true);
  const toastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, duration);
    setTimeout(() => {
      const currentDOM = toastRef.current;
      const parentDOM = currentDOM?.parentElement;
      parentDOM?.parentElement?.removeChild(parentDOM);
    }, duration);
  }, [duration]);

  return (
    <Wrapper ref={toastRef} visible={visible}>
      {iconMap[type]}
      {content}
    </Wrapper>
  );
}

export const toastMessage = {
  success: (props: ToastProps) => {
    const root = getContainer();
    root.render(<Toast {...props} type="success" />);
  },
};

export default Toast;
