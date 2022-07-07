import styled from 'styled-components';

import grafite from '@/assets/grafite.png';

export const Container = styled.section`
  width: 100vw;
`;

export const Content = styled.article`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const ImgTreino = styled.img`
  width: 480px;
  height: 300px;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${grafite});
  background-size: cover;
  background-repeat: no-repeat;
  height: 260px;
`;

export const Box = styled.div`
  width: 634px;
  color: var(--white);

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  line-height: 52px;
  color: var(--white);
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Text = styled.p`
  font-size: 21px;
  line-height: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const List = styled.ul`
  font-size: 21px;
  line-height: 30px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-left: 20px;
  }
`;
