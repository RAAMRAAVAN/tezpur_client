"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer,
  List, ListItem, ListItemText, Menu, MenuItem, Avatar,
  Grid
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";
import { HName } from "../Global";
import { motion } from "framer-motion";
import ContactUsDropdown from './ContactUsDropdown';
import FacilitiesDropdown from './FacilitiesDropDown';
import { HomePageAccess, AboutUsAccess, FacilitiesAccess, HospitalsAccess, NewsAndEventsAccess, ContactUsAccess, SocialInfraAccess, AcademicsAccess } from "@/lib/fetchData";
import { useSelector } from "react-redux";
import { NavBackground, NavElements } from '../Global';
import { selectDoctors } from "@/redux/features/doctorSlice";
import MobileView from './MobileView';
const navItems = [
  { name: "Home", link: "/", Active: HomePageAccess },
  { name: "About Us", link: "/about_us", Active: AboutUsAccess },
  // { name: "Doctors", link: "/consultants", Active: AboutUsAccess },
  { name: "Facilities", link: "/facilities", Active: FacilitiesAccess },
  { name: "Hospitals", link: "/", Active: HospitalsAccess },
  { name: "News & Events", link: "/news", Active: NewsAndEventsAccess },
  { name: "Academics", link: "/academics", Active: AcademicsAccess },
  { name: "Contact Us", link: "/contact", Active: ContactUsAccess },
];

export default function Navbar({ Title, OurHospitals, Facilities }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null); // separate for facilities
  const doctors = useSelector(selectDoctors);

  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const showSpecialButton = pathname === '/consultants';
  const HoName = HName;

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleHospitalsClick = (event) => setAnchorEl(event.currentTarget);
  const handleFacilitiesClick = (event) => setAnchorE2(event.currentTarget);

  const handleHospitalsClose = () => setAnchorEl(null);
  const handleFacilitiesClose = () => setAnchorE2(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar elevation={0} position="static" style={{ zIndex: 10, backgroundColor: NavBackground, color: 'black' }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: 'relative', zIndex: 6, minHeight: '52px !important', }} boxShadow={0}>
          <Box sx={{ display: { xs: "none", md: "none" }, mr: 1 }}>
            <ExportedImage src="/vercel.gif" alt="logo" width={50} height={50} />
          </Box>
          <Typography sx={{ display: { xs: "none", md: "none" }, fontSize: "1rem", fontWeight: "bold" }}>
            {Title}
          </Typography>


          <Grid container sx={{ width: '100%', }}>
            <Grid item lg={8} md={4} sm={4} xs={2} display='flex' >
              <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
                {navItems.map((item) => {
                  if (item.Active)
                    switch (item.name) {
                      case "Hospitals":
                        return (
                          <Box key={item.name}>
                            <Button
                              sx={{ color: NavElements }}
                              onClick={handleHospitalsClick}
                              aria-controls={anchorEl ? "hospitals-menu" : undefined}
                              aria-haspopup="true"
                            >
                              {item.name} <ExpandMore />
                            </Button>
                            <Menu
                              id="hospitals-menu"
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleHospitalsClose}
                            >
                              {OurHospitals?.length > 0 ? (
                                OurHospitals.map((hospital) => (
                                  <MenuItem key={hospital.name} onClick={handleHospitalsClose}>
                                    <a
                                      href={hospital.domain}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                      <Typography >{hospital.name}</Typography>
                                    </a>
                                  </MenuItem>
                                ))
                              ) : (
                                <MenuItem disabled>
                                  <Typography >No hospitals available</Typography>
                                </MenuItem>
                              )}
                            </Menu>
                          </Box>
                        );
                      case "Facilities":
                        return (
                          // <FacilitiesDropdown item={item} Facilities={Facilities}/>
                          <Box key={item.name}>
                            <Button
                              sx={{ color: NavElements }}
                              onClick={handleFacilitiesClick}
                              aria-controls={anchorE2 ? "facilities-menu" : undefined}
                              aria-haspopup="true"
                            >
                              {item.name} <ExpandMore />
                            </Button>
                            <Menu
                              id="facilities-menu"
                              anchorEl={anchorE2}
                              open={Boolean(anchorE2)}
                              onClose={handleFacilitiesClose}
                            >
                              {Facilities?.length > 0 ? (
                                Facilities.map((facility) => (
                                  <Link
                                    key={facility.id}
                                    href={`/facilities#${facility._id}`}
                                    passHref
                                    legacyBehavior
                                  >
                                    <MenuItem key={facility.name || facility.title} onClick={handleFacilitiesClose}>
                                      <Typography >{facility.title}</Typography>
                                    </MenuItem></Link>
                                ))
                              ) : (
                                <MenuItem disabled>
                                  <Typography >No facilities available</Typography>
                                </MenuItem>
                              )}
                            </Menu>
                          </Box>
                        );
                      case "Contact Us":
                        return <ContactUsDropdown key={item.name} />;
                      default:
                        return (
                          <Link key={item.name} href={item.link} passHref legacyBehavior>
                            <Button sx={{ color: NavElements }}>{item.name}</Button>
                          </Link>
                        );
                    }
                })}
              </Box>
            </Grid>
            <Grid item lg={4} md={8} sm={8} xs={10} sx={{ display: 'flex', width: '100%' }}>
              {/* {showSpecialButton ? <><DepartmentButton/>
              </> : <><SearchDoctors doctors={doctors} /></>} */}
            </Grid>
          </Grid>
          {SocialInfraAccess ? <Link href="/social_infra" passHref legacyBehavior>
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <Button sx={{ color: "#fff" }}>
                <Avatar alt="Social Infrastructure" sx={{ backgroundColor: "white", marginRight: "2px" }} src="/SocialInfra/soc_inf.png" />
                Social Infrastructure
              </Button>
            </Box>
          </Link> : <></>}


          <IconButton edge="end" sx={{ display: { xs: "block", lg: "none" }, color: "#fff", position: 'absolute' }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <MobileView mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} OurHospitals={OurHospitals} />

      </AppBar>
    </motion.div>
  );
}
