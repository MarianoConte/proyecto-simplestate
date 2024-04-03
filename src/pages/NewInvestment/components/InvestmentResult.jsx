import PropTypes from 'prop-types';

function InvestmentResult({ investment, model_id, models, currencies }) {
  const {
    amount,
    currency_id,
    profitability_amount,
    profitability,
    mont_term,
    parking,
    payment,
  } = investment;

  const currency = currencies?.getCurrencies?.data[currency_id];
  const model = models?.getModels?.data[model_id];

  return (
    <section
      className='
        bg-white
        w-full
        px-8
        py-6
        mt-6
        rounded-[10px]
        shadow-sm
        flex
        flex-col
        justify-between
        md:flex-row
        md:flex-wrap
        min-h-[350px]
        md:min-h-0
        md:py-4
        md:px-10
    '
    >
      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Total de la inversión:{' '}
        <span className='font-bold'>
          {amount} {currency}
        </span>
      </p>
      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Ganancia anual estimada:{' '}
        <span className='font-bold'>
          {profitability_amount} {currency}
        </span>
      </p>
      <div className='w-full md:py-2'>
        <svg
          width='100%'
          height='1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            y1='0.75'
            x2='100%'
            y2='0.75'
            stroke='#949494'
            strokeWidth='0.5'
            strokeDasharray='3 3'
          />
        </svg>
      </div>

      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Tipo de inversión:{' '}
        <span className='font-bold'>{model.split('(')[0]}</span>
      </p>
      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Tasa anual: <span className='font-bold'>{profitability}%</span>
      </p>
      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Tiempo de inversión:{' '}
        <span className='font-bold'>{mont_term} meses</span>
      </p>
      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Podes retirarte: <span className='font-bold'>{parking}</span>
      </p>
      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Recibirás al final del plazo:{' '}
        <span className='font-bold'>
          {(amount + profitability_amount).toFixed(2)} {currency}
        </span>
      </p>
      <p className='text-sm font-normal md:w-1/2 md:py-2'>
        Cuándo cobras las ganancias:{' '}
        <span className='font-bold'>{payment}</span>
      </p>
    </section>
  );
}

export default InvestmentResult;

InvestmentResult.propTypes = {
  investment: PropTypes.object.isRequired,
  model_id: PropTypes.string.isRequired,
  models: PropTypes.object.isRequired,
  currencies: PropTypes.object.isRequired,
};
