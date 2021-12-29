import { Box, Flex, Text } from "@chakra-ui/react"

interface CidadeProps {
    value: string
}

export default function Cidade({ value }: CidadeProps) {
    return (
        <Flex>
            <Box
                bgColor="#753BBD"
                w="5px"
                h="5px"
                mt="21px"
                mr="12px"
            />
            <Text
                fontFamily="Saira"
                fontSize="30px"
                lineHeight="47px"
                fontWeight="normal"
            >
                {value}
            </Text>
        </Flex>
    )
}