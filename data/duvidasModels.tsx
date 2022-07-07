import { Text } from '../src/components/Duvidas/styles';

interface IDuvida {
  question: string;
  title: string;
  text: JSX.Element;
  opacity?: number;
}

const duvidas: IDuvida[] = [
  {
    question: 'Eu preciso competir?',
    title: 'Não',
    text: (
      <Text>
        Na nossa escola visamos apenas o crescimento pessoal.
        <br />
        <br />
        Você irá fazer lutas de treino com seus colegas, porém sem competições ou
        premiações.
      </Text>
    ),
  },
  {
    question: 'Sou muito velho para começar?',
    title: 'Não',
    text: (
      <Text>
        O Wing Chun pode ser praticado por pessoas de todas as idades, graças a sua
        filosofia de economia de movimento e energia.
        <br />
        <br />O mestre Yip Man, mestre de Bruce Lee, praticou o Wing Chun até sua morte,
        aos 79 anos!
      </Text>
    ),
  },
  {
    question: 'Como funciona o treinamento?',
    title: 'AS 3 FORMAS DO WING CHUN',
    text: (
      <Text>
        Nossa escola trabalha utilizando como base as 3 formas do Wing Chun, como ensinado
        pelo mestre Yip Man:
        <br />
        <br />
        Siu Nim Tao, ou a “pequena idéia”, ensina o básico de movimento, ataque e defesa.
        <br />
        <br />
        Chum Kiu, ou “a procura pela ponte”, ensina a olhar o inimigo de outro ângulo, de
        forma a encontrar seus pontos fracos.
        <br />
        <br />
        Biu Jee, ou “os dedos que voam”, ensina a gerar uma grande quantidade de energia
        em espaços curtos,
      </Text>
    ),
  },
  {
    question: 'Quanto custam as aulas?',
    title: 'SÓ R$ 80.00 MENSAIS',
    text: (
      <Text>
        Por R$80 por mês você pode participar de todas as aulas na sua escola de
        preferência.
        <br />
        <br />O valor é revertido para o aluguel do espaço e aquisição de novos
        equipamentos
      </Text>
    ),
  },
  {
    question: 'Há algum custo adicional?',
    title: 'NÃO',
    text: (
      <Text>
        Nossa escola não cobra nenhum valor além da mensalidade, porém recomenda a
        aquisição de vestuário e equipamentos próprios para treino de Wing Chun.
        <br />
        <br />
        Fale com o seu instrutor para saber quais equipamentos ele recomenda para o seu
        nível.
      </Text>
    ),
  },
];

export { duvidas };
export type { IDuvida };
