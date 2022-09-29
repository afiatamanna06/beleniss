import { Box, Center, Flex, Grid, Image } from '@chakra-ui/react'
import AboutCard from './AboutCard'
import aboutData from './AboutData'

function About() {
  return (
    <Flex id="about" direction="column" justify="center" pt="40" h="60rem" mt={["30rem", "30rem", "30rem", "0", "0"]}>
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
        <Center>
            <Flex direction={["column", "column", "column", "row", "row"]} alignItems={["center", "center", "center", "start", "start"]} maxW="70rem" gap={[20, 20, 20, 10]} mt="20" mb="10rem">
                  <Grid gap={10} templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
                      {aboutData.map(({ title, description }) => (
                        <AboutCard key={title} title={title} description={description} />
                      ))}
                  </Grid>
                  <Box w="15rem" textAlign={["center", "center", "center", "start", "start"]}>
                    The amount of love gained by you people is just pure and we are keep on improving our services and tastes.
                  </Box>
            </Flex>
        </Center>
    </Flex>
  )
}

export default About