import { Box, Center, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react"
import Carousel from "nuka-carousel"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import CommonHeader from "../common/CommonHeader"
import TestimonialsCard from "./TestimonialsCard"
import testimonialsList from "./TestimonialsList"

function Testimonials() {

  const numberOfCarouselComponents = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  });

  return (
    <Box mt="28" w="full" px={[4, 4, 4, 0, 0]} id="testimonials" bgImage="url('/bg_1.jpg')" bgSize='cover' bgAttachment='fixed' pos='relative' bgRepeat='no-repeat'>
        <Flex pt="16" px={[2, 2, 2, 0, 0]} direction="column" h="40rem" alignItems="center" bg="rgba(0, 0, 0, .7)">
            <CommonHeader heading="Testimonials" description="Happy Clients" w={["full"]} descriptionColor="white" />
            <Box maxW={["100%", "100%", "100%", "65rem", "65rem"]} mt="20">
                <Carousel 
                    autoplay={true}
                    slidesToShow={numberOfCarouselComponents}
                    renderCenterLeftControls={
                    ({ previousSlide }) => (
                        <IconButton
                        aria-label="Previous slide"
                        icon={<FiChevronLeft size={20} />}
                        onClick={previousSlide}
                        rounded="full"
                        bgColor="#ff2377"
                        color="white"
                        _hover={{ bgColor: "#ff2377" }}
                        sx={{
                            transform: ["translate(-30%, -70%)", "translate(-30%, -70%)", "translate(-30%, -70%)", "translate(-30%, -70%)"],
                        }}
                        />
                    )
                    }
                    renderCenterRightControls={
                    ({ nextSlide }) => (
                        <IconButton
                        aria-label="Next slide"
                        icon={<FiChevronRight size={20} />}
                        onClick={nextSlide}
                        rounded="full"
                        bgColor="#ff2377"
                        color="white"
                        _hover={{ bgColor: "#ff2377" }}
                        sx={{
                            transform: ["translate(30%, -70%)", "translate(30%, -70%)", "translate(30%, -70%)", "translate(30%, -70%)"],
                        }}
                        />
                    )
                    }
                    wrapAround>
                    {testimonialsList.map(({image, title, description, position}) => (
                        <Flex pb="16" key={title} m={3}>
                            <TestimonialsCard image={image} name={title} description={description} position={position} />
                        </Flex>
                    ))}
                </Carousel>
            </Box>
        </Flex>
    </Box>
  )
}

export default Testimonials