import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/salesforce-financial-services-cloud-consultant/Section1";
import Section2 from "@/components/sections/salesforce-financial-services-cloud-consultant/section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce financial services cloud consultant| Codm Software",
  description:"CodM Software helps financial institutions streamline operations and achieve measurable success with expert Salesforce Financial Services Cloud consulting.",
  keywords: "Salesforce financial services cloud consultant",
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Financial Services Cloud" group_page="" current_page="Financial Services Cloud" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
