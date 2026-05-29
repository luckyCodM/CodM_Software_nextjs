"use client";
import { DataBg } from "@/util/data-bg";
import { useOffcanvasMenu } from "@/util/offcanvasMenu";
import { useAccordion } from "@/util/useAccordion";
import { useCircleText } from "@/util/useCircleText";
import { useOdometerCounter } from "@/util/useOdometerCounter";
import { useParallaxEffect } from "@/util/useParallaxEffect";
import useTextAnimation2 from "@/util/useTextAnimation2";
import useTextAnimation3 from "@/util/useTextAnimation3";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { FC } from "react";
import { useCallback, useEffect, useState } from "react";
import ScrollToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";
import "wowjs/css/libs/animate.css";
import { useRevealAnimation } from "@/util/useRevealAnimation";


// Define the props interface (same as above)
interface BootstrapComponentsProps {}

// Type the dynamic import
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
    () => import("@/util/useBootstrap"),
    { ssr: false } // Disable SSR since this is client-side only
) as FC<BootstrapComponentsProps>;

interface LayoutProps {
    headerStyle?: number;
    mainMenuStyle?: string;
    footerStyle?: number;
    children?: React.ReactNode;
    bodyName?: string;
}

export default function Layout({ headerStyle, mainMenuStyle, footerStyle, children, bodyName }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMobileMenu = useCallback((): void => {
        setMobileMenu((previousValue) => !previousValue);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-active", isMobileMenu);

        return () => {
            document.body.classList.remove("mobile-menu-active");
        };
    }, [isMobileMenu]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
            });

            let ticking = false;
            const handleScroll = (): void => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        setScroll((previousValue) => {
                            const scrollCheck = window.scrollY > 100;
                            return scrollCheck === previousValue ? previousValue : scrollCheck;
                        });
                        ticking = false;
                    });
                    ticking = true;
                }
            };

            document.addEventListener("scroll", handleScroll, { passive: true });
            handleScroll();

            return () => {
                document.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    DataBg();
    useTextAnimation2();
    useTextAnimation3();
    useOffcanvasMenu();
    useAccordion();
    useCircleText();
    useOdometerCounter();
    useParallaxEffect();
    useRevealAnimation();
    return (
        <div className={`body ${bodyName ? bodyName : ""}`}>
            <div id="top" />
            <BootstrapComponents />
            {!headerStyle && <Header1 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 1 ? <Header1 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}


            <main>{children}</main>

            {!footerStyle && <Footer1 />}
            {footerStyle == 1 ? <Footer1 /> : null}

            <Link href="/salesforce-ridge-partner" className="floating-partner-badge" aria-label="Open Salesforce Ridge Partner page">
                <img
                    src="/assets/img/logo/srplogo.png"
                    alt="Salesforce Ridge Partner logo"
                    width="96"
                    height="96"
                    decoding="async"
                    loading="lazy"
                />
            </Link>

            <ScrollToTop />
        </div>
    );
}
