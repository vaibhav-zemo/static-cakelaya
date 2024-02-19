import React from "react";
import { VStack, Image, Text, Heading } from "@chakra-ui/react";
const Card = ({ img, text, heading }) => {
  return (
    <VStack
      w={{base: '328px', tablet: "414px"}}
      h={{base: '300px', tablet: '415px'}}
      alignItems="center"
      justifyContent="center"
      bgColor="#FFF"
      borderRadius={{base: '16px', tablet: '23px'}}
    >
      <Image src={img} alt="Cake" w={{base: '160px', tablet: "245px"}} />
      <Heading fontSize={{base: '16px', md: '18px', tablet: "4xl"}}>{heading}</Heading>
      <Text fontSize={{base: '14px', md: '16px', tablet: "20px"}} color={"grey"}>
        {text}
      </Text>
    </VStack>
  );
};

export default Card;
