"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenu() {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <ul>
            <li>
                <Link href="/" className={pathname === "/" ? "active" : ""}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about-us" className={isActive("/about-us") ? "active" : ""}>Company</Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="#" className="main1 d-flex align-items-center">
                    Services <i className="fa-solid fa-angle-down " />
                </Link>
                <ul>
                    <li>
                        <Link href="/salesforce-financial-services-cloud-consultant">Financial Services Cloud</Link>
                    </li>
                    <li>
                        <Link href="/salesforce-agentforce-ai-company-india">Agentforce & AI</Link>
                    </li>
                    <li>
                        <Link href="/education-cloud">Education Cloud</Link>
                    </li>
                    <li>
                        <Link href="/customer-360-degree">Salesforce Customer 360</Link>
                    </li>
                    <li>
                        <Link href="/industry-cloud">Industries Services</Link>
                    </li>
                    <li>
                        <Link href="/banking-service">Banking Services</Link>
                    </li>
                    <li>
                        <Link href="/omnistudio-cloud-service">OmniStudio Cloud Service</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="/salesforce-field-history-tracking" className={`main1 ${isActive("/salesforce-field-history-tracking") ? "active" : ""}`}>
                    Products
                </Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="/blogs" className={`main1 ${isActive("/blogs") ? "active" : ""}`}>
                    Blogs
                </Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="/case-studies" className={`main1 ${isActive("/case-studies") ? "active" : ""}`}>
                    Case Studies
                </Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link className={`main1 ${isActive("/contact") ? "active" : ""}`} href="/contact">
                    Contact Us
                </Link>
            </li>
        </ul>
    );
}
