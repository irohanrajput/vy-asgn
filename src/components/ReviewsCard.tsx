import { Reviews } from "@/types/vy-type";
import { reviews_data } from "@/dummy_data/opportunities";

const ReviewsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-x-12 max-w-6xl text-sm font-poppins">
      {reviews_data.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-center p-2  m-2  rounded text-custom-green "
        >
          <div className="flex items-center mt-2">
            {Array.from({ length: item.rating }, (_, i) => (
              <img
                key={i}
                src="/star.svg"
                alt="star"
                className="w-2 h-2 mr-1"
              />
            ))}
            <div className=" text-gray-500 text-sm">
              {new Date(item.date).toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
          <p className="font-light line-clamp-4">{item.review}</p>
          <div className="flex py-2 pr-2">
            <span className="flex items-center">
              <img className="pr-2" src="/Group.svg" alt="" />
            </span>
            <div className="flex flex-col font-light font-poppins">
              <span>{item.name}</span>
              <span>Member Since {item.member_since}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsCard;
