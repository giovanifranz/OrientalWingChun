import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react"
import Cidade from '../components/Cidades'

export default function Comece() {
    return (
        <Box>
            <Image
                src="./assets/Data.png"
                w={["616px", "616px", "1105px"]}
                h={["86.96px", "86.96px", "200px"]}
                mx="auto"
                mb={["-20", "-20", "-100px"]}
                zIndex={5000}
            />
            <Box
                bgImage="./assets/FUNDO_ESCOLAS.png"
                bgSize="cover"
                h="800px"
                w="100%"
                pt="130px"
            >
                <Box
                    w="100%"
                    h="525px"
                    bgColor="rgba(255, 255, 255, 0.2);"
                >
                    <Flex
                        w={["480px", "480px", "1180px", "1280px"]}
                        mx="auto"
                        justifyContent="space-between"
                        color="white"
                    >
                        <Box>
                            <Heading
                                fontFamily="Saira"
                                fontWeight="bold"
                                fontSize="60px"
                                lineHeight="74px"
                                textTransform="uppercase"
                                mt="100px"
                                mb="30px"
                            >
                                Comece a Treinar
                            </Heading>
                            <Cidade value="Cachoeirinha" />
                            <Cidade value="Canoas" />
                            <Cidade value="Gravataí" />
                        </Box>
                        <Box
                            h="70px"
                            mt="450px"
                            fontFamily="Saira"
                            fontSize="20px"
                            lineHeight="31px"
                            display={["none", "none", "block"]}
                        >
                            <Text mb="5px" >
                                Uma jornada de mil milhas
                                <br />
                                Começa com um passo.
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box
                    color="white"
                    textAlign="center"
                    fontFamily="Saira"
                    fontSize="20px"
                    lineHeight="31px"
                    display={["block", "block", "none"]}
                >
                    <Text mt="10px">
                        Uma jornada de mil milhas
                        <br />
                        Começa com um passo.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}