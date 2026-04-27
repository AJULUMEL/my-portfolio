'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiEye, FiArrowRight } from 'react-icons/fi';
import { Container, Section } from '@/components/Layout';
import Button from '@/components/Button';
import TypingEffect from '@/components/TypingEffect';

export default function HeroSection() {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Section id="hero" className="min-h-[100svh] flex items-center justify-center pt-24 sm:pt-28">
            <Container className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        <div className="space-y-5 sm:space-y-6">
                            {/* Greeting */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-block"
                            >
                                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-primary/20 dark:to-accent/20 text-primary font-semibold text-xs sm:text-sm border border-blue-200 dark:border-primary/30 backdrop-blur-sm">
                                    Welcome to my portfolio 👋
                                </span>
                            </motion.div>

                            {/* Main Title */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight drop-shadow-lg">
                                    Hi, I&apos;m{' '}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Dandi Azrul Syahputra</span>
                                </h1>
                            </motion.div>

                            {/* Role with typing effect */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-xl sm:text-3xl lg:text-4xl font-bold text-primary"
                            >
                                <TypingEffect
                                    words={['Junior Software Engineer']}
                                    speed={80}
                                    delayBetweenWords={2500}
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                Passionate about modern web development, with a strong interest in building practical projects and continuously growing as a software engineer.
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4"
                            >
                                <Button
                                    size="lg"
                                    onClick={scrollToProjects}
                                    icon={<FiArrowRight />}
                                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                >
                                    View Projects
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    icon={<FiEye />}
                                    onClick={() =>
                                        window.open('/CV_Dandi-Azrul-Syahputra.pdf', '_blank')
                                    }
                                    className="w-full sm:w-auto border-slate-600 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                >
                                    View CV
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Mobile Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex lg:hidden items-center justify-center"
                    >
                        <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden">
                            <Image
                                src="/screenshots/foto-profile/fotoprofile.jpeg"
                                alt="Profile Picture"
                                width={256}
                                height={256}
                                sizes="(min-width: 640px) 16rem, 13rem"
                                className="w-full h-full rounded-3xl object-cover"
                                style={{ objectPosition: '40% 12%', scale: '1.38' }}
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right side - Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="w-80 h-80 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden"
                        >
                            <Image
                                src="/screenshots/foto-profile/fotoprofile.jpeg"
                                alt="Profile Picture"
                                width={320}
                                height={320}
                                sizes="(min-width: 1024px) 20rem, 80vw"
                                className="w-full h-full rounded-3xl object-cover"
                                style={{ objectPosition: '40% 12%', scale: '1.38' }}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden sm:flex justify-center mt-14 lg:mt-20"
                >
                    <div className="flex flex-col items-center gap-2 text-muted">
                        <p className="text-sm">Scroll to explore</p>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
