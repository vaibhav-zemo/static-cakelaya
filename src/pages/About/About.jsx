import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <VStack pt={"90px"}>
      <Helmet>
        <title>Cakeलाया? - About Us</title>
      </Helmet>
      <VStack px={{ base: 8, md: 16, tablet: 24 }} py={12} gap={8}>
        <Heading fontSize={"38px"} fontWeight={"400"}>
          About Us
        </Heading>

        <VStack
          borderRadius={"24px"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          p={12}
          textAlign={"justify"}
          gap={8}
          alignItems={'start'}
        >
          <Text color={"droveGray"}>
            We're a team of innovative thinkers driven by a shared vision to
            revolutionize the way students celebrate special occasions. Here's a
            glimpse into our story:
          </Text>

          <VStack alignItems={"left"} gap={4} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Identifying a Need
            </Text>
            <Text color={"droveGray"}>
              As students ourselves, we've experienced the struggle of finding
              affordable and delicious cakes for birthdays and other
              celebrations. Witnessing our peers trekking long distances – 5 to
              6 kilometres – just to fetch a cake highlighted a glaring problem.
            </Text>
          </VStack>
          <VStack alignItems={"left"}>
            <Text fontSize={"22px"} fontWeight={500}>
              Breaking the Monopoly
            </Text>
            <Text color={"droveGray"}>
              We recognized that few players monopolized the cake market,
              charging exorbitant prices due to their stronghold. Students,
              compelled by distance and lack of alternatives, were forced to
              accept these inflated rates.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              A Student-Centric Solution
            </Text>
            <Text color={"droveGray"}>
              Determined to alleviate this common headache, we envisioned a
              solution: cakelaya – a startup dedicated to delivering cakes and
              other delectable treats right to students' doorsteps, eliminating
              the need for lengthy travels and overpriced purchases.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Convenience at Your Fingertips
            </Text>
            <Text color={"droveGray"}>
              With cakelaya, students can simply sit back, relax, and enjoy
              their special occasions with loved ones while we handle all their
              cake and snack needs. Our seamless delivery service ensures that
              celebrations are stress-free and enjoyable.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Our Promise
            </Text>
            <Text color={"droveGray"}>
              We're committed to providing not just cakes, but memorable
              experiences that enhance every celebration. From birthdays to
              impromptu gatherings, cakelaya is here to add a touch of sweetness
              to every moment.
            </Text>
          </VStack>

          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Join the Celebration
            </Text>
            <Text color={"droveGray"}>
              Join us on this exciting journey as we redefine the way students
              celebrate. Let cakelaya be your go-to destination for all things
              delicious and delightful, making every occasion truly special.
            </Text>
          </VStack>

          <Text color={"droveGray"} w="full">
            At cakelaya, we're not just delivering cakes – we're delivering
            happiness, one slice at a time.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default About;
