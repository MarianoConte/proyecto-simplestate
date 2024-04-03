import PropTypes from 'prop-types';

function Input({
  title,
  register,
  error = null,
  type = 'text',
  icon = null,
  onClickIcon = () => {},
  inputClassName = '',
}) {
  return (
    <label className='flex flex-col relative mt-3'>
      <span className='text-sm font-normal leading-6'>{title}</span>
      <input
        type={type}
        {...register}
        // border on focus
        className={`border ${
          error
            ? 'border-red-600 focus:border-teal focus:outline-none focus:ring-0'
            : 'border-inputGray'
        } 
        
        rounded p-2 h-[39px] bg-transparent pl-5 ${inputClassName}`}
      />
      {icon && (
        <button
          type={'button'}
          className='absolute right-3 top-8 hover:cursor-pointer rounded-full hover:bg-gray-200 p-1 h-7 w-7'
          onClick={onClickIcon}
        >
          <img src={icon} alt='icon' />
        </button>
      )}
      {error && (
        <span className='text-red-600 text-xs text-wrap'>{error.message}</span>
      )}
    </label>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
  type: PropTypes.string,
  icon: PropTypes.string,
  onClickIcon: PropTypes.func,
  inputClassName: PropTypes.string,
};

export default Input;
