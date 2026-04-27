'use client';

import { motion } from 'framer-motion';
import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiGithub,
    FiLinkedin,
    FiInstagram,
} from 'react-icons/fi';
import { Container, Section, SectionHeader } from '@/components/Layout';
import Card from '@/components/Card';
import AnimationWrapper from '@/components/AnimationWrapper';

const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/AJULUMEL' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dandi-azrul-syahputra-049ab5293/' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/d_.azrul?igsh=eWcwdzIza3ZuMTJ6&utm_source=qr' },
];

const contactInfo = [
    {
        icon: FiMail,
        label: 'Email',
        value: 'dandiazrul9@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dandiazrul9@gmail.com',
    },
    {
        icon: FiPhone,
        label: 'WhatsApp',
        value: '+62 859 2341 9636',
        href: 'https://wa.me/6285923419636',
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: 'Malang, Indonesia',
        href: '#',
    },
];

export default function ContactSection() {
    return (
        <Section id="contact">
            <Container>
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Feel free to reach out for opportunities or collaborations"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <AnimationWrapper key={info.label} variant="fadeInUp" delay={index * 0.1}>
                                <Card hover className="text-center p-5 sm:p-6 bg-blue-100 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-blue-200 dark:border-slate-700/30 hover:border-blue-300 dark:hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-primary/20">
                                    <motion.div
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-primary/20"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary drop-shadow-lg" />
                                    </motion.div>
                                    <h3 className="text-base sm:text-lg font-bold mb-2 tracking-wide text-slate-900 dark:text-white">{info.label}</h3>
                                    {info.href === '#' ? (
                                        <p className="text-slate-700 dark:text-primary text-sm sm:text-base font-medium">{info.value}</p>
                                    ) : (
                                        <a
                                            href={info.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block max-w-full break-all text-slate-700 dark:text-primary text-sm sm:text-base hover:text-primary dark:hover:text-accent transition-all duration-300 font-medium"
                                        >
                                            {info.value}
                                        </a>
                                    )}
                                </Card>
                            </AnimationWrapper>
                        );
                    })}
                </div>

                {/* Social Links */}
                <AnimationWrapper variant="fadeInUp" delay={0.4}>
                    <div className="mt-10 sm:mt-16 text-center">
                        <p className="text-muted text-sm sm:text-base mb-5 sm:mb-6">Or connect with me on social media</p>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                                        whileHover={{ scale: 1.15, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </AnimationWrapper>
            </Container>
        </Section>
    );
}