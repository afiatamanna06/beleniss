import { Box } from '@chakra-ui/react'
import OrderForm from './OrderForm'

function Order() {
  return (
    <Box mt="28" h={["100%", "100%", "100%", "45rem"]} pt={[0, 0, 0, 20, 20]} w="full" px={[2, 2, 2, 0, 0]} id="order" bgImage="url('/order_bg.jpg')" bgSize='cover' bgAttachment='fixed' pos='relative' bgRepeat='no-repeat'>
        <OrderForm />
    </Box>
  )
}

export default Order