const ShimmerCard = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 animate-pulse">
      <div className="shimmer h-12 w-12 rounded-full mb-4" />
      <div className="shimmer h-6 w-3/4 rounded mb-3" />
      <div className="shimmer h-4 w-full rounded mb-2" />
      <div className="shimmer h-4 w-5/6 rounded" />
    </div>
  );
};

export default ShimmerCard;
