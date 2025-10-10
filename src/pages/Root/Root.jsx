import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />

      {navigation.state === "loading" ? (
        <div className="w-full h-[60vh] flex flex-col items-center justify-center text-gray-700">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin "></div>
          <span className="text-lg font-semibold m-4">Loading...</span>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Root;
