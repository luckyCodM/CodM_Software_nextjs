import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/financial-service/Section1";
import Section2 from "@/components/sections/financial-service/section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
    title: "Salesforce Financial Services Cloud Guide | CodM Software",
    description:
        "Learn how Salesforce Financial Services Cloud helps banks, wealth firms, and financial teams improve client relationships, compliance, automation, and service.",
    keywords:
        "Salesforce Financial Services Cloud, FSC Salesforce, financial services CRM, banking CRM, wealth management CRM",
    alternates: {
        canonical: "/financial-service",
    },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Financial Services Cloud" group_page="Blog" current_page="Financial Services Cloud" display="d-block" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
