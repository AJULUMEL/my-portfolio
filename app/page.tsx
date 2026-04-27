'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/Hero';
import SkillsSection from '@/sections/Skills';
import ProjectsSection from '@/sections/Projects';
import ContactSection from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}