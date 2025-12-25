import { useEffect, useRef, ReactNode } from 'react';

interface InfiniteCarouselProps {
  children: ReactNode;
  speed?: number;
}

const InfiniteCarousel = ({ children, speed = 30 }: InfiniteCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone children for seamless loop
    const scrollContent = scrollContainer.querySelector('.carousel-content');
    if (scrollContent && !scrollContainer.querySelector('.carousel-content')) {
      const clone = scrollContent.cloneNode(true) as HTMLElement;
      clone.classList.add('carousel-content');
      scrollContainer.appendChild(clone);
    }
  }, []);

  return (
    <section className='max-w-7xl m-auto'>
    <div 
      ref={scrollRef}
      className="overflow-hidden"
    >
      <div 
        className="carousel-track"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="carousel-content flex gap-6 pr-6">
          {children}
        </div>
      </div>
    </div>
    </section>
  );
};

export default InfiniteCarousel;
