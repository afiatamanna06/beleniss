import { Box, Flex, Grid, Image } from '@chakra-ui/react'

function Instagram() {
  return (
    <Flex direction="column" color="white" gap={6}>
      <Box fontWeight="semibold" mt="5">Instagram</Box>
      <Grid alignItems="start" templateColumns={["repeat(3, 1fr)"]}>
        <Image src="/insta-1.jpg" h="full" alt="" />
        <Image src="/insta-2.jpg" h="full" alt="" />
        <Image src="/insta-3.jpg" h="full" alt="" />
        <Image src="/insta-4.jpg" h="full" alt="" />
        <Image src="/insta-5.jpg" h="full" alt="" />
        <Image src="/insta-6.jpg" h="full" alt="" />
      </Grid>
    </Flex>
  )
}

export default Instagram