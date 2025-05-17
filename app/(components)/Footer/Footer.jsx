"use client";

import { useEffect, useState } from "react";
import { FiberManualRecord, LocationCity, Mail, Phone, WhatsApp } from "@mui/icons-material";
import { Box, Grid, ListItem, ListItemIcon, Typography } from "@mui/material";
import GoogleMapEmbed from "../Google_Map/GoogleMap";
import SocialIcons from "../SocialIcons";
import { useSelector } from "react-redux";
import { selectHospitals } from "@/redux/features/hospitalSlice";
import { selectFacilities } from "@/redux/features/facilitiesSlice";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { useRouter } from "next/navigation";
import { Font } from "../Global";

const Footer = () => {
    const hospitalData = useSelector(selectHospitalDetails);
    const hospitalList = useSelector(selectHospitals);
    const facilityList = useSelector(selectFacilities);
    const router = useRouter();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) return null; // Prevents hydration mismatch
    if (!hospitalData || !hospitalList.length || !facilityList.length) {
        return <Loader />;
    }

    const RenderListItem = ({ text }) => (
        <ListItem sx={{
            padding: "4px 0", display: "flex", alignItems: "center"
        }} onClick={() => router.push(`${facility.domain}`)}>
            <ListItemIcon sx={{ minWidth: "16px", color: "gray" }}>
                <FiberManualRecord fontSize="small" sx={{ fontSize: "8px" }} />
            </ListItemIcon>
            <Typography  sx={{ color: "gray", fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", '&:hover':{color: 'black'} }}>
                {text}
            </Typography>
        </ListItem>
    );

    return (
        <Box sx={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center", padding: 1, backgroundColor: "#f9f9f9", color: 'black' }}>
            <Grid container spacing={3} justifyContent="center" width={{ xs: "100%", md: "90%" }}>

                {/* Our Hospitals */}
                <Grid item xs={12} sm={6} lg={2}>
                    <Typography  variant="h6" mb={1}>ACCF Network</Typography>
                    {hospitalList.map((hospital, index) => (
                        <Box key={hospital.id || index} onClick={() => window.open(hospital.domain, '_blank')} sx={{
                            cursor: 'pointer', '&:hover': {
                                // transform: 'scale(1.05)'
                                // color:'black'
                            },

                        }} >
                            <RenderListItem text={hospital.short_name} />
                        </Box>
                    ))}
                </Grid>

                {/* Facilities */}
                <Grid item xs={12} sm={6} lg={4}>
                    <Typography  variant="h6" mb={1}>Facilities</Typography>
                    <Grid container spacing={1}>
                        {facilityList.map((facility, index) => (
                            <Grid item xs={6} key={facility._id || index} sx={{
                                cursor: 'pointer', '&:hover': {
                                    // transform: 'scale(1.05)'
                                }
                            }} onClick={() => router.push(`/facilities#${facility._id}`)}>
                                <RenderListItem text={facility.title} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Contact Us */}
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography  variant="h6" mb={1}>Contact Us</Typography>
                    {hospitalData.PhoneNumber !== null?
                    <Typography  color="gray" fontSize="14px" display="flex" alignItems="center" mb={1} component="a"
                        href={`tel:${hospitalData.PhoneNumber}`} sx={{ textDecoration: "none", cursor: "pointer", '&:hover':{color: 'black'} }}>
                        <Phone sx={{ color: "gray", mr: 1 }} /> {hospitalData.PhoneNumber}
                    </Typography>:<></>}
                    <Typography  color="gray" fontSize="14px" display="flex" alignItems="center" mb={1} component="a"
                        href={`tel:${hospitalData.TollFreeNumber || ""}`} sx={{ textDecoration: "none", cursor: "pointer", '&:hover':{color: 'black'} }}>
                        <Phone sx={{ color: "gray", mr: 1 }} /> {hospitalData.TollFreeNumber || "Not Available"}
                    </Typography>
                    
                    
                    {/* <Typography  color="gray" fontSize="14px" display="flex" alignItems="center" mb={1} component="a"
                        href={`https://wa.me/9435647725`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: "none", cursor: "pointer", '&:hover':{color: 'black'} }}>
                        <WhatsApp sx={{ color: "gray", mr: 1 }} /> 9435647725
                    </Typography> */}

                    <Typography  color="gray" fontSize="14px" display="flex" alignItems="center" mb={1} component="a"
                        href="mailto:info@accf.in"
                        sx={{ textDecoration: "none", cursor: "pointer", '&:hover':{color: 'black'} }}>
                        <Mail sx={{ color: "gray", mr: 1 }} /> info@accf.in
                    </Typography>
                    <Typography 
                        color="gray"
                        fontSize="14px"
                        display="flex"
                        alignItems="center"
                        mb={1}
                        component="a"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalData.Address || "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: "none", cursor: "pointer", '&:hover':{color: 'black'} }}
                    >
                        <LocationCity sx={{ color: "gray", mr: 1 }} /> {hospitalData.Address || "Not Available"}
                    </Typography>

                    <SocialIcons
                        Facebook={hospitalData.Facebook}
                        Twitter={hospitalData.Twitter}
                        LinkedIn={hospitalData.LinkedIN}
                        Instagram={hospitalData.Insta}
                    />
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography  variant="h6" mb={1}>Landmark</Typography>
                    <GoogleMapEmbed URL={hospitalData.Location || ""} />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;
