// src/app/(route)/landing/LandingPageStyles.tsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

export const Box = styled.header`
  width: 100%;
  height: 100%;
  max-width: 450px;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 1px solid red;
`;

export const Header = styled.div`
  width: 100%;
  height: 15vh;
  max-width: 450px;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid red;
`;

export const FirstLine = styled.div`
  width: 100%;
  height: 7.5vh;
  max-width: 450px;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

export const SecondLine = styled.div`
  width: 100%;
  height: 7vh;
  max-width: 450px;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid green;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 7vh;
  border-radius: 0.5rem;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;
`;

export const List = styled.div`
  width: 27%;
  height: 5vh;
  border-radius: 1rem;
  border: 2px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin-top: 1.5rem;
  gap: 1.5rem;
  border: 1px solid blue;
  height: 100%;

`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 1.125rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Button = styled.button`
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

export const LogoBox = styled.div`
  width: 20%;
  height: 100%;
  max-width: 450px;
  background-color: #ffffff;
  border: 1px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

export const Logo = styled.div`
  width: 44px;
  height: 44px;
  max-width: 450px;
  background-color: #efeff0;
  border-radius: 100%;
`;

export const SearchInputBox = styled.div`
  width: 80%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 5vh;
  background-color: #efeff0;
  border-radius: 1rem;
  border: none;
`;

export const ListItem = styled.div`
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`;

export const TextBox = styled.div`
  width: 80%;
  background-color: #ffffff;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //text-align: center;
  //justify-content: center;
`;

export const Department = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid red;
  display: flex;
  //align-items: center;
  //text-align: center;
  justify-content: left;
  font-size: 20px;
`;

export const Introduction = styled(Department)`
    margin-bottom: 0.5%;
    font-size: 15px;
    align-items: left;
    text-align: left;

`;
export const StudentID = styled(Department)`
    font-size: 10px;

`;
export const Menu = styled(Department)`
    font-size: 10px;

`;


