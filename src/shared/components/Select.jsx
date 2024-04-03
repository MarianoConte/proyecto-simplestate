import PropTypes from 'prop-types';

export default function Select({
  title,
  options = [],
  register,
  loading = false,
}) {
  return (
    <label className='flex flex-col relative'>
      <span className='text-sm font-normal leading-6'>{title}</span>
      <select
        className='border-[0.5px] border-inputGray rounded-[9px] p-2 h-[39px] bg-transparent pl-5 font-normal text-sm appearance-none'
        {...register}
      >
        <option
          className='bg-white hover:bg-waterGreen checked:bg-waterGreen font-normal text-sm'
          value=''
        >
          {loading ? 'Cargando...' : 'Seleccionar'}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            className='bg-white hover:bg-waterGreen checked:bg-waterGreen font-normal text-sm'
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <svg
        width='10'
        height='6'
        viewBox='0 0 10 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute right-4 top-10'
      >
        <path
          d='M9 1L5 5L1 1'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </label>
  );
}

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  register: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
