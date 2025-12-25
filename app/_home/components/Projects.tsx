"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
    id: string;
    title: string;
    image: string;
    tags: string[];
    description: string;
    shortDescription: string;
    liveLink: string;
    githubLinkFrontend: string;
    githubLinkBackend: string;
    challenges: string[];
    futureImprovements: string[];
}

const ProjectCard = ({ project, onOpenModal }: { project: Project, onOpenModal: (project: Project) => void }) => (
    <div
        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-3 hover:shadow-xl transition-all duration-300">
        <div className="relative h-52 overflow-hidden">
            <Image src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={500}
                height={500}
            />
            <div
                className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={project.liveLink}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <i className="fas fa-external-link-alt"></i>
                </Link>
                <Link href={project.githubLinkFrontend}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <i className="fab fa-github"></i>
                </Link>
            </div>
        </div>
        <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag}
                        className="px-3 py-1 gradient-bg-light text-primary text-sm rounded-full font-medium">{tag}</span>
                ))}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-500 text-sm mb-4">{project.shortDescription}</p>
            <button onClick={() => onOpenModal(project)}
                className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all duration-300">
                View Details <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
);

const Projects = () => {
    const projects: Project[] = [
        {
            id: 'project1',
            title: 'Digital Wallet',
            image: 'https://images.unsplash.com/photo-1651340791611-615c3e30ba58',
            tags: [`typescript`, 'React', 'Expressjs', 'MongoDB'],
            shortDescription: 'A full-featured digital wallet application with dashboard.',
            description: 'Digital wallet is a comprehensive e-commerce solution that enables users to make payments online. It features a modern, responsive design, secure payment processing, and a powerful admin dashboard for managing products, orders, and customers.',
            liveLink: 'https://digital-wallet-ten.vercel.app/',
            githubLinkFrontend: 'https://github.com/akashdnet/digital-wallet-frontend.git',
            githubLinkBackend: 'https://github.com/akashdnet/digital-wallet-management.git',
            challenges: [
                'Implementing secure payment gateway integration',
                'Optimizing image loading for better performance',
            ],
            futureImprovements: [
                'Add AI-powered product recommendations',
                'Implement multi-vendor marketplace feature',
                'Add mobile app using React Native or Flutter'
            ]
        },
        {
            id: 'project2',
            title: 'Agency Landing Page',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
            tags: ['Nextjs', 'Tailwind'],
            shortDescription: 'A modern agency landing page with a clean and professional design.',
            description: 'Agency landing page is a modern agency landing page with a clean and professional design.',
            liveLink: 'https://agency-landing-page.vercel.app/',
            githubLinkFrontend: 'https://github.com/akashdnet/flowex.git',
            githubLinkBackend: '#',
            challenges: [
                'Loading speed optimization',
                'Responsive design for all screen sizes',
                'Integration with multiple social media platforms'
            ],
            futureImprovements: [
                'Add time tracking feature for tasks',
                'Implement calendar view for deadlines',
                'Integration with Slack and Google Calendar'
            ]
        },
        {
            id: 'project3',
            title: 'Travel Agency',
            image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&h=400&fit=crop',
            tags: ['TypeScript', 'Next.js', 'Chart.js', 'Expressjs', 'MongoDB'],
            shortDescription: 'A travel agency website with a modern and responsive design.',
            description: 'A travel agency website with a modern and responsive design.',
            liveLink: '#',
            githubLinkFrontend: '#',
            githubLinkBackend: '#',
            challenges: [
                'Creating responsive charts for all screen sizes',
                'Building flexible chart configuration system',
                'Searching and matching the destination'
            ],
            futureImprovements: [
                'Add ML-based predictive analytics',
                'Implement collaborative features',
                'Automated report scheduling'
            ]
        }
    ];

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 px-[5%] bg-white">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2
                    className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:gradient-bg after:rounded">
                    My Projects
                </h2>
                <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
                    Showcasing some of my recent work
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} onOpenModal={setSelectedProject} />
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 z-2000 flex items-center justify-center p-4 overflow-y-auto"
                    onClick={() => setSelectedProject(null)}>
                    <div
                        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-[modalIn_0.3s_ease]"
                        onClick={e => e.stopPropagation()}>
                        <button onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:rotate-90 transition-transform duration-300 z-10">
                            &times;
                        </button>
                        <Image src={selectedProject.image} alt={selectedProject.title}
                            className="w-full h-72 object-cover" width={1000} height={1000} />
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">{selectedProject.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 gradient-bg text-white text-sm rounded-full font-medium">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <i className="fas fa-info-circle text-primary"></i> Description
                            </h3>
                            <p className="text-slate-500 mb-4">{selectedProject.description}</p>

                            <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <i className="fas fa-exclamation-triangle text-primary"></i> Challenges Faced
                            </h3>
                            <ul className="text-slate-500 space-y-1 mb-4">
                                {selectedProject.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">•</span> {challenge}</li>
                                ))}
                            </ul>

                            <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <i className="fas fa-lightbulb text-primary"></i> Future Improvements
                            </h3>
                            <ul className="text-slate-500 space-y-1 mb-6">
                                {selectedProject.futureImprovements.map((improvement, i) => (
                                    <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">•</span> {improvement}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4">
                                <Link href={selectedProject.liveLink}
                                    className="gradient-bg text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </Link>
                                <Link href={selectedProject.githubLinkFrontend}
                                    className="bg-slate-800 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                    <i className="fab fa-github"></i> GitHub (Frontend)
                                </Link>
                                <Link href={selectedProject.githubLinkBackend}
                                    className="bg-slate-800 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                    <i className="fab fa-github"></i> GitHub (Backend)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
