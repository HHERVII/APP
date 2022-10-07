import React from 'react';
import {Modal, Text, TouchableOpacity} from 'react-native';
import {
  ButtonBlue,
  TexButton,
} from '../../src/features/screen1/container/styles';
import {ButtonM, ContainerModal, ContanierCard} from './styles';

type ModalProps = {
  isActive?: boolean;
  closeModal: () => void;
  children?: JSX.Element;
};
export const ModalComponent = ({
  closeModal,
  children,
  isActive,
}: ModalProps) => {
  return (
    <Modal
      visible={Boolean(isActive)}
      transparent={true}
      onRequestClose={closeModal}>
      <ContainerModal>
        <ContanierCard>
          {children}
          <ButtonM onPress={closeModal}>
            <TexButton>Cerrar</TexButton>
          </ButtonM>
        </ContanierCard>
      </ContainerModal>
    </Modal>
  );
};
