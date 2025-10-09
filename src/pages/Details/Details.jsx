import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-hot-toast";
import downloadIcon from "../../assets/icon-downloads.png";
import reviewIcon from "../../assets/icon-review.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { useNavigate } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/allAppData.json")
      .then((res) => res.json())
      .then((data) => {
        const searchApp = data.find((item) => item.id === parseInt(id));
        setApp(searchApp);

        // Check if already installed
        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];
        if (searchApp && installedApps.includes(searchApp.id)) {
          setInstalled(true);
        }
      });
  }, [id]);

  const handleInstall = () => {
    if (!app) return;

    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);

    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
  };

  if (!app) return navigate("/ErrorPage");

  return (
    <div className="bg-[#D2D2D2] mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-60 h-60 object-contain rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-xl font-semibold ">
            {app.title} : {app.description}
          </h2>
          <p>
            Developed by :
            <span className="text-blue-600 font-semibold">
              {app.companyName}
            </span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="stats  w-full ">
              <div className="stat-desc ">
                <img
                  src={downloadIcon}
                  alt="Downloads"
                  className="h-6 w-6 m-2"
                />
              </div>

              <div className="stat-desc text-lg">Downloads</div>
              <div className="stat-value  font-bold">{app.downloads}</div>
            </div>

            <div className="stats  w-full">
              <div className="stat-desc text-lg">
                {" "}
                <img src={ratingIcon} alt="" className="h-6 w-6 m-2" />
              </div>

              <div className="stat-desc text-lg">Average Ratings</div>
              <div className="stat-value  font-bold">{app.ratingAvg}</div>
            </div>

            <div className="stats  w-full">
              <div className="stat-desc text-lg">
                {" "}
                <img src={reviewIcon} alt="" className="h-6 w-6 m-2" />
              </div>

              <div className="stat-desc text-lg">Total Reviews</div>
              <div className="stat-value  font-bold">{app.reviews}</div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded text-white font-semibold mt-6 ${
              installed ? "bg-gray-400" : "bg-green-500 hover:bg-green-700"
            }`}
          >
            {installed ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>
      <p>
        <h1 className="text-xl font-bold my-4">Description</h1>
        This focus app takes the proven Pomodoro technique and makes it even
        more practical for modern lifestyles. Instead of just setting a timer,
        it builds a complete environment for deep work, minimizing distractions
        and maximizing concentration. Users can create custom work and break
        intervals, track how many sessions they complete each day, and review
        detailed statistics about their focus habits over time. The design is
        minimal and calming, reducing cognitive load so you can focus entirely
        on the task at hand. Notifications gently let you know when to pause and
        when to resume, helping you maintain a healthy rhythm between work and
        rest. <br /> <br />
        A unique feature of this app is the integration of task lists with
        timers. You can assign each task to a specific Pomodoro session, making
        your schedule more structured. The built-in analytics show not only how
        much time you’ve worked but also which tasks consumed the most energy.
        This allows you to reflect on your efficiency and adjust your workflow
        accordingly. The app also includes optional background sounds such as
        white noise, nature sounds, or instrumental music to create a
        distraction-free atmosphere. <br /> <br />
        For people who struggle with procrastination, the app provides
        motivational streaks and achievements. Completing multiple Pomodoro
        sessions unlocks milestones, giving a sense of accomplishment. This
        gamified approach makes focusing more engaging and less like a chore.
        Whether you’re studying for exams, coding, writing, or handling office
        work, the app adapts to your routine. By combining focus tracking, task
        management, and motivational tools, this Pomodoro app ensures that you
        not only work harder but also smarter. It is a personal trainer for your
        brain, keeping you disciplined, refreshed, and productive throughout the
        day.
      </p>
    </div>
  );
};

export default Details;
