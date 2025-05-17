'use client'
import { Box, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
// import { fetchHomeContent} from "../../lib/fetchData";
import Loader from "../(components)/Loader";
import { HomeContent, UpdatesAccess, VideosAccess } from "@/lib/fetchData";
import DoctorSlider from '../(components)/DoctorCard/DoctorSlider';
import ScrollReveal from "../(components)/Animation/ScrollReveal";
import { Element } from 'react-scroll';

const ImageSliderMain = lazy(() => import("../(components)/HomeImageSlider/ImageSliderMain"));
// const DoctorSlider = lazy(() => import("../(components)/DoctorCard/DoctorSlider"));
const Facilities = lazy(() => import("../(components)/Facilities/FacilityData"));
const AccomplishmentsMain = lazy(() => import("../(components)/Accomplishments/AccomplichmentsMain"));
const WhatsHappening = lazy(() => import("../(components)/WhatsHappening"));
const OurHospitals = lazy(() => import("../(components)/Hospitals/OurHospitalsPage"));
const VideoGrid = lazy(() => import("../(components)/Videos/VideoGrid"));
const Partners = lazy(() => import("../(components)/Partners/Partners"));
import TextCarousel from "../(components)/TextCarousel";
import ScrollNav from "../(components)/ScrollNav";

// ✅ Server Component
const Home = () => {
  const homeContent = HomeContent;
  return (
    <>
    {/* <ScrollNav/> */}
      {UpdatesAccess ? <TextCarousel /> : <></>}

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        boxShadow="5px 5px 15px rgba(0, 0, 0, 0.3)"
        marginBottom={3}
        sx={{ backgroundColor: '#f6f6f6', color: 'black' }}
        fontFamily='fantasy'
      >
        {/* Intro */}
        {/* <Element name="Intro"> */}
          <Box display="flex" width="100%" sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Suspense fallback={<Loader />}>
              <ImageSliderMain />
            </Suspense>
            <Box paddingX={2} sx={{ width: { xs: "100%", md: "40%" } }}>
              {homeContent ? (
                <>
                  <Typography variant="h6">{homeContent.heading}</Typography>
                  <Typography textAlign="justify" fontSize={14}>{homeContent.description}</Typography>
                </>
              ) : (
                <Loader />
              )}
            </Box>
          </Box>
        {/* </Element> */}

        {/* Consultants Section */}
        <Element name="Doctors">
          <Box marginX={1} display="flex" flexDirection='column'>
            <Suspense fallback={<Loader />}>
              <DoctorSlider />
            </Suspense>
          </Box>
        </Element>

        <Element name="Accomp">
          <Box marginY={5} textAlign="center" display="flex" justifyContent='center' flexDirection='column' >
            <Typography fontWeight="bolder" variant="h5" zIndex={2}>
              Our Accomplishments
            </Typography>
            <Box zIndex={2}>
              <Suspense fallback={<Loader />}>
                <AccomplishmentsMain />
              </Suspense>
            </Box>
          </Box>
        </Element>
        {/* Facilities */}
        <Element name="Facilities">
          <Box display='flex' width='100%' justifyContent='center'  marginTop={5}>
            <Box display='flex' width='90%' flexDirection='column'>
              <Typography variant="h5" fontWeight="bold" marginY={2}>
                Facilities
              </Typography>
              <Suspense fallback={<Loader />}>
                <Facilities />
              </Suspense>
            </Box>
          </Box>
        </Element>

        <Element name="Partners">
          <Box display='flex' width='100%' justifyContent='center'  marginTop={5}>
            <Box display='flex' width='90%' flexDirection='column' marginTop={2}>
              <ScrollReveal animation="grow" sx={{ display: 'inline-block' }}>
                <Typography variant="h5" fontWeight="bold" marginBottom={3} sx={{ display: 'inline-block' }}>
                  Our Partners
                </Typography>
              </ScrollReveal>
              <Suspense>
                <Partners />
              </Suspense>

            </Box>
          </Box>
        </Element>
        {/* What's Happening */}
        <Element name="Featured">
          <Suspense fallback={<Loader />}>
            <WhatsHappening />
          </Suspense>
        </Element>

        <Element name="Stories">
          {VideosAccess ? <Box display='flex' width='100%' justifyContent='center'  marginTop={5}>
            <Box display='flex' width='90%' flexDirection='column' marginTop={2}>
              <Typography variant="h5" fontWeight="bold" marginBottom={3}>
                Our Stories
              </Typography>
              <Suspense>
                <VideoGrid />
              </Suspense>
            </Box>
          </Box> : <></>}
        </Element>


        {/* Our Hospitals */}
        <Element name="Network">
          <Box display='flex' width='100%' justifyContent='center' marginTop={5}>
            <Box display='flex' width='90%' flexDirection='column'>
              <Typography variant="h5" fontWeight="bold" marginBottom={3}>
                ACCF Network
              </Typography>
              <Suspense fallback={<Loader />}>
                <OurHospitals />
              </Suspense>
            </Box>
          </Box>
        </Element>
      </Box>
    </>
  );
}
export default Home;