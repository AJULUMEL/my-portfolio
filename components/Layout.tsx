import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 py-14 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mb-12 text-center sm:mb-16 lg:mb-20 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          {subtitle}
        </p>
      )}
    </div>
  );
};