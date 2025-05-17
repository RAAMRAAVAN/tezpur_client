// app/(root)/facilities/page.js
import { Suspense } from "react";
import FacilitiesClient from "./FacilitiesClient";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FacilitiesClient />
    </Suspense>
  );
};

export default Page;
