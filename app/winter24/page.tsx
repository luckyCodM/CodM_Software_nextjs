import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/winter24/Section1";
// import Section2 from "@/components/sections/winter24/section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
    title: "Salesforce Winter 24 Release Highlights | CodM Software",
    description:
        "Explore Salesforce Winter 24 release updates, automation changes, Flow features, and CRM improvements for admins, developers, and business teams.",
    keywords:
        "Salesforce Winter 24 release, Salesforce Flow updates, Salesforce admin updates, Winter 24 Salesforce features",
    alternates: {
        canonical: "/winter24",
    },
};


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
