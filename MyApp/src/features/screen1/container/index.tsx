import React, {useState} from 'react';
import {Alert, Dimensions, Image} from 'react-native';
import {Header} from '../../../../shared/header';
import {ModalComponent} from '../../../../shared/modal';
import {Body} from '../components/bodyScreen';
import {
  ButtonBlue,
  ButtonRed,
  Container,
  ContanierButtons,
  ImageC,
  TexButton,
  TextInfo,
} from './styles';
import ImageHola from '../../../images/Hola.jpg';
import {theme} from '../../../../theme';
const heigth: number = Dimensions.get('window').height;
interface Selectedata {
  borderColor: string;
  backGroundColor: string;
  textColor: string;
  colorSelect: string;
}
export const GeneraslScreen = () => {
  const [IsModal, setIsModal] = useState<boolean | undefined>(false);
  const [SelectData, setSelectData] = useState<Selectedata>({});
  const SelectModal = (select: string) => {
    switch (select) {
      case 'red':
        setSelectData({
          backGroundColor: theme.colors.redhue,
          borderColor: theme.colors.red,
          textColor: theme.colors.red,
          colorSelect: 'Rojo',
        });
        setIsModal(true);
        break;
      case 'blue':
        setSelectData({
          backGroundColor: theme.colors.blueHue,
          borderColor: theme.colors.blue,
          textColor: theme.colors.blue,
          colorSelect: 'Azul',
        });
        setIsModal(true);
        break;
      default:
        setSelectData({
          backGroundColor: theme.colors.greenHue,
          borderColor: theme.colors.body,
          textColor: theme.colors.body,
          colorSelect: '',
        });
        break;
    }
  };
  return (
    <Container heigth={heigth}>
      <Header tittle="Prueba APP" />
      <Body tittle="Prueba Básica" styleSelected={SelectData} />
      <ContanierButtons>
        <ButtonBlue>
          <TexButton
            onPress={() => {
              SelectModal('blue');
            }}>
            Azul
          </TexButton>
        </ButtonBlue>
        <ButtonRed
          onPress={() => {
            SelectModal('red');
          }}>
          <TexButton>Rojo</TexButton>
        </ButtonRed>
      </ContanierButtons>
      <ModalComponent
        closeModal={() => {
          setIsModal(false);
        }}
        isActive={IsModal}>
        <>
          <ImageC source={ImageHola} />
          <TextInfo>
            El usuario ha seleccionado el color {SelectData.colorSelect}
          </TextInfo>
        </>
      </ModalComponent>
    </Container>
  );
};
