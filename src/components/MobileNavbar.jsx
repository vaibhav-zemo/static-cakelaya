import React, { useState } from "react";
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
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
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
              <Menu>
                <MenuButton onClick={() => setIsAboutOpen(!isAboutOpen)}>
                  <HStack>
                    <Text>About</Text>
                    <ChevronDownIcon
                      transform={
                        isAboutOpen ? "rotate(180deg)" : "rotate(0deg)"
                      }
                      transition={"transform 0.3s ease-in-out"}
                    />
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to={"/about"}>
                      <Text>About Us</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/aim"}>
                      <Text>Aim & Vision</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/work"}>
                      <Text>Work for Social Cause</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/values"}>
                      <Text>Key Values</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/terms"}>
                      <Text>T&C</Text>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton onClick={() => setIsPolicyOpen(!isPolicyOpen)}>
                  <HStack>
                    <Text>Policy</Text>
                    <ChevronDownIcon
                      transform={
                        isPolicyOpen ? "rotate(180deg)" : "rotate(0deg)"
                      }
                      transition={"transform 0.3s ease-in-out"}
                    />
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to={"/shipping"}>
                      <Text>Shipping Policy</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/return"}>
                      <Text>Return Policy</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/refund"}>
                      <Text>Refund Policy</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/privacy"}>
                      <Text>Privacy Policy</Text>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
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
