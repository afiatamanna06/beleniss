import { Box, Flex, Image } from '@chakra-ui/react'

interface propTypes {
    image: string;
    name: string;
    description: string;
    price: string;
}

function MenuCard({image, name, description, price}: propTypes) {
  return (
    <Flex justify="space-between" cursor="pointer" _hover={{ border: "2px", borderColor: "#9B4B15" }} alignItems="start" p="5" minW={["100%", "100%", "100%", "100%", "10rem", "30rem"]} border="2px" borderColor="gray.100" borderRadius="lg">
        <Flex gap={4} alignItems="start">
            <Image src={image} w={["3rem", "3rem", "6rem", "6rem"]} h={["3rem", "3rem", "6rem", "6rem"]} rounded="full" alt="" />
            <Box>
                <Box fontSize={["lg", "lg", "2xl", "2xl"]} fontWeight="semibold">{name}</Box>
                <Box>{description}</Box>
            </Box>
        </Flex>
        <Box fontWeight="bold" fontSize="lg">{price}</Box>
    </Flex>
  )
}

export default MenuCard