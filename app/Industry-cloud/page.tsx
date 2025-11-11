import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/Industry-cloud/Section1";
import Section2 from "@/components/sections/education-cloud/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce Industry cloud | Salesforce industry cloud service",
  description: "CodM Software delivers tailored Salesforce Industry Cloud solutions to streamline operations, boost productivity and drive digital transformation.",
  keywords: "Salesforce industry cloud | Salesforce industry cloud service",
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce Industry Cloud" group_page="" current_page="Industry Cloud" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
