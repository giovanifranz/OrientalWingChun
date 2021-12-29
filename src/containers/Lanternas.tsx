import { Box, Text, Heading } from "@chakra-ui/react"

export default function Lanternas() {
    return (
        <Box
            bgImage="./assets/Lanternas.png"
            bgSize="cover"
            w="100%"
            h="993px"
            pt={["65px", "65px", "380px"]}
        >
            <Box
                w={["480px", "480px", "1180px","1280px"]}
                h={["800px", "800px", "430px"]}
                bgColor="rgba(0, 0, 0, 0.6)"
                mx="auto"
                border="3px solid white"
                textAlign="center"
            >
                <Heading
                    as="h1"
                    fontFamily="Saira"
                    fontWeight="bold"
                    fontSize="40px"
                    lineHeight="63px"
                    color="white"
                    textTransform="uppercase"
                    mt="25px"
                >
                    Wing Chun
                </Heading>
                <Heading
                    as="h3"
                    fontFamily="Saira"
                    fontWeight="normal"
                    fontSize="30px"
                    color="white"
                >
                    A simples arte da auto-defesa
                </Heading>
                <Text
                    textAlign="left"
                    fontFamily="Saira"
                    fontWeight="normal"
                    fontSize="28px"
                    lineHeight="47px"
                    color="white"
                    w={["420px", "420px", "1080px"]}
                    mx={"auto"}
                    mt={["30px"]}
                >
                    É um sistema de luta surgido no sul da China que se distingue pela economia de movimentos, sendo um sistema de defesa pessoal. Simples e eficiente, descarta todo movimento acrobático. É uma arte marcial singular, desenvolvida para permitir que qualquer tipo de pessoa, independentemente de tamanho, força ou sexo, possa se defender de agressores maiores e mais fortes.
                </Text>
            </Box>
        </Box>
    )
}