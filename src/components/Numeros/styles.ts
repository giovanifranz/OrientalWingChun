import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  max-width: 1920px;
  z-index: 99999;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Numero = styled.p`
  font-size: 80px;
  line-height: 126px;
  opacity: ${({ theme }) => (theme.opacity ? 0.8 : 1)};

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 56px;
  }
`;

export const Text = styled.p`
  font-size: 30px;
  line-height: 47px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  min-height: 175px;
  border-left: ${({ theme }) => theme.border && '1px solid rgba(0, 0, 0, 0.2)'};
  border-right: ${({ theme }) => theme.border && '1px solid rgba(0, 0, 0, 0.2)'};
  background-color: var(--gray-light);

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
  }
`;
