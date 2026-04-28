import { fetchCategoryData } from "@/data/dataFetch";
import { Button } from "@heroui/react";
import Link from "next/link";

const CategoryPage = async () => {
  const category = await fetchCategoryData();
  console.log("Category data:", category);
  return (
    <div>
      {category?.map((cat) => (
        <Button key={cat.id} variant="outline" className="mr-2 mb-2" size="sm">
          <Link href={`?category=${cat.name.toLowerCase()}`}>{cat.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default CategoryPage;
