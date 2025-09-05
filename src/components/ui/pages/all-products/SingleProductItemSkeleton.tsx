const SingleProductItemSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-3 relative animate-pulse">
      {/* Stock status skeleton */}
      <div className="bg-gray-300 w-[110px] h-[40px] rounded-l-full absolute right-0" />

      {/* Image skeleton */}
      <div className="rounded-xl w-full h-[220px] bg-gray-200" />

      {/* Content section */}
      <div className="border-t mt-3 flex items-center justify-between">
        {/* Product name skeleton */}
        <div className="h-6 bg-gray-300 rounded w-1/2" />
        {/* Category badge skeleton */}
        <div className="h-6 w-20 bg-gray-300 rounded-full mt-3" />
      </div>

      {/* Price skeleton */}
      <div className="h-6 bg-gray-300 rounded w-20 mt-2" />

      {/* Bottom section */}
      <div className="flex items-center justify-between mt-2">
        {/* Brand and model skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        {/* View Details button skeleton */}
        <div className="h-10 w-24 bg-gray-300 rounded-sm mt-2" />
      </div>
    </div>
  );
};

export default SingleProductItemSkeleton;
