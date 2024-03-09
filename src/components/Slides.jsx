import {useContext} from "react";
import {
  VStack,
  HStack,
  Image,
  Text,
  Heading,
  Flex,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { CustomerContext } from "../CustomerContext";

const Slides = () => {
  const [isMobile] = useMediaQuery("(max-width: 990px)");
  const { isCustomer } = useContext(CustomerContext);

  return (
    <Flex
      justifyContent={{ base: "center", tablet: "space-between" }}
      bgColor={"#FFF"}
      w="full"
      borderRadius={"24px"}
      py={12}
      px={{ base: 4, tablet: 12 }}
      alignItems={{ base: "center", tablet: "flex-end" }}
      flexDir={{ base: "column", tablet: "row" }}
      rowGap={16}
      h="723px"
    >
      <VStack mt={{base: '100px', tablet: '0'}} h={{ base: "250px", tablet: "full" }} justifyContent={"center"}>
        <Image
          w={{ base: "298px", md: "274px", tablet: "550px" }}
          src="/images/testimonial.svg"
          alt="testimonial"
          h={"460px"}
        />
      </VStack>
      <VStack
        w={{ base: "auto", md: "596px" }}
        h="auto"
        alignItems={{ base: "center", tablet: "start" }}
        justifyContent={"space-between"}
      >
        <HStack position={"relative"}>
          <Heading
            fontSize={{ base: "22px", md: "32px", tablet: "50px" }}
            fontWeight={"400"}
            color={"scarlet"}
            _before={{
              content: `""`,
              bgImage: "/images/quoteIcon.svg",
              bgSize: "contain",
              bgPosition: "center",
              height: isMobile ? "51px" : "120px",
              width: isMobile ? "52px" : "151px",
              bgRepeat: "no-repeat",
              position: "absolute",
              top: isMobile ? "-50px" : "-130px",
              left: isMobile ? "-50px" : "-140px",
            }}
          >
            {isCustomer ? "Customer" : "Merchant"}
          </Heading>
          <Heading
            fontSize={{ base: "22px", md: "32px", tablet: "50px" }}
            fontWeight={"400"}
          >
            Testimonials
          </Heading>
        </HStack>
        <Text
          fontSize={{ base: "12px", md: "15px", tablet: "18px" }}
          textAlign={"justify"}
          mt={8}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Text>
        <HStack gap={4} mt={12} pb={12} mb={4}>
          <Box
            w={{ base: "50px", md: "60px", tablet: "79px" }}
            h={{ base: "50px", md: "60px", tablet: "78px" }}
            border={"2px solid #ff1616"}
            bgImage={"/images/customer-4.png"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"50%"}
            p={1}
          ></Box>
          <VStack gap={0} alignItems={"start"}>
            <Heading
              fontWeight={"400"}
              fontSize={{ base: "14px", md: "16px", tablet: "24px" }}
            >
              Gretchen Vaccaro
            </Heading>
            <Text fontSize={{ base: "12px", md: "15px", tablet: "16px" }}>
              {isCustomer ? "Customer" : "Merchant"}
            </Text>
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
