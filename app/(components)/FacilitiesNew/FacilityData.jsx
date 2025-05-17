"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { color } from "../Global";
import { useSelector } from "react-redux";
import { selectFacilities } from "@/redux/features/facilitiesSlice";
import Loader from "../Loader";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from '@mui/material';

const Facilities = ({ expand, FID }) => {
  const facilities = useSelector(selectFacilities);
  console.log("expand=", expand);
  const isMd = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, []);

  if (facilities.length === 0) {
    return <Loader />;
  }

  return (
    <Box paddingY={2} marginX={1}>
      {facilities.map((facility, index) => (
        <Box
          key={facility.id}
          id={facility._id}
          marginBottom={2}
          display="flex"
          flexDirection="column"
          width="100%"
          className="facility-box"
          sx={{
            height: {
              background: "linear-gradient(to right, #ded5d9, #e1e5ea)",
              borderRadius: "8px",
              cursor: "pointer",
            },
          }}

        >
          <Grid
            container
            width="100%"
            borderRadius={2}
            padding={0}
            display="flex"
            sx={{
              overflow: "hidden",
              flexDirection: { md: index % 2 === 0 ? "row-reverse" : "row" },
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                borderRadius: {
                  xs: "0px 0px 10px 10px",
                  lg: "10px 0px 0px 10px",
                },
                display: "flex",
                flexDirection: "column",
                padding: 3,
                backgroundColor: "transparent",
              }}
            >
              <Typography
                variant="h5"
                id={`facility-title-${facility._id}`}
                sx={{
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: "bold",
                }}
              >
                {facility.title}
              </Typography>
              <Box
                display="flex"
                width="100%"
                height="50px"
                alignItems="center"
                marginY={1}
              >
                <Box
                  display="flex"
                  className="facility-progress"

                  sx={{ width: { md: '5%', xs: "20%" } }}
                  height="10px"
                  backgroundColor={color}
                  borderRadius={20}
                ></Box>
              </Box>

              <Box
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
                textAlign="justify"
              >
                <Box
                  sx={{
                    width: { sm: '100%', md: "40%" },
                    height: "300px",
                    float: { sm: "none", md: 'right' },
                    top: "0",
                    marginLeft: { sm: 0, md: "10px" },
                    padding: { sm: 0, md: 3 }
                  }}

                >
                  <ExportedImage
                    src={`/${facility.path}`}
                    alt="img"
                    className={isMd ? "facility-image" : ""}
                    width={400}
                    height={300}
                    priority
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Box>
                {FID === facility._id ? <><Box display='none'></Box>
                  <ReadMoreText text={facility.description} expand={true} FID={FID} lineClamp={11} facilityId={facility._id} /></> : 
                  <><ReadMoreText text={facility.description} expand={false} FID={FID} lineClamp={11} facilityId={facility._id} /></>}
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

const ReadMoreText = ({ text, expand, FID, facilityId, lineClamp = 3 }) => {
  const [expanded, setExpanded] = useState(expand);
  const [isTruncated, setIsTruncated] = useState(expand);
  const [readMore, setReadMore] = useState(!expand);
  const ref = useRef(null);
  const customStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lineClamp,
    textOverflow: "ellipsis",
  }
  const [style, setStyle] = useState(!expand ? customStyle : {});

  useEffect(() => {
    const el = ref.current;
    if (el && el.scrollHeight > el.clientHeight) {
      setIsTruncated(true);
    }
  }, []);

  const handleShowLess = () => {
    setStyle(customStyle);
    setExpanded(false);
    setReadMore(true);

    // Scroll to title
    const titleElement = document.getElementById(`facility-title-${facilityId}`);
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <Typography
        ref={ref}
        sx={style}
        style={{ whiteSpace: "pre-line"}}
      >
        {text}
      </Typography>
      {readMore && isTruncated ? (
        <Button onClick={() => { setStyle({}); setReadMore(false) }} sx={{ mt: 1 }}>
          Read More
        </Button>
      ) : isTruncated ? (<Button onClick={() => { handleShowLess() }} sx={{ mt: 1 }}>
        Show Less
      </Button>) : (<></>)}
    </>
  );
};

export default Facilities;
