import styled from 'styled-components/native';
type Dimentions = {
  heigth: number;
};
export const Container = styled.View<Dimentions>`
  width: 100%;
  height: ${({heigth}) => heigth}px;
  background-color: ${({theme}) => theme.colors.canvas};
`;

export const ButtonBlue = styled.TouchableOpacity`
  height: 60px;
  width: 45%;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.blue};
  margin: 12px auto;
`;
export const ButtonRed = styled.TouchableOpacity`
  height: 60px;
  width: 45%;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.red};
  margin: 12px auto;
`;
export const TexButton = styled.Text`
  color: white;
  text-align: center;
  width: 30%;
  margin: auto;
  font-weight: bold;
`;
export const ContanierButtons = styled.View`
  width: 100%;
  padding: 0px
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const TextInfo = styled.Text`
  color: black;
  text-align: justify;
  width: 100%;
  margin: auto;
  font-weight: bold;
`;

export const ImageC = styled.Image`
  width: 40%;
  height: 40%;
  margin: 0px auto;
  border-radius: 12px;
`;
