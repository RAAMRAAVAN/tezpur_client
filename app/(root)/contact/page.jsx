"use client";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import ContactPage2 from "@/app/(components)/ContactUs/ContactPage2";

const Contact = () => {
    const HospitalDetails = useSelector(selectHospitalDetails);

    // Ensure HospitalDetails is not null before rendering
    if (!HospitalDetails) {
        return <Typography  textAlign="center" marginTop={5}>Loading...</Typography>;
    }

    return (
        <Box display="flex" width="100%" justifyContent="center" sx={{ backgroundColor: '#f6f6f6', color: 'black' }}>
            <ContactPage2 />
            {/* <Box
                display="flex"
                // width="70%"
                padding={2}
                sx={{
                    backgroundColor: "#eeebeb", borderRadius: "10px", height: {md:"90vh"}, cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                        transform: "scale(1.01)",
                    },
                    width:{xs:'98%', md: '70%'}
                }}
                flexDirection="column"
                alignItems="center"
                marginY={2}
                boxShadow='0 4px 10px rgba(0, 0, 0, 0.2)'
            >
                <ContactPage/>
            </Box> */}
        </Box>
    );
};

export default Contact;
