import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/about-us/Section1";
// import Section2 from "@/components/sections/home/Section4";
import Section3 from "@/components/sections/about-us/Section2";
// import Section4 from "@/components/sections/home/Section3";
// import Section5 from "@/components/sections/home/Section8";
import Section6 from "@/components/sections/about-us/Section3"
import Section7 from "@/components/sections/home/Section3";

export const metadata = {
  title: "About us CodM Software",
  description:
    "Codm Software is your trusted Salesforce consulting partner empowering global businesses with innovation and seamless CRM solutions.",
  keywords: "About us CodM Software",
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="About Us" group_page="" current_page="About Us" display="d-none" />
                <Section1 />
                {/* <Section2 /> */}
                <Section3 />
                {/* <Section4 /> */}
                {/* <Section5 classList="about-page-testimonial" /> */}
                <Section6 />
                <Section7 />
            </Layout>
        </>
    );
}
