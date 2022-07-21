import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

import { connect, createStore, Provider } from "./redux";
import { connectToUsers } from "./connecters/connectToUser";

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  if (type === "updateUser") {
    return {
      ...state,
      user: {
        ...state.user,
        ...payload,
      },
    };
  }
};

const initState = {
  user: {
    name: "Evans",
    age: 29,
  },
  group: {
    name: "F2E",
  },
};

const store = createStore(reducer, initState);

const BTC = () => {
  console.log("BTC");
  return (
    <section>
      BTC <User />
    </section>
  );
};
const ETH = () => {
  console.log("ETH");
  return (
    <section>
      ETH <UserModifier>內容</UserModifier>
    </section>
  );
};
const SOL = connect(
  (state: any) => ({ group: state.group }),
  null
)(({ group }: any) => {
  console.log("SOL");
  return (
    <section>
      SOL <div>group: {group.name}</div>
    </section>
  );
});

const fetchUser = (dispatch: any) => {
  setTimeout(() => {
    dispatch({
      type: "updateUser",
      payload: {
        name: "3 seconds later... Evans",
      },
    });
  }, 3000);
};

const User = connectToUsers(({ user }: any) => {
  console.log("User");
  return <div>User: {user.name}</div>;
});

// @ts-ignore
const UserModifier = connectToUsers(
  ({ updateUser, user, children, dispatch }: any) => {
    console.log("User Modifier ");
    const onChange = (e: any) => {
      // dispatch({
      //   type: "updateUser",
      //   payload: new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve({
      //         name: "Promise... Evans",
      //       });
      //     }, 3000);
      //   }),
      // });
      // dispatch(fetchUser);
      // fetchUser(dispatch);
      updateUser({
        payload: { name: e.target.value },
      });
    };
    return (
      <div>
        {children}
        <input value={user.name} onChange={onChange} />
      </div>
    );
  }
);

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <Provider store={store}>
        <BTC />
        <ETH />
        <SOL />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
