'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { Container } from '@/components/Layout';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        if (!element) {
            return;
        }

        const navOffset = window.innerWidth < 640 ? 88 : 104;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementTop - navOffset,
            behavior: 'smooth',
        });
    };

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/AJULUMEL', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/dandi-azrul-syahputra-049ab5293/', label: 'LinkedIn' },
        { icon: FiInstagram, href: 'https://www.instagram.com/d_.azrul?igsh=eWcwdzIza3ZuMTJ6&utm_source=qr', label: 'Instagram' },
        { icon: FiMail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dandiazrul9@gmail.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-gradient-to-b from-indigo-50/40 to-blue-50/30 dark:from-slate-900 dark:to-slate-950 border-t border-blue-100 dark:border-slate-700/30 backdrop-blur-sm text-slate-900 dark:text-white">
            <Container className="py-10 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 text-center md:text-left">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-2">Dandi - Portofolio</h3>
                        <p className="text-slate-600 dark:text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
                            Dedicated Junior Software Engineer | Passionate About Learning & Growing
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            scrollToSection(link.href.slice(1));
                                        }}
                                        className="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-3 justify-center md:justify-start">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 hover:from-primary hover:to-accent text-slate-700 dark:text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md dark:shadow-lg hover:shadow-primary/50"
                                        whileHover={{ scale: 1.15, rotate: 10 }}
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-300 dark:border-gray-800 my-8" />

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-between items-center text-slate-600 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left gap-2"
                >
                    <p>&copy; {currentYear} Dandi Azrul Syahputra. All rights reserved.</p>
                </motion.div>
            </Container>
        </footer>
    );
};

export default Footer;
