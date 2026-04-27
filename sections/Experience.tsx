'use client';

import { Container, Section, SectionHeader } from '@/components/Layout';
import Card from '@/components/Card';
import AnimationWrapper from '@/components/AnimationWrapper';

const experiences = [
  {
    id: 1,
    title: 'Portfolio Website Project',
    company: 'Personal Project',
    period: '2024',
    description: 'Built a modern, responsive portfolio website with dark mode, animations, and smooth scrolling using Next.js and Tailwind CSS.',
    highlights: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    title: 'Web Development Courses',
    company: 'Self-Learning',
    period: '2023 - 2024',
    description: 'Completed multiple online courses on modern web development, focusing on React, JavaScript, and CSS.',
    highlights: ['React', 'JavaScript', 'CSS', 'Web Development'],
  },
  {
    id: 3,
    title: 'Campus Lab Projects',
    company: 'Politeknik Negeri Malang',
    period: '2023 - Present',
    description: 'Participated in various programming projects and labs at campus, building foundational skills in web and system development.',
    highlights: ['HTML/CSS', 'JavaScript', 'Database', 'Problem Solving'],
  },
];

const education = [
  {
    id: 1,
    title: 'Diploma in Information Technology',
    institution: 'Politeknik Negeri Malang',
    year: '2023 - Present',
    description: 'Studying Information Technology with focus on web development, databases, and software engineering.',
  },
  {
    id: 2,
    title: 'Web Development Fundamentals',
    institution: 'Online Courses',
    year: '2023',
    description: 'Completed comprehensive courses in HTML, CSS, JavaScript, React, and modern web technologies.',
  },
];

export default function ExperienceSection() {
  return (
        <Section id="experience" className="bg-gradient-to-b from-blue-50/20 to-indigo-50/10 dark:from-slate-900/30 dark:to-black/30 backdrop-blur-md">
      <Container>
        <SectionHeader
          title="Projects & Education"
          subtitle="My learning journey and projects as a student at Politeknik Negeri Malang"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-primary text-primary dark:text-white flex items-center justify-center text-sm font-bold">
                💼
              </span>
              Projects & Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <AnimationWrapper key={exp.id} variant="fadeInLeft" delay={index * 0.15}>
                  <Card hover className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded-full bg-white dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-blue-100 dark:border-slate-700/30 hover:border-blue-300 dark:hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-primary/20">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-lg tracking-wide">{exp.title}</h4>
                        <p className="text-primary text-sm font-semibold drop-shadow-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs text-white dark:text-white bg-gradient-to-r from-primary/60 to-accent/60 px-3 py-1 rounded-full border border-primary/30">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-2 py-1 rounded border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-accent text-accent dark:text-white flex items-center justify-center text-sm font-bold">
                🎓
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <AnimationWrapper key={edu.id} variant="fadeInRight" delay={index * 0.15}>
                  <Card hover className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-accent before:to-primary before:rounded-full bg-white dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-blue-100 dark:border-slate-700/30 hover:border-blue-300 dark:hover:border-accent/50 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-accent/20">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-lg tracking-wide">{edu.title}</h4>
                        <p className="text-accent text-sm font-semibold drop-shadow-sm">{edu.institution}</p>
                      </div>
                      <span className="text-xs text-white dark:text-white bg-gradient-to-r from-accent/60 to-primary/60 px-3 py-1 rounded-full border border-accent/30">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">{edu.description}</p>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
