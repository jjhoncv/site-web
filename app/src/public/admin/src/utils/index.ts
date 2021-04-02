import { useSelector } from "react-redux";

export const session = {
  getUser: () =>
    JSON.parse(window.sessionStorage.getItem("user")) || { id: null },
  setUser: (user) => {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  },
};

export const headerAuth = () => {
  const token = useSelector((state: any) => state.auth.token);
  // console.log('token')
  return {
    Authorization: "Basic " + token,
  };
};
