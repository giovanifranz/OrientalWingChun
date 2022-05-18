import { RiWhatsappFill } from 'react-icons/ri'

import { InstrutorProps } from './models'
import { Contato, InstrutorBox, TextProfile, Title } from './styles'

function Instrutor({ name, telefone, href }: InstrutorProps) {
  return (
    <InstrutorBox>
      <TextProfile>Instrutor</TextProfile>
      <Title>{name}</Title>
      <Contato href={href} target="_blank">
        <RiWhatsappFill size={40} />
        {telefone}
      </Contato>
    </InstrutorBox>
  )
}

export { Instrutor }
