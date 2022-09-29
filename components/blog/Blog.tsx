import { Flex, Grid } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'
import BlogCard from './BlogCard'
import { blogData } from './BlogData'

function Blog() {
  return (
    <Flex id="blog" mb="20" direction="column" alignItems="center" pt="20" w="full">
        <CommonHeader heading="Blog" description="Recent Posts" w={["full"]} />
        <Grid mt="16" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
            {blogData.map(({image, name, description}) => (
              <BlogCard key={name} image={image} name={name} description={description} />
            ))}
        </Grid>
    </Flex>
  )
}

export default Blog