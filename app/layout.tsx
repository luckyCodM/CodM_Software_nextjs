import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/fontawesome.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/slick-slider.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/mobile-menu.css";
import "/public/assets/css/main.css";
import "/public/assets/css/about-us-journey-section.css";
import "/public/assets/css/certifications-section.css";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL("https://codmsoftware.com"),
    title: "Salesforce Consulting Company in India | CodM Software",
    description:
        "CodM Software is a Salesforce consulting company helping businesses with CRM implementation, Financial Services Cloud, Agentforce AI, Education Cloud, Customer 360, integrations, and staff augmentation.",
    keywords:
        "salesforce consulting company in india, salesforce consulting services, salesforce implementation, salesforce financial services cloud, salesforce agentforce ai, salesforce education cloud, salesforce customer 360, salesforce integrations, salesforce staff augmentation",
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
                {children}
            </body>
        </html>
    );
}