'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Container } from './Layout';

const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    const scrollToSection = useCallback((sectionId: string, syncHash = false) => {
        const element = document.getElementById(sectionId);

        if (!element) {
            return;
        }

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        if (syncHash && window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, '', `#${sectionId}`);
        }
    }, []);

    useEffect(() => {
        // Check initial dark mode from documentElement
        const updateDarkMode = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        };

        updateDarkMode();

        // Create observer to watch for class changes
        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Listen to scroll for active section tracking
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Track active section
            const sections = navItems.map((item) => item.href.substring(1));
            let current = sections[0] ?? 'hero';
            const markerLine = Math.max(window.innerHeight * 0.3, 140);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (!element) {
                    continue;
                }

                const rect = element.getBoundingClientRect();
                if (rect.top <= markerLine && rect.bottom > markerLine) {
                    current = section;
                    break;
                }
            }

            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (isAtBottom && sections.length > 0) {
                current = sections[sections.length - 1];
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        const handleHashNavigation = () => {
            const sectionId = window.location.hash.replace('#', '');
            if (!sectionId) {
                return;
            }

            // Ensure layout is settled before scrolling to hash target on mobile browsers.
            requestAnimationFrame(() => {
                scrollToSection(sectionId, false);
                setActiveSection(sectionId);
            });
        };

        handleHashNavigation();
        window.addEventListener('hashchange', handleHashNavigation);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', handleHashNavigation);
            observer.disconnect();
        };
    }, [scrollToSection]);

    const toggleDarkMode = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleNavClick = (href: string) => {
        const sectionId = href.replace('#', '');
        setActiveSection(sectionId);

        if (window.innerWidth < 768 && isOpen) {
            setIsOpen(false);
            window.setTimeout(() => {
                scrollToSection(sectionId, true);
            }, 220);
            return;
        }

        scrollToSection(sectionId, true);
        setIsOpen(false);
    };

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? isDark
                        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700'
                        : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
                    : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container className="py-3 sm:py-4 flex items-center justify-between gap-3">
                {/* Logo */}
                <motion.div
                    className="text-lg sm:text-2xl font-bold gradient-text leading-tight"
                    whileHover={{ scale: 1.05 }}
                >
                    Dandi Portofolio
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(event) => {
                                event.preventDefault();
                                handleNavClick(item.href);
                            }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 relative group ${activeSection === item.href.substring(1)
                                    ? 'text-primary'
                                    : 'text-foreground hover:text-primary'
                                }`}
                        >
                            {item.name}
                            {activeSection === item.href.substring(1) && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    initial={false}
                                    transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Right side controls */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Dark mode toggle */}
                    <motion.button
                        onClick={toggleDarkMode}
                        className="p-2.5 sm:p-2 rounded-lg bg-blue-100 dark:bg-slate-700 hover:bg-blue-200 dark:hover:bg-slate-600 text-foreground transition-colors"
                        whileHover={{ rotate: 20 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </motion.button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 rounded-lg hover:bg-blue-100 dark:hover:bg-slate-800 transition-colors"
                        aria-expanded={isOpen}
                        aria-label="Toggle mobile menu"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900 backdrop-blur-md border-b border-blue-100 dark:border-slate-700 shadow-lg"
            >
                <Container className="py-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(event) => {
                                event.preventDefault();
                                handleNavClick(item.href);
                            }}
                            className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeSection === item.href.substring(1)
                                    ? 'text-primary bg-primary/15 dark:bg-primary/10'
                                    : 'text-foreground hover:bg-slate-200 dark:hover:bg-slate-800'
                                }`}
                            whileTap={{ x: 4 }}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </Container>
            </motion.div>
        </motion.nav>
    );
}