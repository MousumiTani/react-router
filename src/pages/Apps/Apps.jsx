import React, { useState, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredApps = useMemo(() => {
    return apps.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, apps]);

  return (
    <div className=" bg-[#D2D2D2] mx-auto px-4 py-8 text-center">
      <h1 className=" font-bold text-4xl mt-8 mb-4">Our All Applications</h1>
      <h3 className=" mb-6">
        Explore All Apps on the Market developed by us. We code for Millions
      </h3>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="text-lg font-semibold">
          Total Apps: {filteredApps.length}
        </div>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-700 p-2 w-full sm:w-64 "
        />
      </div>

      {filteredApps.length === 0 ? (
        <div className="text-center text-gray-500 mt-12">No App Found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={`all-${app.id}`}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => navigate(`/apps/${app.id}`)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-60
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
      )}
    </div>
  );
};

export default Apps;
