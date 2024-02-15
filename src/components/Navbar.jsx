import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack bgColor={"#FFF"} px={12} mt={4} justifyContent={'space-between'} h={'60px'} w='full'>
      <Link to="/">
        <Image src="/images/mainLogo.svg" alt="Logo" h={'60px'} />
      </Link>
      <HStack gap={8} >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="https://play.google.com/store/apps/details?id=com.cakelaya&hl=en_US">
          <Text color={"scarlet"}>Download App</Text>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Navbar;
