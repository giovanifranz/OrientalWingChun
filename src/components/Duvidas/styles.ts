import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
`

export const Content = styled.article`
  width: 80%;
  margin: 55px auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 54px;
  text-transform: uppercase;
  margin-bottom: 25px;

  mark {
    background-color: transparent;
    text-decoration: underline;
  }
`

export const Text = styled.p`
  font-size: 30px;
  line-height: 47px;
`

export const Button = styled.button`
  margin-bottom: 15px;
  background-color: transparent;
  border: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  opacity: ${({ theme }) => theme.opacity};

  svg {
    color: var(--purple);
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const Box = styled.div`
  padding: 30px;
  background-color: var(--white);
  border: 2px solid var(--black);
  max-width: 580px;
`

export const CardTitle = styled.h4`
  font-size: 30px;
  text-transform: uppercase;
`
