import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/winter24/Section1";
// import Section2 from "@/components/sections/winter24/section";
import Section3 from "@/components/sections/about-us/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce winter 24 release" group_page="Blog" current_page="Salesforce winter 24 release" display="d-block" />
                <Section1 />
                {/* <Section2 /> */}
                <Section3 />
            </Layout>
        </>
    );
}
