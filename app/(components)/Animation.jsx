// "use client";
import { Box } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";

const AnimatedImages = () => {
  return (
    <Box className="animation-container">
      {/* Background Image */}
      <ExportedImage
        src="/Footer/footer_bg.png"
        alt="background"
        fill
        priority
        className="background"
        // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Moving Car */}
      <ExportedImage
        src="/Footer/car.gif"
        alt="car"
        width={250}
        height={200}
        className="moving-car"
        // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Moving Cyclist */}
      <ExportedImage
        src="/Footer/cyclist.gif"
        alt="cyclist"
        width={100}
        height={70}
        className="moving-cyclist"
        // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Box>
  );
};

export default AnimatedImages;
