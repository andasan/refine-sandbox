import { AuthProvider } from "@pankod/refine";

export const authProvider: AuthProvider = {
  login: (params: any) => {
    if (params.username === "admin") {
      localStorage.setItem("username", params.username);
      return Promise.resolve();
    }

    return Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.resolve(["admin"]),
  getUserIdentity: () =>
    Promise.resolve({
      id: 1,
      name: "Andasan",
      avatar: process.env.REACT_APP_GRAVATAR,
    }),
};
