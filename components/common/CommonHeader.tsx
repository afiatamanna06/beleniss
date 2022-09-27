import { Box, Flex } from '@chakra-ui/react'

type propTypes = {
    heading: string;
    description: string;
    w: string[];
    descriptionColor?: string
}

function CommonHeader({heading, description, w, descriptionColor}: propTypes) {
  return (
    <Flex direction="column" w={w} alignItems="center">
        <Box fontFamily="'Great Vibes', cursive" fontSize="8xl" color="#C8A97E" fontWeight="normal">{heading}</Box>
        <Box fontFamily="'Poppins', sans-serif" color={descriptionColor} textAlign="center" letterSpacing={3} mt="-20" fontSize="5xl" fontWeight="medium">{description}</Box>
    </Flex>
  )
}

export default CommonHeader