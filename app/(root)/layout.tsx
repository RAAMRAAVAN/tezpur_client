import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "../(components)/Footer/Footer";
import HeaderPage from '../(components)/Header/HeaderPage';
import AnimatedImages from "../(components)/Animation";
import { HospitalName } from "@/lib/fetchData";

export const metadata: Metadata = {
  metadataBase: new URL('https://darrangcancercentre.org/'),
  title: `${HospitalName}`,
  description:
    "South Asia's largest cancer care network by Assam Govt and Tata Trusts — delivering affordable, high-quality cancer treatment in Dibrugarh.",
  keywords: [
    "Cancer Hospital",
    "Best Cancer Hospital in Dibrugarh",
    "Free Cancer Treatment Assam",
    "Cancer Care Northeast India",
    "Best Oncology Hospital",
    "Cancer Hospital in Assam",
    "Free Cancer Treatment in India",
  ],
  icons: {
    icon: "/favicon.gif",
  },
  openGraph: {
    title: "Cancer Care Institute Dibrugarh – Best Cancer Hospital in Northeast India",
    description:
      "Leading cancer hospital in Assam backed by Tata Trusts and Government of Assam. Providing world-class oncology care and free cancer treatment in Dibrugarh.",
    url: "https://darrangcancercentre.org/",
    siteName: "DIBRUGARH CANCER CENTRE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DIBRUGARH CANCER CENTRE",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIBRUGARH CANCER CENTRE",
    description:
      "Get the best cancer treatment in Dibrugarh from South Asia's largest cancer care network, powered by Tata Trusts and Govt. of Assam.",
    images: ["/og-image.jpg"],
    site: "https://x.com/gmcsci",
  },
};
// ✅ Layout Component
export default function Layout({ children }: { children: ReactNode }) {
  return (<>
    <HeaderPage />
    {children}
    <Footer />
    <AnimatedImages />
  </>
  );
}
