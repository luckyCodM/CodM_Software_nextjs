import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/salesforce-agentforce-ai-company-India/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce Agentforce Ai| Salesforce Agentforce Ai Company India",
  description:"Leverage AI-powered Salesforce Agentforce AI with Codm Software to boost productivity, automate workflows, and enhance customer experiences.",
  keywords: "Salesforce Agentforce ai",
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Agentforce & AI" group_page="" current_page="Agentforce & AI" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
