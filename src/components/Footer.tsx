import { Box, Heading, HStack, Flex, Image, Text } from "@chakra-ui/react"
import { RiWhatsappFill, RiFacebookCircleFill, RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
    return (
        <Box
            w={["full", "full", "1920px", "full"]}
            h="100%"
            bgColor="white"
        >
            <Flex
                w={["480px", "480px", "1180px", "1280px"]}
                justifyContent='space-between'
                align='center'
                mt='15px'
                mx="auto"
            >
                <Flex>
                    <Image
                        src="./assets/Emblema.png"
                        h="154px"
                        w="154px"
                        mr="20px"
                        alt="Emblema"
                    />
                    <Heading
                        as="h2"
                        h="154px"
                        w="250px"
                        fontFamily="Zector"
                        fontWeight="normal"
                        fontSize="50px"
                        lineHeight="57px"
                        mt="19px"
                        display={["none", "none", "block"]}
                    >
                        Oriental Wing Shun
                    </Heading>
                </Flex>
                <HStack spacing='5px'>
                    <RiInstagramFill size={65} />
                    <RiFacebookCircleFill size={65} />
                    <RiWhatsappFill size={65} />
                </HStack>
                <Box>
                    <Text
                        fontFamily="Zector"
                        fontWeight="normal"
                        fontSize="20px"
                        lineHeight="23px"
                        textAlign="right"
                        color="black"
                        textTransform="uppercase"
                        w="170px"
                    >
                        Desenvolvido por
                    </Text>
                    <Image
                        src="./assets/logo.png"
                        w="333px"
                        h="51px"
                        alt="Desenvolvido por Highlander Tech"
                    />
                </Box>
            </Flex>
        </Box>
    )
}