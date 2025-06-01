import { Reviews } from "@/types/vy-type";
import { reviews_data } from "@/dummy_data/opportunities";

const ReviewsCard = () => {
  return (
    <div className="w-full max-w-6xl">
      <div className="hidden md:grid grid-cols-3 gap-x-12 text-sm font-poppins">
        {reviews_data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center p-2 m-2 rounded text-custom-green"
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
              <div className="text-gray-500 text-sm">
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

      {/* Mobile version  */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4 px-4" style={{ width: 'max-content' }}>
          {reviews_data.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 flex flex-col justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 text-custom-green"
            >
              <div className="flex items-center mb-3">
                {Array.from({ length: item.rating }, (_, i) => (
                  <img
                    key={i}
                    src="/star.svg"
                    alt="star"
                    className="w-3 h-3 mr-1"
                  />
                ))}
                <div className="text-gray-500 text-sm ml-2">
                  {new Date(item.date).toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
              <p className="font-light line-clamp-4 mb-4 text-sm leading-relaxed">
                {item.review}
              </p>
              <div className="flex items-center">
                <span className="flex items-center mr-3">
                  <img className="w-8 h-8" src="/Group.svg" alt="" />
                </span>
                <div className="flex flex-col font-light font-poppins">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-gray-600">
                    Member Since {item.member_since}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;