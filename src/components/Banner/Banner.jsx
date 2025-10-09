import React from "react";
import heroImage from "../../assets/hero.png";
import appImg from "../../assets/appstore.png";
import playstoreImg from "../../assets/playstore.png";

const Banner = () => {
  return (
    <div className=" bg-[#D2D2D2] mx-auto pt-12">
      <div className="flex flex-col items-center justify-center text-center px-12 ">
        <h1 className="text-5xl font-bold">
          We Build <br />
          <span className="text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="m-10 text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <section className="flex gap-6 mb-10">
          <button
            className="btn bg-[#D2D2D2] border-gray-400 hover:bg-gray-500"
            onClick={() => window.open("https://www.apple.com/app-store/")}
          >
            <img src={playstoreImg} alt="" className="h-8 w-8" />
            Google Play
          </button>
          <button
            className="btn bg-[#D2D2D2] border-gray-400 hover:bg-gray-500"
            onClick={() =>
              window.open("https://play.google.com/store/games?hl=en")
            }
          >
            {" "}
            <img src={appImg} alt="" className="h-8 w-8" />
            App Store
          </button>
        </section>
        <img
          src={heroImage}
          alt=""
          className="sm:h-80  md:h-96 lg:h-[500px]
    object-cover"
        />
      </div>

      <section className="bg-gradient-to-r from-[#9F62F2]/100 via-[#9F62F2]/90 to-[#9F62F2]/100 py-4 lg:py-12 items-center text-center text-white">
        <h1 className="text-center font-bold text-4xl mb-8">
          Trusted by Millions, Built for You
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="stats  w-full ">
            <div className="stat-desc text-lg">Total Downloads</div>
            <div className="stat-value  font-bold">29.6M</div>
            <div className="stat-desc text-lg">21% More Than Last Month</div>
          </div>

          <div className="stats  w-full">
            <div className="stat-desc text-lg">Total Reviews</div>
            <div className="stat-value  font-bold">906K</div>
            <div className="stat-desc text-lg">46% More Than Last Month</div>
          </div>

          <div className="stats  w-full">
            <div className="stat-desc text-lg">Active Apps</div>
            <div className="stat-value  font-bold">132+</div>
            <div className="stat-desc text-lg">31 More Will Launch</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
