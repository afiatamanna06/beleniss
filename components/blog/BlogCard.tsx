import { Box, Flex, Image } from '@chakra-ui/react'

interface propTypes {
    image: string;
    name: string;
    description: string;
}

function BlogCard({image, name, description}: propTypes) {
  return (
    <Box p="6" minW="22rem" bgImage={`url(${image})`} bgSize='cover' pos='relative' bgRepeat='no-repeat'>
        <Flex color="white" p="6" h="11rem" direction="column" alignItems="center" bg="rgba(0, 0, 0, .8)">
           <Box fontSize="2xl" textTransform="uppercase" mb="3">{name}</Box>
           <Box minW="12rem" bg="white" h=".10rem" mb="2"></Box>
           <Box>{description}</Box>
        </Flex>
    </Box>
  )
}

export default BlogCard