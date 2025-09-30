import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/agentforce-&-ai/Section1";
import Section2 from "@/components/sections/service-details/Section2";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Agentforce & AI" group_page="" current_page="Agentforce & AI" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
