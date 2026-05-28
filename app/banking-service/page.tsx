import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/banking-service/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce Banking Solutions | CodM Software",
  description: "CodM Software helps banks and financial teams use Salesforce banking solutions to improve trust, automate workflows and deliver smarter customer experiences.",
  keywords: "Salesforce banking solutions, banking CRM, Salesforce banking service",
  alternates: {
    canonical: "/banking-service",
  },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Salesforce banking" group_page="" current_page="Banking Service" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
