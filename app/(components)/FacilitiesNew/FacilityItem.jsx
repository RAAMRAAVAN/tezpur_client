'use client'

import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import {API} from '../Global';

const FacilityItem = (props) => {
  const {facility, index} = props;
  return (<>
  <Box
    key={facility._id} // ✅ Unique key applied here
    id={facility._id}
    marginBottom={2}
    display="flex"
    width="100%"
    sx={{ height: { md: "300px", sm: "600px" } }}
    justifyContent="center"
  >
    <Grid
      container
      width="100%"
      borderRadius={2}
      padding={0}
      display="flex"
      sx={{
        overflow: "hidden",
        boxShadow: 3,
        flexDirection: { md: index % 2 === 0 ? "row-reverse" : "row" },
      }}
    >
      {/* Image Section */}
      <Grid item xs={12} md={4}>
        <Box
          display="flex"
          width="100%"
          height="300px"
          overflow="hidden"
          sx={{
            borderRadius: {
              xs: "10px 10px 0px 0px",
              md: index % 2 === 0 ? "0px 10px 10px 0px" : "10px 0px 0px 10px",
            },
            position: "relative",
          }}
        >
          <ExportedImage
            src={`${facility.path}`}
            alt='img'
            fill
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}

          />
        </Box>
      </Grid>

      {/* Content Section */}
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          borderRadius: { xs: "0px 0px 10px 10px", lg: "10px 0px 0px 10px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 3,
          backgroundColor: "white",
        }}
      >
        <Typography  variant="h5" sx={{ fontSize: { xs: "18px", md: "24px" }, fontWeight: "bold" }}>
          {facility.title}
        </Typography>
        <LinearProgress

          sx={{
            marginY: 2,
            height: 8,
            borderRadius: 4,
            transition: "width 0.8s ease-in-out",
          }}
          variant="determinate"
          value={15}
        />
        <Typography  sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          {facility.description.length > 300
            ? `${facility.description.slice(0, 300)}...`
            : facility.description}
        </Typography>
        <Box sx={{ display: "flex", marginTop: "auto" }} >
          <Button aria-label="Submit Form" >Read More</Button>
        </Box>
      </Grid>
    </Grid>
  </Box></>);
}

export default FacilityItem();