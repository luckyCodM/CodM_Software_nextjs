import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/fontawesome.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/nice-select.css";
import "../public/assets/css/slick-slider.css";
import "../public/assets/css/aos.css";
import "../public/assets/css/mobile-menu.css";
import "../public/assets/css/main.css";
import "../public/assets/css/about-us-journey-section.css";
import "../public/assets/css/certifications-section.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL("https://codmsoftware.com"),
    title: "Salesforce Consulting Company in India | CodM Software",
    description:
        "CodM Software is a Salesforce consulting company helping businesses with CRM implementation, Financial Services Cloud, Agentforce AI, Education Cloud, Customer 360, integrations, and staff augmentation.",
    keywords:
        "salesforce consulting company in india, salesforce consulting services, salesforce implementation, salesforce financial services cloud, salesforce agentforce ai, salesforce education cloud, salesforce customer 360, salesforce integrations, salesforce staff augmentation",

    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        title: "Salesforce Consulting Company in India | CodM Software",
        description: "CodM Software helps businesses implement, customize, and scale Salesforce CRM across Financial Services Cloud, Agentforce AI, Education Cloud, Customer 360, integrations, and staff augmentation.",
        url: "https://codmsoftware.com",
        siteName: "CodM Software",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Consulting Company in India | CodM Software",
        description: "Salesforce consulting, CRM implementation, automation, AI, integrations, and staff augmentation services by CodM Software.",
        images: ["https://codmsoftware.com/og-image.jpg"],
        creator: "@CodMSoftware",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodM Software",
  url: "https://codmsoftware.com",
  logo: "https://codmsoftware.com/assets/img/logo/header-logo.png",
  sameAs: [
    "https://www.linkedin.com/company/codm-software/"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9871717425",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="body">
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-V0YX51T6W4"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-V0YX51T6W4');
                    `}
                </Script>
                <Script
                    id="organization-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
