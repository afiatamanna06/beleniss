import { Box, Flex, Image } from '@chakra-ui/react'

interface propTypes {
    image: string;
    name: string;
    description: string;
    price: string;
}

function MenuCard({image, name, description, price}: propTypes) {
  return (
    <Flex justify="space-between" alignItems="start" p="5" minW={["100%", "100%", "100%", "30rem", "30rem"]} border="1px" borderColor="gray.200" borderRadius="lg">
        <Flex gap={4}>
            <Image src={image} w="6rem" h="6rem" rounded="full" alt="" />
            <Box>
                <Box fontSize="2xl">{name}</Box>
                <Box>{description}</Box>
            </Box>
        </Flex>
        <Box fontWeight="bold" fontSize="lg">{price}</Box>
    </Flex>
  )
}

export default MenuCard