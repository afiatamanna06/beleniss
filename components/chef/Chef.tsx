import { Flex, Grid } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'
import ChefCard from './ChefCard'
import { chefData } from './ChefData'

function Chef() {
  return (
    <Flex id="chef" direction="column" alignItems="center" mt={[2]} pb="10" pt="20" w="full">
        <CommonHeader heading="Chef" description="Our Master Chef" w={["full"]} />
        <Grid mt="16" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6}>
            {chefData.map(({image, name, description}) => (
              <ChefCard key={name} image={image} name={name} description={description} />
            ))}
        </Grid>
    </Flex>
  )
}

export default Chef