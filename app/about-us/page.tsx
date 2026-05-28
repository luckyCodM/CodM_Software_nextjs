import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/about-us/Section1";
import Section3 from "@/components/sections/about-us/Section2";
import Section6 from "@/components/sections/about-us/Section3"
import Section4 from "@/components/sections/about-us/Section4";
import Section5 from "@/components/sections/about-us/Section5";


export const metadata = {
  title: "About CodM Software | Salesforce Consulting Company",
  description: "Learn about CodM Software, a Salesforce consulting company helping businesses improve CRM implementation, automation, integrations and digital growth.",
  keywords: "CodM Software, about CodM Software, Salesforce consulting company",
  alternates: {
    canonical: "/about-us",
  },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="About CodM Software" group_page="" current_page="About Us" display="d-none" />
                <Section1 />
                <Section3 />
                <Section4/>
                <Section5 />
                <Section6 />
            </Layout>
        </>
    );
}
