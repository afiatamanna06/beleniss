import { Flex, Grid, Image } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'

const galleryImages = ["/dish1.jpg", "/dish2.jpg", "/dish3.jpg", "/dish4.jpg", "/dish5.jpg", "/dish6.jpg", "/dish7.jpg", "/dish8.jpg"]

function Gallery() {
  return (
    <Flex direction="column" alignItems="center" mt={[80, 80, 80, 0, 0]} w="full">
        <CommonHeader heading="Gallery" description="Our Hot Picked Cakes" w={["full"]} />
        <Grid w="full" alignItems="center" mt="20" templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
            {galleryImages.map((image) => (
                <Image objectFit="cover" key={image} src={image} alt="" />
            ))}
        </Grid>
    </Flex>
  )
}

export default Gallery