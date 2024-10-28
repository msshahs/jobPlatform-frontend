import { SET_PROFILE_ID } from "../../constants/AuthConstants";

export const setProfileId = (data) => {
  return {
    type: SET_PROFILE_ID,
    data: data,
  };
};
