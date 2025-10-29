import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/customer_360_degree/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Section3 from "@/components/sections/about-us/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce Customer 360 degree" group_page="" current_page="Salesforce Customer 360 degree" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
