import { Box, useMediaQuery } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Next from "../components/Next";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../components/MobileNavbar";

const Default = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  return (
    <Box>
      {isMobile ? <MobileNavbar /> : <Navbar/>}
      <Outlet />
      <Next />
      <Footer />
    </Box>
  );
};

export default Default;
