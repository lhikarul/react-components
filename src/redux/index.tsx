import React, { createContext, useEffect, useState } from "react";

type Action = { type: string; payload: any };

const appContext = createContext<any>(null);

let state: any = undefined;
let reducer: any = undefined;
let listeners: any[] = [];

const setState = (newState: any) => {
  state = newState;
  listeners.map((fn) => fn(state));
};

const store = {
  getState() {
    return state;
  },
  dispatch: (action: Action) => {
    //@ts-ignore
    setState(reducer(state, action));
  },
  listeners: [] as any[],
  subscribe(fn: any) {
    listeners.push(fn);
    return () => {
      const index = listeners.indexOf(fn);
      listeners.splice(index, 1);
    };
  },
};

let dispatch = store.dispatch;

const prevDisptach = dispatch;

dispatch = (action: any) => {
  if (typeof action === "function") {
    action(dispatch);
  } else {
    prevDisptach(action);
  }
};

const prevDispatch2 = dispatch;

dispatch = (action: any) => {
  console.log(action.payload);
  if (action.payload instanceof Promise) {
    action.payload.then((data: any) => {
      console.log("data ", data);
      dispatch({
        ...action,
        payload: data,
      });
    });
  } else {
    prevDispatch2(action);
  }
};

export const createStore = (_reducer: any, initState: any) => {
  state = initState;
  reducer = _reducer;
  return store;
};

// @ts-ignore
const changed = (oldState, newState) => {
  let changed = false;
  for (let key in oldState) {
    if (oldState[key] !== newState[key]) {
      changed = true;
    }
  }
  return changed;
};

export const connect = (selector: any, dispatchSelector: any) => {
  return (Component: any) => {
    return (props: any) => {
      const [, update] = useState({});

      const data = selector ? selector(state) : { state };

      const dispatchers = dispatchSelector
        ? dispatchSelector(dispatch)
        : { dispatch };

      useEffect(() => {
        store.subscribe(() => {
          const newData = selector ? selector(state) : { state };
          update({});
          if (changed(data, newData)) {
            console.log("update");
            update({});
          }
        });
      }, [selector]);

      return (
        <Component {...props} {...data} dispatch={dispatch} {...dispatchers} />
      );
    };
  };
};

export const Provider = ({ store, children }: any) => {
  return <Test value={store}>{children}</Test>;
  // return <appContext.Provider value={store}>{children}</appContext.Provider>;
};

const Test = ({ children, value }: any) => {
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...value,
        })
      )}
    </div>
  );
};
