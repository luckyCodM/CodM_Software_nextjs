import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/financial-services-cloud/Section1";
import Section2 from "@/components/sections/service-details/Section2";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Financial Services Cloud" group_page="" current_page="Financial Services Cloud" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
