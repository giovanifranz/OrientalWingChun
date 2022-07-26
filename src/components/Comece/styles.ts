import styled, { css } from 'styled-components';

import paisagem from '@/assets/paisagem.png';

export const Container = styled.section`
  width: 100vw;
  max-width: 1920px;
  background-image: url(${paisagem});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -87.5px;
  padding-top: 135px;
  padding-bottom: 50px;
`;

export const Content = styled.article`
  background-color: rgba(255, 255, 255, 0.2);
  width: 100vw;
  padding-top: 100px;
  padding-bottom: 125px;
  position: relative;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 1200px) {
    width: 100%;
    display: block;
  }
`;

export const InstrutorBox = styled.div`
  margin: 15px;
`;

export const Box = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 54px;
  line-height: 50px;
  font-weight: bold;
  color: var(--white);

  mark {
    background-color: transparent;
    color: var(--white);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

type ButtonProps = {
  opacity: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  color: var(--white);
  border: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  ${({ opacity }) =>
    opacity
      ? css`
          opacity: 0.8;
        `
      : css`
          opacity: 1;
        `}
  margin-bottom: 15px;

  svg {
    color: var(--purple);
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const TextProfile = styled.p`
  font-size: 30px;
  line-height: 47px;

  @media (max-width: 768px) {
    margin-top: 30px;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Contato = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  line-height: 47px;
  color: var(--white);
  background-color: var(--purple);
  width: 290px;
  padding: 0 10px;
  text-decoration: none;
  margin-top: 50px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  svg {
    color: var(--green);
  }

  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    width: 215px;
  }
`;

export const Local = styled.h4`
  font-size: 50px;
  font-weight: 400;
  color: var(--white);
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
    height: 80px;
  }
`;

export const TextLocal = styled.p`
  font-size: 30px;
  width: 535px;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TextJornada = styled.p`
  font-size: 20px;
  line-height: 31px;
  text-align: right;
  color: var(--white);
  border-top: 1px solid var(--white);
  position: absolute;
  bottom: 20px;
  right: 10%;
`;
