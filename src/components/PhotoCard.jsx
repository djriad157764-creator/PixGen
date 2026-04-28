import { ArrowDownToSquare, CircleDollar, HeartCrack } from "@gravity-ui/icons";
import { Button, Card, Chip, Link } from "@heroui/react";
import Image from "next/image";

const PhotoCard = ({ photo }) => {

  return (
    <Card className="w-full">
      <div className="relative aspect-square w-full">
        <Image
          src={photo?.imageUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo?.title}
          fill
          className="object-cover rounded-2xl"
        />
        <Chip className="absolute bottom-2 right-2">{photo?.category}</Chip>
      </div>
      <Card.Header>
        <Card.Title>{photo?.title}!</Card.Title>
        <Card.Description>{photo?.prompt}</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <HeartCrack />
            <p>{photo?.likes}</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowDownToSquare />
            <p>{photo?.downloads}</p>
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <Button variant="flat"><Link href={`/all-photos/${photo?.id}`}>View Details</Link></Button>
      </Card.Footer>
    </Card>
  );
};

export default PhotoCard;
