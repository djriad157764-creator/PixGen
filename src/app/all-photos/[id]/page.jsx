import { fetchData } from "@/data/dataFetch";
import { ArrowDownToSquare, FaceRobot, HeartCrack } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const photo = await fetchData(id);
  const exists = photo.find((p) => p.id == id);
  console.log(exists);

  return (
    <div className="lg:flex justify-content items-start gap-6 mb-10">
      <div className="relative aspect-video w-full max-w-xl">
        <Image
          src={exists?.imageUrl}
          alt={exists?.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-2xl"
        />
        <Chip className="absolute top-2 left-2">{exists?.category}</Chip>
      </div>
      <div className="lg:w-1/3">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          {exists?.title}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl mb-4">
          {exists?.prompt}
        </p>
        <p className="text-gray-700 font-bold">
          Category: <span className="font-semibold">{exists?.category}</span>
        </p>
        <p className="text-gray-700 flex items-center gap-2 font-bold">
          Likes: <span className="font-semibold">{exists?.likes}</span>{" "}
          <HeartCrack />
        </p>

        <p className="text-gray-700 flex items-center gap-2 font-bold">
          Downloads: <span className="font-semibold">{exists?.downloads}</span>{" "}
          <ArrowDownToSquare />
        </p>
        <p className="font-bold text-gray-700">
          Resolution :{" "}
          <span className="font-semibold">{exists?.resolution}</span>
        </p>
        <p className="font-bold flex items-center gap-2 text-gray-700">
          Model : <span className="font-semibold">{exists?.model} </span>
          <FaceRobot />
        </p>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
