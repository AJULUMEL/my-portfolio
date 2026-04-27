import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
      secondary: 'bg-indigo-100 text-indigo-700 dark:bg-slate-700 dark:text-slate-100',
      accent: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200',
      success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200',
      warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200',
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;