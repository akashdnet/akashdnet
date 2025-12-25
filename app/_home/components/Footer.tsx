import { data } from "@/utils/data";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-12 px-[5%]">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 grid-cols-2 md:justify-between justify-center items-center gap-8 pb-8 border-b border-white/10">
                    <Link href="#" className="font-dancing text-3xl col-span-3 md:col-span-1">{data.nameFull}</Link>

                    <div className="flex flex-col flex-wrap justify-center gap-2 ">
                        <h1 className=" font-bold">QuicK Links</h1>
                        {data.navLinks.map(link => (
                            <Link key={link.name} href={link.href} className="text-white/70 hover:text-white transition-colors capitalize">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col flex-wrap justify-center gap-2">
                        <h1 className=" font-bold">Social Links</h1>
                        {data.socialLinks.map(social => (
                            <Link key={social.name} href={social.href} target={social.target} rel={social.rel}
                                className="flex items-center gap-2">
                                <span
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300">
                                    <i className={social.className}></i>
                                </span>
                                <span className="text-xs text-white/70 hover:text-white transition-colors capitalize">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-center text-white/50 text-sm pt-8">
                    <p>&copy; {new Date().getFullYear()} {data.nameFull}. All Rights Reserved. Made with ❤️ in Bangladesh</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
