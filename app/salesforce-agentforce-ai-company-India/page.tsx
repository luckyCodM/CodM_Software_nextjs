import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/salesforce-agentforce-ai-company-India/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce Agentforce AI Company India | Salesforce Agentforce AI",
  description:"Boost productivity and customer engagement with CodM Software’s Salesforce Agentforce AI solutions that automate workflows and accelerate business growth.",
  keywords: "Salesforce Agentforce ai, Salesforce Agentforce AI Company India , Salesforce Agentforce AI Solutions, Salesforce Agentforce AI Services, Salesforce Agentforce AI Development, Salesforce Agentforce AI Integration, Salesforce Agentforce AI Consulting, Salesforce Agentforce AI Implementation, Salesforce Agentforce AI Support, Salesforce Agentforce AI Customization, Salesforce Agentforce AI Automation, Salesforce Agentforce AI Analytics, Salesforce Agentforce AI Chatbots, Salesforce Agentforce AI Machine Learning, Salesforce Agentforce AI Natural Language Processing",
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce Agentforce Ai Company India" group_page="" current_page="Agentforce & AI" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
