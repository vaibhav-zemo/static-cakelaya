import React from "react";
import {
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Shipping = () => {
  return (
    <VStack pt={'90px'}>
      <Helmet>
        <title>Cakeलाया? - Shipping Policy</title>
      </Helmet>
      <VStack px={{base: 8, md: 16, tablet: 24}} py={12} gap={8}>
        <Heading fontSize={"38px"} fontWeight={"400"}>
          Shipping Policy
        </Heading>

        <VStack
          borderRadius={"24px"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          p={12}
          textAlign={"justify"}
          gap={8}
        >
          <Text color={"droveGray"}>
            At Cakeलाया ?, we serve as an online platform that connects
            customers with local bakers, enabling them to list their products
            and sell them online. Please review our shipping policy below:
          </Text>

          <VStack alignItems={"left"} gap={4} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Shipping Timeline
            </Text>
            <Text color={"droveGray"}>
              We provide FREE 90 Minutes instant delivery to our customers!
            </Text>
          </VStack>
          <VStack alignItems={"left"}>
            <Text fontSize={"22px"} fontWeight={500}>
              Third-Party Bakery Vendors
            </Text>
            <Text color={"droveGray"}>
              All cakes available on our website are delivered to you by
              third-party bakery partners. As such, Cakeलाया?holds no
              responsibility for the delivery process, including but not limited
              to shipping delays, damages during transit, or delivery issues.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Responsibility Disclaimer
            </Text>
            <Text color={"droveGray"}>
              While we strive to partner with reliable bakery vendors to ensure
              a smooth delivery experience, Cakeलाया ?acts solely as an
              intermediary between customers and partner bakers. Therefore, any
              issues related to shipping, delivery, or product quality will be
              addressed directly by the respective bakery partner after
              consultation.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Customer Support
            </Text>
            <Text color={"droveGray"}>
              Should you encounter any issues or have concerns regarding the
              shipping or delivery of your order, we encourage you to contact us
              at our official email ID: 
              <Link
                to={"mailto:support@cakelaya.com"}
                style={{ color: "#FF1616" }}
              >
                support@cakelaya.com.
              </Link>
              . Our customer support team is available to assist you and will do
              our best to facilitate communication between you and the relevant
              bakery partner to resolve the issue.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Communication
            </Text>
            <Text color={"droveGray"}>
              We value transparency and strive to keep our customers informed
              throughout the ordering and delivery process. If there are any
              changes or updates regarding your order, including shipping status
              or delivery estimates, we will communicate them to you promptly
              via email.
            </Text>
          </VStack>

          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Contact Us
            </Text>
            <Text color={"droveGray"}>
              If you have any questions or require further assistance regarding
              our shipping policy or any other aspect of your order, please do
              not hesitate to reach out to us at our official email ID:{" "}
              <Link
                to={"mailto:support@cakelaya.com"}
                style={{ color: "#FF1616" }}
              >
                support@cakelaya.com.
              </Link>
              . We are committed to providing excellent customer service and
              ensuring your satisfaction with every purchase.
            </Text>
          </VStack>

          <Text color={"droveGray"} w="full">
            Thank you for choosing Cakeलाया?. We appreciate your understanding
            of our shipping policy and look forward to serving you
            again in the future.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Shipping;
