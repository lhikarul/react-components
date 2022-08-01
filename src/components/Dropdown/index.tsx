import { ReactElement, useCallback, useEffect, useRef } from "react";
import { useRafState } from "react-use";
import { on, off } from "react-use/lib/misc/util";
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
function Dropdown(props: Props) {
  const { children, overlay, onClick, onClose, isOpen = false } = props;
  const childrenRef = useRef<HTMLElement | null>(null);
  const [childrenSize, setChildrenSize] = useRafState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useRafState({
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
    on(window, "click", handleOnClose);

    return () => {
      off(window, "click", handleOnClose);
    };
  }, [handleOnClose]);

  useEffect(() => {
    handleOnResize();

    on(window, "resize", handleOnResize);

    return () => {
      off(window, "resize", handleOnResize);
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

export default Dropdown;
