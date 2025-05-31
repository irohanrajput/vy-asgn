"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState("opportunities");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-4 lg:px-6 py-2  sticky top-0 z-50 shadow-">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl">
            <img src="logo.svg" alt="Logo" className="h-8 lg:h-auto" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              className={`text-md ${
                clicked === "opportunities"
                  ? "font-bold text-custom-black-400 border-b-2 border-yellow-400"
                  : "text-custom-black-400"
              } hover:cursor-pointer`}
              onClick={() => setClicked("opportunities")}
            >
              Opportunities
            </Button>

            <Button
              variant="ghost"
              className={`text-md ${
                clicked === "experiences"
                  ? "font-bold text-custom-black-400 border-b-2 border-yellow-400"
                  : "text-custom-black-400"
              } hover:cursor-pointer`}
              onClick={() => setClicked("experiences")}
            >
              Experiences
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline">
            Become a Host
          </Link>

          <Link
            href="#"
            className="p-2 flex items-center border rounded-full hover:bg-gray-100 border-gray-400 transition"
          >
            <img src="lines.svg" className="mx-1" alt="Menu Icon" />
            <img src="Group.svg" className="mx-1" alt="Profile Icon" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <img src="lines.svg" alt="" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top-1 duration-200">
          <div className="flex flex-col space-y-2 mt-4">
            <Button
              variant="ghost"
              className={`text-left justify-start ${
                clicked === "opportunities"
                  ? "font-bold text-custom-black-400 bg-yellow-50 border-l-4 border-yellow-400"
                  : "text-custom-black-400"
              } hover:cursor-pointer`}
              onClick={() => {
                setClicked("opportunities");
                setMobileMenuOpen(false);
              }}
            >
              Opportunities
            </Button>

            <Button
              variant="ghost"
              className={`text-left justify-start ${
                clicked === "experiences"
                  ? "font-bold text-custom-black-400 bg-yellow-50 border-l-4 border-yellow-400"
                  : "text-custom-black-400"
              } hover:cursor-pointer`}
              onClick={() => {
                setClicked("experiences");
                setMobileMenuOpen(false);
              }}
            >
              Experiences
            </Button>

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="#"
                className="block py-3 text-sm font-medium hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Become a Host
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
