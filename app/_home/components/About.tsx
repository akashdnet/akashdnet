import { data } from "@/utils/data";

const About = () => {
    return (
        <section id="about" className="py-24 px-[5%] bg-white">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2
                    className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:gradient-bg after:rounded">
                    About Me
                </h2>
                <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
                    Get to know me better - my journey, passion, and what drives me
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* About Image */}
                <div className="relative about-image-border max-w-md mx-auto lg:mx-0">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop"
                        alt="Working" className="w-full rounded-2xl shadow-2xl" />
                </div>

                {/* About Content */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                        A Dedicated <span className="text-primary">Full Stack Developer</span>
                    </h3>

                    <p className="text-slate-500 mb-4 text-justify">
                        My programming journey began in 2019 when I wrote my first "Hello World" in Python. That simple line
                        of code sparked a passion that has grown into a fulfilling career. Since then, I've been on an
                        incredible journey of learning, building, and growing as a developer.
                    </p>

                    <p className="text-slate-500 mb-4 text-justify">
                        I specialize in building responsive, user-centric web applications using modern technologies like typescript, nextjs, expressjs, PostgreSql and mongodb. What I love most about web development is the ability to create
                        something from scratch and see it come to life in the browser.
                    </p>

                    <p className="text-slate-500 mb-6 text-justify">
                        When I'm not coding, you'll find me on the football field, experimenting with digital painting, or
                        exploring new hiking trails. I believe that a well-rounded life makes for a better developer!
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 gradient-bg-light rounded-xl flex items-center justify-center text-primary">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <span className="text-sm text-slate-400">Name</span>
                                <h4 className="font-semibold text-slate-800  text-lg">{data.nameFull}</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 gradient-bg-light rounded-xl flex items-center justify-center text-primary">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <span className="text-sm text-slate-400">Location</span>
                                <h4 className="font-semibold text-slate-800">{data.location}</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 gradient-bg-light rounded-xl flex items-center justify-center text-primary">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <span className="text-sm text-slate-400">Email</span>
                                <h4 className="font-semibold text-slate-800">{data.email}</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 gradient-bg-light rounded-xl flex items-center justify-center text-primary">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <span className="text-sm text-slate-400">Phone</span>
                                <h4 className="font-semibold text-slate-800">{data.phone}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Hobbies */}
                    <div className="flex flex-wrap gap-3">
                        {['Football', 'Digital Painting', 'Hiking', 'Reading', 'Music'].map((hobby, index) => {
                            const icons = ['futbol', 'paint-brush', 'hiking', 'book', 'music'];
                            return (
                                <span key={hobby}
                                    className="px-4 py-2 gradient-bg-light rounded-full text-primary text-sm font-medium inline-flex items-center gap-2">
                                    <i className={`fas fa-${icons[index]}`}></i> {hobby}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
