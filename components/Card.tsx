import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = true, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 p-6 transition-all duration-300 ${
          hover
            ? 'hover:shadow-lg dark:hover:shadow-xl hover:border-blue-300 dark:hover:border-primary-light hover:scale-105 hover:shadow-blue-100/50 dark:hover:shadow-primary/20'
            : 'shadow-sm dark:shadow-md'
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;