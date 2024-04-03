import InvestmentForm from './components/InvestmentForm';
import { useForm } from 'react-hook-form';
import InvestmentResult from './components/InvestmentResult';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { useSimulateInvestment } from '../../api/useSimulateInvestment';
import { useGetModels } from '../../api/useGetModels';
import { useGetCurrencies } from '../../api/useGetCurrencies';

export default function NewInvestment() {
  const [investment, setInvestment] = useState(null);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const { simulateInvestment, loadingInvestment } =
    useSimulateInvestment(setInvestment);
  const { data: models, loading: loadingModels } = useGetModels();
  const { data: currencies, loading: loadingCurrencies } = useGetCurrencies();

  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      investmentType: '',
      currency: '',
      amount: '',
    },
    mode: 'onChange',
  });

  const handleSubmitForm = (data) => {
    const { model_id, currency_id, amount } = data;

    simulateInvestment({
      variables: {
        input: {
          model_id,
          currency_id,
          amount: parseFloat(amount),
        },
      },
    });
  };

  return (
    <main className='bg-login min-h-[calc(100vh-65px)] h-full md:h-[calc(100vh-80px)] mx-auto flex justify-center'>
      <div className='p-6 md:w-[900px]'>
        <div className='flex w-full'>
          <svg
            width='6'
            height='10'
            viewBox='0 0 6 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mt-[0.345rem] mr-3'
          >
            <path
              d='M5 9L1 5L5 1'
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <a
            className='text-black text-sm font-normal'
            href='#'
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Volver
          </a>
        </div>
        <h3 className='font-semibold text-base text-black mt-5'>
          Nueva inversión
        </h3>
        <InvestmentForm
          register={register}
          errors={formState.errors}
          models={models}
          currencies={currencies}
          loadingModels={loadingModels}
          loadingCurrencies={loadingCurrencies}
        />
        {loadingInvestment && (
          <div className='full-w min-h-[150px] flex justify-center items-center'>
            <div
              className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-waterGreen'
              role='status'
            >
              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                Loading...
              </span>
            </div>
          </div>
        )}
        {investment && (
          <InvestmentResult
            investment={investment}
            model_id={getValues('model_id')}
            models={models}
            currencies={currencies}
          />
        )}
        <button
          type='submit'
          className={`
           ${!formState.isValid ? 'bg-disabledButton' : 'bg-waterGreen'} 
            text-black
            font-medium
            text-sm
            rounded-full
            p-2
            min-h-[39px]
            w-[169px]
            mt-9
            md:float-right
            `}
          onClick={() =>
            investment
              ? navigate('/new-investment-receipt', {
                  state: {
                    amount: investment?.amount,
                    currency:
                      currencies?.getCurrencies?.data[getValues('currency_id')],
                  },
                })
              : handleSubmit(handleSubmitForm)()
          }
          disabled={!formState.isValid}
        >
          Continuar
        </button>
      </div>
    </main>
  );
}
