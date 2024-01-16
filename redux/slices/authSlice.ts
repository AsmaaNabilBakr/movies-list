import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/compat/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store";
import { useDispatch } from "react-redux";

interface AuthState {
  user: firebase.User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: { payload: any | null }) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
