import styled from 'styled-components/native';
type Dimentions = {
  heigth?: number;
  styleSelected?: {
    borderColor: string;
    backGroundColor: string;
    textColor: string;
  };
};
export const BodyContainer = styled.View<Dimentions>`
  width: 80%;
  height: ${({heigth}) => heigth}px;
  background-color: ${({styleSelected, theme}) =>
    styleSelected?.backGroundColor ?? theme.colors.greenHue};
  color: black;
  justify-content: center;
  text-align: center;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 12px red;
  border-width: 1px;
  border-color: ${({styleSelected, theme}) =>
    styleSelected?.borderColor ?? theme.colors.body};
`;

export const Textheader = styled.Text<Dimentions>`
  color: ${({styleSelected}) => styleSelected?.borderColor ?? 'black'};
  text-align: center;
  width: 60%;
  margin: auto;
  font-weight: bold;
`;
