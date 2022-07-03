import { createContext, useContext, useMemo } from "react";
import { TabContextProps } from "../types";

const Context = createContext({
  value: "",
});

export default function TabContext(props: TabContextProps) {
  const { children, value } = props;

  const context = useMemo(() => {
    return { value };
  }, [value]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export function useTabContext() {
  return useContext(Context);
}
