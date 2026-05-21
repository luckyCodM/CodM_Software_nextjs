/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/customer_360_degree",
                destination: "/customer-360-degree",
                permanent: true,
            },
            {
                source: "/banking_service",
                destination: "/banking-service",
                permanent: true,
            },
            {
                source: "/Industry-cloud",
                destination: "/industry-cloud",
                permanent: true,
            },
            {
                source: "/salesforce-agentforce-ai-company-India",
                destination: "/salesforce-agentforce-ai-company-india",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
