import React from "react";
import { VStack, HStack, Image, Text, Link } from "@chakra-ui/react";
import SocialMediaButton from "./SocialMediaButton";

const Footer = () => {
  return (
    <VStack gap={8} pt={12} pb={4} bgColor={"alabaster"} w="full">
      <Text
        fontSize={{ base: "16px", md: "18px", tablet: "20px" }}
        color={"grey"}
      >
        Connect with Us
      </Text>
      <HStack gap={4}>
        <SocialMediaButton
          url={"https://www.instagram.com/cakelayaa/"}
          image={"/images/instagram.svg"}
        />
        <SocialMediaButton
          url={"https://www.facebook.com/cakelaya/"}
          image={"/images/facebook.svg"}
        />
        <SocialMediaButton
          url={"https://www.linkedin.com/company/cakelaya/"}
          image={"/images/linkedIn.svg"}
        />
      </HStack>
      <Text fontSize={{ base: "12px", tablet: "16px" }} textAlign={'center'}>
        Copyright © 2023 | ZESTEASE FOODTECH PRIVATE LIMITED® | All Rights
        Reserved
      </Text>
    </VStack>
  );
};

export default Footer;
