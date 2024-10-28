import { LOGIN_REQUEST, LOGOUT } from "../../constants/AuthConstants";

export const login = (loginData) => {
  return {
    type: LOGIN_REQUEST,
    data: loginData,
  };
};

export const logout = () => {
  localStorage.removeItem("persist:root");
  return {
    type: LOGOUT,
  };
};
