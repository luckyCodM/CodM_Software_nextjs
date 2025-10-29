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
import type { FC } from "react";
import { useEffect, useState } from "react";
import ScrollToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";
import "wowjs/css/libs/animate.css";
import { useRevealAnimation } from "@/util/useRevealAnimation";

// Define the props interface (same as above)
interface BootstrapComponentsProps { }

// Type the dynamic import
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
    () => import("@/util/useBootstrap"),
    { ssr: false } // Disable SSR since this is client-side only
) as FC<BootstrapComponentsProps>;

interface LayoutProps {
    headerStyle?: Number;
    mainMenuStyle?: string;
    footerStyle?: Number;
    children?: React.ReactNode;
    bodyName?: string;
}

export default function Layout({ headerStyle, mainMenuStyle, footerStyle, children, bodyName }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
            });

            const handleScroll = (): void => {
                const scrollCheck: boolean = window.scrollY > 100;
                if (scrollCheck !== scroll) {
                    setScroll(scrollCheck);
                }
            };

            document.addEventListener("scroll", handleScroll);

            return () => {
                document.removeEventListener("scroll", handleScroll);
            };
        }
    }, [scroll]);

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

            <img
                src="/assets/img/logo/srplogo.png" 
                alt="Salesforce Ridge Partner"
                className="floating-partner-badge"
            />

            <ScrollToTop />
        </div>
    );
}
