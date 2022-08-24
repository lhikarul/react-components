import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { useAuth } from "./context/auth-context";

function App() {
  const { login, logout, user } = useAuth();
  return (
    <ThemeProvider theme={theme.default}>
      <button
        onClick={() =>
          login({
            username: "Evans",
            password: "123456",
            userId: 1,
          })
        }
      >
        login
      </button>
      <div>{JSON.stringify(user)}</div>
    </ThemeProvider>
  );
}

export default App;
