"use client";

import { data } from "@/utils/data";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav id="navbar"
                className={`fixed top-0 left-0 right-0 z-50 px-[5%] transition-all duration-300 flex justify-between items-center ${scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md" : "bg-white/95 backdrop-blur-md py-4 shadow-sm"}`}>
                <Link href="#" className="font-dancing logo text-3xl text-primary font-bold">{data.nameFull}</Link>

                <ul id="navLinks" className="hidden md:flex gap-8 list-none">
                    {data.navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}
                                className="text-slate-800 font-medium hover:text-primary capitalize relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:gradient-bg after:transition-all after:duration-300 hover:after:w-full">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div id="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer relative z-50">
                    <span className={`w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div id="mobileMenu"
                className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {data.navLinks.map((link) => (
                    <Link key={link.name} href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-medium text-slate-800 hover:text-primary capitalize">
                        {link.name}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;
