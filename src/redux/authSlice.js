// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    username: null,
    accessToken: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.accessToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
