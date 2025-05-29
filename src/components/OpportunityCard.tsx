import { Opportunity } from "@/types/vy-type";
import Link from "next/link";
import { BadgeCheck, MapPin, Leaf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function OpportunityCard({ data }: { data: Opportunity }) {
  return (
    <Link href={`/opportunity/${data.id}`} className="block max-w-xs">
      <div className="rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition bg-white">
        {/* Image and Badge */}
        <div className="relative">
          <img
            src={data.image || "https://picsum.photos/400/300"}
            alt={data.title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </span>
          <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
            <BadgeCheck size={16} className="text-yellow-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Location */}
          <p className="text-xs text-custom-yellow-500  flex items-center gap-1 font-medium">
            <MapPin size={14} className="text-yellow-500" />
            {data.state}
          </p>

          {/* Title */}
          <h3 className="font-sansation mt-1 text-custom-black-600">
            Volunteer in <span className="font-semibold">{data.city}</span>
            <p className="font-semibold">as {data.title}</p>
          </h3>

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <p className="text-xs text-custom-grey-500 mt-2 line-clamp-1 overflow-hidden">
              {data.tags.join(" • ")}
            </p>
          )}

          {/* Duration & Accommodation */}
          <p className="text-xs text-gray-500 mt-1">{data.duration}</p>

          {/* Footer */}
          <div className="mt-3 flex items-center text-xs text-shadow-custom-black gap-1">
            <span className="bg-custom-yellow flex px-2 py-0.5 rounded-full ">
              <span>
                <img src="hand.svg" alt="" />
              </span>
              <span>{data.category || "Sustainability"}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
