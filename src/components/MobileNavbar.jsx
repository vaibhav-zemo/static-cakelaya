import React from "react";
import {
  HStack,
  Image,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  return (
    <HStack
      bgColor={"#FFF"}
      position={"absolute"}
      top={0}
      justifyContent={"space-between"}
      p={4}
      boxShadow={
        location.pathname != "/" && "rgba(100, 100, 111, 0.2) 0px 0px 29px 0px"
      }
      w="full"
    >
      <Link to="/">
        <Image src="/images/mainLogo.svg" alt="Logo" h={"30px"} />
      </Link>
      <Image src="/images/hamburger.svg" onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            display={"flex"}
            alignItems={"center"}
            flexDir={"row"}
            h="full"
          >
            <VStack gap={4} w="full">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/shipping">Shipping Policy</Link>
              <Link to="/return">Return Policy</Link>
              <Link to="/refund">Refund Policy</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">T&C</Link>
              <Link to="https://play.google.com/store/apps/details?id=com.cakelaya&hl=en_US">
                <Text color={"scarlet"}>Download App</Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default MobileNavbar;
