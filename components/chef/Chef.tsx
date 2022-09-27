import { Flex } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'

function Chef() {
  return (
    <Flex id="chef" direction="column" alignItems="center" mt={[12]} pt="20" w="full">
        <CommonHeader heading="Chef" description="Our Master Chef" w={["full"]} />
    </Flex>
  )
}

export default Chef