'use client'
import { setDoctors } from "@/redux/features/doctorSlice";
import { setFacilities } from "@/redux/features/facilitiesSlice";
import { setHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { setHospitals } from "@/redux/features/hospitalSlice";
import { setNewses } from "@/redux/features/newsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const APICalls = (props) => {
    const dispatch = useDispatch();
    const {OurHospitals, Facilities, HospitalDetails, Doctors, news} = props;
    useEffect(() => {
        if (OurHospitals?.length) {
          dispatch(setHospitals(OurHospitals)); // Store doctors in Redux
        }
        if (Facilities?.length) {
            dispatch(setFacilities(Facilities)); // Store doctors in Redux
          }
        dispatch(setHospitalDetails(HospitalDetails));
      }, []);
    return(<></>);
}
export default APICalls;