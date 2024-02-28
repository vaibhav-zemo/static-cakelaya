import React from "react";
import {
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Return = () => {
  return (
    <VStack pt={'90px'}>
      <Helmet>
        <title>Cakeलाया? - Return Policy</title>
      </Helmet>
      <VStack px={{base: 8, md: 16, tablet: 24}} py={12} gap={8}>
        <Heading fontSize={"38px"} fontWeight={"400"}>
          Return Policy
        </Heading>

        <VStack
          borderRadius={"24px"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          p={12}
          textAlign={"justify"}
          gap={8}
        >
          <Text color={"droveGray"}>
            At Cakeलाया?, we understand the importance of customer satisfaction
            and are committed to providing high-quality products. Please read
            our return policy carefully regarding food items:
          </Text>

          <VStack alignItems={"left"} gap={4} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Perishable Nature of Food Item
            </Text>
            <Text color={"droveGray"}>
              Due to the perishable nature of food items, once they are
              delivered, they cannot be returned or replaced. We prioritize the
              freshness and quality of our products and cannot accept returns
              for items that have already been delivered.
            </Text>
          </VStack>
          <VStack alignItems={"left"}>
            <Text fontSize={"22px"} fontWeight={500}>
              Product Quality Issues
            </Text>
            <Text color={"droveGray"}>
              If you encounter any issues with the quality of the product you
              have received, we encourage you to contact us immediately. Please
              reach out to our customer support team at 
              <Link
                to={"mailto:support@cakelaya.com"}
                style={{ color: "#FF1616" }}
              >
                support@cakelaya.com.
              </Link>
               to raise a refund query. We take product quality concerns
              seriously and will work with you to address the issue promptly.
            </Text>
          </VStack>
          <VStack alignItems={"left"} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Contact Us
            </Text>
            <Text color={"droveGray"}>
              If you have any questions or concerns regarding our refund and
              cancellation policy, or if you need assistance with your order,
              please do not hesitate to contact us at our official email ID:
              <Link
                to={"mailto:support@cakelaya.com"}
                style={{ color: "#FF1616" }}
              >
                support@cakelaya.com.
              </Link>
              . Our customer support team is here to help address any inquiries
              or issues you may have. Thank you for choosing Cakeलाया ?. We look
              forward to serving you again in the future.
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

export default Return;
