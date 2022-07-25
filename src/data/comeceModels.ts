type InstrutorProps = {
  name: string;
  href: string;
  telefone: string;
};

type EnderecoProps = {
  local: string;
  rua: string;
  endereco: string;
};

interface IModel {
  cachoeirinha: {
    instrutor: InstrutorProps;
    endereco: EnderecoProps;
  };
  gravataí: {
    instrutor: InstrutorProps;
    endereco: EnderecoProps;
  };
  canoas: {
    instrutor: InstrutorProps;
    endereco: EnderecoProps;
  };
}

const model: IModel = {
  cachoeirinha: {
    instrutor: {
      name: 'Iago Paz',
      href: 'https://api.whatsapp.com/send?phone=555199188952',
      telefone: '(51) 9918 -8952',
    },
    endereco: {
      local: 'lion artes marciais',
      rua: 'Av. das Figueiras, 459',
      endereco: 'Santa Bárbara, Cachoeirinha/RS',
    },
  },
  gravataí: {
    instrutor: {
      name: 'Fábia Dias',
      href: 'https://api.whatsapp.com/send?phone=555199188952',
      telefone: '(51) 9918 -8952',
    },
    endereco: {
      local: 'academia fitness',
      rua: 'Rua 26 de Julho, 1600',
      endereco: 'Parque Florido, Gravataí/RS',
    },
  },
  canoas: {
    instrutor: {
      name: 'Pedro R.',
      href: 'https://api.whatsapp.com/send?phone=555199188952',
      telefone: '(51) 9918 -8952',
    },
    endereco: {
      local: 'kyokushin dojo',
      rua: 'Av. Dr. Deville, 556',
      endereco: 'Santo Ângelo, Canoas/RS',
    },
  },
};

export { model };
export type { EnderecoProps, IModel, InstrutorProps };
