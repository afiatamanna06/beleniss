import { Box, Button, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import React from "react";
import { navigationLinks } from "./NavigationLinks";

function NavigationBar() {
  const [responsiveDisplay, setResponsiveDisplay] = useState("none");

  return (
    <Box
      position="fixed"
      py="4"
      px="4"
      zIndex={99}
      w="full"
      h={
        responsiveDisplay === "none"
          ? "min-content"
          : ["full", "full", "full", "min-content", "min-content"]
      }
    >
      <Flex
        position="relative"
        bg="rgba(0, 0, 0, .05)"
        fontFamily="'Poppins', sans-serif"
        alignItems={["start", "start", "start", "center", "center"]}
        textShadow="2px 2px #9B4B15"
        backdropFilter="blur(10px)"
        color="white"
        p="4"
        h={
          responsiveDisplay === "none"
            ? "min-content"
            : ["full", "full", "full", "min-content", "min-content"]
        }
        w={["full"]}
        direction={["column", "column", "column", "row", "row"]}
        justify="space-between"
      >
        <Flex w="100%" justify="space-between" alignItems="center">
          <Box
            fontWeight="semibold"
            fontFamily="'Great Vibes', cursive"
            fontSize="2xl"
            cursor="pointer"
          >
            <Link href="/" passHref>
              Beleniss
            </Link>
          </Box>
          <Box
            display={["block", "block", "block", "none", "none"]}
            onClick={() => {
              responsiveDisplay === "none"
                ? setResponsiveDisplay("flex")
                : setResponsiveDisplay("none");
            }}
          >
            <FiMenu color="#C8A97E" size={22} />
          </Box>
        </Flex>
        <Flex
          gap={[4, 4, 4, 8, 8]}
          alignItems={["start", "start", "start", "center", "center"]}
          direction={["column", "column", "column", "row", "row"]}
          display={[
            responsiveDisplay,
            responsiveDisplay,
            responsiveDisplay,
            "flex",
            "flex",
          ]}
        >
          {navigationLinks.slice(0, 6).map(({ name, path }) => (
            <Link href={path} key={name} passHref>
              <ChakraLink
                fontWeight="medium"
                onClick={() => {
                  responsiveDisplay === "flex"
                    ? setResponsiveDisplay("none")
                    : setResponsiveDisplay("flex");
                }}
              >
                {name}
              </ChakraLink>
            </Link>
          ))}
          <Link href="#order" passHref>
            <Button
              bg="#C8A97E"
              color="white"
              _hover={{ bg: "#C8A97E" }}
              _focus={{ bg: "#C8A97E" }}
              onClick={() => {
                responsiveDisplay === "flex"
                  ? setResponsiveDisplay("none")
                  : setResponsiveDisplay("flex");
              }}
            >
              Order a cake
            </Button>
          </Link>
          {navigationLinks.slice(6).map(({ name, path }) => (
            <Link href={path} key={name} passHref>
              <ChakraLink
                fontWeight="medium"
                onClick={() => {
                  responsiveDisplay === "flex"
                    ? setResponsiveDisplay("none")
                    : setResponsiveDisplay("flex");
                }}
              >
                {name}
              </ChakraLink>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavigationBar;
