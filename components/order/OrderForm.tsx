import { Box, Button, Flex, Input, Select } from '@chakra-ui/react'
import CommonHeader from '../common/CommonHeader'

const cakeFlavour = [
    { value: "Black Forest", displayText: "Black Forest" },
    { value: "Yellow Butter Cake", displayText: "Yellow Butter Cake" },
    { value: "Pound Cake", displayText: "Pound Cake" },
    { value: "Red Velvet Cake", displayText: "Red Velvet Cake" },
    { value: "Carrot Cake", displayText: "Carrot Cake" },
    { value: "Sponge Cake", displayText: "Sponge Cake" },
    { value: "Genoise Cake", displayText: "Genoise Cake" },
    { value: "Chiffon Cake", displayText: "Chiffon Cake" },
  ];

const cakeKg = [
    { value: "0.5", displayText: "0.5" },
    { value: "1", displayText: "1" },
    { value: "1.5", displayText: "1.5" },
    { value: "2.5", displayText: "2.5" },
    { value: "5", displayText: "5" },
    { value: "10", displayText: "10" },
    { value: "Custom", displayText: "Custom" },
  ];


function OrderForm() {
  return (
    <Flex direction="column" pb="14" backdropFilter="blur(4px)" ml={[0, 0, 0, 80, 80]} gap={5} w={["100%", "100%", "100%", "43rem", "43rem"]} alignItems="center" bg="rgba(0, 0, 0, .4)">
        <CommonHeader heading="Order" description="Your Cake" mt="-50" w={["full"]} descriptionColor="white" />
        <Flex direction={["column", "column", "column", "row", "row"]} gap={5} color="white">
            <Flex direction="column">
                <Box>Name</Box>
                <Input minW="18rem" _placeholder={{ color: "white" }} borderRadius="none" type="text" placeholder="Name" bg="rgba(0, 0, 0, .5)" border="0px" _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none"  }} />
            </Flex>
            <Flex direction="column">
                <Box>Email</Box>
                <Input minW="18rem" _placeholder={{ color: "white" }} borderRadius="none" type="text" placeholder="Email" bg="rgba(0, 0, 0, .5)" border="0px" _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none" }} />
            </Flex>
        </Flex>
        <Flex direction={["column", "column", "column", "row", "row"]} gap={5} color="white">
            <Flex direction="column">
                <Box>Address</Box>
                <Input minW="18rem" _placeholder={{ color: "white" }} borderRadius="none" type="text" placeholder="Address" bg="rgba(0, 0, 0, .5)" border="0px" _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none"  }} />
            </Flex>
            <Flex direction="column">
                <Box>Phone</Box>
                <Input minW="18rem" _placeholder={{ color: "white" }} borderRadius="none" type="tel" placeholder="Phone" bg="rgba(0, 0, 0, .5)" border="0px" _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none" }} />
            </Flex>
        </Flex>
        <Flex direction={["column", "column", "column", "row", "row"]} gap={5} color="white">
            <Flex direction="column">
                <Box>Date</Box>
                <Input 
                    minW="18rem" 
                    sx={{ 
                        "&::-webkit-calendar-picker-indicator": {
                            filter: "invert(1)"
                        }
                    }} 
                    borderRadius="none" 
                    type="date" 
                    placeholder="Date" 
                    bg="rgba(0, 0, 0, .5)" 
                    border="0px" 
                    _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none"  }} 
                />
            </Flex>
            <Flex direction="column">
                <Box>Time</Box>
                <Input 
                    minW="18rem" 
                    sx={{ 
                        "&::-webkit-calendar-picker-indicator": {
                            filter: "invert(1)"
                        }
                    }} 
                    borderRadius="none" 
                    type="time" 
                    placeholder="Time" 
                    bg="rgba(0, 0, 0, .5)" 
                    border="0px" 
                    _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none"  }} 
                />
            </Flex>
        </Flex>
        <Flex direction={["column", "column", "column", "row", "row"]} gap={5} color="white">
            <Flex direction="column">
                <Box>Cake Flavour</Box>
                <Select minW="18rem" borderRadius="none" bg="rgba(0, 0, 0, .5)" border="0px" _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none"  }}>
                    {cakeFlavour.map(({ value, displayText }) => (
                        <option key={displayText} value={value} style={{ backgroundColor: "rgb(47, 48, 55)" }}>
                        {displayText}
                        </option>
                    ))}
                </Select>
            </Flex>
            <Flex direction="column">
                <Box>Kg</Box>
                <Select minW="18rem" borderRadius="none" bg="rgba(0, 0, 0, .5)" border="0px" _focus={{ borderWidth: "0px", borderColor: "#C8A97E", outline: "0", WebkitAppearance: "none", boxShadow: "none", WebkitBoxShadow: "none"  }}>
                    {cakeKg.map(({ value, displayText }) => (
                        <option key={displayText} value={value} style={{ backgroundColor: "rgb(47, 48, 55)" }}>
                        {displayText}
                        </option>
                    ))}
                </Select>
            </Flex>
        </Flex>
        <Button mt="5" borderRadius="none" bg="#C8A97E" border="1px" borderColor="#C8A97E" color="white" p="6" _hover={{ color: "white", bg: "rgba(0, 0, 0, .4)", border: "1px", borderColor: "#C8A97E" }} _active={{ color: "white", bg: "rgba(0, 0, 0, .4)", border: "1px", borderColor: "#C8A97E" }}>Order Your Cake</Button>
    </Flex>
  )
}

export default OrderForm