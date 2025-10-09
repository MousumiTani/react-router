import React, { useEffect, useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import { useNavigate } from "react-router";

const AppData = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error fetching apps:", err));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-[#D2D2D2] mx-auto px-4 py-8 text-center ">
      <h1 className=" font-semibold text-4xl mt-8 mb-4">Trending Apps</h1>
      <h3 className=" mb-6">
        Explore All Trending Apps on the Market developed by us
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full
               mb-4"
            />
            <h3 className="font-semibold text-lg ">{app.title}</h3>

            <p className="text-sm text-gray-700 mb-4 ">{app.description}</p>

            <section className="flex gap-16">
              <button className="btn bg-[#F1F5E8] text-[#00D390]">
                <img src={downloadIcon} alt="" className="h-4 w-4" />{" "}
                {app.downloads}
              </button>
              <button className="btn bg-[#FFF0E1] text-[#FF8811]">
                ⭐ {app.ratingAvg}
              </button>
            </section>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/apps")}
          className="btn px-12 mt-12 bg-[#9F62F2] text-white hover:bg-gray-500 text-base font-semibold"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default AppData;
