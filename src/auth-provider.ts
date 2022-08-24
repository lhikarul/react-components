// sdk
const localStorageKey = "__auth_provider_token__";

export interface User {
  token: string;
}

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (res: any) => {
  console.log("user ", res);
  window.localStorage.setItem(localStorageKey, "Evans 123456" || "");
  return res;
};

export const login = (data: { userId: number }) => {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    async (response) => {
      if (response.ok) {
        return handleUserResponse(await response.json());
      } else {
        return Promise.reject(data);
      }
    }
  );
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
