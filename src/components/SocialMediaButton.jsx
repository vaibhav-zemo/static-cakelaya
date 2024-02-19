import React from "react";
import { Link } from "react-router-dom";
import { VStack, Image } from "@chakra-ui/react";

const SocialMediaButton = ({ image, url }) => {
  return (
    <Link to={url} isExternal >
      <VStack
        justifyContent={"center"}
        p={{base: 2, tablet: 4}}
        bgColor={"#FFF"}
        borderRadius={"22px"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        w={{ base: "40px", md: "55px", tablet: "77px" }}
        h={{ base: "40px", md: "55px", tablet: "77px" }}
      >
        <Image src={image} h={{base: '20px', md: '28px', tablet: '38px'}} />
      </VStack>
    </Link>
  );
};

export default SocialMediaButton;
