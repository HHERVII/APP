import React from 'react';
import {Container, Textheader} from './styles';
interface Typesheader {
  tittle: string;
}
export const Header = ({tittle}: Typesheader) => {
  return (
    <Container heigth={40}>
      <Textheader>{tittle.toUpperCase()}</Textheader>
    </Container>
  );
};
