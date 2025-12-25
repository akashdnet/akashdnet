
const SkillItem = ({ label, percentage }: { label: string, percentage: string }) => (
    <div>
        <div className="flex justify-between mb-2">
            <span className="font-medium text-slate-700">{label}</span>
            <span className="text-slate-500 text-sm">{percentage}</span>
        </div>
        <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="skill-bar h-full gradient-bg rounded-full relative" style={{ width: percentage }}></div>
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-[5%] bg-linear-to-br from-slate-100 to-slate-200">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2
                    className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:gradient-bg after:rounded">
                    My Skills
                </h2>
                <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
                    Technologies and tools I work with
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend Skills */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-3 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white">
                            <i className="fas fa-laptop-code"></i>
                        </span>
                        Frontend
                    </h3>
                    <div className="space-y-5">
                        <SkillItem label="HTML5" percentage="95%" />
                        <SkillItem label="CSS3 / SASS" percentage="90%" />
                        <SkillItem label="JavaScript" percentage="88%" />
                        <SkillItem label="React.js" percentage="85%" />
                        <SkillItem label="Tailwind CSS" percentage="92%" />
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-3 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white">
                            <i className="fas fa-server"></i>
                        </span>
                        Backend
                    </h3>
                    <div className="space-y-5">
                        <SkillItem label="Node.js" percentage="82%" />
                        <SkillItem label="Express.js" percentage="80%" />
                        <SkillItem label="MongoDB" percentage="78%" />
                        <SkillItem label="MySQL" percentage="75%" />
                        <SkillItem label="REST APIs" percentage="85%" />
                    </div>
                </div>

                {/* Tools */}
                <div
                    className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-3 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white">
                            <i className="fas fa-tools"></i>
                        </span>
                        Tools
                    </h3>
                    <div className="space-y-5">
                        <SkillItem label="Git & GitHub" percentage="90%" />
                        <SkillItem label="VS Code" percentage="95%" />
                        <SkillItem label="Figma" percentage="70%" />
                        <SkillItem label="Postman" percentage="85%" />
                        <SkillItem label="Docker" percentage="65%" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
