import { Center, Flex, Grid } from '@chakra-ui/react'
import FooterDescription from './FooterDescription'
import Instagram from './Instagram'
import Newsletter from './Newsletter'
import OpenHours from './OpenHours'

function Footer() {
  return (
    <Flex justify="center" bg="#141313" pt={[14, 14, 14, 8]} pb="20" px={[8, 8, 8, 0, 0]}>
        <Center>
            <Grid maxW="70rem" alignItems="start" gap={7} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}>
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