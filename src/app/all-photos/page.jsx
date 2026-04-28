import CategoryPage from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import { fetchData } from "@/data/dataFetch";

const AllPhotoPage = async ({ searchParams }) => {
  const { category } = await searchParams;

    const photos = await fetchData();
    
  const filteredPhotos =
    category ?
      photos.filter(
        (photo) => photo.category.toLowerCase() === category.toLowerCase(),
      )
    : photos;
  return (
    <div >
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-5">
        All Photos
      </h2>
      <CategoryPage />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredPhotos?.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotoPage;
