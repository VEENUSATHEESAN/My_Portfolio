import React, { useEffect } from "react";
import SocialLinks from "../components/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Share2 } from "lucide-react"; // Uncomment if using

const ConnectWithMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set animation duration
      once: true, // Ensures animations run only once
    });
  }, []);

  return (
    <div
      className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
      id="Contact"
    >
      <div className="container px-[1%] grid grid-cols-1">
        <div
          data-aos="fade-right"
          className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#84e877] to-[#f75583]">
                Connect With Me
              </h2>
              <p className="text-gray-400">
                Have something to discuss? Let's connect and chat.
              </p>
            </div>
            {/* Uncomment if you want to use the Share icon */}
            {/* <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" /> */}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
