'use client'
import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const ReadMoreText = ({ text, expand, FID,facilityId, lineClamp = 3 }) => {
    console.log("expand=", facilityId, expand);
    const [expanded, setExpanded] = useState(expand);
    const [isTruncated, setIsTruncated] = useState(false);
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
          style={{ whiteSpace: "pre-line" }}
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
  
  export default ReadMoreText;
  