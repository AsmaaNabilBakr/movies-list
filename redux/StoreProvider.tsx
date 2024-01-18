"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { auth } from "../firebase";
import { setUser } from "./slices/authSlice";
import { store } from "./store";
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        store.dispatch(setUser(user));
      } else {
        store.dispatch(setUser(null));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
