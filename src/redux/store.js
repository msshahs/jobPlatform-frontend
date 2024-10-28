import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { loginReducer } from "./Auth/Reducer";
import { LOGOUT } from "../constants/AuthConstants";
import { setProfileId } from "./ProfileId/Reducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducer = combineReducers({
  loginData: loginReducer,
  profileId: setProfileId,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    localStorage.removeItem("persist:root");
    return reducer(undefined, action);
  }
  return reducer(state, action);
};

const initialState = {
  loginData: {},
  profileId: {},
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk), // Add thunk middleware here
});

export default store;
