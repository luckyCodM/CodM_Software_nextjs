import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/omnistudio-vlocity/Section1";
import Section2 from "@/components/sections/omnistudio-vlocity/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce OmniStudio and Vlocity Services | CodM Software",
  description: "Explore CodM Software services for Salesforce OmniStudio, Vlocity, DataRaptors, Integration Procedures, FlexCards and guided digital experiences.",
  keywords: "Salesforce OmniStudio, Vlocity services, DataRaptor, Integration Procedures",
  alternates: {
    canonical: "/omnistudio-vlocity",
  },
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
