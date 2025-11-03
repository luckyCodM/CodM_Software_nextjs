import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/omnistudio-vlocity/Section1";
import Section2 from "@/components/sections/omnistudio-vlocity/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "OmniStudio (Vlocity) | CODM Software",
  description:
    "Learn about Salesforce OmniStudio (Vlocity) — a low-code suite to build and deploy digital-first industry-specific experiences.",
  keywords: "Salesforce, OmniStudio, Vlocity, Data Mapper, Integration Procedures",
};


export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Omnistudio (Vlocity)" group_page="Blog" current_page="Omnistudio (Vlocity)" display="d-block" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
