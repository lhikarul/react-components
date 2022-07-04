import ReactDOM from "react-dom";
import { ReactElement, useEffect } from "react";

interface Props {
  children: ReactElement;
  customRootId?: string;
}

function Portal(props: Props) {
  const { children, customRootId } = props;
  let portalRoot: HTMLElement | null = null;
  const rootId = customRootId || "portal-root";

  if (document.getElementById(rootId)) {
    portalRoot = document.getElementById(rootId);
  } else {
    const divDOM = document.createElement("div");
    divDOM.id = rootId;
    document.body.appendChild(divDOM);
    portalRoot = divDOM;
  }

  useEffect(() => {
    return () => {
      if (portalRoot) {
        portalRoot.parentElement?.removeChild(portalRoot);
      }
    };
  }, [portalRoot]);
  return ReactDOM.createPortal(children, portalRoot as HTMLElement);
}

export default Portal;
