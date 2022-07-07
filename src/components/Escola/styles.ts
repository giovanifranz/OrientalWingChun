import styled from 'styled-components';

import assinatura from '@/assets/assinatura.png';

export const Container = styled.section`
  width: 100vw;
  max-width: 1920px;
`;

export const Content = styled.article`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding-top: 0;
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Box = styled.div`
  width: 500px;
  margin-top: 260px;

  @media (max-width: 1200px) {
    width: 368px;
  }

  @media (max-width: 768px) {
    width: 280px;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 60px;
  line-height: 94px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const Text = styled.p`
  font-size: 30px;
  line-height: 47px;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Assinatura = styled.p`
  margin-top: 94px;
  font-size: 60px;
  line-height: 94px;
  background-image: url(${assinatura});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 160px;

  @media (max-width: 768px) {
    width: 300px;
    margin: 30px auto;
    font-size: 45px;
    line-height: 60px;
  }
`;

export const Image = styled.img`
  width: 565px;
  height: 810px;

  @media (max-width: 1200px) {
    width: 400px;
    height: 575px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 430px;
  }
`;
