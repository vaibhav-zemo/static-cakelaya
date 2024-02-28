import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Aim = () => {
  return (
    <VStack pt={"90px"}>
      <Helmet>
        <title>Cakeलाया? - Aim & Vision</title>
      </Helmet>
      <VStack px={{ base: 8, md: 16, tablet: 24 }} py={12} gap={8}>
        <Heading fontSize={"38px"} fontWeight={"400"}>
        Aim & Vision
        </Heading>

        <VStack
          borderRadius={"24px"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          p={12}
          textAlign={"justify"}
          gap={8}
          alignItems={"start"}
        >
          <VStack alignItems={"left"} gap={4} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Solving Tier 2 and Tier 3 Cake Delivery Woes
            </Text>
            <Text color={"droveGray"}>
              Our primary goal is to revolutionize cake delivery in Tier 2 and
              Tier 3 cities, where existing options often fall short. We're here
              to bridge the gap and bring delicious cakes right to your
              doorstep.
            </Text>
          </VStack>
          <VStack alignItems={"left"}>
            <Text fontSize={"22px"} fontWeight={500}>
              Eliminating Overpriced Options
            </Text>
            <Text color={"droveGray"}>
              Existing marketplace options are not just inefficient; they're
              also notorious for overpricing cakes. We're determined to change
              that narrative by offering affordable solutions without
              compromising on quality.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Empowering Local Bakers, Building a Fair Marketplace
            </Text>
            <Text color={"droveGray"}>
              By partnering with small and local bakers, we're creating a level
              playing field where everyone benefits. No more domination by big
              players – just fair opportunities for all.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Win-Win for Customers and Shopkeepers
            </Text>
            <Text color={"droveGray"}>
              Our mission is simple: to ensure both customers and local
              shopkeepers reap the rewards. With fair pricing and quality cakes,
              everyone wins.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Supporting Post-Lockdown Recovery
            </Text>
            <Text color={"droveGray"}>
              In the wake of lockdown losses, we believe in leveraging
              technology to uplift struggling businesses. Our platform not only
              benefits customers but also supports local vendors in their
              recovery journey.
            </Text>
          </VStack>

          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Freshness Guaranteed, Quality Assured
            </Text>
            <Text color={"droveGray"}>
              Your health and satisfaction are our top priorities. That's why
              all our cakes are freshly baked and prepared within 30 minutes of
              your order, ensuring you enjoy the best quality every time.
            </Text>
          </VStack>

          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Adding Flavor to Every Occasion
            </Text>
            <Text color={"droveGray"}>
              Whether it's a birthday, anniversary, internship celebration, or
              placement party, a cake is an essential ingredient for a memorable
              occasion. Let us enhance your celebrations with our delicious
              offerings.
            </Text>
          </VStack>

          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Convenience Redefined
            </Text>
            <Text color={"droveGray"}>
              Imagine indulging in the finest cakes from the comfort of your
              room with just a simple online website. With us, convenience and
              affordability go hand in hand – it's a win-win for everyone
              involved.
            </Text>
          </VStack>

          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Experience the Difference
            </Text>
            <Text color={"droveGray"}>
              Give our services a try and discover a hassle-free cake delivery
              experience like never before. We're here to make your celebrations
              sweeter, one slice at a time.
            </Text>
          </VStack>

          <Text color={"droveGray"} w="full">
            Ready to join the cake revolution? Let's indulge in convenience,
            affordability, and deliciousness together with us!
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Aim;
