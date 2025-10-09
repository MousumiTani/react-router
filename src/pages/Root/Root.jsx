import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      <Footer></Footer>
      <Toaster position="top-right" />
    </div>
  );
};

export default Root;
