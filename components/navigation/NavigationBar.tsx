import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi"
import React from 'react'
import { navigationLinks } from './NavigationLinks'

function NavigationBar() {

    const [responsiveDisplay, setResponsiveDisplay] = useState("none")

  return (
    <Flex position="fixed" bg="rgba(0, 0, 0, .05)" fontFamily="'Poppins', sans-serif" zIndex={99} alignItems={["start", "start", "start", "center", "center"]} textShadow='2px 2px #9B4B15' backdropFilter="blur(10px)" color="white" p="5" h={ responsiveDisplay === "none" ? "min-content" : ["98vh", "98vh", "98vh", "min-content", "min-content"] } w={["93vw", "93vw", "93vw", "98vw"]} direction={["column", "column", "column", "row", "row"]} justify="space-between" mx="4" my="4">
        <Flex w="100%" justify="space-between" alignItems="center">
            <Box fontWeight="semibold" fontFamily="'Great Vibes', cursive" fontSize="2xl">Beleniss</Box>
            <Box display={["block", "block", "block", "none", "none"]} onClick={() => { responsiveDisplay === "none" ? setResponsiveDisplay("flex") : setResponsiveDisplay("none") }}><FiMenu color="#C8A97E" size={22} /></Box>
        </Flex>
        <Flex gap={[4, 4, 4, 8, 8]} direction={["column", "column", "column", "row", "row"]} display={[responsiveDisplay, responsiveDisplay, responsiveDisplay, "flex", "flex"]}>
            {navigationLinks.slice(0, 6).map(({name, path}) => (
                <Link href={path} key={name} passHref>
                    <ChakraLink fontWeight="medium">{name}</ChakraLink>
                </Link>
            ))}
            {navigationLinks.slice(6).map(({name, path}) => (
                <Link href={path} key={name} passHref>
                    <ChakraLink fontWeight="medium">{name}</ChakraLink>
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default NavigationBar