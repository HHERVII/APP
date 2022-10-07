import React from 'react';
import {BodyContainer, Textheader} from './styles';
interface Typesheader {
  tittle: string;
  styleSelected: {
    borderColor: string;
    backGroundColor: string;
    textColor: string;
  };
}
export const Body = ({tittle, styleSelected}: Typesheader) => {
  return (
    <BodyContainer heigth={250} styleSelected={styleSelected}>
      <Textheader styleSelected={styleSelected}>
        {tittle.toUpperCase()}
      </Textheader>
    </BodyContainer>
  );
};
