import React from "react";
import { VStack, HStack, Image, Text, Heading, Flex } from "@chakra-ui/react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Slides from "../components/Slides";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/swiper.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <VStack w="full" gap={0}>
      <Helmet>
        <title>Cakeलाया? - Home</title>
      </Helmet>
      <Flex
        w="full"
        h={{ base: "auto", tablet: "100vh" }}
        pt={"90px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <VStack
          w={{ base: "auto", tablet: "585px" }}
          pl={{ base: 0, md: 12 }}
          pb={8}
          alignItems={{ base: "center", md: "start" }}
        >
          <Text
            color={"scarlet"}
            fontSize={{ base: "14px", md: "16px", tablet: "22px" }}
          >
            Your Taste, Our Prioriy!
          </Text>
          <VStack alignItems={{ base: "center", md: "start" }}>
            <Heading
              fontWeight={"700"}
              fontSize={{ base: "32px", md: "40px", tablet: "60px" }}
            >
              Best Cakes at
            </Heading>
            <HStack>
              <Heading
                fontWeight={"700"}
                fontSize={{ base: "32px", md: "40px", tablet: "60px" }}
                color={"scarlet"}
              >
                Your Fingertips!
              </Heading>
              <Image
                src="/images/cakeIcon1.svg"
                alt="Cake"
                w={{ base: "31px", md: "49px", tablet: "89px" }}
              />
            </HStack>
          </VStack>
          <HStack>
            <Text fontSize={{ base: "15px", md: "18px", tablet: "32px" }}>
              Order your favourite cakes at affordable price!
            </Text>
            <Image
              src="/images/cakeIcon2.svg"
              alt="Cake"
              w={{ base: "31px", md: "44px", tablet: "89px" }}
            />
          </HStack>
          <HStack mt={{ base: 2, tablet: 8 }}>
            <Link to="https://play.google.com/store/apps/details?id=com.cakelaya&hl=en_US">
              <Image
                src="/images/androidButton.svg"
                alt="Android"
                w={{ base: "140px", tablet: "264px" }}
              />
            </Link>
            <Link>
              <Image
                src="/images/appleButton.svg"
                alt="Apple"
                w={{ base: "140px", tablet: "264px" }}
              />
            </Link>
          </HStack>
        </VStack>
        <Image
          src="/images/hero.svg"
          alt="Hero"
          w={{ base: "360px", tablet: "735px" }}
        />
      </Flex>
      <VStack
        w="full"
        px={{base: 4, tablet: 12}}
        bg={
          "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/images/cardBg.jpg')"
        }
        pt={{base: 16, tablet: 24}}
        _before={{
          content: `""`,
          bgImage: "/images/downArrowButton.svg",
          bgRepeat: "no-repeat",
          bgPosition: "center",
          borderRadius: "30px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          h: "64px",
          w: "45px",
          position: "absolute",
          top: "-33px",
        }}
        position={"relative"}
        pb={8}
      >
        <Heading
          color={"scarlet"}
          fontSize={{ base: "18px", md: "22px", tablet: "45px" }}
        >
          What we Offer?
        </Heading>
        <Text
          color={"grey"}
          fontSize={{ base: "14px", md: "18px", tablet: "32px" }}
        >
          Your favourite cake delivery partner!
        </Text>
        <Flex
          my={12}
          w="full"
          columnGap={8}
          rowGap={8}
          justifyContent={{ base: "center", tablet: "space-between" }}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          <Card
            img={"/images/cardImage1.svg"}
            text={"Interactive UI to make ordering easy!"}
            heading={"Easy to Order"}
          ></Card>
          <Card
            img={"/images/cardImage2.svg"}
            text={"90 Minutes hassie-free delivery!"}
            heading={"90 Minutes Delivery"}
          ></Card>
          <Card
            img={"/images/cardImage3.svg"}
            heading={"Best Quality"}
            text={"Order the tastiest cakes in the town!"}
          ></Card>
        </Flex>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slides />
          </SwiperSlide>
        </Swiper>
      </VStack>
    </VStack>
  );
};

export default Home;
