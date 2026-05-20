import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/blog/Section1";
import Section2 from "@/components/sections/about-us/Section3";

export const metadata = {
    title: "Salesforce Implementation & Consulting Blogs | CodM Software",
    description:
        "Read CodM Software blogs on Salesforce implementation, consulting, CRM automation, Agentforce AI, OmniStudio, Financial Services Cloud, and business growth.",
    keywords:
        "Salesforce blogs, Salesforce implementation blogs, Salesforce consulting insights, CRM automation, Agentforce AI, OmniStudio, Financial Services Cloud",
    alternates: {
        canonical: "/blog",
    },
};
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Our Blogs" group_page="" current_page="Our Blogs" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
