"use client";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import Image from "next/image";
import * as React from "react";
import styles from "../page.module.css";
export default function MovieDetailsCard({ movie = {} }: any) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const imageLoader = ({ src, width, quality }: any) => {
    return `https://image.tmdb.org/t/p/original/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const open = Boolean(anchorEl);
  console.log("movie", movie);
  const addToWishList = () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        media_type: movie.media_type,
        media_id: movie.id,
        watchlist: true,
      }),
    };

    fetch(
      `https://api.themoviedb.org/3/account/20928003/watchlist/?api_key=${process.env.NEXT_PUBLIC_TMDB_PUBLIC_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={styles.imageCardContainer}
      >
        <Image
          className={styles.imageCard}
          loader={imageLoader}
          src={movie.poster_path}
          alt={movie.id}
          width={200}
          height={350}
        />
        <Button
          className={styles.addtoListBtn}
          onClick={addToWishList}
          variant="contained"
          startIcon={<PlaylistAddIcon fontSize="small" />}
          size="small"
        >
          Add To WishList
        </Button>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          width: "250px",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div style={{ padding: "4px" }}>
          <h3>
            {movie.original_title || movie.original_name} - {movie.media_type}
          </h3>
          <p>{movie.overview}</p>
        </div>
      </Popover>
    </div>
  );
}
