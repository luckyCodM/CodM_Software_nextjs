import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/fontawesome.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/slick-slider.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/mobile-menu.css";
import "/public/assets/css/main.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Salesforce Consulting Company| Salesforce Consulting Company India",
    description: "CodM Software is an expert Salesforce Consulting Company in India providing tailored solutions that help businesses grow and achieve digital transformation.",
    keywords:"salesforce consulting company",
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
    
}>) {
    return (
        <html lang="en">
            
            <body className="body">{children}</body>
        </html>
    );
    
}
