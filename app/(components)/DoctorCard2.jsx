import React from "react";
import { Card, CardContent, Typography, CardActionArea, Box } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { Font } from "./Global";

const DoctorCard2 = ({ image, name = "No Name", speciality = "Speciality Not Available", profile = "No Description" }) => {
  const titleLimit = 47;

  return (
    <Card sx={{ width: "80%", height: 420, textAlign: "center", p: 2 }}>
      <CardActionArea>
        {/* Circular Image */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          {image ? (
            <Box sx={{ width: 150, height: 150, borderRadius: "50%", overflow: "hidden", border: "3px solid #ddd" }}>
              <ExportedImage
                src={`https://barpetacancercentre.org/images/allLocationDoctors/${image}`}
                // src='/doctor_image.webp'
                alt='./Doctors/default.png'
                width={150}
                height={150}
                style={{ objectFit: "cover" }}
                priority // Optimized loading
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>

          ) : <Box sx={{ width: 150, height: 150, borderRadius: "50%", overflow: "hidden", border: "3px solid #ddd" }}>
            <ExportedImage
              src={`/doctor_image.webp`}
              alt='image'
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              priority // Optimized loading
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </Box>}
        </Box>

        <CardContent>
          <Typography  gutterBottom variant="h6" component="div">
            {name.slice(0, titleLimit)}
          </Typography>
          <Typography  variant="body2" fontStyle="italic" color="primary">
            {speciality}
          </Typography>
          <Typography 
            variant="body2"
            sx={{
              color: "text.secondary",
              mt: 1,
              height: 130,
              overflowY: "auto",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": { backgroundColor: "#bbb", borderRadius: "4px" },
            }}
          >
            {profile}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DoctorCard2;
