import { useContext } from "react";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { CustomerContext } from "../CustomerContext";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isCustomer, setIsCustomer } = useContext(CustomerContext);
  const location = useLocation();
  return (
    <HStack
      bgColor={"#FFF"}
      position={"absolute"}
      top={0}
      justifyContent={"space-between"}
      p={4}
      boxShadow={
        location.pathname !== "/" && "rgba(100, 100, 111, 0.2) 0px 0px 29px 0px"
      }
      w="full"
    >
      <Link to="/">
        <Image src="/images/mainLogo.png" alt="Logo" h={"40px"} />
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
              <Link to="/" onClick={onClose}>
                Home
              </Link>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Box>About</Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel onClick={onClose}>
                    <VStack alignItems={'start'} >
                      <Link to={"/about"}>
                        <Text>About Us</Text>
                      </Link>
                      <Link to={"/aim"}>
                        <Text>Aim & Vision</Text>
                      </Link>
                      <Link to={"/values"}>
                        <Text>Key Values</Text>
                      </Link>
                      <Link to={"/work"}>
                        <Text>Work for Social Cause</Text>
                      </Link>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box>Policy</Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel onClick={onClose} >
                    <VStack alignItems={"start"}>
                      <Link to={"/privacy"}>
                        <Text>Privacy Policy</Text>
                      </Link>
                      <Link to={"/refund"}>
                        <Text>Refund & Cancellation Policy</Text>
                      </Link>
                      <Link to={"/return"}>
                        <Text>Return Policy</Text>
                      </Link>
                      <Link to={"/shipping"}>
                        <Text>Shipping Policy</Text>
                      </Link>
                      <Link to={"/terms"}>
                        <Text>Terms of Use</Text>
                      </Link>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <VStack
                cursor={"pointer"}
                onClick={() => {
                  setIsCustomer(!isCustomer);
                  onClose();
                }}
              >
                <Text color={"scarlet"}>
                  {isCustomer ? "Become Seller" : "Customer Site"}
                </Text>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default MobileNavbar;
