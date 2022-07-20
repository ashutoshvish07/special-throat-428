import React from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
 
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  Search2Icon,
} from "@chakra-ui/icons";

const Links = ["Plan", "Resources", "Partners"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    pt={3}
    
    fontWeight={"medium"}
    _hover={{
        
    }}
    href={"/"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w={"89%"} m="auto" px={4} mt={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src="https://www.optimizely.com/globalassets/02.-global-images/navigation/optimizely_logo_navigation.svg" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink>
                <Popover w={"100%"}>
                  <PopoverTrigger>
                    <Link textDecoration={"none"}>Products</Link>
                  </PopoverTrigger>
                  <PopoverContent></PopoverContent>
                </Popover>
              </NavLink>
              {Links.map((link) => (
                <NavLink fontweight={"bold"} key={link} m={"auto"}>
                <Box>
                  {link}
                </Box>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={5}>
            <Box  fontWeight={"medium"}>Support</Box>
            <Box  fontWeight={"medium"} >
              
              <Search2Icon /> Search
            </Box>

            <Menu>
              <MenuButton variant={"link"} cursor={"pointer"} minW={0}>
                <Flex gap={3}>
                  <Box>
                    <Image src="https://www.optimizely.com/contentassets/19e2441ca72d4ea9a3f17e5f3a92bd16/login.svg" />
                  </Box>
                  <Box  fontWeight={"medium"} >LogIn</Box>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <Button
              variant={"solid"}
              bg="blue"
              color="white"
              pt={"20px"}
              pl={"25px"}
              pr={"25px"}
              pb={"20px"}
              size={"sm"}
              ml={4}
              borderRadius={"25px"}
            >
              Get started
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink  key={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
