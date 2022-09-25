import { Box, Center, Flex, Image } from '@chakra-ui/react'

function About() {
  return (
    <Flex justify="center" h="40rem" mt={["10rem", "10rem", "10rem", "0", "0"]}>
        <Center>
            <Flex gap={10} position="relative" direction={["column", "column", "column", "row", "row"]}>
                <Image src="/intro_1.jpg" w="15rem" h="25rem" alt="" />
                <Image src="/intro_2.jpg" w="15rem" h="25rem" alt="" />
                <Box w="15rem" h="25rem" display={["none", "none", "none", "flex", "flex"]}></Box>
                <Flex border="2px" borderColor="#C8A97E" borderBottomLeftRadius="3xl" borderBottomRightRadius="3xl" direction="column" bg="white" p="6" top={[350, 350, 350, 20, 20]} left={[-20, -20, -20, 400, 400]} w="25rem" position="absolute">
                    <Box>About Us</Box>
                    <Box>Beautiful Story</Box>
                    <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatum, earum corrupti molestiae id, alias quaerat qui expedita voluptatibus sed magnam aperiam quos! Illum quo nobis repellat possimus alias reiciendis quas pariatur,</Box>
                </Flex>
            </Flex>
        </Center>
    </Flex>
  )
}

export default About