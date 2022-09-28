import { Flex, Grid } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'
import MenuCard from './MenuCard'
import { menuData } from './MenuData'

function Menu() {
  return (
    <Flex id="menu" direction="column" alignItems="center" pt="20" w="full" px={[4, 4, 4, 0, 0]}>
        <CommonHeader heading="Specialities" description="Our Menu" w={["full"]} />
        <Grid mt="16" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={5}>
          <Flex direction="column" gap={5}>
            {menuData.slice(0, 3).map(({image, name, description, price}) => (
              <MenuCard key={name} image={image} name={name} description={description} price={price} />
            ))}
          </Flex>
          <Flex direction="column" gap={5}>
            {menuData.slice(3, 6).map(({image, name, description, price}) => (
              <MenuCard key={name} image={image} name={name} description={description} price={price} />
            ))}
          </Flex>
          <Flex direction="column" gap={5}>
            {menuData.slice(6, 9).map(({image, name, description, price}) => (
              <MenuCard key={name} image={image} name={name} description={description} price={price} />
            ))}
          </Flex>
        </Grid>
    </Flex>
  )
}

export default Menu