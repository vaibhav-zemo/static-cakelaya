import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Next from "../components/Next";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Next />
      <Footer />
    </Box>
  );
};

export default Default;
