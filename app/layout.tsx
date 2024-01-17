import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "../redux/StoreProvider";
import { Grid, Box } from "@mui/material";
import "./globals.css";
import Header from "./components/Header";
import { fetchData } from "@/redux/slices/moviesSlice";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "it's movies time ...",
  description: "let's have some movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Header />
              {children}
              </Grid>
          </Box>
        </body>
      </html>
    </StoreProvider>
  );
}
