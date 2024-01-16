"use client";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { setUser } from "../../redux/slices/authSlice";

const GoogleLoginButton: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider)
        .then((result) => {
          dispatch(setUser(result.user));
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
console.log(user)
  return user ? (
    <button onClick={() => signOut(auth)}>Log out</button>
  ) : (
    <button onClick={handleLogin}>Sign In with Google</button>
  );
};

export default GoogleLoginButton;
