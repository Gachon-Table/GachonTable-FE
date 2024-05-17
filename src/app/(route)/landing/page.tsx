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
  List
} from './LandingPageStyles';


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
          <Paragraph>
            반응형테스트
          </Paragraph>
          <Button>Get Started</Button>
        </Main>
      </Box>
    </Container>
  );
};

export default LandingPage;
