import { SET_PROFILE_ID } from "../../constants/AuthConstants";

export const setProfileId = (state = null, action) => {
  switch (action.type) {
    case SET_PROFILE_ID:
      return action.data;
    default:
      return state;
  }
};
