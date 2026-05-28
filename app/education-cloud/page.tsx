import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/education-cloud/Section1";
import Section2 from "@/components/sections/education-cloud/Section2";
import Section3 from "@/components/sections/about-us/Section3";

export const metadata = {
  title: "Salesforce Education Cloud Consulting Services | CodM Software",
  description: "Transform education operations with CodM Software Salesforce Education Cloud consulting for admissions, engagement, student success and connected campus experiences.",
  keywords: "Salesforce Education Cloud consulting, Education Cloud services, education CRM",
  alternates: {
    canonical: "/education-cloud",
  },
};

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Education Cloud" group_page="" current_page="Education Cloud" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
