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
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
        <Image src="/images/mainLogo.png" alt="Logo" h={"30px"} />
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
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen}>
                      <HStack>
                        <Text>About</Text>
                        <ChevronDownIcon
                          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                          transition={"transform 0.3s ease-in-out"}
                        />
                      </HStack>
                    </MenuButton>
                    <MenuList onClick={onClose}>
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
                  </>
                )}
              </Menu>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen}>
                      <HStack>
                        <Text>Policy</Text>
                        <ChevronDownIcon
                          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                          transition={"transform 0.3s ease-in-out"}
                        />
                      </HStack>
                    </MenuButton>
                    <MenuList onClick={onClose}>
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
                  </>
                )}
              </Menu>
              <VStack
                cursor={"pointer"}
                onClick={() => {setIsCustomer(!isCustomer); onClose()}}
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
