'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewses, setID } from '@/redux/features/newsSlice';
import { useRouter } from 'next/navigation';



const items = [
    {
        title:
            'Celebrated ACCF Foundation Day on 28th April',
        url: '/news',
    },
];

const TextCarousel = () => {
    const router = useRouter();
    const news = useSelector(selectNewses);
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#ebebeb',
                cursor: 'pointer',
                display: 'flex',
                
            }}
            // onClick={() => { dispatch(setID(news[0].id)); router.push(`/news/details`) }}
        >
            <Typography
                sx={{
                    color: '#fff',
                    background: 'linear-gradient(-240deg, #bf1e2e 75%, transparent 40%)',
                    px: 1,
                    // py: 1,
                    pr: 4,
                    borderRadius: '4px',
                    fontSize: '14px',
                    flexShrink: 0,
                    margin: '0px 0 0px -2px',
                    padding: '0 32px 0 5px',
                    zIndex:'1'
                }}
            >
                UPDATES
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    animation: 'stepScroll 20s ease-in-out infinite',
                }}
            >




                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        backgroundColor: '#ebebeb'
                    }}
                >
                    {/* <Box
                        sx={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#002664',
                                fontSize: '14px',
                                fontWeight: 500,
                                backgroundColor: '#ebebeb',
                                pr: 0,
                                display: 'inline-block',
                            }}
                        >
                            {items[0].title}
                        </Typography>
                    </Box> */}
                </Box>
            </Box>

            <style jsx>{`
  @keyframes stepScroll {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    50%{
      transform: translateX(0%);
      opacity: 1;
    }
    80% {
      transform: translateX(-100%);
      opacity: 0;
    }
    90% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`}</style>
        </Box>
    );
};

export default TextCarousel;
