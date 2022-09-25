import { Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'

function Intro() {
  return (
    <Flex justify="center" position="relative" color="white" zIndex={3} h="100vh" bg="rgba(0, 0, 0, .75)">
        <Center>
            <Flex justify="center" direction="column" alignItems="center">
                <Box fontFamily="'Great Vibes', cursive" textAlign="center" fontSize="5xl" color="#C8A97E">Beleniss</Box>
                <Box fontFamily="'Poppins', sans-serif" textAlign="center" letterSpacing={5} fontSize="6xl" fontWeight="semibold" textTransform="uppercase">Wedding Cake</Box>
            </Flex>
        </Center>
    </Flex>
  )
}

export default Intro