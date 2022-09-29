import { Box, Flex } from '@chakra-ui/react'

function OpenHours() {
  return (
    <Flex direction="column" color="white" gap={6}>
      <Box fontWeight="semibold" mt="5">Open Hours</Box>
      <Box color="gray.300" fontSize="sm">
        <Flex justify="space-between">
          <Box>Monday</Box>
          <Box>9:00 - 24:00</Box>
        </Flex>
        <Flex justify="space-between">
          <Box>Tuesday</Box>
          <Box>9:00 - 24:00</Box>
        </Flex>
        <Flex justify="space-between">
          <Box>Wednesday</Box>
          <Box>9:00 - 24:00</Box>
        </Flex>
        <Flex justify="space-between">
          <Box>Thursday</Box>
          <Box>9:00 - 24:00</Box>
        </Flex>
        <Flex justify="space-between">
          <Box>Friday</Box>
          <Box>9:00 - 02:00</Box>
        </Flex>
        <Flex justify="space-between">
          <Box>Saturday</Box>
          <Box>9:00 - 02:00</Box>
        </Flex>
        <Flex justify="space-between">
          <Box>Sunday</Box>
          <Box>9:00 - 02:00</Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default OpenHours