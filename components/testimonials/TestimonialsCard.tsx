import { Box, Flex, Image } from '@chakra-ui/react'

interface propTypes {
    image: string;
    name: string;
    description: string;
    position: string;
}

function TestimonialsCard({image, name, description, position}: propTypes) {
  return (
    <Flex direction="column" alignItems="start" gap={5} p="5" border="1px" borderColor="rgba(255, 255, 255, 0.2)" borderRadius="md">
        <Box color="rgba(255, 255, 255, 0.6)" fontStyle="italic">{description}</Box>
        <Flex gap={4} alignItems="center">
            <Image src={image} h="5rem" w="5rem" rounded="full" alt="" />
            <Flex direction="column">
                <Box color="white" fontSize="lg">{name}</Box>
                <Box color="rgba(255, 255, 255, 0.6)">{position}</Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default TestimonialsCard