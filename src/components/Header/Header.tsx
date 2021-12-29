import { Box, Flex, HStack, Heading, Image } from "@chakra-ui/react"
import { RiWhatsappFill, RiFacebookCircleFill, RiInstagramFill } from 'react-icons/ri'

export function Header() {
    return (
        <Box
            bgColor="white"
            w={["full", "full", "1920px", "full"]}
            h="200px"
            px={8}
        >
            <Flex
                w="1200px"
                h="200px"
                mx="auto"
            >
                <Heading
                    as="h1"
                    fontFamily="Zector"
                    fontSize="80px"
                    fontWeight="normal"
                    lineHeight="92px"
                    color="black"
                    mt="57px"
                >
                    Oriental
                </Heading>
                <Image
                    w="423px"
                    h="585px"
                    zIndex={5000}
                    mx="auto"
                    src="./assets/Logo_OWC.png"
                    alt="Oriental Wing Chun"
                />
                <Box>
                    <Heading
                        as="h1"
                        fontFamily="Zector"
                        fontSize="80px"
                        fontWeight="normal"
                        lineHeight="92px"
                        color="black"
                        mt="57px"
                    >
                        Wing Chun
                    </Heading>
                    <Flex>
                        <HStack spacing='5px'>
                            <RiInstagramFill size={30} />
                            <RiFacebookCircleFill size={30} />
                            <RiWhatsappFill size={30} />
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}