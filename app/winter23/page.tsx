import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/winter23/Section1";
import Section2 from "@/components/sections/winter23/section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
    title: "Salesforce Winter 23 Release Highlights | CodM Software",
    description:
        "Review key Salesforce Winter 23 release updates, Flow improvements, automation features, and practical CRM changes for Salesforce teams.",
    keywords:
        "Salesforce Winter 23 release, Salesforce Flow updates, Salesforce automation, Winter 23 Salesforce features",
    alternates: {
        canonical: "/winter23",
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce winter 23 release" group_page="Blog" current_page="Salesforce winter 23 release" display="d-block" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
