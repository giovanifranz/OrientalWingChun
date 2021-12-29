import { Box, Flex, Heading, Image } from "@chakra-ui/react"

export default function HeaderSM() {
    return (
        <Box
            bgColor="white"
            w="full"
            h="200px"
        >
            <Flex
                w="600px"
                h="200px"
                mx="auto"
                px={8}
            >
                <Image
                    w="231.36px"
                    h="280.23px"
                    zIndex={5000}
                    src="./assets/Logo_OWC.png"
                    mr="50px"
                    alt="Logo"
                />
                <Heading
                    as="h1"
                    fontFamily="Zector"
                    fontSize="50px"
                    fontWeight="normal"
                    lineHeight="60px"
                    color="black"
                    mt="57px"
                >
                    Oriental Wing Chun
                </Heading>
            </Flex>
        </Box>
    )
}