// src/app/(route)/landing/page.tsx
"use client";
import React from 'react';
import {
  Container,
  Box,
  Header,
  FirstLine,
  Main,
  Paragraph,
  Button,
  LogoBox,
  Logo,
  SearchInputBox,
  SearchInput,
  SecondLine,
  ListBox,
  List,
} from './LandingPageStyles';
import ResponsiveTest from './ResponsiveTest'; // 새로운 컴포넌트를 가져옴
import Navigation from './Navigation'; // Navigation 컴포넌트를 import

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Box>
        <Header>
          <FirstLine>
            <LogoBox>
              <Logo />
            </LogoBox>
            <SearchInputBox>
              <SearchInput />
            </SearchInputBox>
          </FirstLine>
          <SecondLine>
            <ListBox>
              <List>혼잡도 많은 순</List>
              <List>혼잡도 적은 순</List>
              <List>학생증 불필요</List>
            </ListBox>
          </SecondLine>
        </Header>
        <Main>
          <ResponsiveTest />
        </Main>
        <Navigation />
      </Box>
    </Container>
  );
};

export default LandingPage;
