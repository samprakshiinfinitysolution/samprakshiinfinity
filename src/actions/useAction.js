import { createAction } from "@reduxjs/toolkit";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure,
  logoutSuccess,
} from "../reducers/userReducer";

export const logout = () => async (dispatch) => {
  dispatch(logoutSuccess());
};