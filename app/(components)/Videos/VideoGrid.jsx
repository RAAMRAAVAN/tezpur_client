'use client';

import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { LatestVideos } from '@/lib/fetchData';
import { PlayCircleOutline } from '@mui/icons-material';
import LatestEvent from './LatestEvent/LatestEvent';
import ReactPlayer from 'react-player';

const videoUrlMain = "https://www.youtube.com/embed/xziy2MCp95U?si=iqrifFRxc0Tf2d-7";

const VideoCard = ({ LatestVideosData, setOpen, setSelectedVideo, id }) => {
  return (<Box
    display="flex"
    width="100%"
    height='100%'
    sx={{
      overflow: 'hidden', // Ensures the image stays within the container
      borderRadius: '20px', // Keeps the image's rounded corners
      position: 'relative',

    }}
    boxShadow={5}
  >
    {/* <Box >     */}
    <img
      src={LatestVideosData[id].Image}
      style={{
        borderRadius: '20px',
        display: 'flex',
        width: '100%',
        transition: 'transform 0.3s ease', // Smooth transition
      }}
      onMouseEnter={(e) => {
        // Zoom in effect when the mouse enters
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        // Reset the scale when the mouse leaves
        e.target.style.transform = 'scale(1)';
      }}
    />
    {/* </Box> */}

    {/* Play button with a click handler */}
    <IconButton
      sx={{
        color: 'white',
        fontSize: '60px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        // zIndex:'20001'
      }}
      onClick={() => {
        setSelectedVideo(id);
        setOpen(true);
        // Add your play video logic here, e.g., open a modal, start playing, etc.
      }}
    >
      <PlayCircleOutline sx={{ fontSize: '60px', }} />
    </IconButton>

    <Typography
      sx={{
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2, // LIMIT to 2 lines
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        width: '100%',
        padding:'5px 40px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        background:'#1565c047'
      }}
    >
      {LatestVideosData[id].Title}
    </Typography>

  </Box>);
}
const VideoGrid = () => {
  const theme = useTheme();
  const LatestVideosData = LatestVideos;
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        // backgroundColor: '#444',
        margin: '10px 0 20px 0',
        width: '100%',
      }}
    >
      {open ? <Box display="flex" width="100%" justifyContent="center" sx={{
        justifyContent: 'center',
        alignItems: 'center', border: '1px black solid'
      }}>
        <LatestEvent open={open} setOpen={setOpen} selectedVideo={LatestVideosData[selectedVideo]} />
      </Box> : <></>}
      <Grid container spacing={3}>
        <Grid item md={3} xs={12} container spacing={1}>
          <Grid item xs={12} height='50%'>
            <VideoCard LatestVideosData={LatestVideosData} setOpen={setOpen} setSelectedVideo={setSelectedVideo} id={0} />
          </Grid>
          <Grid item xs={12} height='50%'>
            <VideoCard LatestVideosData={LatestVideosData} setOpen={setOpen} setSelectedVideo={setSelectedVideo} id={2} />
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} display='flex' alignItems='center'>
          <VideoCard LatestVideosData={LatestVideosData} setOpen={setOpen} setSelectedVideo={setSelectedVideo} id={4} />
        </Grid>
        <Grid item md={3} xs={12} container spacing={1}>
          <Grid item xs={12}>
            <VideoCard LatestVideosData={LatestVideosData} setOpen={setOpen} setSelectedVideo={setSelectedVideo} id={1} />
          </Grid>
          <Grid item xs={12}>
            <VideoCard LatestVideosData={LatestVideosData} setOpen={setOpen} setSelectedVideo={setSelectedVideo} id={3} />
          </Grid>
        </Grid>

        {/* <Grid item md={6} xs={12} display='flex' alignItems='center'>
          <Box sx={{ margin: 'auto' }}>
            <Box>

              <video width="640" height="360" controls>
                <source src="SCI/video/SCI-OT.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </Box>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
            <Box display='flex' width='100%' height='100%'>
              <iframe
                width="100%"
                // height="180"
                src={videoUrlMain}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ borderRadius: '10px' }}
              />
            </Box>
          </Grid> */}
      </Grid>
    </Box>
  );
};

export default VideoGrid;
