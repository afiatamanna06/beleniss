import { Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'

function Intro() {
  return (
    <Flex justify="center" position="relative" color="white" zIndex={3} h="100vh" bg="rgba(0, 0, 0, .7)">
        <Center>
            <Flex justify="center" direction="column" alignItems="center">
                <Box>Beleniss</Box>
                <Box>Wedding Cake</Box>
            </Flex>
        </Center>
    </Flex>
  )
}

export default Intro