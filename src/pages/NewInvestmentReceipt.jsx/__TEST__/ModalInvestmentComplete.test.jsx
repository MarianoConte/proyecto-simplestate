import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para tener acceso a los matchers de jest-dom
import ModalInvestmentComplete from '../components/ModalInvestmentComplete';

describe('ModalInvestmentComplete component', () => {
  it('muestra el modal', () => {
    const setOpenModal = jest.fn();
    const { getByText } = render(
      <ModalInvestmentComplete openModal={true} setOpenModal={setOpenModal} />
    );

    expect(getByText('Ya registramos tu inversión')).toBeInTheDocument();
  });

  it('cierra el modal al salir', () => {
    const setOpenModal = jest.fn();
    const { getByText } = render(
      <ModalInvestmentComplete openModal={true} setOpenModal={setOpenModal} />
    );

    const salirButton = getByText('Salir');
    fireEvent.click(salirButton);

    expect(setOpenModal).toHaveBeenCalledWith(false);
  });
});
