"use client";

import { useState } from "react";
import { Search, SearchIcon, MapPin, Briefcase, Calendar } from "lucide-react";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    alert("this is the search button functionality");
  };

  return (
    <div className="w-full px-4 lg:px-0">
      <div className="flex justify-center">
        <div className="hidden lg:flex flex-row justify-center shadow-sm mx-auto mt-2 p-2 py-1 bg-white rounded-full max-w-3xl items-center gap-2 w-full ">
          <span className="flex flex-col px-2 py-2 text-left flex-1">
            <span className="text-xs text-gray-700 font-medium">Where?</span>
            <input
              type="text"
              placeholder="Mcleodganj, Himachal Pradesh"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm text-gray-800 focus:outline-none bg-transparent"
            />
          </span>

          <span className="text-gray-300">|</span>

          <span className="flex flex-col px-2 py-2 text-left flex-1">
            <span className="text-xs text-gray-700 font-medium">What?</span>
            <input
              type="text"
              placeholder="Content Creator"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="text-sm text-gray-800 focus:outline-none bg-transparent"
            />
          </span>

          <span className="text-gray-300">|</span>

          <span className="flex flex-col px-2 py-2 text-left flex-1">
            <span className="text-xs text-gray-700 font-medium">When?</span>
            <input
              type="text"
              placeholder="24 Sep 2024 - 12 Oct 2024"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm text-gray-800 focus:outline-none bg-transparent"
            />
          </span>

          <button
            onClick={handleSearch}
            className="p-3 bg-custom-black-500 text-white rounded-full text-sm hover:bg-custom-black-600 transition"
          >
            <SearchIcon size={18} className="inline-block" />
          </button>
        </div>

        <div className="lg:hidden w-full max-w-md mx-auto mt-2">
          {!isExpanded ? (
            <div
              onClick={() => setIsExpanded(true)}
              className="flex items-center text-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:cursor-pointer"
            >
              <Search />
              <span className="text-md font-bold text-custom-black-600">
                Start your search here
              </span>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <MapPin size={18} className="text-gray-400" />
                <div className="flex-1">
                  <label className="text-xs text-gray-600 font-medium block mb-1">
                    Where?
                  </label>
                  <input
                    type="text"
                    placeholder="Search location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="text-sm text-gray-800 focus:outline-none bg-transparent w-full"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <Briefcase size={18} className="text-gray-400" />
                <div className="flex-1">
                  <label className="text-xs text-gray-600 font-medium block mb-1">
                    What?
                  </label>
                  <input
                    type="text"
                    placeholder="Enter role or skill..."
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="text-sm text-gray-800 focus:outline-none bg-transparent w-full"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <Calendar size={18} className="text-gray-400" />
                <div className="flex-1">
                  <label className="text-xs text-gray-600 font-medium block mb-1">
                    When?
                  </label>
                  <input
                    type="text"
                    placeholder="Select dates..."
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="text-sm text-gray-800 focus:outline-none bg-transparent w-full"
                  />
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="w-full p-4 bg-custom-black-500 text-white rounded-xl text-sm font-medium hover:bg-custom-black-600 transition flex items-center justify-center gap-2"
              >
                <SearchIcon size={18} />
                Search Opportunities
              </button>

              <button
                onClick={() => setIsExpanded(false)}
                className="w-full text-xs text-gray-500 underline mt-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
