import React from "react";
import Navbar from "../components/Navbar";
import { VStack, HStack, Image, Text, Heading } from "@chakra-ui/react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Slides from "../components/Slides";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/swiper.css";
import Next from "../components/Next";

const Home = () => {
  return (
    <VStack w="full" gap={0}>
      <Navbar />
      <HStack w="full" mt={16} justifyContent={"space-between"}>
        <VStack w="585px" h="531px" pl={12} alignItems={"start"}>
          <Text color={"scarlet"} fontSize={"22px"}>
            Your Taste, Our Prioriy!
          </Text>
          <VStack alignItems={"start"}>
            <Heading fontWeight={"700"} fontSize={"60px"}>
              Best Cakes at{" "}
            </Heading>
            <HStack>
              <Heading fontWeight={"700"} fontSize={"60px"} color={"scarlet"}>
                Your Fingertips!
              </Heading>
              <Image src="/images/cakeIcon1.svg" alt="Cake" w="89px" h="85px" />
            </HStack>
          </VStack>
          <HStack>
            <Text fontSize={"32px"}>
              Order your favourite cakes at affordable price!
            </Text>
            <Image src="/images/cakeIcon2.svg" alt="Cake" />
          </HStack>
          <HStack mt={8}>
            <Link to="https://play.google.com/store/apps/details?id=com.cakelaya&hl=en_US">
              <Image src="/images/androidButton.svg" alt="Android" />
            </Link>
            <Link>
              <Image src="/images/appleButton.svg" alt="Apple" />
            </Link>
          </HStack>
        </VStack>
        <Image src="/images/hero.svg" alt="Hero" />
      </HStack>
      <VStack
        w="full"
        px={12}
        bg={
          "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/images/cardBg.jpg')"
        }
        pt={24}
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
        <Heading color={"scarlet"} fontSize={"45px"}>
          What we Offer?
        </Heading>
        <Text color={"grey"} fontSize={"32px"}>
          Your favourite cake delivery partner!
        </Text>
        <HStack my={12} w="full" justifyContent={"space-between"}>
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
        </HStack>
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
          <SwiperSlide>
            <Slides />
          </SwiperSlide>
          <SwiperSlide>
            <Slides />
          </SwiperSlide>
        </Swiper>
      </VStack>
      <Next/>
      <Footer />
    </VStack>
  );
};

export default Home;
