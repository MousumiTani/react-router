import React from "react";
import ErrorImg from "../../assets/error-404.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar></Navbar>
      <div className=" bg-[#D2D2D2] mx-auto pt-12 flex flex-col items-center justify-center">
        <img src={ErrorImg} alt="" />
        <h1 className=" font-bold text-4xl mt-8 mb-4">Oops,Page Not Found</h1>
        <h3 className=" mb-6">The Page Your Are Looking for is Unavailable</h3>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 mb-6 btn bg-[#9F62F2] text-white hover:bg-gray-500 text-base font-semibold"
        >
          Go Back
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
