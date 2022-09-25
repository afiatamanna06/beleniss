import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { navigationLinks } from './NavigationLinks'

function NavigationBar() {
  return (
    <Flex position="fixed" zIndex={99} color="white" w="98vw" justify="space-between" mx="4" my="4">
        <Box>Beleniss</Box>
        <Flex gap={8}>
            {navigationLinks.map(({name, path}) => (
                <Link href={path} key={name} passHref>
                    <ChakraLink>{name}</ChakraLink>
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default NavigationBar