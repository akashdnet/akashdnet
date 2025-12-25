import { data } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "./Typewriter";

const Hero = () => {
    return (
        <section id="home"
            className="min-h-screen flex items-center px-[5%] pt-28 pb-20 bg-linear-to-br from-slate-100 to-slate-200 relative overflow-hidden hero-blob">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Hero Content */}
                <div className="text-center lg:text-left">
                    <h4
                        className="text-primary font-semibold text-lg mb-2 flex items-center justify-center lg:justify-start gap-3">
                        <span className="w-10 h-0.5 gradient-bg rounded hidden lg:block"></span>
                        Hello, I'm
                    </h4>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 gradient-text font-dancing">
                        {data.name1}
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 gradient-text font-dancing">
                        {data.name2}
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-500 mb-6 h-8">
                        <Typewriter words={['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Enthusiast']} />
                    </h2>
                    <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                        A passionate Full Stack Developer crafting beautiful, responsive, and user-friendly web
                        applications. I love turning ideas into reality through clean code and creative solutions.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                        <Link href="#"
                            className="gradient-bg text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-indigo-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300">
                            <i className="fas fa-download"></i> Download Resume
                        </Link>
                        <Link href="#contact"
                            className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                            <i className="fas fa-paper-plane"></i> Contact Me
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center lg:justify-start">
                        {data.socialLinks.map((social) => (
                            <Link key={social.name} href={social.href} target={social.target} rel={social.rel}
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-md hover:-translate-y-2 hover:bg-slate-800 hover:text-white transition-all duration-300">
                                <i className={`${social.className} text-xl`}></i>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative flex justify-center items-center order-first lg:order-last">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Animated Border */}
                        <div className="absolute -inset-5 gradient-bg animate-morph opacity-30"></div>
                        {/* Profile Image */}
                        <Image src="https://avatars.githubusercontent.com/u/79817668?v=4"
                            alt={data.name} className="w-full h-full object-cover animate-morph shadow-2xl" width={300} height={300} />
                    </div>

                    {/* Floating Cards */}
                    <div
                        className="absolute top-5 -right-4 md:right-0 lg:-right-10 bg-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce-slow">
                        <i className="fas fa-briefcase text-2xl text-primary"></i>
                        <div>
                            <h4 className="font-bold text-slate-800">Fresher</h4>
                            <p className="text-sm text-slate-500">Experience</p>
                        </div>
                    </div>

                    <div className="absolute bottom-5 -left-4 md:left-0 lg:-left-10 bg-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce-slow"
                        style={{ animationDelay: '1s' }}>
                        <i className="fas fa-code text-2xl text-primary"></i>
                        <div>
                            <h4 className="font-bold text-slate-800">5+</h4>
                            <p className="text-sm text-slate-500">Projects Done</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
