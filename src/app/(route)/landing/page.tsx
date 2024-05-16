// src/app/(route)/landing/page.tsx
"use client";
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 1rem;
`;

const Header = styled.header`
  width: 100%;
  max-width: 640px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin-top: 1.5rem;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.125rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
`;

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>랜딩페이지</Title>
      </Header>
      <Main>
        <Paragraph>
          반응형테스트
        </Paragraph>
        <Button>Get Started</Button>
      </Main>
    </Container>
  );
};

export default LandingPage;
