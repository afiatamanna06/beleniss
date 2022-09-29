import { Center, Flex, Grid } from '@chakra-ui/react'
import FooterDescription from './FooterDescription'
import Instagram from './Instagram'
import Newsletter from './Newsletter'
import OpenHours from './OpenHours'

function Footer() {
  return (
    <Flex justify="center" bg="#141313" py="8">
        <Center>
            <Grid maxW="70rem" alignItems="start" gap={6} templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
                <FooterDescription />
                <OpenHours />
                <Instagram />
                <Newsletter />
            </Grid>
        </Center>
    </Flex>
  )
}

export default Footer