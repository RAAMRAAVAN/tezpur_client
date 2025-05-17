"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { memo } from "react";
import { Margin } from "@mui/icons-material";

const ImageSlider = ({ id, Images = [] }) => {
  // const imageArray = id === 70 ? ['2.jpg']
  //   : id === 69 ? ['1.jpg']
  //     : JSON.parse(Images);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        position: "relative",
        // border:'1px black solid',
        borderRadius: '10px',
        "& .swiper-button-prev, & .swiper-button-next": {
          color: "#fff",
          zIndex: 10,
          display: isMdUp ? "block" : "none", // Hide nav buttons on small screens
        },
        // border:'1px black solid',
        "& .swiper-pagination": {
          bottom: "10px", // or adjust to '20px', '30px', etc. as needed
        },
        "& .swiper-pagination-bullet": {
          backgroundColor: "#fff", // Change this to your desired color
          opacity: 0.7,            // Optional: tweak for style
          borderRadius: 0,
          width: '19px',
          height: '5px'
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "#1976d2", // Active bullet color (e.g., MUI primary)
          opacity: 1,                 // Make it fully visible
        },
      }}
    >
      <ExportedImage
        src={`https://DARRANGcancercentre.org/uploads/newsEvents/${id}_1`}
        alt="No Image Available"
        width={530}
        height={280}
        style={{
          width: "530px",
          height: "280px",
          objectFit: "cover",
          // opacity: 0.5,
        }}
      />
    </Box>);
};

// Custom style for navigation buttons
const navButtonStyle = (position) => ({
        position: "absolute",
      top: "60%",
      [position]: "10px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "#fff",
      padding: "10px",
      borderRadius: "50%",
      zIndex: 3,
      cursor: "pointer",
      marginRight: "10px",
      fontSize: "20px",
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

      export default memo(ImageSlider);
