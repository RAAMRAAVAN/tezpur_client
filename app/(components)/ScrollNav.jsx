'use client'
import { Box, Link, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { color1, color4, MedantaOrange } from './Global';
import { useState } from 'react';

const navItems = [
    { label: 'Introduction', to: 'Intro' },
    { label: 'Our Doctors', to: 'Doctors' },
    { label: 'Accomplishments', to: 'Accomp' },
    { label: 'Facilities', to: 'Facilities' },
    { label: 'Partners', to: 'Partners' },
    { label: 'Featured Stories', to: 'Featured' },
    { label: 'Our Stories', to: 'Stories' },
    { label: 'ACCF Network', to: 'Network' },
];

const ScrollNav = () => {
    const [selected, setSelected] = useState(0);

     const handleScrollToTop = () => {
        window.scrollTo({ top: 100, behavior: "smooth" });
    };
    return (<Box sx={{
        width: "100%",
        position: "sticky",
        top: 60,
        zIndex: 4,
        backgroundColor: "white",
        // height:'120px'
    }}>
        <Box display="flex" flexWrap="wrap" gap={1} alignItems="center" paddingX={4}>
            {navItems.map((item, index) => (
                <Box key={index} display="flex" alignItems="center">
                    <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        onClick={() => {
                            setSelected(index); if (index === 0) {
                                handleScrollToTop()
                            }
                        }}
                        offset={-80} // adjust if you have a fixed header
                    >
                        <Link
                            underline="none"
                            // color="text.secondary"
                            sx={{ fontSize: '12px', cursor: 'pointer', color: selected === index ? color4 : '#B0B0B0', fontWeight: 'bold' }}
                        >
                            {item.label}
                        </Link>
                    </ScrollLink>
                    {index !== navItems.length - 1 && (
                        <Typography sx={{ mx: 1, color: 'gray', fontSize: 30, color: selected === index ? color4 : '#B0B0B0' }}>•</Typography>
                    )}
                </Box>
            ))}
        </Box></Box>
    );
}

export default ScrollNav
