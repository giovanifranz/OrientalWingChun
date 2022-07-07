import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  max-width: 1920px;
  background-color: var(--white);
  padding: 30px 0;
`;
export const Content = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 155px;
  height: 155px;
`;

export const Emblema = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 410px;

  h1 {
    font-family: 'Zector';
    font-size: 50px;
    font-weight: 400;
    line-height: 57px;
    color: var(--black);
    margin-left: 15px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    width: 355px;

    h1 {
      font-size: 36px;
      margin-left: 10px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
`;

export const Anchor = styled.a`
  text-decoration: none;
  text-align: right;
  font-family: 'Zector';
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
  width: 410px;
  &:hover {
    cursor: pointer;
  }
`;
