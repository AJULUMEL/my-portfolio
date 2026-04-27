'use client';

import { motion } from 'framer-motion';
import {
  FiCode,
  FiServer,
  FiTool,
  FiActivity,
} from 'react-icons/fi';
import { Container, Section, SectionHeader } from '@/components/Layout';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import AnimationWrapper from '@/components/AnimationWrapper';

const skills = [
  {
    category: 'Frontend',
    icon: FiCode,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: FiServer,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'Tools & DevOps',
    icon: FiTool,
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'AWS'],
  },
  {
    category: 'Soft Skills',
    icon: FiActivity,
    skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Mentoring'],
  },
];

const certifications = [
  { name: 'React Advanced Patterns', issuer: 'Udemy', year: 2023 },
  { name: 'Full Stack Development', issuer: 'Coursera', year: 2022 },
  { name: 'JavaScript Mastery', issuer: 'Codecademy', year: 2021 },
];

export default function AboutSection() {
  return (
        <Section id="about" className="bg-gradient-to-b from-indigo-50/40 to-blue-50/30 dark:from-slate-900/30 dark:to-black/30 backdrop-blur-md">
      <Container>
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer with expertise in building modern web applications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Bio */}
          <AnimationWrapper variant="fadeInLeft" delay={0.1}>
            <Card className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/30 hover:border-primary/50 transition-all duration-300 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl hover:shadow-primary/20">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-wide drop-shadow-sm">Who I Am</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  I&apos;m a Junior Software Engineer with a strong passion for learning and continuous growth in the tech industry. I enjoy building projects and exploring new technologies.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  My goal is to create meaningful digital solutions that make a real impact. I&apos;m always eager to learn, improve my skills, and collaborate with others to build better products.
                </p>
              </div>
            </Card>
          </AnimationWrapper>

          {/* Stats */}
          <AnimationWrapper variant="fadeInUp" delay={0.2}>
            <Card className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/30 hover:border-primary/50 transition-all duration-300 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl hover:shadow-primary/20">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent drop-shadow-sm">5+</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-1 font-medium">Personal Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent drop-shadow-sm">1+</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-1 font-medium">Years Learning</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent drop-shadow-sm">100%</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-1 font-medium">Dedicated</p>
                </div>
              </div>
            </Card>
          </AnimationWrapper>

          {/* Quick Facts */}
          <AnimationWrapper variant="fadeInRight" delay={0.3}>
            <Card className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/30 hover:border-primary/50 transition-all duration-300 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl hover:shadow-primary/20">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-wide drop-shadow-sm">Quick Facts</h3>
                <div className="space-y-3 border-t border-blue-100 dark:border-slate-600/20 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-primary drop-shadow-sm">Campus</p>
                    <p className="text-slate-700 dark:text-slate-300">State Polytechnic of Malang</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary drop-shadow-sm">Role</p>
                    <p className="text-muted">Junior Programmer</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Availability</p>
                    <p className="text-muted">Open for Opportunities</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimationWrapper>
        </div>

        {/* Skills Section */}
        <AnimationWrapper variant="slideInUp" delay={0.4}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-10 text-center">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon;
                return (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card hover className="text-center">
                      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h4 className="text-xl font-bold mb-4">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {skillGroup.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimationWrapper>

        {/* Certifications */}
        <AnimationWrapper variant="slideInUp" delay={0.5}>
          <div>
            <h3 className="text-3xl font-bold mb-10 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                          ✓
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold">{cert.name}</p>
                        <p className="text-sm text-muted">{cert.issuer}</p>
                        <p className="text-xs text-primary mt-1">{cert.year}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimationWrapper>
      </Container>
    </Section>
  );
}
