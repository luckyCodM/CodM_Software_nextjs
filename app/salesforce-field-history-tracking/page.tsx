import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/salesforce-field-history-tracking/Section1";
import Section2 from "@/components/sections/salesforce-field-history-tracking/section2";
import Section3 from "@/components/sections/about-us/Section3";

// app/field-history-tracking/page.tsx
export const metadata = {
  title: "Salesforce Field History Tracking | CodM Software India",
  description:
    "CodM Software’s Field History Tracking for Salesforce helps businesses monitor data changes, improve accountability and maintain compliance effortlessly.",
  keywords:
    "Salesforce, Field History Tracking, FHT, Salesforce CRM, Audit Trail, Salesforce App",
  openGraph: {
    title: "Salesforce Field History Tracking | CodM Software India",
    description:
      "CodM Software’s Field History Tracking for Salesforce helps businesses monitor data changes, improve accountability and maintain compliance effortlessly.",
    url: "https://codmsoftware.com/field-history-tracking",
    siteName: "CodM Software",
    images: [
      {
        url: "/assets/img/blog/blog-details-video-img.png",
        width: 1200,
        height: 630,
        alt: "Field History Tracking in Salesforce",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Field History Tracking | CodM Software India",
    description:
      "CodM Software’s Field History Tracking for Salesforce helps businesses monitor data changes, improve accountability and maintain compliance effortlessly.",
    images: ["/assets/img/blog/blog-details-video-img.png"],
  },
};



export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Field History Tracking" group_page="" current_page="Field History Tracking" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
