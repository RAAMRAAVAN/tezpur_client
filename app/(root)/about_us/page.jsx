import { Box, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import Entries from "./entries";
// import { API, Font, HName } from "@/app/(components)/Global";
import { FetchAboutUs, HName} from "@/lib/fetchData";
import OurHospitalsPage from "@/app/(components)/Hospitals/OurHospitalsPage";
import ModelofCare from "@/app/(components)/ModelofCare/ModelofCare";

const page = async () => {
    const HoName = HName;
    const Entris = FetchAboutUs;
    return (<>
        {/* <ModelofCare/> */}
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <ExportedImage
                src={`${HName}/about/about_us.jpg`}
                alt="background"
                fill
                style={{ objectFit: "cover" }}
                // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // priority
                quality={100}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(255, 165, 0, 0.4)",
                    color: "white",
                    padding: "12px 0",
                }}

            >
                <Typography  variant="h4" fontWeight="bold" textshadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    ABOUT US
                </Typography>
            </Box>

        </Box>
        <Box marginTop={3}>
            {/* <Typography  sx={{ fontSize: { xs: 24 } }} fontStyle="italic" marginTop={1} paddingX={2}>Assam cancer care foundation has inaugurated 8 state-of-the-art ACCF cancer hospitals in Assam</Typography> */}
            <Box marginX={2} marginY={1}>
                <OurHospitalsPage />
            </Box>
        </Box>
        <Box sx={{ padding: { md: 4, sm: 1 }, marginX: 1 }}>
            <Entries entries={Entris} />
        </Box>
    </>)
}
export default page;