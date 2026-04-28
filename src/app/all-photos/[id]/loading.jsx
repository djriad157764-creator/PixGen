import { Skeleton } from "@heroui/react";

const loading = () => {
  return (
    <div className="lg:flex justify-content items-start gap-6 mb-10">
      {/* Image Skeleton */}
      <div className="relative aspect-video w-full max-w-xl">
        <Skeleton className="rounded-2xl w-full h-full" />
        <div className="absolute top-2 left-2">
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="lg:w-1/3 space-y-4">
        {/* Title */}
        <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-3/4 rounded-lg" />

        {/* Prompt */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-11/12 rounded-lg" />
          <Skeleton className="h-4 w-2/3 rounded-lg" />
        </div>

        {/* Category */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-20 rounded-lg" />
          <Skeleton className="h-5 w-32 rounded-lg" />
        </div>

        {/* Likes */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-20 rounded-lg" />
          <Skeleton className="h-5 w-10 rounded-lg" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>

        {/* Downloads */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-24 rounded-lg" />
          <Skeleton className="h-5 w-10 rounded-lg" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>

        {/* Resolution */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-24 rounded-lg" />
          <Skeleton className="h-5 w-32 rounded-lg" />
        </div>

        {/* Model */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-20 rounded-lg" />
          <Skeleton className="h-5 w-40 rounded-lg" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default loading;
