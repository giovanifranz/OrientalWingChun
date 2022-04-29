import { EnderecoProps } from './models'
import { Local, TextLocal } from './styles'

function Endereco({ local, rua, endereco }: EnderecoProps) {
  return (
    <div>
      <Local>{local}</Local>
      <TextLocal>
        {rua}
        <br />
        {endereco}
      </TextLocal>
    </div>
  )
}

export { Endereco }
