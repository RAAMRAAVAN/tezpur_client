'use client';
// import * as React from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { East } from '@mui/icons-material';
import { CardActions } from '@mui/material';
import { Font } from './Global';
import { selectNewses } from "@/redux/features/newsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from "@mui/material";
import NewsCard from './NewsCard';
import { setID } from "@/redux/features/newsSlice";
import { useState } from 'react';

export default function NewsLink() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const news = useSelector(selectNewses);
  const dispatch = useDispatch();
  console.log(selectedCard, clicked);
  return (

    <Grid container spacing={5} justifyContent="start" display='flex' sx={{ width: { md: '100%', sm: '100%' } }}>

      <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
        {/* onClick={() => { dispatch(setID(entry.id)); router.push(`/news/details`) }} */}
          <Card className='news-card'  style={{ backgroundColor: 'rgb(232, 237, 238)', display: 'flex', width: '100%', position: 'relative' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'start' }}>
              <Box display='flex' width='100%'>
                <CardMedia
                  component="img"
                  sx={{
                    display: 'flex',
                    height: '175px',
                    width: '100%', // Optional: ensures it fills horizontally
                    // border: '1px black solid',
                    // objectFit: 'cover', // or 'contain' to avoid cropping
                  }}
                  image={`news.jpg`}
                  alt="green iguana"
                />
              </Box>
              <Box display='flex'>
                <CardContent>
                  <Typography gutterBottom variant="h6" onClick={()=>{setClicked(true); setSelectedCard(0); router.push(`/news`)}} display='inline-block' className='change-header-color' component="div" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    backgroundColor: clicked && (selectedCard === 0)?'#ffeb3b':'',
                    textDecoration: clicked && (selectedCard === 0)?'underline':null,
                  }}>
                    News and events
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: 'text.secondary', display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    Find the latest news about our work and achievements
                  </Typography>
                </CardContent>
              </Box>
              <CardActions onClick={()=>{router.push(`/news`)}} sx={{ display: 'flex', height: '100%', alignItems: 'end', marginBottom: 2, width: '100%' }}>
                <div className="news-arrow">
                  <East fontSize="large" />
                </div>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>

      {news.slice(0, 3).map((entry, index) => (
        <Grid key={index} item xs={12} sm={6} md={3} display="flex" justifyContent="center">
          {/* onClick={() => { dispatch(setID(entry.id)); router.push(`/news/details`) }} */}
          <Card className='news-card'  style={{ backgroundColor: 'rgb(232, 237, 238)', display: 'flex', width: '100%', position: 'relative' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'start' }}>
              <Box display='flex' width='100%'>
                <CardMedia
                  component="img"
                  sx={{
                    display: 'flex',
                    height: '175px',
                    width: '100%', // Optional: ensures it fills horizontally
                  }}
                  image={`https://DARRANGcancercentre.org/uploads/newsEvents/${entry.id}_1`}
                  alt="green iguana"
                />
              </Box>
              <Box display='flex'>
                <CardContent>
                  <Typography gutterBottom variant="h6" display='inline-block' onClick={()=>{setClicked(true); setSelectedCard(entry.id);dispatch(setID(entry.id)); router.push(`/news#${entry.id}`)}} component="div" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    backgroundColor: clicked && (selectedCard === entry.id)?'#ffeb3b':'',
                    textDecoration: clicked && (selectedCard === entry.id)?'underline':null,
                  }}>
                    {entry.content_heading}
                  </Typography>
                  <Typography  variant="body2" sx={{
                    color: 'text.secondary', display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    
                  }}>
                    {entry.sub_heading}
                  </Typography>
                </CardContent>
              </Box>
              <CardActions onClick={()=>{setClicked(true); setSelectedCard(entry.id);dispatch(setID(entry.id)); router.push(`/news#${entry.id}`)}} sx={{ display: 'flex', height: '100%', alignItems: 'end', marginBottom: 2, width: '100%' }}>
                <div className="news-arrow">
                  <East fontSize="large" />
                </div>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      ))}

    </Grid>

  );
}
