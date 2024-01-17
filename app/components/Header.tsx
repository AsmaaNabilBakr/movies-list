import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import styles from "../page.module.css";
import GoogleLoginButton from "./GoogleLoginBtn";
import MobileHeader from "./MobileHeader";

const navItems = [
  { name: "Browse", url: "/" },
  { name: "Watch List", url: "/watchlist" },
];

export default function DrawerAppBar() {
  return (
    <Box>
      <AppBar component="nav" className={styles.navbar}>
        <Toolbar>
          <MobileHeader navItems={navItems} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100vw" }}
          >
            <Link href="" className={styles.logo}>
              MOV
              <span className={styles.redText}>TIME</span>
            </Link>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              columnGap={4}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className={styles.navbarItem}
                >
                  {item.name}
                </Link>
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
