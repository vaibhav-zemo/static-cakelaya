import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Refund = () => {
  return (
    <VStack pt={"90px"}>
      <Helmet>
        <title>Cakeलाया? - Return Policy</title>
      </Helmet>
      <VStack px={{ base: 8, md: 16, tablet: 24 }} py={12} gap={8}>
        <Heading fontSize={"38px"} fontWeight={"400"}>
          Refund and Cancellation Policy
        </Heading>

        <VStack
          borderRadius={"24px"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          p={12}
          textAlign={"justify"}
          gap={8}
        >
          <Text color={"droveGray"}>
            At Cakeलाया ?, we prioritize customer satisfaction and strive to
            provide a seamless experience for all our customers. Please read the
            following policy regarding refunds, cancellations, and updates to
            your order:
          </Text>

          <VStack alignItems={"left"} gap={4} w="full">
            <Text fontSize={"22px"} fontWeight={500}>
              Cancellation Policy
            </Text>
            <Text color={"droveGray"}>
              Currently, the option to cancel your order is not available on our
              website/app. Therefore, we kindly request all customers to place
              their orders with utmost care. Once an order is placed, it cannot
              be cancelled through the website/app. However, if you need to make
              changes to your delivery address or cake flavour, please contact
              our customer support team at 
              <Link
                to={"mailto:support@cakelaya.com"}
                style={{ color: "#FF1616" }}
              >
                support@cakelaya.com.
              </Link>
               as soon as possible, and we will do our best to accommodate your
              request!
            </Text>
          </VStack>
          <VStack alignItems={"left"}>
            <Text fontSize={"22px"} fontWeight={500}>
              Refund Policy
            </Text>
            <Text color={"droveGray"}>
              If you need to request a refund due to a genuine reason, we
              process refunds immediately after verification. However, please
              note that a standard deduction of 5% of the order value will be
              applied to all refund requests initiated by users. The remaining
              amount will be refunded back to your original payment method
              within 1-2 business days.
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
              or issues you may have.
            </Text>
          </VStack>

          <Text color={"droveGray"} w="full">
            Our customer support team is here to help address any inquiries or
            issues you may have. Thank you for choosing Cakeलाया ?. We look
            forward to serving you again in the future.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Refund;
