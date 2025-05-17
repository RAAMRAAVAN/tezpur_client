import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "../(components)/Footer/Footer";
import HeaderPage from '../(components)/Header/HeaderPage';
import AnimatedImages from "../(components)/Animation";

export const metadata: Metadata = {
  metadataBase: new URL("https://cancercareinstituteguwahati.org"),
  title: "State Cancer Institute Guwahati | Cancer Care Institute Guwahati",
  description:
    "South Asia's largest cancer care network by Assam Govt and Tata Trusts — delivering affordable, high-quality cancer treatment in Guwahati.",
  keywords: [
    "Cancer Hospital",
    "Best Cancer Hospital in Guwahati",
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
    title: "Cancer Care Institute Guwahati – Best Cancer Hospital in Northeast India",
    description:
      "Leading cancer hospital in Assam backed by Tata Trusts and Government of Assam. Providing world-class oncology care and free cancer treatment in Guwahati.",
    url: "https://cancercareinstituteguwahati.org",
    siteName: "State Cancer Institute Guwahati",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "State Cancer Institute Guwahati",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "State Cancer Institute Guwahati",
    description:
      "Get the best cancer treatment in Guwahati from South Asia's largest cancer care network, powered by Tata Trusts and Govt. of Assam.",
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
