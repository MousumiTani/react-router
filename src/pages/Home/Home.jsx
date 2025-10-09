import React from "react";
import { useNavigate } from "react-router";
import Banner from "../../components/Banner/Banner";
import AppData from "../../components/AppData/AppData";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Banner></Banner>
      <AppData></AppData>
    </div>
  );
};

export default Home;
