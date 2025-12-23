interface ShimmerSectionProps {
  count?: number;
  type?: 'card' | 'hero' | 'text';
}

const ShimmerSection = ({ count = 4, type = 'card' }: ShimmerSectionProps) => {
  if (type === 'hero') {
    return (
      <div className="animate-pulse">
        <div className="shimmer h-[500px] w-full rounded-none" />
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="animate-pulse space-y-4">
        <div className="shimmer h-8 w-1/3 rounded mx-auto" />
        <div className="shimmer h-4 w-1/2 rounded mx-auto" />
        <div className="shimmer h-1 w-20 rounded mx-auto" />
        <div className="space-y-3 mt-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="shimmer h-4 w-full rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-6 animate-pulse">
          <div className="shimmer h-12 w-12 rounded-full mb-4" />
          <div className="shimmer h-6 w-3/4 rounded mb-3" />
          <div className="shimmer h-4 w-full rounded mb-2" />
          <div className="shimmer h-4 w-5/6 rounded" />
        </div>
      ))}
    </div>
  );
};

export default ShimmerSection;
