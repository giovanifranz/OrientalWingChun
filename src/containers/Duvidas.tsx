import { Box, Heading, Flex, Image, Text, Button } from "@chakra-ui/react"
import { useState } from 'react';

export function Duvidas() {
    const [card, setCard] = useState(<></>);
    const overlayRespostas_1 = (
        <Box
            mt="20px"
            w={["480px","480px","580px"]}
            h={["500px","500px","400px"]}
            bgColor="white"
            border="2px solid black"
            px="40px"
            py="25px"
        >
            <Heading
                as="h4"
                fontFamily="Saira"
                fontWeight="bold"
                fontSize="30px"
                lineHeight="47px"
                textTransform="uppercase"
                color="black"
                mb="10px"
            >
                Não!
            </Heading>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
                mb="47px"
            >
                Na nossa escola visamos apenas o crescimento pessoal.
            </Text>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
            >
                Você irá fazer lutas de treino com seus colegas, porém sem competições ou premiações.
            </Text>
        </Box>
    )
    const overlayRespostas_2 = (
        <Box
            mt="20px"
            w={["480px","480px","580px"]}
            h={["580px","580px","485px"]}
            bgColor="white"
            border="2px solid black"
            px="40px"
            py="25px"
        >
            <Heading
                as="h4"
                fontFamily="Saira"
                fontWeight="bold"
                fontSize="30px"
                lineHeight="47px"
                textTransform="uppercase"
                color="black"
                mb="10px"
            >
                Não!
            </Heading>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
                mb="47px"
            >
                O Wing Chun pode ser praticado por pessoas de todas as idades, graças a sua filosofia de economia de movimento e energia.
            </Text>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
            >
                O mestre Yip Man, mestre de Bruce Lee, praticou o Wing Chun até sua morte, aos 79 anos!
            </Text>
        </Box>
    )
    const overlayRespostas_3 = (
        <Box
            mt="20px"
            w={["480px","480px","800px"]}
            h={["1150px","1150px","780px"]}
            bgColor="white"
            border="2px solid black"
            px="40px"
            py="25px"
        >
            <Heading
                as="h4"
                fontFamily="Saira"
                fontWeight="bold"
                fontSize="30px"
                lineHeight="47px"
                textTransform="uppercase"
                color="black"
                mb="10px"
            >
                AS 3 FORMAS DO WING CHUN
            </Heading>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
                mb="47px"
            >
                Nossa escola trabalha utilizando como base as 3 formas do Wing Chun, como ensinado pelo mestre Yip Man:
            </Text>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
                mb="47px"
            >
                Siu Nim Tao, ou a “pequena idéia”, ensina o básico de movimento, ataque e defesa.
            </Text>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
                mb="47px"
            >
                Chum Kiu, ou “a procura pela ponte”, ensina a olhar o inimigo de outro ângulo, de forma a encontrar seus pontos fracos.
            </Text>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
            >
                Biu Jee, ou “os dedos que voam”, ensina a gerar uma grande quantidade de energia em espaços curtos.
            </Text>
        </Box>
    )
    const overlayRespostas_4 = (
        <Box
            mt="20px"
            w={["480px","480px","580px"]}
            h={["530px", "530px","450px"]}
            bgColor="white"
            border="2px solid black"
            px="40px"
            py="25px"
        >
            <Heading
                as="h4"
                fontFamily="Saira"
                fontWeight="bold"
                fontSize="30px"
                lineHeight="47px"
                textTransform="uppercase"
                color="black"
                mb="10px"
            >
                SÓ R$ 80.00 MENSAIS
            </Heading>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
                mb="47px"
            >
                Por R$80 por mês você pode participar de todas as aulas na sua escola de preferência.
            </Text>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
            >
                O valor é revertido para o aluguel do espaço e aquisição de novos equipamentos
            </Text>
        </Box>
    )
    const overlayRespostas_5 = (
        <Box
            mt="20px"
            w={["480px","480px","580px"]}
            h={["680px","680px","530px"]}
            bgColor="white"
            border="2px solid black"
            px="40px"
            py="25px"
        >
            <Heading
                as="h4"
                fontFamily="Saira"
                fontWeight="bold"
                fontSize="30px"
                lineHeight="47px"
                textTransform="uppercase"
                color="black"
                mb="10px"
            >
                NÃO!
            </Heading>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
                mb="47px"
            >
                Nossa escola não cobra nenhum valor além da mensalidade, porém recomenda a aquisição de vestuário e equipamentos próprios para treino de Wing Chun.                    </Text>
            <Text
                fontFamily="Saira"
                fontWeight="normal"
                fontSize="30px"
                lineHeight="47px"
                color="black"
            >
                Fale com o seu instrutor para saber quais equipamentos ele recomenda para o seu nível.
            </Text>
        </Box>
    )

    return (
        <Box
            w={["480px", "480px", "1180px", "1280px"]}
            display={["block","block","flex"]}
            mt="60px"
            mx="auto"
            justifyContent="space-between"
            mb="50px"
        >
            <Box
                w="530px"
            >
                <Heading
                    fontFamily="Saira"
                    fontWeight="bold"
                    fontSize="60px"
                    lineHeight="94px"
                    color="black"
                    mb="20px"
                >
                    Dúvidas Comuns
                </Heading>
                <Box
                    mb="45px"
                >
                    <Button
                        onClick={() => setCard(overlayRespostas_1)}
                        display="block"
                        mb="5px"      
                        pl={0}
                        bgColor="gray.100"
                        _hover={{
                            background: "gray.300"
                        }}
                    >
                        <Flex>
                            <Box
                                bgColor="#753BBD"
                                w="5px"
                                h="5px"
                                mt="12px"
                                mr="12px"
                            />
                            <Text
                                fontFamily="Saira"
                                fontSize="30px"
                                lineHeight="30px"
                                color="black"
                                fontWeight="normal"
                            >
                                Eu preciso competir?
                            </Text>
                        </Flex>
                    </Button>
                    <Button
                        onClick={() => setCard(overlayRespostas_2)}
                        pl={0}
                        display="block"
                        mb="5px"
                        bgColor="gray.100"
                        _hover={{
                            background: "gray.300"
                        }}
                    >
                        <Flex>
                            <Box
                                bgColor="#753BBD"
                                w="5px"
                                h="5px"
                                mt="12px"
                                mr="12px"
                            />
                            <Text
                                fontFamily="Saira"
                                fontSize="30px"
                                lineHeight="30px"
                                color="black"
                                fontWeight="normal"
                            >
                                Sou muito velho para começar?
                            </Text>
                        </Flex>
                    </Button>
                    <Button
                        onClick={() => setCard(overlayRespostas_3)}
                        pl={0}
                        display="block"
                        mb="5px"
                        bgColor="gray.100"
                        _hover={{
                            background: "gray.300"
                        }}
                    >
                        <Flex>
                            <Box
                                bgColor="#753BBD"
                                w="5px"
                                h="5px"
                                mt="12px"
                                mr="12px"
                            />
                            <Text
                                fontFamily="Saira"
                                fontSize="30px"
                                lineHeight="30px"
                                color="black"
                                fontWeight="normal"
                            >
                                Como funciona o treinamento?
                            </Text>
                        </Flex>
                    </Button>
                    <Button
                        onClick={() => setCard(overlayRespostas_4)}
                        pl={0}
                        display="block"
                        mb="5px"
                        bgColor="gray.100"
                        _hover={{
                            background: "gray.300"
                        }}
                    >
                        <Flex>
                            <Box
                                bgColor="#753BBD"
                                w="5px"
                                h="5px"
                                mt="12px"
                                mr="12px"
                            />
                            <Text
                                fontFamily="Saira"
                                fontSize="30px"
                                lineHeight="30px"
                                color="black"
                                fontWeight="normal"
                            >
                                Quanto custam as aulas?
                            </Text>
                        </Flex>
                    </Button>
                    <Button
                        onClick={() => setCard(overlayRespostas_5)}
                        pl={0}
                        display="block"
                        mb="5px"
                        bgColor="gray.100"
                        _hover={{
                            background: "gray.300"
                        }}
                    >
                        <Flex>
                            <Box
                                bgColor="#753BBD"
                                w="5px"
                                h="5px"
                                mt="12px"
                                mr="12px"
                            />
                            <Text
                                fontFamily="Saira"
                                fontSize="30px"
                                fontWeight="normal"
                                lineHeight="30px"
                                color="black"
                            >
                                Há algum custo adicional?
                            </Text>
                        </Flex>
                    </Button>
                    <Text
                        mt="47px"
                        fontFamily="Saira"
                        fontSize="30px"
                        fontWeight="normal"
                        lineHeight="30px"
                        color="black"
                    >
                        Têm mais dúvidas? Fale com o Sifu!
                    </Text>
                    <Image
                        src="./assets/button.png"
                        mt="10px"
                        _hover={{
                            opacity: 0.6
                        }}
                    />
                </Box>
            </Box>
            {card}
        </Box>
    )
}