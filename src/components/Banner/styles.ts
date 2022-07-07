import styled from 'styled-components'

import lanternas from '@/assets/lanternas.png'

export const Container = styled.section`
  background-image: url(${lanternas});
  background-size: cover;
  max-width: 1920px;
  width: 100vw;
  height: 990px;
  padding-top: 380px;

  @media (max-width: 1200px) {
    padding-top: 65px;
  }
`

export const Content = styled.article`
  width: 80%;
  padding: 25px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid var(--white);
  text-align: center;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  line-height: 65px;
  color: var(--white);
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 52px;
  }
`

export const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 30px;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 40px;
  }
`

export const Text = styled.p`
  text-align: left;
  font-size: 26px;
  line-height: 47px;
  color: var(--white);
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`
