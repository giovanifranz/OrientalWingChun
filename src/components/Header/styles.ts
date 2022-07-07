import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--white);
  width: 100vw;
  max-width: 1920px;
  height: 200px;
  left: 0;
  right: 0;
  top: 0;
`

export const Content = styled.div`
  display: flex;
  width: 1200px;
  height: 200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 360px;
  }
`

export const Title = styled.h1`
  font-family: 'Zector';
  font-size: 80px;
  font-weight: normal;
  line-height: 92px;
  color: var(--black);
  margin-top: 60px;

  @media (max-width: 1200px) {
    font-size: 55px;
    line-height: 72px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`

export const Image = styled.img`
  width: 425px;
  height: 585px;
  z-index: 99999;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 230px;
    height: 280px;
    margin-right: 8px;
  }
`

export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const HStack = styled.div`
  width: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

// para ter redes sociais clicaveis no header
export const Anchor = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
