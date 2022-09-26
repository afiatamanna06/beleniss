import { Flex } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'

function Menu() {
  return (
    <Flex id="menu" direction="column" alignItems="center" mt={[80, 80, 80, 0, 0]} pt="20" w="full">
        <CommonHeader heading="Specialities" description="Our Menu" w={["full"]} />
    </Flex>
  )
}

export default Menu