import React from "react";
import heroImage from "../../assets/hero.png";
import appImg from "../../assets/appstore.png";
import playstoreImg from "../../assets/playstore.png";

const Banner = () => {
  return (
    <div className=" bg-[#D2D2D2] mx-auto">
      <div className="flex flex-col items-center justify-center text-center p-12">
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
            onClick={() =>
              window.open("https://github.com/MousumiTani?tab=repositories")
            }
          >
            <img src={playstoreImg} alt="" className="h-8 w-8" />
            Google Play
          </button>
          <button
            className="btn bg-[#D2D2D2] border-gray-400 hover:bg-gray-500"
            onClick={() =>
              window.open("https://github.com/MousumiTani?tab=repositories")
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
      <div></div>
    </div>
  );
};

export default Banner;
