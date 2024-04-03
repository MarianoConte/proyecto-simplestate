import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvestmentTransfer from '../components/InvestmentTransfer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    state: {
      amount: 100,
      currency: 'USD',
    },
  }),
}));

jest.mock('react-dropzone', () => ({
  useDropzone: jest.fn().mockReturnValue({
    getRootProps: jest.fn().mockReturnValue({}),
    getInputProps: jest.fn().mockReturnValue({}),
  }),
}));

describe('InvestmentTransfer component', () => {
  it('render', () => {
    const setFile = jest.fn();
    const setTerms = jest.fn();

    render(
      <InvestmentTransfer
        file={null}
        setFile={setFile}
        terms={false}
        setTerms={setTerms}
      />
    );

    expect(setFile).not.toHaveBeenCalled();
    expect(setTerms).not.toHaveBeenCalled();

    expect(
      screen.getByText('Forma de pago: Transferencia bancaria')
    ).toBeInTheDocument();

    expect(screen.getByText('100 USD')).toBeInTheDocument();
  });
});
