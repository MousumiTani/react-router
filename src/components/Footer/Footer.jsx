import React from "react";

import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-gray-300 p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">SelfRise</h2>
          <p className="text-sm ">
            Explore self-improvement apps that help <br /> you rise higher every
            day.
          </p>
        </div>

        <section>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white ">
                Terms of Service
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white ">
                Help Center
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-sm mb-3">Get notified about top trending apps.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-2 rounded-l bg-gray-800 border border-gray-700 text-sm focus:outline-none"
            />
            <button className="bg-indigo-600 hover:bg-gray-300 px-3 rounded-r text-white text-sm ">
              Join
            </button>
          </div>
        </section>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-6">
        <p className="text-sm">
          © 2025 SelfRise. Made for People to Grow with Positivity.
        </p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebook className="cursor-pointer" />
          <FaLinkedin className=" cursor-pointer" />
          <FaGithub className=" cursor-pointer" />
          <FaTwitter className=" cursor-pointer" />
        </div>
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-gray-300 text-white p-3 rounded-full shadow-lg animate-bounce transition"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
