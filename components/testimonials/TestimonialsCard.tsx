import { Box, Flex, Image } from '@chakra-ui/react'

interface propTypes {
    image: string;
    name: string;
    description: string;
    position: string;
}

function TestimonialsCard({image, name, description, position}: propTypes) {
  return (
    <Flex direction="column" alignItems="start" p="5" border="1px" borderColor="gray.200" borderRadius="lg">
        <Box color="gray">{description}</Box>
        <Flex>
            <Image src={image} h="5rem" w="5rem" rounded="full" alt="" />
            <Flex direction="column">
                <Box color="white">{name}</Box>
                <Box color="gray">{position}</Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default TestimonialsCard