import { createRoot } from "react-dom/client";

export const getContainer = (rootId = "toast-root") => {
  let toastRoot: HTMLDivElement;
  let toastContainer: HTMLDivElement;
  if (document.getElementById(rootId)) {
    toastRoot = document.getElementById(rootId) as HTMLDivElement;
  } else {
    const divDOM = document.createElement("div");
    divDOM.id = rootId;
    document.body.appendChild(divDOM);
    toastRoot = divDOM;
  }
  if (toastRoot?.firstChild) {
    toastContainer = toastRoot.firstChild as HTMLDivElement;
  } else {
    const divDOM = document.createElement("div");
    toastRoot?.appendChild(divDOM);
    toastContainer = divDOM;
  }
  const divDOM = document.createElement("div");
  toastContainer.appendChild(divDOM);

  if (toastRoot) {
    toastRoot.style.position = "absolute";
    toastRoot.style.top = "0px";
    toastRoot.style.left = "0px";
    toastRoot.style.width = "100vw";
  }
  if (toastContainer) {
    toastContainer.style.position = "absolute";
    toastContainer.style.top = "0px";
    toastContainer.style.left = "50%";
    toastContainer.style.transform = "translateX(-50%)";
    toastContainer.style.zIndex = "999";
    toastContainer.style.display = "flex";
    toastContainer.style.flexDirection = "column";
    toastContainer.style.alignItems = "center";
  }
  return createRoot(divDOM);
};
