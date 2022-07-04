import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { findAttributeEvent } from "../../utils";
import Portal from "../Portal";

import { OverlayWrapper } from "./Dropdown.style";
interface Props {
  children: ReactElement;
  isOpen?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  overlay: ReactElement;
}
function Dropwdown(props: Props) {
  const { children, overlay, onClick, onClose, isOpen = false } = props;
  const childrenRef = useRef<HTMLElement | null>(null);
  const [childrenSize, setChildrenSize] = useState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleOnClose = useCallback(
    //@ts-ignore
    (event) => {
      const dropdownId = findAttributeEvent(event, "data-dropdown-id");
      if (!dropdownId) {
        onClose && onClose();
      }
    },
    [onClose]
  );

  const handleOnResize = () => {
    setChildrenSize({
      width: (childrenRef.current as HTMLElement).offsetWidth,
      height: (childrenRef.current as HTMLElement).offsetHeight,
    });
    setPosition({
      top:
        (childrenRef.current as HTMLElement).getBoundingClientRect().top -
        1 +
        window.scrollY,
      left: (childrenRef.current as HTMLElement).getBoundingClientRect().left,
    });
  };
  useEffect(() => {
    document.addEventListener("click", handleOnClose);
    return () => {
      document.removeEventListener("click", handleOnClose);
    };
  }, [handleOnClose]);

  useEffect(() => {
    handleOnResize();
    window.addEventListener("resize", handleOnResize);
    return () => {
      window.removeEventListener("resize", handleOnResize);
    };
  }, []);

  return (
    <>
      <span
        id="dropdown"
        data-dropdown-id="dropdown"
        ref={childrenRef}
        onClick={onClick}
      >
        {children}
      </span>
      <Portal customRootId="portal-dropdown">
        <OverlayWrapper
          data-dropdown-id="dropdown"
          position={position}
          childrenSize={childrenSize}
          isOpen={isOpen}
        >
          {overlay}
        </OverlayWrapper>
      </Portal>
    </>
  );
}

export default Dropwdown;
