import { Box, Button, Flex, Input } from '@chakra-ui/react'

function Newsletter() {
  return (
    <Flex direction="column" color="white" gap={6}>
      <Box fontWeight="semibold" mt="5">Newsletter</Box>
      <Flex direction="column">
        <Box color="gray.300" fontSize="sm">
          To get cake catalogue every month by subscribing below.
        </Box>
        <Input mt="4" bg="rgba(255, 255, 255, .1)" variant="filled" borderRadius="none" placeholder="example@gmail.com" _hover={{ bg: "rgba(255, 255, 255, .1)" }} _focus={{ borderWidth: "0px", bg: "rgba(255, 255, 255, .1)", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none"  }} />
        <Button mt="1" borderRadius="sm" bg="#C8A97E" color="white" _hover={{ bg: "#C8A97E" }} _focus={{ bg: "#C8A97E" }}>Subscribe</Button>
      </Flex>
    </Flex>
  )
}

export default Newsletter