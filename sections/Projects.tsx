'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    FiExternalLink,
    FiGithub,
    FiImage,
} from 'react-icons/fi';
import { Container, Section, SectionHeader } from '@/components/Layout';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import AnimationWrapper from '@/components/AnimationWrapper';
import ScreenshotModal from '@/components/ScreenshotModal';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    featured?: boolean;
    screenshots: string[];
    isMobile?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Smart Green Energy',
        description:
            'A web app to manage research center activities with an admin dashboard, access control, and report export.',
        image: '/screenshots/smart-green-energy/video.mp4',
        tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
        github: 'https://github.com/User-425/SmartGreenEnergy',
        featured: true,
        screenshots: [
            '/screenshots/smart-green-energy/1.png',
            '/screenshots/smart-green-energy/2.png',
            '/screenshots/smart-green-energy/3.png',
            '/screenshots/smart-green-energy/4.png',
            '/screenshots/smart-green-energy/5.png',
        ],
    },
    {
        id: 2,
        title: 'Sistem Informasi Magang',
        description:
            'An internship management web app with multi-role login, activity tracking, notifications, and reporting.',
        image: '/screenshots/sistem-magang/video.mp4',
        tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/ahmadrmdhann/Sistem_Informasi_Magang',
        featured: true,
        screenshots: [
            '/screenshots/sistem-magang/1.png',
            '/screenshots/sistem-magang/2.png',
            '/screenshots/sistem-magang/3.png',
            '/screenshots/sistem-magang/4.png',
            '/screenshots/sistem-magang/5.png',
            '/screenshots/sistem-magang/6.png',
            '/screenshots/sistem-magang/7.png',
            '/screenshots/sistem-magang/8.png',
        ],
    },
    {
        id: 3,
        title: 'PBL Jawara — Mobile App',
        description:
            'A mobile app for digital administration and data management, from input and validation to dashboard monitoring.',
        image: '/screenshots/jawara-mobile/1.png',
        tags: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
        github: 'https://github.com/HanifFaishalH/pbl_jawara',
        isMobile: true,
        screenshots: [
            '/screenshots/jawara-mobile/1.png',
            '/screenshots/jawara-mobile/2.png',
            '/screenshots/jawara-mobile/3.png',
            '/screenshots/jawara-mobile/4.png',
            '/screenshots/jawara-mobile/5.png',
            '/screenshots/jawara-mobile/6.png',
            '/screenshots/jawara-mobile/7.png',
            '/screenshots/jawara-mobile/8.png',
            '/screenshots/jawara-mobile/9.png',
            '/screenshots/jawara-mobile/10.png',
            '/screenshots/jawara-mobile/11.png',
            '/screenshots/jawara-mobile/12.png',
            '/screenshots/jawara-mobile/13.png',
            '/screenshots/jawara-mobile/14.png',
            '/screenshots/jawara-mobile/15.png',
            '/screenshots/jawara-mobile/16.png',
            '/screenshots/jawara-mobile/17.png',
        ],
    },
    {
        id: 4,
        title: 'Sistem Booking Lapangan Voli Satria',
        description:
            'A real-time volleyball court booking web app with WhatsApp confirmation and an admin dashboard.',
        image: '/screenshots/voli-booking/video.mp4',
        tags: ['React', 'Laravel', 'MySQL', 'WhatsApp API'],
        github: 'https://github.com/AJULUMEL/lapangan_voli_satria',
        screenshots: [
            '/screenshots/voli-booking/1.png',
            '/screenshots/voli-booking/2.png',
            '/screenshots/voli-booking/3.png',
            '/screenshots/voli-booking/4.png',
            '/screenshots/voli-booking/5.png',
            '/screenshots/voli-booking/6.png',
        ],
    },
];

export default function ProjectsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const openExternalLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const openModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <Section id="projects" className="bg-white/50 dark:bg-slate-900/20">
            <Container>
                <SectionHeader
                    title="My Projects"
                    subtitle="Some projects I have built and worked on"
                />

                {/* Responsive Grid Layout - Mobile on Left, Web on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] gap-6 sm:gap-8">
                    {/* Mobile App - Left Side (perlebar sedikit) */}
                    {projects
                        .filter((p) => p.isMobile)
                        .map((project, index) => (
                            <AnimationWrapper key={project.id} variant="fadeInUp" delay={index * 0.15}>
                                <Card hover className="group overflow-hidden flex flex-col h-full bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-blue-100 dark:border-slate-700/30 hover:border-blue-300 dark:hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-primary/20 p-4 sm:p-6">
                                    <div className="space-y-3 flex-1 p-0">
                                        {/* Project Image */}
                                        <div
                                            className={`w-full max-w-[17rem] sm:max-w-sm mx-auto aspect-[400/827] bg-gradient-to-br from-slate-100 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center text-6xl overflow-hidden relative cursor-pointer group p-1.5 sm:p-2 transition-all duration-300`}
                                            onClick={() => openModal(project)}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-sm"
                                                whileHover={{ scale: 1.08 }}
                                            >
                                                <FiImage className="w-10 h-10 text-slate-500 dark:text-white drop-shadow-lg" />
                                            </motion.div>
                                            {project.image.includes('/') ? (
                                                project.image.endsWith('.mp4') || project.image.endsWith('.webm') ? (
                                                    <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        className="w-full h-auto object-contain"
                                                    >
                                                        <source src={project.image} type={project.image.endsWith('.mp4') ? 'video/mp4' : 'video/webm'} />
                                                    </video>
                                                ) : (
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        sizes="(min-width: 1024px) 22rem, 90vw"
                                                        loading="eager"
                                                        className="w-full h-full object-contain rounded-lg bg-white/90 dark:bg-slate-900/70 group-hover:scale-[1.03] transition-transform duration-300"
                                                    />
                                                )
                                            ) : (
                                                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                                    {project.image}
                                                </span>
                                            )}
                                        </div>

                                        {/* Project Info */}
                                        <div className="px-2 sm:px-4 pt-3 sm:pt-4">
                                            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white drop-shadow-sm tracking-wide">{project.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                                        </div>

                                        {/* Tags */}
                                        <div className="px-2 sm:px-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="primary" className="w-full justify-center text-[11px] sm:text-xs py-1 px-2.5 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary to-accent transition-all duration-300 backdrop-blur-sm sm:w-auto">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2 p-4 mt-2 sm:mt-3">
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            icon={<FiExternalLink />}
                                            onClick={() => openModal(project)}
                                            className="w-full flex-1 text-sm sm:text-xs bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                        >
                                            View Project
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            icon={<FiGithub />}
                                            onClick={() => openExternalLink(project.github)}
                                            className="w-full flex-1 text-sm sm:text-xs border-slate-600 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                        >
                                            GitHub
                                        </Button>
                                    </div>
                                </Card>
                            </AnimationWrapper>
                        ))}

                    {/* Web Projects - Right Side (span 3 columns, stacked vertically) */}
                    <div className="lg:col-span-1 grid grid-cols-1 gap-8">
                        {projects
                            .filter((p) => !p.isMobile)
                            .map((project, index) => (
                                <AnimationWrapper key={project.id} variant="fadeInUp" delay={index * 0.15}>
                                    <Card hover className="group overflow-hidden flex flex-col h-full bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-blue-100 dark:border-slate-700/30 hover:border-blue-300 dark:hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-primary/20 p-4 sm:p-6">
                                        <div className="space-y-3 flex-1 p-0">
                                            {/* Project Image */}
                                            <div className="w-full overflow-hidden rounded-2xl relative cursor-pointer group">
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-sm"
                                                    whileHover={{ scale: 1.08 }}
                                                >
                                                    <FiImage className="w-10 h-10 text-slate-500 dark:text-white drop-shadow-lg" />
                                                </motion.div>
                                                {project.image.includes('/') ? (
                                                    project.image.endsWith('.mp4') || project.image.endsWith('.webm') ? (
                                                        <video
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            preload="metadata"
                                                            className="w-full h-auto object-contain"
                                                        >
                                                            <source src={project.image} type={project.image.endsWith('.mp4') ? 'video/mp4' : 'video/webm'} />
                                                        </video>
                                                    ) : (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            sizes="(min-width: 1024px) 28rem, 90vw"
                                                            loading="lazy"
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                        />
                                                    )
                                                ) : (
                                                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                                        {project.image}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Project Info */}
                                            <div className="px-2 sm:px-4 pt-3 sm:pt-4">
                                                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white drop-shadow-sm tracking-wide">{project.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                                            </div>

                                            {/* Tags */}
                                            <div className="px-2 sm:px-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="primary" className="w-full justify-center text-[11px] sm:text-xs py-1 px-2.5 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary to-accent transition-all duration-300 backdrop-blur-sm sm:w-auto">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-2 p-4 mt-2 sm:mt-3">
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                icon={<FiExternalLink />}
                                                onClick={() => openModal(project)}
                                                className="w-full flex-1 text-sm sm:text-xs bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                            >
                                                View Project
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                icon={<FiGithub />}
                                                onClick={() => openExternalLink(project.github)}
                                                className="w-full flex-1 text-sm sm:text-xs border-slate-600 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                            >
                                                GitHub
                                            </Button>
                                        </div>
                                    </Card>
                                </AnimationWrapper>
                            ))}
                    </div>
                </div>
            </Container>

            {/* Screenshot Modal */}
            {selectedProject && (
                <ScreenshotModal
                    isOpen={isModalOpen}
                    projectName={selectedProject.title}
                    screenshots={selectedProject.screenshots}
                    onClose={closeModal}
                />
            )}
        </Section>
    );
}
