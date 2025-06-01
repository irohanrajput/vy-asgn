"use client";
import { OpportunityDetailProps } from "@/types/vy-type";
import { FC, useState } from "react";
import { ArrowLeft, Share, Heart, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reviews from "./ReviewsCard";


const OpportunityDetail: FC<OpportunityDetailProps> = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!data || Object.keys(data).length === 0) {
    return <p>No data available</p>;
  }

  const images = data.images;

  const skills = data.skills;

  
  const backArrowHandler = () => {
    window.history.back();
  };
  

  return (
    <div className="min-h-screen bg-white relative font-poppins mx-auto pb-24 md:pb-20 overflow-hidden">
      <div className="md:hidden sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Share size={20} />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <Heart
                size={20}
                className={isLiked ? "fill-red-500 text-red-500" : ""}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block px-4 lg:px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button onClick={backArrowHandler} className="p-2 hover:bg-gray-100 rounded-full transition">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg lg:text-xl font-semibold text-gray-800">
              Volunteer In {data.city || "Uttarkashi"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Share size={20} />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <Heart
                size={20}
                className={isLiked ? "fill-red-500 text-red-500" : ""}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl  mx-auto px-4 lg:px-6 py-4 lg:py-6 relative">
        {/* Image Gallery */}
        <div className="mb-6   lg:mb-8 ">
          {/* Desktop Image Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              {/* Main Image */}
              <div className=" col-span-1 relative">
                <img
                  src={images[0]}
                  alt="Main"
                  className="object-cover w-full h-full rounded-xs"
                />
              </div>
              <div className="grid col-span-1 grid-cols-2 gap-2">
                {images.slice(1, 5).map((img: string, index: number) => (
                  <div
                    key={index}
                    className="relative h-48 overflow-hidden rounded-xs"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Image Carousel */}
          <div className="md:hidden">
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt="Opportunity"
                className="w-full h-full object-cover"
              />
              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mobile Title */}
            <div className="md:hidden text-center">
              <h2 className="text-lg font-semibold text-blue-600 mb-1">
                {data.state || "Himachal Pradesh"}
              </h2>
              <h1 className="text-xl font-bold text-gray-800">
                Volunteer in {data.city || "Uttarkashi"}
              </h1>
            </div>

            {/* Duration Cards */}
            <div className=" flex justify-around md:justify-start sm:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Stay At Least
                </h3>
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium">
                  {data.duration || "4 Week/s"}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Stay Up To
                </h3>
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium">
                  {"At Most 5 Week/s"}
                </div>
              </div>
            </div>

            {/* Skills Required */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Skills Required
              </h3>
              <div className="grid grid-cols-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3  gap-2">
                {skills.map((skill: string, index: number) => (
                  <div
                    key={index}
                    className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium text-center flex items-center justify-center "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile What You Offer */}
            <div className="lg:hidden">
              <h3 className="text-lg font-bold text-custom-green mb-4">
                What You Offer
              </h3>
              <div className="flex justify-center md:gap-8 gap-28">
                <div className="text-center">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center mb-2 mx-auto">
                    <img
                      src="/time.svg"
                      className="w-16 h-16"
                      alt="Picture of the author"
                    />
                  </div>
                  <p className="text-sm text-gray-600">5hrs/Day</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center mb-2 mx-auto">
                    <img
                      src="/skills.svg"
                      className="w-16 h-16"
                      alt="Picture of the author"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Your Skills</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 relative flex justify-end">
            {/* Desktop What You Offer */}
            <div className="hidden w-max lg:flex flex-col justify-center shadow-2xl rounded-xl pt-4">
              <div>
                <h3 className="text-lg mx-8 text-center font-semibold text-gray-800">
                  What You Offer
                </h3>
              </div>
              <div className="m-2">
                <div className=" bg-white rounded-full flex items-center justify-center mx-auto">
                  <img
                    src="/time.svg"
                    className="w-12 h-12"
                    alt="Picture of the author"
                  />
                </div>
                <p className="text-sm text-center text-gray-600">5hrs/Day</p>
              </div>
              <div className="m-2">
                <div className=" bg-white rounded-full flex items-center justify-center  mx-auto">
                  <img
                    src="/skills.svg"
                    className="w-10 h-10"
                    alt="Picture of the author"
                  />
                </div>
                <p className="text-sm text-center mb-2 text-gray-600">
                  Your Skills
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description Sections */}
        <div className="mt-8 space-y-8">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-custom-green">
              Description
            </h1>
            <p className="mt-2 font-sans font-light opacity-80 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className=" ">
            <h1 className="text-xl md:text-2xl font-bold text-custom-green">
              What You Get
            </h1>
            <div className="hidden md:block mt-4 w-full max-w-3xl">
              <img
                className="w-full h-auto"
                src="/whatyouget.png"
                alt="What you get"
              />
            </div>
            <div className=" md:hidden md:mt-4 w-full max-w-3xl">
              <img
                className="w-54 h-80 flex justify-center items-center mx-auto"
                src="/skill_mobile.png"
                alt="What you get"
              />
            </div>
          </div>

          <div className="border-gray-300 border-b pb-6">
            <h1 className="text-xl md:text-2xl font-bold text-custom-green">
              About Experience
            </h1>
            <div className="mt-2 space-y-3 text-sm md:text-base">
              <p className="font-light opacity-80 font-sans leading-relaxed">
                I&apos;m looking for a dedicated volunteer to join us, who can
                enhance our guest relations and support property operations.
                Ideally, this person should have a warm and welcoming demeanor,
                ensuring that every guest feels valued and at home in our serene
                setting.
              </p>
              <p className="font-light opacity-80 font-sans leading-relaxed">
                Your role will involve engaging with guests, assisting with
                check-ins, and providing them with information about the area
                and activities available. We hope you can create a positive
                atmosphere by fostering connections among guests and encouraging
                them to share their experiences.
              </p>
              <p className="font-light opacity-80 font-sans leading-relaxed">
                Additionally, your support in day-to-day operations will be
                invaluable. Whether it&apos;s helping with maintenance tasks,
                organizing events, or keeping communal spaces inviting, your
                contributions will help us maintain the property&apos;s charm
                and comfort.
              </p>
              <p className="font-light opacity-80 font-sans leading-relaxed">
                We&apos;re seeking someone who is proactive, adaptable, and
                enthusiastic about creating memorable experiences. If
                you&apos;re passionate about nature, hospitality.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="flex flex-col justify-center items-center mt-8 space-y-6 ">
          <div className="flex border-2 rounded-2xl px-4 py-2 border-gray-300 items-center gap-2 text-custom-green font-bold text-lg md:text-2xl">
            <img src="/star.svg" alt="" className="w-5 h-5 md:w-6 md:h-6" />
            4.89 • 47 reviews
          </div>
          <div className="w-full flex justify-center items-center">
            <Reviews />
          </div>
          <div>
            <button className="bg-gray-200 py-3 md:py-4 px-6 lg:px-12 font-poppins hover:cursor-pointer hover:bg-gray-300 font-bold rounded-xl text-sm md:text-base">
              Show all 32 Reviews
            </button>
          </div>
        </div>
        <div className="border-b mt-6 border-gray-300"></div>

        {/* Meet Your Host */}
        <div className="mt-8 space-y-6 md:space-y-8">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-custom-green">
              Meet Your Host
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-custom-green font-poppins">
            {/* Host Card */}
            <div className="lg:col-span-2 border border-gray-300 rounded-2xl flex flex-col sm:flex-row lg:flex items-center justify-around shadow-lg p-6 lg:p-4">
              <div className="flex flex-col text-center justify-around mb-4 sm:mb-0 lg:mb-4">
                <img
                  className="h-16 md:h-20 lg:h-24 mx-auto mb-2"
                  src="/Group.svg"
                  alt=""
                />
                <span className="text-lg md:text-xl font-poppins text-custom-green">
                  {data.owner_name || "Amit Kumar"}
                </span>
              </div>
              <div className="flex sm:flex-col gap-4 sm:gap-0 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-bold">98</span>
                  <span className="text-xs font-poppins">Reviews</span>
                  <div className="hidden sm:block w-full border-t border-gray-300 mt-2 mb-2"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-bold">4.88</span>
                  <span className="text-xs font-poppins">Rating</span>
                  <div className="hidden sm:block w-full border-t border-gray-300 mt-2 mb-2"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-bold">5</span>
                  <span className="text-xs font-poppins text-center">
                    Years of Hosting
                  </span>
                </div>
              </div>
            </div>

            {/* Host Description */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-4">
              <p className="font-poppins font-light opacity-80 text-sm md:text-base leading-relaxed">
                This profile is curated by Team Volunteer Yatra to assist hosts
                and volunteers, help in creating better experience and design
                better volunteering program. If you apply here, our team will
                get in touch and assist you for the opportunities. Apply now to
                be a part of amazing opportunities
              </p>
              <p className="font-poppins opacity-80 text-sm md:text-base leading-relaxed">
                Your role will involve engaging with guests, assisting with
                check-ins, and providing them with information about the area
                and activities available. We hope you can create a positive
                atmosphere by fostering connections among guests and encouraging
                them to share their experiences.
              </p>
              <p className="font-poppins opacity-80 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam velit non fuga aliquam iure, vero dolorum quidem
                blanditiis esse deserunt asperiores suscipit. Necessitatibus
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex my-4 justify-around gap-4 w-3xl sm:gap-4 lg:gap-6 text-xs sm:text-sm lg:text-base">
              <div className="hidden lg:flex items-center gap-1">
                <span className="text-custom-green opacity-80 font-poppins text-2xl font-bold">
                  {data.state || "Himachal Pradesh"}
                </span>
              </div>
              <div className="flex items-center gap-1 text-custom-green font-poppins text-2xl font-bold">
                <img src="/home.svg" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Hostel</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-custom-green font-poppins text-2xl font-bold">
                <Users size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="hidden sm:inline">
                  {data.maxVolunteers || "3"} People Can Volunteer Together
                </span>
                <span className="sm:hidden">
                  {data.maxVolunteers || "3"} People
                </span>
              </div>
            </div>
            <Button className="w-full sm:w-auto bg-custom-green hover:bg-teal-700 text-white text-sm sm:text-lg font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3">
              APPLY NOW
            </Button>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 shadow-lg ">
        <div className=" flex justify-center items-center px-3 py-2">
          <div className="flex items-center justify-between mb-2 ">
            <div className="flex flex-col gap-3 m-4">
              <div className="flex items-center gap-1">
                <img src="/home.svg" className="w-4 h-4" />
                <span className="text-custom-green font-poppins text-lg font-semibold">
                  Hostel
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} className="flex-shrink-0 text-custom-green" />
                <span className="text-custom-green font-poppins text-lg font-semibold">
                  {data.maxVolunteers || "3"} People can Volunteer Together
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Button className="w-full bg-custom-green hover:bg-teal-700 text-white text-base font-semibold rounded-full py-3">
              APPLY NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;
