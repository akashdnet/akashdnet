
const EducationItem = ({ year, title, institution, description }: { year: string, title: string, institution: string, description: string }) => (
    <div className="relative pl-8 pb-10 timeline-dot">
        <div
            className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-primary hover:translate-x-3 transition-transform duration-300">
            <span
                className="inline-block px-4 py-1.5 gradient-bg-light text-primary rounded-full text-sm font-semibold mb-3">
                {year}
            </span>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
                {title}
            </h3>
            <h4 className="text-primary font-medium mb-2">
                {institution}
            </h4>
            <p className="text-slate-500">
                {description}
            </p>
        </div>
    </div>
);

const Education = () => {
    return (
        <section id="education" className="py-24 px-[5%] bg-white">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2
                    className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:gradient-bg after:rounded">
                    Education
                </h2>
                <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
                    My academic journey and qualifications
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="relative pl-8 timeline-line">
                    <EducationItem
                        year="2027"
                        title="Bachelor of Science in Civil Engineering"
                        institution="Northern University Bangladesh"
                        description=""
                    />
                    <EducationItem
                        year="2022"
                        title="Diploma in Civil Engineering"
                        institution="Vision Polytechnic Institute"
                        description=""
                    />
                    <EducationItem
                        year="2021"
                        title="Computer Operation Certification"
                        institution="Technical Teaching Center ● TTC"
                        description=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;
