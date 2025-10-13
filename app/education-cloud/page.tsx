import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/education-cloud/Section1";
import Section2 from "@/components/sections/education-cloud/Section2";
import Section3 from "@/components/sections/about-us/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Education Cloud" group_page="" current_page="Education Cloud" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
