import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/financial-service-2025/Section1";
import Section2 from "@/components/sections/financial-service-2025/section2";
import Section3 from "@/components/sections/about-us/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Financial Services Cloud 2025" group_page="Blog" current_page="Financial Services Cloud 2025" display="d-block" />
                <Section1 />
                
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
