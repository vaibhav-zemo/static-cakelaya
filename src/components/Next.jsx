import React from "react";
import { VStack, HStack, Image, Text, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Next = () => {
  return (
    <VStack bgColor={"scarlet"} w="full" px={28} pt={8}>
      <Heading fontSize={"45px"} fontWeight={"400"} color={"#FFF"}>
        What's Next?
      </Heading>
      <Flex
        rowGap={8}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={'center'}
        mt={8}
        w="full"
        pb={12}
        flexDir={{base: 'column', tablet: 'row'}}
      >
        <VStack
          bgColor={"#FFF"}
          borderRadius={"23px"}
          px={"45px"}
          py={"20px"}
          w="460px"
          h="260px"
        >
          <Text fontSize={"28px"}>Download our App</Text>
          <Link to="https://play.google.com/store/apps/details?id=com.cakelaya&hl=en_US">
            <Image src="/images/androidButton.svg" alt="Android" />
          </Link>
          <Link>
            <Image src="/images/appleButton.svg" alt="Apple" />
          </Link>
        </VStack>
        <VStack
          bgColor={"#FFF"}
          borderRadius={"23px"}
          px={"45px"}
          pt={"60px"}
          w="460px"
          h="260px"
        >
          <Text fontSize={"28px"}>Get in Touch</Text>
          <VStack alignItems={"start"} mt={4}>
            <HStack gap={8}>
              <Image src="/images/locationIcon.svg" alt="Address" />
              <Text color={"grey"}>F Block, Sector 22, Noida, U.P.</Text>
            </HStack>
            <HStack gap={8}>
              <Image src="/images/emailIcon.svg" alt="Mail" />
              <Text color={"grey"}>support@cakelaya.com</Text>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Next;
