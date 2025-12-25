"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button id="scrollTop"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:-translate-y-2 transition-all duration-300 z-50 ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTop;
