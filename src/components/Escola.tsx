import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react"

export default function Escola() {
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
                w="500px"
                mt={[0, 0, "280px"]}
            >
                <Heading
                    fontFamily="Saira"
                    fontWeight="bold"
                    fontSize="60px"
                    lineHeight="94px"
                    color="black"
                    mb="30px"
                >
                    Nossa Escola
                </Heading>
                <Text
                    fontFamily="Saira"
                    fontWeight="normal"
                    fontSize="30px"
                    lineHeight="47px"
                    color="black"
                >
                    A Oriental Wing Chun foi fundada em 2017 com o intuito de transmitir não apenas o conhecimento marcial, mas também a filosofia do kung fu oriental que vêm através do Wing Chun.
                </Text>
                <Text
                    fontFamily="Saira"
                    fontWeight="normal"
                    fontSize="30px"
                    lineHeight="47px"
                    color="black"
                    mt="30px"
                >
                    Nossos alunos recebem aulas que mesclam teoria e prática, de forma a trabalhar corpo, mente e espírito como um só, os preparando não apenas para situações de defesa-pessoal, mas os ajuda a serem pessoas mais confiantes.
                </Text>
                <Heading
                    mt="94px"
                    fontFamily="Saira"
                    fontSize="60px"
                    fontWeight="normal"
                    lineHeight="94px"
                    color="black"
                    zIndex={5000}
                    bgImage="./assets/assinatura.png"
                    bgRepeat="no-repeat"
                    bgPosition="center"
                    h="160px"
                >
                    Sifu Iago Paz
                </Heading>
            </Box>
            <Image
                src="./assets/treino.png"
                w="564px"
                h="812px"
            />
        </Box>
    )
}