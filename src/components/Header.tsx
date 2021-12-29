import { Box, Flex, Heading, Image } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box
            bgColor="white"
            w={["full","full","1920px","full"]}
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
                    alt="Oriental Logo"
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
                        <Image
                            src="./assets/INSTA_ICON.png"
                            alt="Logo"
                            w="25px"
                            h="25px"
                            mr="10px"
                        />
                        <Image
                            src="./assets/FACE_ICON.png"
                            alt="Logo"
                            w="25px"
                            h="25px"
                            mr="10px"
                        />
                        <Image
                            src="./assets/WHATS_ICON-1.png"
                            alt="Logo"
                            w="25px"
                            h="25px"
                        />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}