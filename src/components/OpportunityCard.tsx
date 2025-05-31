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
    <Link
      href={`/opportunity/${data.id}`}
      className="block w-full max-w-xs mx-auto lg:mx-0"
    >
      <div className="rounded-xl h-auto lg:h-[374px] w-full lg:w-[280px] overflow-hidden shadow-sm hover:shadow-md transition bg-white">
        <div className="relative">
          <img
            src={data.images?.[0] || "https://picsum.photos/400/300"}
            alt={data.title}
            className="w-full h-40 lg:h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </span>
          <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:shadow-md transition-shadow">
            <BadgeCheck size={14} className="text-yellow-500" />
          </button>
        </div>

        <div className="p-3 lg:p-3">
          <p className="text-xs text-custom-yellow-500 flex items-center gap-1 font-medium">
            <MapPin size={12} className="text-yellow-500" />
            {data.state}
          </p>

          <h3 className="font-sansation mt-1 text-sm lg:text-base text-custom-black-600">
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
            <span className="bg-yellow-50 flex items-center px-2 py-0.5 rounded-full gap-1">
              <span>
                <img src="hand.svg" alt="" className="w-3 h-3" />
              </span>
              <span className="hidden text-xs">
                {data.category || "Sustainability"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
