import { ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
}

const Card = ({ children, className = '', hover = true, padding = 'md', style }: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={cn(
        'bg-card rounded-lg border border-border',
        paddingClasses[padding],
        hover && 'transition-shadow duration-200 hover:shadow-gov-md',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
