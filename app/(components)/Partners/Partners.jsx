'use client'
import { FetchPartners } from "@/lib/fetchData";
import { Box, Grid } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { color1, color4 } from "../Global";
import ScrollReveal from "../Animation/ScrollReveal";

const Partners = () => {
    const Partners = FetchPartners;

    return (
        <Grid container alignItems="center" spacing={1}>
            {Partners.map((partner) => (
                <Grid
                    key={partner.id}
                    item
                    lg={2.2}
                    md={3}
                    sm={4}
                    xs={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width='100%'
                >
                    <ScrollReveal animation="grow" display="flex" sx={{}}>
                    <Box display='flex' backgroundColor='white' width='100%' paddingY={1} border={`1px solid ${color1}`} onClick={() => window.open(partner.path, '_blank')} sx={{
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer', '&:hover': {
                                transform: 'scale(1.02)'
                            }}}>
                        <Box
                            position="relative"
                            width="100%"
                            height="100px"
                            // border={`1px solid ${color1}`}
                        >
                            <ExportedImage
                                src={partner.partner_image}
                                alt="partner logo"
                                fill
                                style={{ objectFit: "contain" }}
                                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </Box>
                    </Box>
                    </ScrollReveal>
                </Grid>
            ))}
        </Grid>
    );
};

export default Partners;
