'use client'
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { color4, Font } from "../Global";
import AnimatedCounter from "../Animation/AnimatedCounter";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Get ordinal suffix
    const getOrdinal = (n) => {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${month} ${year}`;
}

const Accomplishments = ({ accomplishments }) => {
    const theme = useTheme();
    const AnimationDuration = 1500;
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // True for mobile screens

    return (<>
        <Box display='flex' width='100%' justifyContent='center'>
            <Typography zIndex={2} color="black" textAlign='center'>{formatDate(accomplishments.date)}</Typography>
        </Box>
        <Box display="flex" width="100%" justifyContent="center">


            <Grid container display='none' justifyContent="center" width="100%" padding={2} marginY={3} spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={2.1} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                    }}
                >
                    <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                        <ExportedImage src={`/Accomplishments/people.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" sx={{ width: 'auto', height: 'auto' }} />
                    </Box>
                    <Box display='flex'>
                        <AnimatedCounter
                            end={accomplishments.patient_footfall}
                            duration={AnimationDuration}
                            fontWeight="bold"
                            color="orange"
                            sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        />
                        <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            +
                        </Typography>
                    </Box>
                    <Typography borderTop="1px solid lightgray" color="black" padding={1} variant="h6" margin={1} width="100%" textAlign="center" fontWeight="bold">
                        Patient Footfall
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2.1} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                    }}
                >
                    <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                        <ExportedImage src={`/SCI/Accomplishments/beds.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" sx={{ width: 'auto', height: 'auto' }} />
                    </Box>
                    {/* <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            {accomplishments.total_doctors}
                        </Typography> */}
                    <Box display='flex'>
                        <AnimatedCounter
                            end={44}
                            duration={AnimationDuration}
                            fontWeight="bold"
                            color="orange"
                            sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        />
                        <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            +
                        </Typography>
                    </Box>
                    <Typography borderTop="1px solid lightgray" color="black" padding={1} variant="h6" margin={1} width="100%" textAlign="center" fontWeight="bold">
                        Beds
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2.1} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                    }}
                >
                    <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                        <ExportedImage src={`/Accomplishments/chemo.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" sx={{ width: 'auto', height: 'auto' }} />
                    </Box>
                    <Box display='flex'>
                        <AnimatedCounter
                            end={accomplishments.chemo_session}
                            duration={AnimationDuration}
                            fontWeight="bold"
                            color="orange"
                            sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        />
                        <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            +
                        </Typography>
                    </Box>
                    <Typography borderTop="1px solid lightgray" color="black" padding={1} variant="h6" margin={1} width="100%" textAlign="center" fontWeight="bold">
                        Chemo Session
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2.1} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                    }}
                >
                    <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                        <ExportedImage src={`/Accomplishments/radiation.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" sx={{ width: 'auto', height: 'auto' }} />
                    </Box>
                    <Box display='flex'>
                        <AnimatedCounter
                            end={accomplishments.radiation_session}
                            duration={AnimationDuration}
                            fontWeight="bold"
                            color="orange"
                            sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        />

                        <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            +
                        </Typography>
                    </Box>
                    <Typography borderTop="1px solid lightgray" color="black" padding={1} variant="h6" margin={1} width="100%" textAlign="center" fontWeight="bold">
                        Radiation Session
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2.1} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", cursor: 'pointer', transition: "all 0.1s ease-in-out", }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.01)"; // ✅ Zoom in
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)"; // ✅ Reset zoom
                    }}
                >
                    <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                        <ExportedImage src={`/Accomplishments/doctors.png`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" sx={{ width: 'auto', height: 'auto' }} />
                    </Box>
                    {/* <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            {accomplishments.total_doctors}
                        </Typography> */}
                    <Box display='flex'>
                        <AnimatedCounter
                            end={50}
                            duration={AnimationDuration}
                            fontWeight="bold"
                            color="orange"
                            sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        />
                        <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            +
                        </Typography>
                    </Box>
                    <Typography borderTop="1px solid lightgray" color="black" padding={1} variant="h6" margin={1} width="100%" textAlign="center" fontWeight="bold">
                        Doctors
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} marginX={5} marginY={3} gap={2} justifyContent='center'>
                <Grid item lg={2.1} sx={{cursor:'pointer'}} md={3} sm={4} xs={12} border='1px black sold' backgroundColor='white' borderRadius={2} paddingY={2} boxShadow={5} display='flex' flexDirection='column' alignItems='center'>
                    <Box display='flex'><AnimatedCounter
                        end={accomplishments.patient_footfall}
                        duration={AnimationDuration}
                        fontWeight="bold"
                        color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                    />
                        <Typography variant="h4" fontWeight="bold" color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        >
                            +
                        </Typography></Box>
                    <Typography fontWeight='bold' color="gray" fontSize={17}>
                        Patient Footfall
                    </Typography>
                </Grid>

                <Grid item lg={2.1} sx={{cursor:'pointer'}} md={3} sm={4} xs={12} border='1px black sold' backgroundColor='white' borderRadius={2} paddingY={2} boxShadow={5} display='flex' flexDirection='column' alignItems='center'>
                    <Box display='flex'><AnimatedCounter
                        end={accomplishments.chemo_session}
                        duration={AnimationDuration}
                        fontWeight="bold"
                        color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                    />
                        <Typography variant="h4" fontWeight="bold" color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        >
                            +
                        </Typography></Box>
                    <Typography fontWeight='bold' color="gray" fontSize={17}>
                        Chemo Session
                    </Typography>
                </Grid>

                <Grid item lg={2.1} sx={{cursor:'pointer'}} md={3} sm={4} xs={12} border='1px black sold' backgroundColor='white' borderRadius={2} paddingY={2} boxShadow={5} display='flex' flexDirection='column' alignItems='center'>
                    <Box display='flex'><AnimatedCounter
                        end={accomplishments.radiation_session}
                        duration={AnimationDuration}
                        fontWeight="bold"
                        color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                    />
                        <Typography variant="h4" fontWeight="bold" color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        >
                            +
                        </Typography></Box>
                    <Typography fontWeight='bold' color="gray" fontSize={17}>
                        Radiation Session
                    </Typography>
                </Grid>


                <Grid item lg={2.1} sx={{cursor:'pointer'}} md={3} sm={4} xs={12} border='1px black sold' backgroundColor='white' borderRadius={2} paddingY={2} boxShadow={5} display='flex' flexDirection='column' alignItems='center'>
                    <Box display='flex'><AnimatedCounter
                        end={accomplishments.total_doctors}
                        duration={AnimationDuration}
                        fontWeight="bold"
                        color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                    />
                        <Typography variant="h4" fontWeight="bold" color={color4} 
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        >
                            +
                        </Typography></Box>
                    <Typography fontWeight='bold' color="gray" fontSize={17}>
                        Doctors
                    </Typography>
                </Grid>

                

                <Grid item lg={2.1} sx={{cursor:'pointer'}} md={3} sm={4} xs={12} border='1px black sold' backgroundColor='white' borderRadius={2} paddingY={2} boxShadow={5} display='flex' flexDirection='column' alignItems='center'>
                    <Box display='flex'><AnimatedCounter
                        end={accomplishments.total_beds || 44}
                        duration={AnimationDuration}
                        fontWeight="bold"
                        color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                    />
                        <Typography variant="h4" fontWeight="bold" color={color4}
                        // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        >
                            +
                        </Typography></Box>
                    <Typography fontWeight='bold' color="gray" fontSize={17}>
                        Beds
                    </Typography>
                </Grid>
            </Grid>
        </Box></>
    );
};

export default Accomplishments;
