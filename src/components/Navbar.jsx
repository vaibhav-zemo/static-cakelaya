import React from "react";
import {
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const location = useLocation();

  return (
    <HStack
      bgColor={"#FFF"}
      px={12}
      py={4}
      justifyContent={"space-between"}
      w="full"
      position={"absolute"}
      top={0}
      boxShadow={
        location.pathname !== "/" && "rgba(100, 100, 111, 0.2) 0px 0px 29px 0px"
      }
    >
      <Link to="/">
        <Image
          src="/images/mainLogo.svg"
          alt="Logo"
          h={{ base: "30px", md: "45px", tablet: "60px" }}
        />
      </Link>
      <HStack
        gap={8}
        fontSize={{ base: "14px", tablet: "22px" }}
        lineHeight={"26px"}
      >
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Menu>
          <MenuButton>
            <HStack>
              <Text>About</Text>
              <ChevronDownIcon />
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
          <MenuButton>
            <HStack>
              <Text>Policy</Text>
              <ChevronDownIcon />
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
      </HStack>
    </HStack>
  );
};

export default Navbar;
