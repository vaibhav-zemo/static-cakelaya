import React from "react";
import { VStack, HStack, Image, Text, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Next = () => {
  return (
    <VStack bgColor={"scarlet"} w="full" px={{base: 4, tablet: 28}} pt={8}>
      <Heading fontSize={{base: '18px',md: '22px',tablet: "45px"}} fontWeight={"400"} color={"#FFF"}>
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
          px={{base: 8, tablet: "45px"}}
          py={{base: 5, tablet: "20px"}}
          w={{base: '300px', tablet: "460px"}}
          h={{base: '155px', tablet:  "260px"}}
        >
          <Text fontSize={{base: '16px', md: '18px', tablet: "28px"}}>Download our App</Text>
          <Link to="https://play.google.com/store/apps/details?id=com.cakelaya&hl=en_US">
            <Image src="/images/androidButton.svg" alt="Android" w={{base: '133px', tablet: '250px'}} />
          </Link>
          <Link>
            <Image src="/images/appleButton.svg" alt="Apple" w={{base: '133px', tablet: '250px'}} />
          </Link>
        </VStack>
        <VStack
          bgColor={"#FFF"}
          borderRadius={"23px"}
          px={{base: 8, tablet: "45px"}}
          pt={{base: 8, tablet: "60px"}}
          w={{base: '300px', tablet: "460px"}}
          h={{base: '155px', tablet:  "260px"}}
        >
          <Text fontSize={{base: '16px', md: '18px', tablet: "28px"}}>Get in Touch</Text>
          <VStack alignItems={"start"} mt={4}>
            <HStack gap={8}>
              <Image src="/images/locationIcon.svg" alt="Address" w={{base: '16px', md: '18', tablet: '35px'}} />
              <Text fontSize={{base: '13px', tablet: '18px'}} color={"grey"}>F Block, Sector 22, Noida, U.P.</Text>
            </HStack>
            <HStack gap={8}>
              <Image src="/images/emailIcon.svg" alt="Mail" w={{base: '16px', md: '18', tablet: '35px'}} />
              <Text fontSize={{base: '13px', tablet: '18px'}} color={"grey"}>support@cakelaya.com</Text>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Next;
