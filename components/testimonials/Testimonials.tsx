import { Box, Center, Flex, Image } from "@chakra-ui/react"
import CommonHeader from "../common/CommonHeader"

function Testimonials() {
  return (
    <Box mt="28" w="full" px={[2, 2, 2, 0, 0]} id="testimonials" bgImage="url('/bg_1.jpg')" bgSize='cover' bgAttachment='fixed' pos='relative' bgRepeat='no-repeat'>
        <Flex pt="16" px={[2, 2, 2, 0, 0]} direction="column" h="40rem" alignItems="center" bg="rgba(0, 0, 0, .7)">
            <CommonHeader heading="Testimonials" description="Happy Clients" w={["full"]} descriptionColor="white" />
        </Flex>
    </Box>
  )
}

export default Testimonials