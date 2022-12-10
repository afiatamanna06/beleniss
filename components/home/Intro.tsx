import { Box, Center, Flex } from '@chakra-ui/react'
import Carousel from 'nuka-carousel'
import React from 'react'

function Intro() {
  return (
    <Flex justify="center" position="relative" color="white" zIndex={1} h="100vh" bg="rgba(0, 0, 0, .75)">
        <Center>
            <Flex justify="center" direction="column" alignItems="center">
                <Box fontFamily="'Great Vibes', cursive" textAlign="center" fontSize="5xl" color="#C8A97E">Beleniss</Box>
                <Box maxW={["21rem", "21rem", "21rem", "30rem", "70rem"]}>
                  <Carousel 
                      autoplay={true}
                      slidesToShow={1}
                      animation="fade"
                      withoutControls={true}
                      wrapAround>
                    <Box fontFamily="'Poppins', sans-serif" textAlign="center" letterSpacing={5} fontSize={["2xl", "2xl", "6xl", "6xl"]} fontWeight="semibold" textTransform="uppercase">Wedding Cake</Box>
                    <Box fontFamily="'Poppins', sans-serif" textAlign="center" letterSpacing={5} fontSize={["2xl", "2xl", "6xl", "6xl"]} fontWeight="semibold" textTransform="uppercase">Birthday Cake</Box>
                    <Box fontFamily="'Poppins', sans-serif" textAlign="center" letterSpacing={5} fontSize={["2xl", "2xl", "6xl", "6xl"]} fontWeight="semibold" textTransform="uppercase">Beleniss Special Dessert</Box>
                    <Box fontFamily="'Poppins', sans-serif" textAlign="center" letterSpacing={5} fontSize={["2xl", "2xl", "6xl", "6xl"]} fontWeight="semibold" textTransform="uppercase">Beleniss Special Pastries</Box>
                  </Carousel>
                </Box>
            </Flex>
        </Center>
    </Flex>
  )
}

export default Intro