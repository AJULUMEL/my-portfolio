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

const skills = [
  {
    category: 'Frontend Web',
    icon: FiCode,
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    icon: FiServer,
    skills: ['Java', 'Laravel', 'PHP', 'MySQL', 'REST API'],
  },
  {
    category: 'Mobile & Integrations',
    icon: FiTool,
    skills: ['Flutter', 'Dart', 'WhatsApp API'],
  },
  {
    category: 'Soft Skills',
    icon: FiActivity,
    skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Learning'],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-gradient-to-b from-blue-50/30 to-indigo-50/20 dark:from-slate-900/30 dark:to-slate-900/50">
      <Container>
        <SectionHeader
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <Card hover className="text-center h-full p-4 sm:p-6 bg-blue-100 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-blue-200 dark:border-slate-700/30 hover:border-blue-300 dark:hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-primary/20">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary drop-shadow-lg" />
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wide">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.skills.map((skill) => (
                      <Badge key={skill} variant="primary" className="text-xs py-1 px-2.5 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent transition-all duration-300 backdrop-blur-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
