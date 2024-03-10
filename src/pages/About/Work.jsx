import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Work = () => {
  return (
    <VStack pt={"90px"}>
      <Helmet>
        <title>Cakeलाया? - Work for Social Cause</title>
      </Helmet>
      <VStack px={{ base: 8, md: 16, tablet: 24 }} py={12} gap={8}>
        <Heading fontSize={"38px"} fontWeight={"400"} textAlign={'center'} >
          Work for Social Cause
        </Heading>

        <VStack
          borderRadius={"24px"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          p={12}
          textAlign={"justify"}
          gap={8}
          alignItems={"start"}
        >
          <Text color={"droveGray"}>
            Engage, Impact, and Make a Difference with us!
          </Text>
          <VStack alignItems={"left"} gap={4} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Giving Back, One Order at a Time
            </Text>
            <Text color={"droveGray"}>
              For every order placed, we contribute 1% of the net order value to
              the KOSHISH EDUCATIONAL & WELFARE SOCIETY. It's not just about
              cakes; it's about making a meaningful impact in the lives of
              others.
            </Text>
          </VStack>
          <VStack alignItems={"left"}>
            <Text fontSize={"22px"} fontWeight={500}>
              Supporting Education for All
            </Text>
            <Text color={"droveGray"}>
              Our partnership with the KOSHISH NGO aims to provide quality
              education to underprivileged individuals. With every purchase,
              you're helping to bridge the gap and empower those in need through
              education.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Transparency and Accountability
            </Text>
            <Text color={"droveGray"}>
              Curious about our donations? Feel free to reach out to us
              at support@cakelaya.com to learn more about how your orders are
              making a difference in the community. We're committed to
              transparency every step of the way.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              No Extra Charges, Just Heartfelt Giving
            </Text>
            <Text color={"droveGray"}>
              We believe in making giving back simple and accessible. There are
              no additional charges for our donation initiative. Instead, we
              allocate 1% of each order to support the cause, ensuring that
              every purchase counts.
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
              Join the Movement: By choosing Us
            </Text>
            <Text color={"droveGray"}>
              You're not just indulging in delicious treats – you're joining a
              movement for positive change. Together, we can make a difference
              and spread joy, one slice of cake at a time.
            </Text>
          </VStack>

          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Together, We Can Make a Difference
            </Text>
            <Text color={"droveGray"}>
              Let's come together to support education and empower those in
              need. With us, every order becomes a gesture of
              kindness and compassion.
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Work;
