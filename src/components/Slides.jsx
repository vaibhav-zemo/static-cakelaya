import React from "react";
import { VStack, HStack, Image, Text, Heading, Flex } from "@chakra-ui/react";

const Slides = () => {
  return (
    <Flex
      justifyContent={{ base: "center", tablet: "space-between" }}
      bgColor={"#FFF"}
      w="full"
      borderRadius={"24px"}
      py={12}
      px={{base: 4, tablet: 12}}
      alignItems={{base: 'center', tablet: "flex-end"}}
      flexDir={{ base: "column", tablet: "row" }}
      rowGap={16}
    >
      <Image
        w={{base: '215px', md: '252px', tablet: "496px"}}
        src="/images/testimonial.svg"
        alt="testimonial"
      />
      <VStack
        w="596px"
        h='auto'
        alignItems={{base: 'center', tablet: "start"}}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <HStack
          _before={{
            content: `""`,
            bgImage: "/images/quoteIcon.svg",
            height: "120px",
            width: "151px",
            bgRepeat: "no-repeat",
            position: "absolute",
            left: "-120px",
            top: "-120px",
          }}
        >
          <Heading fontSize={{base: '22px', md: '32px', tablet: "50px"}} fontWeight={"400"} color={"scarlet"}>
            Customer
          </Heading>
          <Heading fontSize={{base: '22px', md: '32px', tablet: "50px"}} fontWeight={"400"}>
            Testimonials
          </Heading>
        </HStack>
        <Text fontSize={{base: '12px', md: '15px', tablet: "18px"}} textAlign={"justify"} mt={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Text>
        <HStack gap={4} mt={24} mb={4}>
          <Image
            src="/images/customerDP.svg"
            border={"2px solid #ff1616"}
            borderRadius={"50%"}
            w={{base: '50px', md: '60px', tablet: '80px'}}
          />
          <VStack gap={0} alignItems={"start"}>
            <Heading fontWeight={"400"} fontSize={{base: '14px', md: '16px', tablet: "24px"}}>
              Gretchen Vaccaro
            </Heading>
            <Text fontSize={{base: '12px', md: '15px', tablet: '16px'}} >Customer</Text>
            <HStack alignItems={"center"}>
              <Image src="/images/star.svg" />
              <Image src="/images/star.svg" />
              <Image src="/images/star.svg" />
              <Image src="/images/star.svg" />
              <Image src="/images/star.svg" />
              <Text fontSize={"18px"}>4.8</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Slides;
