import { fetchData } from "@/data/dataFetch";
import PhotoCard from "./PhotoCard";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Suspense } from "react";
import PhotoCardSkeleton from "./PhotoCardSkeleton";

const TopGenerationContent = async () => {
  const photos = await fetchData();
  const topPhotos = photos.slice(0, 5); // Get the top 5 photos
  return (
    <div>
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-5">
        Top Generation
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button>
          <Link href="/all-photos">View All Photos</Link>
        </Button>
      </div>
    </div>
  );
};

const TopGeneration = async () => {

  return (
    <Suspense fallback={<PhotoCardSkeleton/>}>
      <TopGenerationContent />
    </Suspense>
  )
}


export default TopGeneration;
