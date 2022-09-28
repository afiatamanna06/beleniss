import { Box, Flex, Image } from '@chakra-ui/react'
import SocialSites from '../common/SocialSites';

interface propTypes {
    image: string;
    name: string;
    description: string;
}

function ChefCard({image, name, description}: propTypes) {
  return (
    <Flex alignItems="start" direction="column">
        <Image src={image} borderRadius="md" h="18rem" w="15rem" objectFit="cover" alt="" />
        <Box fontWeight="semibold" mt="5">{name}</Box>
        <Box color="gray" fontSize="sm" mb="3">{description}</Box>
        <SocialSites />
    </Flex>
  )
}

export default ChefCard