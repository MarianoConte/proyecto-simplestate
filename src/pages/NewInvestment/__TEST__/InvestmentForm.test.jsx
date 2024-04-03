import { render, fireEvent } from '@testing-library/react';
import InvestmentForm from '../components/InvestmentForm';
import '@testing-library/jest-dom';

describe('InvestmentForm component', () => {
  const registerMock = jest.fn();
  const errorsMock = {};
  const modelsMock = {
    getModels: {
      data: {
        1: 'Model 1',
        2: 'Model 2',
      },
    },
  };
  const currenciesMock = {
    getCurrencies: {
      data: {
        USD: 'US Dollar',
        EUR: 'Euro',
      },
    },
  };
  const loadingModelsMock = false;
  const loadingCurrenciesMock = false;

  it('renderiza y hace submit del form', () => {
    // Arrange
    const { getByLabelText } = render(
      <InvestmentForm
        register={registerMock}
        errors={errorsMock}
        models={modelsMock}
        currencies={currenciesMock}
        loadingModels={loadingModelsMock}
        loadingCurrencies={loadingCurrenciesMock}
      />
    );
    const modelSelect = getByLabelText('Tipo de inversión*');
    const currencySelect = getByLabelText('Moneda*');
    const amountInput = getByLabelText('Monto a invertir*');

    fireEvent.change(modelSelect, { target: { value: '1' } });
    fireEvent.change(currencySelect, { target: { value: 'USD' } });
    fireEvent.change(amountInput, { target: { value: '100' } });

    expect(registerMock).toHaveBeenCalledTimes(3);
    expect(registerMock).toHaveBeenNthCalledWith(1, 'model_id', {
      required: true,
    });
    expect(registerMock).toHaveBeenNthCalledWith(2, 'currency_id', {
      required: true,
    });
    expect(registerMock).toHaveBeenNthCalledWith(3, 'amount', {
      required: {
        value: true,
        message: 'Este campo es obligatorio',
      },
      valueAsNumber: true,
      min: {
        value: 1,
        message: 'El monto mínimo es 1',
      },
      validate: expect.any(Function),
    });
    expect(errorsMock.amount).toBeUndefined();
  });
});
