import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvestmentResult from '../components/InvestmentResult';

// Mock de los datos necesarios para las props
const investment = {
  amount: 1000,
  currency_id: 1,
  profitability_amount: 50,
  profitability: 5,
  mont_term: 12,
  parking: 'Al finalizar',
  payment: 'Mensual',
};

const model_id = '1';
const models = {
  getModels: {
    data: {
      1: 'Modelo a (5% anual)',
    },
  },
};

const currencies = {
  getCurrencies: {
    data: {
      1: 'USD',
    },
  },
};

describe('InvestmentResult component', () => {
  it('renderiza el componente', () => {
    render(
      <InvestmentResult
        investment={investment}
        model_id={model_id}
        models={models}
        currencies={currencies}
      />
    );

    expect(
      screen.getByText('Recibirás al final del plazo:')
    ).toBeInTheDocument();
    expect(screen.getByText('1050.00 USD')).toBeInTheDocument();
  });
});
