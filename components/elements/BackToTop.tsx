"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let animationFrame: number | null = null;

        const handleScroll = () => {
            if (animationFrame !== null) return;

            animationFrame = window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const percent = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
                const progressValue = percent * 307.919;

                setProgress(progressValue);
                setIsVisible(scrollTop > 100);
                animationFrame = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (animationFrame !== null) {
                window.cancelAnimationFrame(animationFrame);
            }
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`progress-wrap ${isVisible ? "active-progress opacity-1" : "opacity-0"}`} onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        transition: "stroke-dashoffset 300ms linear",
                        strokeDasharray: "307.919px",
                        strokeDashoffset: `${307.919 - Math.round(progress)}px`,
                    }}
                />
            </svg>
        </div>
        
    );
}
