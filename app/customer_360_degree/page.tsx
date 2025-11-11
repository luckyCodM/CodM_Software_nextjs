import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/customer_360_degree/Section1";
import Section2 from "@/components/sections/customer_360_degree/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce Customer 360 Solution |Salesforce sales cloud 360",
  description: "Unite sales, service, marketing and data with CodM Software’s Salesforce Customer 360 solutions to deliver personalized and connected customer experiences.",
  keywords: "Salesforce Customer 360 Solution |Salesforce sales cloud 360",
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce Customer 360 Degree" group_page="" current_page="Salesforce Customer 360 Degree" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
