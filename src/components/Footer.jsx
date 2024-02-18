import React from "react";
import { VStack, HStack, Image, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack gap={8} pt={12} pb={4} bgColor={'alabaster'} w='full'>
      <Text fontSize={"20px"} color={"grey"}>
        Connect with Us
      </Text>
      <HStack gap={4}>
        <Link href="https://www.instagram.com" isExternal>
          <VStack
            justifyContent={"center"}
            p={4}
            bgColor={"#FFF"}
            borderRadius={"22px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            w="77px"
            h="77px"
          >
            <Image src="/images/instagram.svg" alt="Instagram" />
          </VStack>
        </Link>
        <Link href="https://www.facebook.com" isExternal>
          <VStack
            justifyContent={"center"}
            p={4}
            bgColor={"#FFF"}
            borderRadius={"22px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            w="77px"
            h="77px"
          >
            <Image src="/images/facebook.svg" alt="Facebook" />
          </VStack>
        </Link>
        <Link href="https://www.twitter.com" isExternal>
          <VStack
            justifyContent={"center"}
            p={4}
            bgColor={"#FFF"}
            borderRadius={"22px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            w="77px"
            h="77px"
          >
            <Image src="/images/twitter.svg" alt="Twitter" />
          </VStack>
        </Link>
        <Link href="https://www.twitter.com" isExternal>
          <VStack
            justifyContent={"center"}
            p={4}
            bgColor={"#FFF"}
            borderRadius={"22px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            w="77px"
            h="77px"
          >
            <Image src="/images/linkedIn.svg" alt="LinkedIn" />
          </VStack>
        </Link>
      </HStack>
      <Text>
        Copyright © 2023 | ZESTEASE FOODTECH PRIVATE LIMITED® | All Rights
        Reserved
      </Text>
    </VStack>
  );
};

export default Footer;
