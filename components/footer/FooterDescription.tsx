import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import socialLinks from '../common/SocialLinks'

function FooterDescription() {

    const reverseLinks = [
        {
            Icon: FaFacebookF,
            path: "https://www.facebook.com/",
        },
        {
            Icon: FaTwitter,
            path: "https://twitter.com/",
        },
        {
            Icon: FaInstagram,
            path: "https://www.instagram.com/",
        },
    ]

  return (
    <Flex direction="column" color="white" gap={6}>
        <Box fontWeight="semibold" mt="5">Beleniss</Box>
        <Box color="rgba(255, 255, 255, 0.7)" fontSize="sm" py="2">
            We serve and take all type of cake orders. You can personalised cake of your own choice. We have the best chef in the city working for us and happying serving to you.
        </Box>
        <Box color="rgba(255, 255, 255, 0.7)" fontSize="sm">
            <Box>belenisscake@gmail.com</Box>
            <Box>8888888888</Box>
        </Box>
        <Flex gap={3}>
            {reverseLinks.map(({Icon, path}) => (
                <Link key={path} href={path} passHref>
                    <Box bg="rgba(255, 255, 255, .1)" p="2" rounded="full" _hover={{ bg: "#C8A97E" }}>
                        <Icon cursor="pointer" color="white" size={18} />
                    </Box>
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default FooterDescription