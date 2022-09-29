import { Box, IconButton, Image } from '@chakra-ui/react'
import Carousel from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function HomeCarousel() {
  return (
    <Box zIndex={1}>
        <Carousel 
            autoplay={true}
            slidesToShow={1}
            animation="fade"
            withoutControls={true}
            defaultControlsConfig={{
                      pagingDotsStyle: {
                        fill: "#ff2377",
                        width: "2rem",
                      }
                }}
            wrapAround>
                 <Image objectFit="cover" src="/bg_1.jpg" w="full" h="100vh" alt="" />
                 <Image objectFit="cover" src="/bg_2.jpg" w="full" h="100vh" alt="" /> 
                 <Image objectFit="cover" src="/bg_3.jpg" w="full" h="100vh" alt="" />
                 <Image objectFit="cover" src="/bg_4.jpg" w="full" h="100vh" alt="" />     
        </Carousel>
    </Box>
  )
}

export default HomeCarousel