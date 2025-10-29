import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="/">
                    Home 
                </Link>         
            </li>
            <li>
                <Link href="/about-us">Company</Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="#" className="main1">
                    Service <i className="fa-solid fa-angle-down" />
                </Link>
                <ul>
                    <li>
                        <Link href="/financial-services-cloud">Financial Services Cloud</Link>
                    </li>
                    <li>
                        <Link href="/agentforce-&-ai">Agentforce & AI</Link>
                    </li>
                    <li>
                        <Link href="/education-cloud">Education Cloud</Link>
                    </li>
                    <li>
                       <Link href="/customer_360_degree">Salesforce Customer 360</Link>
                    </li>
                    <li>
                        <Link href="/Industry-cloud">Industries Services</Link>
                    </li>
                    <li>
                        <Link href="/banking_service">Banking Services</Link>
                    </li>
                    <li>
                        <Link href="/omnistudio-cloud-service">OmniStudio Cloud Service</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="/field-history-tracking" className="main1">
                    Product 
                </Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="/blog" className="main1">
                    Blog 
                </Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link className="main1" href="/contact">
                    Contact Us 
                </Link>

            </li>
        </ul>
    );
}
