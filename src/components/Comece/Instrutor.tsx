import { RiWhatsappFill } from 'react-icons/ri'

import { InstrutorProps } from './models'
import { Contato, TextProfile, Title } from './styles'

function Instrutor({ name, telefone, href }: InstrutorProps) {
  return (
    <div>
      <TextProfile>Instrutor</TextProfile>
      <Title>{name}</Title>
      <Contato href={href} target="_blank">
        <RiWhatsappFill size={40} />
        {telefone}
      </Contato>
    </div>
  )
}

export { Instrutor }
