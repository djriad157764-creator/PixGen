// app/all-photos/loading.js
import { Card, Skeleton } from "@heroui/react";

const loading = () => {
  // Skeleton cards array
  const skeletonCards = Array(10).fill(null);

  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-5">
        <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-48 rounded-lg" />
      </div>

      {/* Categories Skeleton */}
      <div className="mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {[...Array(9)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-24 rounded-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Photos Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skeletonCards.map((_, index) => (
          <Card key={index} className="w-full overflow-hidden" radius="lg">
            {/* Image Skeleton */}
            <div className="relative aspect-square w-full">
              <Skeleton className="rounded-none w-full h-full" />
            </div>

            {/* Content Skeleton */}
            <div className="p-3 space-y-3">
              {/* Title Skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-2/3 rounded-lg" />
              </div>

              {/* Stats Skeleton */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-8 rounded" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-8 rounded" />
                </div>
              </div>

              {/* Button Skeleton */}
              <Skeleton className="h-9 w-full rounded-lg" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default loading;
