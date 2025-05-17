import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { ExpandMore } from "@mui/icons-material";
import { NavElements } from "../Global";

const ContactUsDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{ display: "inline-block", position: 'relative', zIndex:'10001' }}
    >
      <Button
        sx={{ color: NavElements }}
        onMouseEnter={() => setOpen(true)} // Change onHover to onMouseEnter
        onMouseLeave={() => setOpen(false)} // Optionally, close on mouse leave
      >
        Contact Us <ExpandMore />
      </Button>
      {open ? <Box boxShadow={3} sx={{zIndex:10001}} borderRadius={1} display='flex' width='200px' backgroundColor='white' position='absolute' flexDirection='column' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} paddingY={1}>
        <Box padding={1} onClick={()=>setOpen(false)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Link href="/contact" passHref legacyBehavior>
            <Box display='flex'><RiContactsLine size={24} color="gray" /><Typography color="#454545" marginLeft={1}>Contact Us</Typography></Box>
          </Link>
        </Box>
        <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box onClick={()=>setOpen(false)} display='flex'><IoIosCall  size={25} color="gray" />
            <Typography component="a"
              href={`tel:${"6026332202" || ""}`} sx={{ cursor: "pointer" }} color="#454545" marginLeft={1}>6026332202</Typography>
          </Box>
        </Box>
        <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box onClick={()=>setOpen(false)} display='flex'><IoIosCall  size={25} color="gray" />
            <Typography component="a"
              href={`tel:18003454325`} sx={{ cursor: "pointer" }} color="#454545" marginLeft={1}>18003454325</Typography>
          </Box>
        </Box>
        <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box onClick={()=>setOpen(false)} display='flex'><IoIosMail size={24} color="gray" />
            <Typography component="a"
              href="mailto:info@accf.in"
              sx={{ cursor: "pointer" }} color="#454545" marginLeft={1}>info@accf.in</Typography>
          </Box>
        </Box>
      </Box> : <></>}


    </Box>
  );
};

export default ContactUsDropdown;