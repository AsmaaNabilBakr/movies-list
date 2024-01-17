"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import GoogleLoginButton from "./GoogleLoginBtn";
interface Props {
  navItems: string[];
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
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
