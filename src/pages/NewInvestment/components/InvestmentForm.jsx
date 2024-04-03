import PropTypes from 'prop-types';

import Select from '../../../shared/components/Select';
import Input from '../../../shared/components/Input';

export default function InvestmentForm({
  register,
  errors,
  models = null,
  currencies = null,
  loadingModels,
  loadingCurrencies,
}) {
  return (
    <form
      className='bg-white w-full px-6 pt-2 py-6 mt-6 rounded-[10px]
      shadow-sm flex flex-wrap justify-between items-center min-h-[350px]
      md:min-h-0 md:p-4
    '
    >
      {/* los items de cada div van pegados al borde superior*/}
      <div className='md:w-1/2 w-full md:min-h-[90px] md:px-4'>
        <Select
          title='Tipo de inversión*'
          register={register('model_id', { required: true })}
          options={Object.keys(models?.getModels?.data || []).map((key) => ({
            value: key,
            label: models?.getModels?.data[key],
          }))}
          loading={loadingModels}
        />
        <a
          href='#'
          className='text-black text-xs italic underline font-normal mt-3'
        >
          Ver más sobre tipos de inversión
        </a>
      </div>
      <div className='md:w-1/2 w-full md:min-h-[90px] md:px-4'>
        <Select
          title='Moneda*'
          register={register('currency_id', { required: true })}
          options={Object.keys(currencies?.getCurrencies?.data || []).map(
            (key) => ({
              value: key,
              label: currencies?.getCurrencies?.data[key],
            })
          )}
          loading={loadingCurrencies}
        />
      </div>
      <div className='md:w-1/2 w-full md:min-h-[90px] md:px-4'>
        <Input
          title='Monto a invertir*'
          register={register('amount', {
            required: {
              value: true,
              message: 'Este campo es obligatorio',
            },
            valueAsNumber: true,
            min: {
              value: 1,
              message: 'El monto mínimo es 1',
            },
            validate: (value) => {
              //si el valor tiene más de 2 decimales devuelvo error
              if (value.toString().split('.')[1]?.length > 2) {
                return 'El monto debe tener como máximo 2 decimales';
              }
              return true;
            },
          })}
          error={errors.amount}
          type='number'
          inputClassName='rounded-[9px] border-[0.5px] text-sm'
        />
      </div>
    </form>
  );
}

InvestmentForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  models: PropTypes.object,
  currencies: PropTypes.object,
  loadingModels: PropTypes.bool.isRequired,
  loadingCurrencies: PropTypes.bool.isRequired,
};
