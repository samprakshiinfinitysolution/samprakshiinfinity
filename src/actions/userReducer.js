import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const loginRequest = createAction("LoginRequest");
export const loginSuccess = createAction("LoginSuccess");
export const loginFailure = createAction("LoginFailure");

export const loadUserRequest = createAction("LoadUserRequest");
export const loadUserSuccess = createAction("LoadUserSuccess");
export const loadUserFailure = createAction("LoadUserFailure");

export const logoutSuccess = createAction("LogoutSuccess");

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest, (state) => {
      state.loading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(loginFailure, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(loadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(loadUserSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(logoutSuccess, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
});
