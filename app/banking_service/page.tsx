import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/banking_service/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce banking | Salesforce banking solution",
  description: "CodM Software empowers banks with Salesforce banking solutions to enhance customer trust, automate processes and drive smarter financial experiences.",
  keywords: "Salesforce banking | Salesforce banking solution",
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
