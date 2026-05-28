"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});
    const pathname = usePathname();
    const previousPathname = useRef(pathname);

    useEffect(() => {
        if (previousPathname.current !== pathname && isMobileMenu) {
            handleMobileMenu();
        }
        previousPathname.current = pathname;
    }, [handleMobileMenu, isMobileMenu, pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setOpenSubMenus({});
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleToggleSubMenu = (key: string) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const isHashNav = (href: string) => href === "#";

    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}
            {/*=====Mobile header start=======*/}
            <div className={`mobile-sidebar d-block d-lg-none ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logo-m">
                    <Link href="/">
                        <img src="/assets/img/logo/header-logo.png" alt="CodM Software logo" decoding="async" />
                    </Link>
                </div>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul>
                          <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link href="/service">Services</Link>
                        </li>
                        <li>
                            <Link href="/salesforce-field-history-tracking">Products</Link>
                        </li>
                        <li>
                           <Link href="/blog">Blogs</Link>
                        </li>
                        <li>
                           <Link href="/contact">Contact Us</Link>
                        </li>
                        <li>
                           <Link href="/privacy-policy">Privacy  </Link>
                        </li>
                    </ul>
                    <div className="mobile-button">
                        <Link className="theme-btn1" href="/service">
                            Explore Now
                            <span>
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                        </Link>
                    </div>
                    <div className="single-footer-items">
                        <h3>Contact Us</h3>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="/assets/img/icons/footer-icon1.png" alt="CodM Software phone contact icon" decoding="async" loading="lazy" />
                            </div>
                            <div className="pera">
                                <Link href="tel:+91 9871717425">+91 9871717425</Link>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="/assets/img/icons/footer-icon2.png" alt="CodM Software email contact icon" decoding="async" loading="lazy" />
                            </div>
                            <div className="pera">
                                <Link href="mailto:sales@codmsoftware.com">sales@codmsoftware.com</Link>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="/assets/img/icons/footer-icon3.png" alt="CodM Software office location icon" decoding="async" loading="lazy" />
                            </div>
                            <div className="pera">
                                <Link href="https://maps.app.goo.gl/raw5PFBoNkRiFTtQA" target="_blank_Page_Map" rel="noopener noreferrer"> 
                                   RPS Infinia 12th Avenue,<br /> Near Sarai Metro Station, <br /> Sector 27C, Faridabad, <br /> Haryana - 121003
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact-infos">
                        <h3>Social Media</h3>
                        <ul className="social-icon">
                            <li>
                                <Link href="https://www.linkedin.com/company/codmsoftware/" target="_blankLinkedin" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://x.com/CodMSoftware" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/@CodMSoftware"
                                              target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-youtube" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://in.pinterest.com/codmsoftware" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-pinterest" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
