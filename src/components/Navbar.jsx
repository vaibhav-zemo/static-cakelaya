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
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <HStack
      bgColor={"#FFF"}
      px={12}
      mt={4}
      justifyContent={"space-between"}
      h={"60px"}
      w="full"
    >
      <Link to="/">
        <Image src="/images/mainLogo.svg" alt="Logo" h={"60px"} />
      </Link>
      <HStack gap={8}>
        <Link to="/">
          <Text fontSize={"22px"}>Home</Text>
        </Link>
        <Link to="/about">
          <Text fontSize={"22px"}>About</Text>
        </Link>
        <Menu>
          <MenuButton>
            <HStack>
              <Text fontSize={"22px"}>More</Text>
              <ChevronDownIcon fontSize={'22px'} />
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={'/shipping'} >
                <Text fontSize={"22px"}>Shipping Policy</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/return'} >
                <Text fontSize={"22px"}>Return Policy</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/privacy'}>
                <Text fontSize={"22px"}>Privacy Policy</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/terms'}>
                <Text fontSize={"22px"}>T&C</Text>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to="https://play.google.com/store/apps/details?id=com.cakelaya&hl=en_US">
          <Text color={"scarlet"} fontSize={"22px"}>
            Download App
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Navbar;
