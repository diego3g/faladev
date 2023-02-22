import { Star, StarHalf } from "lucide-react";

type ExtensionStarsProps = {
  rating: number;
};

export function ExtensionStars({ rating }: ExtensionStarsProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {stars.map((_, index) => (
        <GetStar
          key={index}
          type={
            rating - index > 0.9
              ? "Full"
              : rating - index > 0.1
              ? "Half"
              : "Empty"
          }
        />
      ))}
    </>
  );
}

type GetStarProps = {
  type: "Full" | "Half" | "Empty";
};

function GetStar({ type }: GetStarProps) {
  switch (type) {
    case "Full":
      return <Star fill="#ea9a97" color="#ea9a97" size={20} />;
    case "Half":
      return (
        <Star color="#ea9a97" size={20}>
          <StarHalf fill="#ea9a97" color="#ea9a97" />
        </Star>
      );
    case "Empty":
      return <Star color="#ea9a97" size={20} />;
    default:
      return <></>;
  }
}
