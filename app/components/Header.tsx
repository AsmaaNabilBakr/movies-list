import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import GoogleLoginButton from "./GoogleLoginBtn";
import MobileHeader from "./MobileHeader";

const navItems = ["Browse", "Watch List"];

export default function DrawerAppBar() {
  return (
    <Box>
      <AppBar component="nav" className="navbar">
        <Toolbar>
          <MobileHeader navItems={navItems} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100vw" }}
          >
            <Link href="" className="logo">
              MOV
              <span>TIME</span>
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <GoogleLoginButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
