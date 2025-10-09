import React, { useEffect, useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(installed);

    fetch("/allAppData.json")
      .then((res) => res.json())
      .then((data) => setAllApps(data))
      .catch((err) => console.error(err));
  }, []);

  const installedAppData = allApps.filter((app) =>
    installedApps.includes(app.id)
  );

  // Uninstall an app
  const handleUninstall = (appId) => {
    const updatedInstalled = installedApps.filter((id) => id !== appId);
    setInstalledApps(updatedInstalled);
    localStorage.setItem("installedApps", JSON.stringify(updatedInstalled));
  };

  if (installedAppData.length === 0)
    return (
      <p className="text-center text-4xl font-bold m-12 ">
        No apps installed yet.
      </p>
    );

  return (
    <div className="bg-[#D2D2D2] min-h-screen px-4 py-8 text-center">
      <h1 className="text-4xl font-bold m-4 ">Your Installed Apps</h1>
      <p>Explore All Trending Apps On the Market Developed by Us.</p>

      <div className="flex flex-col gap-4 mt-6">
        {installedAppData.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-lg shadow-md p-2 flex flex-col sm:flex-row items-center justify-between hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.image}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="text-left">
                <h3 className="font-semibold text-lg">
                  {app.title} : {app.description} ({app.size}MB)
                </h3>
                <div className="flex">
                  <img
                    src={downloadIcon}
                    alt="Downloads"
                    className="h-6 w-6 m-2"
                  />

                  <img src={ratingIcon} alt="" className="h-6 w-6 m-2" />
                </div>
                <div className="flex gap-x-4">
                  <span>{app.downloads}</span>
                  <span>{app.ratingAvg}</span>
                </div>
              </div>
            </div>

            <button
              className="btn bg-green-400 text-white px-4 py-2 rounded hover:bg-green-700 mt-4 sm:mt-0"
              onClick={() => handleUninstall(app.id)}
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
