"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import * as React from "react";
import styles from "../page.module.css";
import GoogleLoginButton from "./GoogleLoginBtn";
interface NavbarItem {
  name: string;
  url: string;
}
interface Props {
  navItems: NavbarItem[];
}
const drawerWidth = 240;

export const MobileHeader = ({ navItems }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: "100vh" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={3}
        sx={{ pt: 3, pb: 3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className={styles.navbarItemMobile}
          >
            {item.name}
          </Link>
        ))}
      </Box>
      <GoogleLoginButton />
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <nav>
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default MobileHeader;
