import { ThemeProvider } from 'styled-components'

import { Box, Numero, Text } from './styles'

interface Props {
  valor: string
  text: string
  opacity?: boolean
  border?: boolean
}

function Bloco({ valor, text, opacity = false, border = false }: Props) {
  const theme = {
    opacity,
    border,
  }
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Numero>{valor}</Numero>
        <Text>{text}</Text>
      </Box>
    </ThemeProvider>
  )
}

export { Bloco }
