import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import Entries from "./entries";
import { AcademicsContents} from "@/lib/fetchData";

const page = async() => {
    const Entris = AcademicsContents;
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <ExportedImage
                src="/nfp/nfpbg.jpg"
                alt="background"
                fill
                style={{ objectFit: "cover" }}
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
                <Typography  variant="h4" fontWeight="bold" textShadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    Nursing Fellowship Programme
                </Typography>
            </Box>

        </Box>
        <Box padding={4}>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
                <ListItem sx={{ display: "list-item", padding:"0"}}>
                    <ListItemText primary={<Typography  sx={{ fontWeight: "bold" }}>Building 'A' Cadre of Oncology Specialist Nurses for India</Typography>}/>
                </ListItem>
                <ListItem sx={{ display: "list-item", padding:"0" }}>
                    <ListItemText primary={<Typography  sx={{ fontWeight: "bold" }}>Join the nursing Fellowship Programme and serve the nation with enhanced skill and pride</Typography>} />
                </ListItem>
            </List>
        </Box>
        <Box padding={4}>
            <Entries Entris={Entris}/>
        </Box>
    </>)
}
export default page;