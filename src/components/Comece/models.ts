interface InstrutorProps {
  name: string
  href: string
  telefone: string
}

interface EnderecoProps {
  local: string
  rua: string
  endereco: string
}

const model = {
  cachoeirinha: {
    instrutor: {
      name: 'Iago Paz',
      href: 'https://api.whatsapp.com/send?phone=555199188952',
      telefone: '(51) 9918 -8952',
    } as InstrutorProps,
    endereco: {
      local: 'lion artes marciais',
      rua: 'Av. das Figueiras, 459',
      endereco: 'Santa Bárbara, Cachoeirinha/RS',
    } as EnderecoProps,
  },
  gravata: {
    instrutor: {
      name: 'Fábia Dias',
      href: 'https://api.whatsapp.com/send?phone=555199188952',
      telefone: '(51) 9918 -8952',
    } as InstrutorProps,
    endereco: {
      local: 'academia fitness',
      rua: 'Rua 26 de Julho, 1600',
      endereco: 'Parque Florido, Gravataí/RS',
    } as EnderecoProps,
  },
  canoas: {
    instrutor: {
      name: 'Pedro R.',
      href: 'https://api.whatsapp.com/send?phone=555199188952',
      telefone: '(51) 9918 -8952',
    } as InstrutorProps,
    endereco: {
      local: 'kyokushin dojo',
      rua: 'Av. Dr. Deville, 556',
      endereco: 'Santo Ângelo, Canoas/RS',
    } as EnderecoProps,
  },
}

export { model }
export type { EnderecoProps, InstrutorProps }
