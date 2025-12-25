
const ExperienceCard = ({ icon, title, company, period, description, achievements }: { icon: string, title: string, company: string, period: string, description: string, achievements: string[] }) => (
    <div
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 hover:-translate-y-2 transition-transform duration-300">
        <div
            className="w-16 h-16 md:w-20 md:h-20 gradient-bg rounded-2xl flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <i className={`fas fa-${icon} text-3xl text-white`}></i>
        </div>
        <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-800 mb-1">{title}</h3>
            <h4 className="text-lg text-primary font-medium mb-2">{company}</h4>
            <span className="inline-flex items-center gap-2 text-sm text-slate-400 mb-4">
                <i className="far fa-calendar-alt"></i> {period}
            </span>
            <p className="text-slate-500 mb-4">
                {description}
            </p>
            <ul className="space-y-2 text-slate-500">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="text-accent font-bold">✓</span>
                        {achievement}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-[5%] bg-linear-to-br from-slate-100 to-slate-200">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2
                    className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:gradient-bg after:rounded">
                    Experience
                </h2>
                <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
                    My professional journey so far
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                <ExperienceCard
                    icon="building"
                    title="Web Designer"
                    company="Flowex Agency"
                    period="February 2025 - May 2025"
                    description="Working as an intern. Building a website for a client."
                    // achievements={[]}
                    achievements={[
                        "Designed several websites from scratch with Elementor pro",
                        "Maintained the website for a client",
                        "Backup, upload and deploy the website"
                    ]}
                />

            </div>
        </section>
    );
};

export default Experience;
