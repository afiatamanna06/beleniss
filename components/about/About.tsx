import { Box, Center, Flex, Image } from '@chakra-ui/react'

function About() {
  return (
    <Flex justify="center" h="40rem" mt={["20rem", "20rem", "20rem", "0", "0"]}>
        <Center>
            <Flex gap={10} position="relative" direction={["column", "column", "column", "row", "row"]}>
                <Image src="/intro_1.jpg" w="20rem" h="33rem" alt="" />
                <Image src="/intro_2.jpg" w="20rem" h="33rem" alt="" />
                <Box w="20rem" h="33rem" display={["none", "none", "none", "flex", "flex"]}></Box>
                <Flex border="2px" boxShadow="2xl" borderColor="#C8A97E" borderBottomLeftRadius="3xl" borderBottomRightRadius="3xl" direction="column" bg="white" p="16" top={["30%", "30%", "30%", 20, 20]} left={[-6, -6, -6, 500, 500]} w={["23rem", "23rem", "23rem", "38rem", "38rem"]} position="absolute">
                    <Box fontFamily="'Poppins', sans-serif" letterSpacing={2} fontSize="3xl">About Us</Box>
                    <Box fontFamily="'Great Vibes', cursive" fontSize="4xl" mb="6" color="#9B4B15">Beautiful Story</Box>
                    <Box fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatum, earum corrupti molestiae id, alias quaerat qui expedita voluptatibus sed magnam aperiam quos! Illum quo nobis repellat possimus alias reiciendis quas pariatur, labore maxime blanditiis. Nam perferendis veritatis necessitatibus? Animi distinctio at et assumenda doloremque possimus unde doloribus aliquid nobis.</Box>
                </Flex>
            </Flex>
        </Center>
    </Flex>
  )
}

export default About