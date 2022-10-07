import styled from 'styled-components/native';
type Dimentions = {
  heigth: number;
};
export const Container = styled.View<Dimentions>`
  width: 100%;
  height: ${({heigth}) => heigth}px;
  background-color: ${({theme}) => theme.colors.blue};
  color: white;
  justify-content: center;
  text-align: center;
`;

export const Textheader = styled.Text`
  color: white;
  text-align: justify;
  width: 30%;
  margin: 0px auto;
  font-weight: bold;
`;
