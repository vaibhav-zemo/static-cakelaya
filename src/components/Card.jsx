import React from "react";
import { VStack, Image, Text, Heading } from "@chakra-ui/react";
const Card = ({ img, text, heading }) => {
  return (
    <VStack
      w="414px"
      h="415px"
      alignItems="center"
      justifyContent="center"
      bgColor="#FFF"
      borderRadius={'23px'}
    >
      <Image src={img} alt="Cake" w="213px" h="200px" />
      <Heading fontSize="4xl">{heading}</Heading>
      <Text fontSize={"20px"} color={"grey"}>
        {text}
      </Text>
    </VStack>
  );
};

export default Card;
