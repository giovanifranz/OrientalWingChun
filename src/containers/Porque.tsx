import { Box, Flex, Heading, Image, Text, UnorderedList, ListItem } from "@chakra-ui/react"

export function Porque() {
    return (
        <Box
            h="100%"
            w={["480px", "480px", "1180px", "1280px"]}
            mx="auto"
            mt="50px"
            justifyContent="space-between"
            display={["block", "block", "flex"]}
        >
            <Box
                display={["block", "block", "flex"]}
            >
                <Image
                    src="./assets/porque.png"
                    w="480px"
                    h="300px"
                />
                <Flex
                    w={["480px", "480px", "1180px", "1280px"]}
                    h="260px"
                    bgImage="./assets/FrameGray.png"
                    justifyContent="space-evenly"
                >
                    <Image
                        src="./assets/Simbolo_Branco.png"
                        w="120px"
                        h="135.45px"
                        mt="60px"
                        display={["none", "none", "block"]}
                    />
                    <Box
                        mt="10px"
                        w="440px"
                    >
                        <Heading
                            fontFamily="Saira"
                            fontSize="36px"
                            fontWeight="bold"
                            lineHeight="50px"
                            color="white"
                            textTransform="uppercase"
                        >
                            Por que o Wing Chun?
                        </Heading>
                        <Box
                            fontFamily="Saira"
                            fontWeight="normal"
                            fontSize="21px"
                            lineHeight="30px"
                            color="white"
                        >
                            <Text>
                                Além do benefício físico, e do aprendizado de técnicas de auto-defesa, os benefícios do Wing Chun também incluem:
                            </Text>
                            <UnorderedList
                                mt="10px"
                            >
                                <ListItem>Melhora da atenção</ListItem>
                                <ListItem>Redução do estresse</ListItem>
                                <ListItem>Aumento de confiança</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                </Flex>
            </Box>

        </Box>
    )
}