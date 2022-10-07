import styled from 'styled-components/native';
type Dimentions = {
  heigth: number;
};
export const ContainerModal = styled.View<Dimentions>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  justify-content: center;
  text-align: center;
  position: absolute;
  padding: 50px;
`;
export const ContanierCard = styled.View`
  width: 100%;
  height: 300px;
  background-color: ${({theme}) => theme.colors.canvas};
  color: white;
  justify-content: center;
  text-align: center;
  padding: 50px;
  margin: auto;
  border-radius: 20px;
`;
export const ButtonM = styled.TouchableOpacity`
  height: 40px;
  width: 80%;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.blue};
  margin: 12px auto;
`;
