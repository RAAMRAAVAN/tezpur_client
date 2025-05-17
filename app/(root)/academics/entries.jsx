import { Box, Grid, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { API, Font } from "../../(components)/Global";
import Loader from "@/app/(components)/Loader";

const Entries = (props) => {
  const {Entris} = props;
  if (!Entris.length) {
    return <Loader/>;
  }
  return (
    <Box display="flex" flexDirection="column" width="100%">
      {Entris.map((Entry, index) => (
        <Grid
          key={Entry.id}
          container
          width="100%"
          sx={{
            flexDirection: { md: index % 2 === 0 ? "row" : "row-reverse", xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            padding={{ xs: 2, md: 4 }}
            sx={{ position: "relative", overflow: "hidden" }}
          >
            <Box width="100%" sx={{ height: { xs: "150px", md: "300px" } }}>
              <ExportedImage
                src={`${Entry.ImagePath}`}
                alt="who we are"
                layout="fill"
                style={{ objectFit: "cover", borderRadius: 5 }}
                priority={index === 0} // ✅ Load first image faster
              />
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={6}
            padding={{ xs: 2, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography  variant="h6" fontWeight="bold">{Entry.title}</Typography>
            <Typography >{Entry.Description}</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Entries;
