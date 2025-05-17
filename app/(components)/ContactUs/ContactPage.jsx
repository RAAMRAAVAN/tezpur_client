'use client'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { LocationCity, Mail, Phone, WhatsApp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { Font } from "../Global";

const ContactPage = () => {
    // const HospitalDetails = useHospital();
    const HospitalDetails = useSelector(selectHospitalDetails);
    if (!HospitalDetails) {
        return <Typography  textAlign="center" mt={5}>Loading...</Typography>;
    }

    return (
        <Box
            display="flex"
            width="100%"
            sx={{
                backgroundColor: "#eeebeb",
                p: { md: 2, xs: 0 },
            }}
            
            flexDirection="column"
            alignItems="center"
        >
            <Typography  variant="h5" my={1} fontWeight="bold">Contact Us</Typography>
            <Typography  color="gray" my={1} mx={1} textAlign="center">
                Any questions or remarks? Write us a message.
            </Typography>

            <Grid
                    item
                    md={5}
                    xs={12}
                    sx={{
                        backgroundColor: "#3e2093",
                        borderRadius: { md: "10px 0px 0px 10px" },
                        p: { md: 4, xs: 2 },
                        color: "white",
                        display:{xs:'flex', md:'none'}
                    }}
                    // display='flex'
                    flexDirection='column'
                >
                    <Typography  variant="h6" fontWeight='bold' textAlign='center'>Contact Information</Typography>
                    <Typography  my={1} color="#d3d3d3" fontSize={13} sx={{textAlign:{xs:'center', md:'start'}}}>
                        Fill up the form and our team will get back to you within 24 hours.
                    </Typography>

                    <Box>

                        <Box display="flex" alignItems="center" my={2}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href={`tel:${HospitalDetails.TollFreeNumber || ""}`} sx={{ textDecoration: "none", cursor: "pointer" }}>
                                {HospitalDetails?.TollFreeNumber || "Not Available"}
                            </Typography>
                        </Box>

                        {/* <Box display="none" alignItems="center" my={2}>
                            <WhatsApp sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href={`https://wa.me/9435647725`}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: "none", cursor: "pointer" }}>
                                9435647725
                            </Typography>
                        </Box> */}

                        <Box display="flex" alignItems="center" my={2}>
                            <Mail sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href="mailto:info@accf.in"
                                sx={{ textDecoration: "none", cursor: "pointer" }}>info@accf.in</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" my={2}>
                            <LocationCity sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HospitalDetails.Address || "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: "none", cursor: "pointer" }}>
                                {HospitalDetails?.Address || "Address Not Available"}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

            <Grid
                container
                width="100%"
                sx={{
                    backgroundColor: "#eeebeb",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    overflow: "hidden"
                }}
            >
                {/* Contact Information Section */}
                <Grid
                    item
                    md={5}
                    xs={12}
                    sx={{
                        backgroundColor: "#3e2093",
                        borderRadius: { md: "10px 0px 0px 10px" },
                        p: { md: 4, xs: 2 },
                        color: "white",
                        display:{xs:'none', md:'flex'}
                    }}
                    
                    flexDirection='column'
                >
                    <Typography  variant="h6" fontWeight='bold' textAlign='center'>Contact Information</Typography>
                    <Typography  my={1} color="#d3d3d3" fontSize={13} sx={{textAlign:{xs:'center', md:'start'}}}>
                        Fill up the form and our team will get back to you within 24 hours.
                    </Typography>

                    <Box>

                        <Box display="flex" alignItems="center" my={2}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href={`tel:${HospitalDetails.TollFreeNumber || ""}`} sx={{ textDecoration: "none", cursor: "pointer" }}>
                                {HospitalDetails?.TollFreeNumber || "Not Available"}
                            </Typography>
                        </Box>

                        {/* <Box display="flex" alignItems="center" my={2}>
                            <WhatsApp sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href={`https://wa.me/9435647725`}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: "none", cursor: "pointer" }}>
                                9435647725
                            </Typography>
                        </Box> */}

                        <Box display="flex" alignItems="center" my={2}>
                            <Mail sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href="mailto:info@accf.in"
                                sx={{ textDecoration: "none", cursor: "pointer" }}>info@accf.in</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" my={2}>
                            <LocationCity sx={{ mr: 1 }} />
                            <Typography  fontSize={13} color="#d3d3d3" component="a"
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HospitalDetails.Address || "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: "none", cursor: "pointer" }}>
                                {HospitalDetails?.Address || "Address Not Available"}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Contact Form Section */}
                <Grid
                    item
                    container
                    md={7}
                    xs={12}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: { md: "10px 10px 0px 0px", xs: "0px 0px 0px 0px" },
                        p: { md: 4, xs: 2 },
                        // gap: 2
                    }}
                    spacing={1}
                    height='70vh'
                    justifyContent="center"
                >
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth label="Email" variant="outlined" />
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <TextField fullWidth label="Phone No" variant="outlined" />
                    </Grid>
                    <Box width='100%' display='flex' sx={{paddingLeft:"8px"}}>
                        <Typography  fontSize={13}  >Message</Typography>
                    </Box>

                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            placeholder="Enter your message"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} display='flex' width='100%' justifyContent='center'>
                        <Button variant="contained" size="large" aria-label="Submit Form" fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
            
        </Box>
    );
};
export default ContactPage;