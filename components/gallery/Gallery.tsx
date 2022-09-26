import { Flex } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'

function Gallery() {
  return (
    <Flex direction="column">
        <CommonHeader heading="Gallery" description="Our Hot Picked Cakes" w={["full"]} />
    </Flex>
  )
}

export default Gallery