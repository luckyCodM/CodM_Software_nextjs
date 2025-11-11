import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/omnistudio-cloud-service/Section";
import Section2 from "@/components/sections/education-cloud/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce OmniStudio Cloud Service",
  description:"CodM Software supports Salesforce omnistudio cloud service to automate workflows, enhance user experiences and boost digital transformation for businesses.",
  keywords: "omnistudio cloud service",
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce OmniStudio Cloud Service " group_page="" current_page="OmniStudio Cloud Service" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
