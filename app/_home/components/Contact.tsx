import { data } from "@/utils/data";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-[5%] gradient-bg">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2
                    className="text-3xl md:text-4xl font-bold text-white relative inline-block after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-white after:rounded">
                    Get In Touch
                </h2>
                <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
                    Have a project in mind? Let's work together!
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 hover:bg-white/20 hover:translate-x-3 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary text-xl">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Email</h4>
                            <Link href={`mailto:${data.email}`} className="text-white/80 hover:text-white break-all">{data.email}</Link>
                        </div>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 hover:bg-white/20 hover:translate-x-3 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary text-xl">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Phone</h4>
                            <Link href={`tel:${data.phone}`} className="text-white/80 hover:text-white">{data.phone}</Link>
                        </div>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 hover:bg-white/20 hover:translate-x-3 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary text-xl">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">WhatsApp</h4>
                            <Link href={`https://wa.me/${data.phone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer"
                                className="text-white/80 hover:text-white">{data.phone}</Link>
                        </div>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 hover:bg-white/20 hover:translate-x-3 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary text-xl">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Location</h4>
                            <p className="text-white/80">{data.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
