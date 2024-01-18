import { Box, Grid } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { StoreProvider } from "../redux/StoreProvider";
import Header from "./components/Header";
import "./globals.css";
import Loading from "./loading";

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
              <div className="content-container">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
            </Grid>
          </Box>
        </body>
      </html>
    </StoreProvider>
  );
}
