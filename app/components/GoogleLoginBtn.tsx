"use client";
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Box, Button, IconButton } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { setUser } from "../../redux/slices/authSlice";
export const GoogleLoginButton: React.FC = () => {
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
  return (
    <Box>
      {user ? (
        <Box display="flex" alignItems="center" columnGap={2}>
          <Avatar alt={user.displayName} src={user.photoURL || ""} />
          <Box display="flex" alignItems="center" columnGap="1px">
            <span>{user.displayName}</span>

            <IconButton
              aria-label="logout"
              onClick={() => signOut(auth)}
              color="error"
            >
              <LogoutIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Button
          onClick={handleLogin}
          variant="contained"
          startIcon={<GoogleIcon fontSize="small" />}
          size="small"
        >
          Login with Google
        </Button>
      )}
    </Box>
  );
};

export default GoogleLoginButton;
