import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/service/Section1";
import Section3 from "@/components/sections/about-us/Section3";

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Our Services" group_page="" current_page="Our Services" display="d-none" />
                <Section1 />
                <Section3 />
            </Layout>
        </>
    );
}
