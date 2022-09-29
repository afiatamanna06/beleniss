import { Box, Flex } from "@chakra-ui/react";

type propTypes = {
    title: string;
    description: string;
}

function AboutCard({title, description}: propTypes) {
  return (
    <Flex direction="column">
        <Box color="#C8A97E" fontFamily="'Poppins', sans-serif" fontSize="5xl" fontWeight="medium">
            {title}
        </Box>
        <Box fontSize="sm">
            {description}
        </Box>
    </Flex>
  )
}

export default AboutCard