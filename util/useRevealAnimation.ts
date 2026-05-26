"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export const useRevealAnimation = (): void => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const revealContainers = document.querySelectorAll(".reveal");
        const timelines: gsap.core.Timeline[] = [];

        revealContainers.forEach((container) => {
            const image = container.querySelector("img");
            if (!image) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none",
                },
            });

            tl.set(container, { autoAlpha: 1 })
                .from(container, {
                    xPercent: -100,
                    duration: 1.5,
                    ease: "power2.out",
                })
                .from(
                    image,
                    {
                        xPercent: 100,
                        scale: 1.3,
                        duration: 1.5,
                        delay: -1.5,
                        ease: "power2.out",
                    },
                    "<"
                );

            timelines.push(tl);
        });

        // Cleanup
        return () => {
            timelines.forEach((timeline) => timeline.kill());
        };
    }, []);
};
