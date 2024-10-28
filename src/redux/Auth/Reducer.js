import { LOGIN_REQUEST, LOGOUT } from "../../constants/AuthConstants";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return action.data;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
