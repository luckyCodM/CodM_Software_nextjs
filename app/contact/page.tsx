import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/contact/Section1";
import Section2 from "@/components/sections/contact/Section2";

export const metadata = {
  title: "Contact CodM Software | Salesforce Consulting Services",
  description: "Contact CodM Software for Salesforce consulting, CRM implementation, integrations, support and business technology services.",
  keywords: "contact CodM Software, Salesforce consulting contact, CRM implementation support",
  alternates: {
    canonical: "/contact",
  },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Contact Us" group_page="" current_page="Contact Us" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
