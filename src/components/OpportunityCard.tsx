import { Opportunity } from "@/types/vy-type";
import Link from "next/link";
import { BadgeCheck, MapPin, Leaf } from "lucide-react";


export default function OpportunityCard({ data }: { data: Opportunity }) {
  return (
    <Link
      href={`/opportunity/${data.id}`}
      className="block w-full max-w-xs mx-auto lg:mx-0 group"
    >
      <div className="group-hover:scale-105 transform transition-transform duration-300 rounded-xl h-auto lg:h-[374px] w-full lg:w-[280px] overflow-hidden shadow-sm hover:shadow-md  bg-white relative">
        <div className="relative">
          <div className="w-full h-64 sm:h-40 lg:h-48 overflow-hidden">
            <img
              src={data.images?.[0] || "https://picsum.photos/400/300"}
              alt={data.title}
              className="w-full h-full object-cover group-hover:scale-115 transform transition-transform duration-800 "
            />
            {/* Mobile overlay text - only visible on small screens */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white sm:hidden">
              <h3 className="font-sansation text-sm font-semibold">
                Volunteer in {data.city}
                <p className="line-clamp-1">as {data.title}</p>
              </h3>
            </div>
          </div>
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </span>
          <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <BadgeCheck size={14} className="text-yellow-500" />
          </button>
        </div>

        <div className="p-3 lg:p-3">
          <p className="text-xs text-custom-yellow-500 flex items-center gap-1 font-medium">
            <MapPin size={12} className="text-yellow-500" />
            {data.state}
          </p>

          {/* Desktop title - hidden on mobile */}
          <h3 className="hidden sm:block font-sansation mt-1 text-sm lg:text-base text-custom-black-600">
            Volunteer in <span className="font-semibold">{data.city}</span>
            <p className="font-semibold line-clamp-1">as {data.title}</p>
          </h3>

          {data.tags && data.tags.length > 0 && (
            <p className="text-xs text-custom-grey-500 mt-2 line-clamp-1 overflow-hidden">
              {data.tags.join(" • ")}
            </p>
          )}

          <p className="text-xs text-gray-500 mt-1">{data.duration}</p>

          <div className="mt-3 flex items-center text-xs text-shadow-custom-black gap-1">
            <span className="bg-yellow-50 flex items-center px-2 py-0.5 rounded-full gap-1 group-hover:bg-yellow-100 transition-colors duration-300">
              <span>
                <img src="/hand.svg" alt="" className="w-3 h-3" />
              </span>
              <span className="text-xs">
                {data.category || "Sustainability"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
// This component renders a card for an opportunity with an image, title, location, tags, and other details.