import { ReactNode } from 'react';

interface SmoothCarouselProps {
  children: ReactNode;
  speed?: number;
}

const SmoothCarousel = ({ children, speed = 25 }: SmoothCarouselProps) => {
  return (
    <div className="overflow-hidden">
      <div 
        className="smooth-carousel gap-4 sm:gap-6"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
          {children}
        </div>
        <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SmoothCarousel;