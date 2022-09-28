import { Flex } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'

function Blog() {
  return (
    <Flex id="blog" direction="column" alignItems="center" mt={[12]} pt="20" w="full">
        <CommonHeader heading="Blog" description="Recent Posts" w={["full"]} />
    </Flex>
  )
}

export default Blog