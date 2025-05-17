"use client";
import { Box, IconButton, Grid, useMediaQuery, Typography, TextField } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";
import NewDoctorCard from "../../(components)/NewDoctorCard";
import { color1, MedantaOrange } from "../Global";
import { useDispatch, useSelector } from "react-redux";
import { selectDoctors, selectPage, setPage } from "@/redux/features/doctorSlice";
import Loader from "../Loader";
import { AnimatePresence, motion } from "framer-motion";
import SearchDoctors from "./SearchDoctors";
const DoctorSlider = () => {
    const dispatch = useDispatch();
    const doctors = useSelector(selectDoctors);
    const page = useSelector(selectPage);
    const [direction, setDirection] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [preloadedImages, setPreloadedImages] = useState(new Set());

    const isXs = useMediaQuery("(max-width:600px)");
    const isSm = useMediaQuery("(min-width:601px) and (max-width:960px)");
    const isMd = useMediaQuery("(min-width:961px) and (max-width:1280px)");
    const isLg = useMediaQuery("(min-width:1281px)");

    const doctorsPerPage = isXs ? 1 : isSm ? 2 : isMd ? 2 : 3;

    // Use memoization to avoid recalculating filteredDoctors on each render
    const filteredDoctors = useMemo(() =>
        doctors.filter((doctor) => doctor.name?.toLowerCase().includes(searchQuery.toLowerCase())),
        [doctors, searchQuery]
    );

    const totalDoctors = filteredDoctors.length;
    const totalPages = Math.max(1, Math.ceil(totalDoctors / doctorsPerPage));

    const startIdx = (page - 1) * doctorsPerPage;
    const displayedDoctors = filteredDoctors.slice(startIdx, startIdx + doctorsPerPage);

    const handleNext = () => {
        if (page < totalPages) {
            setDirection(1);
            dispatch(setPage(page + 1));
        }
    };

    const handlePrev = () => {
        if (page > 1) {
            setDirection(-1);
            dispatch(setPage(page - 1));
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    // useEffect(() => {
    //     const preloadImages = () => {
    //         filteredDoctors.forEach((doctor) => {
    //             if (doctor.doctor_image && !preloadedImages.has(doctor.doctor_image)) {
    //                 const img = new Image();
    //                 img.src = doctor.doctor_image;
    //                 img.onload = () => {
    //                     setPreloadedImages((prev) => new Set(prev).add(doctor.doctor_image));
    //                 };
    //             }
    //         });
    //     };
    //     preloadImages();
    // }, [filteredDoctors]);

    return (<>
        <Box display='flex' width='100%' justifyContent='center'>
            <Grid container display='flex' sx={{width: { lg: '90%', md: "90%", sm: "100%", xs:"90%"}}} alignItems='center' marginTop={5} justifyContent='space-between'>
                <Grid item lg={2} md={4} sm={4} xs={12}>
                    <Typography variant="h5" fontWeight="bold" onClick={() => dispatch(setPage(1))} sx={{ cursor: 'pointer' }}>
                        Our Doctors
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12} sx={{paddingX:{xs:'0px',sm:'20px' }, marginTop:{xs:'20px',sm:'0px' }}}>
                    <Box position='relative'>
                        <SearchDoctors doctors={doctors} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box
            {...handlers}
            position="relative"
            display="flex"
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ touchAction: "pan-y", minHeight: "430px", overflowX: "hidden" }}
        >
            {filteredDoctors.length > 0 ? (
                <Box
                    sx={{
                        width: { lg: '90%', md: "90%", xs: "100%" },
                        minHeight: "380px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        overflow: "hidden",
                        // border: '1px black solid'
                    }}
                >
                    <IconButton
                        onClick={handlePrev}
                        disabled={page === 1}
                        sx={{
                            position: "absolute",
                            left: "0%",
                            top: "50%",
                            zIndex: 1,
                            fontSize: "3rem",
                            color: color1,
                            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                            display: isXs? "none" : "flex",
                        }}
                    >
                        <ArrowBackIosNew sx={{ fontSize: "3rem" }} />
                    </IconButton>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{ width: "100%", display: 'flex', justifyContent: 'center' }}
                        >
                            <Grid
                                container
                                spacing={5}
                                justifyContent="center"
                                // marginY={2}
                                sx={{ minHeight: "350px" }}
                                display="flex"
                                width="100%"
                            >
                                {displayedDoctors.map((doctor) => (
                                    <Grid
                                        key={doctor.id}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        lg={4}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="stretch"
                                        marginY={2}
                                        position="relative"
                                        // border='1px black solid'
                                    >
                                        <NewDoctorCard
                                            id={doctor.id}
                                            image={doctor.doctor_image}
                                            name={doctor.name}
                                            speciality={doctor.specializations}
                                            designation={doctor.designation}
                                            department={doctor.depertment}
                                            qualifications={doctor.qualifications}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    </AnimatePresence>

                    <IconButton
                        onClick={handleNext}
                        disabled={page === totalPages}
                        sx={{
                            position: "absolute",
                            right: "0%",
                            top: "50%",
                            fontSize: "3rem",
                            color: color1,
                            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                            display: isXs? "none" : "flex",
                        }}
                    >
                        <ArrowForwardIos sx={{ fontSize: "3rem" }} />
                    </IconButton>
                </Box>
            ) : (
                <Loader />
            )}
        </Box>
    </>
    );
};

export default DoctorSlider;
