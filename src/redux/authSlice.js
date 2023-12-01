// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadAuthFromLocalStorage = () => {
  const storedAuth = JSON.parse(localStorage.getItem('auth'));
  
  if (storedAuth && storedAuth.accessTokenExp >= Date.now()) {
    return {
      isAuthenticated: true,
      username: storedAuth.username,
      accessToken: storedAuth.accessToken,
      accessTokenExp: storedAuth.accessTokenExp,
      userDetails:{}
    };
  }else {
    localStorage.removeItem('auth');
    return {
      isAuthenticated: false,
      username: null,
      accessToken: null,
      accessTokenExp: null,
      userDetails:{}
    };
  }
};

const initialState = loadAuthFromLocalStorage();


const authSlice = createSlice({
  name: 'auth',
  initialState ,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
      state.accessTokenExp = Date.now() + 86400000;  //one day added in current date

      // Save to local storage
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.accessToken = null;
      state.accessTokenExp = null;

      // Remove from local storage
      localStorage.removeItem('auth');
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { login, logout , setUserDetails } = authSlice.actions;

export default authSlice.reducer;
