'use client'
import Header from './Header'
import { fetchDoctors2, FetchFacilitiesData, FetchHospitalDetails, FetchHospitalsData, fetchNewsAndEvents2 } from "@/lib/fetchData";
import APICalls from './APICalls';
import { setDoctors } from "@/redux/features/doctorSlice";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNewses } from '@/redux/features/newsSlice';

const HeaderPage = () => {
    const dispatch = useDispatch();
    const OurHospitals = FetchHospitalsData
    const Facilities = FetchFacilitiesData;
    const HospitalDetails = FetchHospitalDetails;
    const fetchDoctorDetails = async () => {
        // setLoading1(true);
        try {
            const data = await fetchDoctors2();
            // console.log("API=", data, data?.length);
            if(data?.length)
                {dispatch(setDoctors(data)); console.log("dispatched")}
        } catch (error) {
            console.error("Error fetching hospital data:", error);
        } finally {
            // setLoading1(false);
        }
    };

    const fetchNewsDetails = async () => {
        // setLoading2(true);
        try {
            const data = await fetchNewsAndEvents2();
            if(data?.length)
                dispatch(setNewses(data))
        } catch (error) {
            console.error("Error fetching hospital data:", error);
        } finally {
            // setLoading2(false);
        }
    };

    useEffect(() => {
        fetchDoctorDetails();
        fetchNewsDetails();
    }, []);

    // console.log("Client API's", Doctors, news);

    return (<>
    <APICalls HospitalDetails={HospitalDetails} OurHospitals={OurHospitals} Facilities={Facilities}/>
    <Header HospitalDetails={HospitalDetails} OurHospitals={OurHospitals} Facilities={Facilities}/>
    </>);
}

export default HeaderPage;
