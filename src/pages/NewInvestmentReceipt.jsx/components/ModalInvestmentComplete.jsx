import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ModalInvestmentComplete({ openModal, setOpenModal }) {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openModal]);

  return (
    <div
      className='bg-[#8F8F8F] bg-opacity-80 h-full w-full fixed top-0 left-0 z-50 flex justify-center items-center'
      onClick={() => setOpenModal(false)}
    >
      <div className='bg-white rounded-[15px] p-6 w-[87%] max-w-[639px] flex flex-col items-center relative'>
        <button className='absolute top-7 right-5'>
          <svg
            width='10'
            height='9'
            viewBox='0 0 10 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => setOpenModal(false)}
            className='cursor-pointer'
          >
            <path
              d='M9.29151 1.3646C9.36676 1.292 9.42679 1.20514 9.4681 1.10908C9.50941 1.01303 9.53118 0.909714 9.53214 0.805158C9.5331 0.700602 9.51322 0.596902 9.47368 0.50011C9.43413 0.403317 9.3757 0.31537 9.3018 0.2414C9.2279 0.16743 9.14001 0.108918 9.04325 0.0692787C8.9465 0.0296396 8.84282 0.00966703 8.73826 0.010526C8.6337 0.0113849 8.53036 0.0330583 8.43427 0.0742817C8.33818 0.115505 8.25126 0.175453 8.17859 0.250627L5.0225 3.40567L1.86746 0.250627C1.79537 0.173261 1.70843 0.111208 1.61184 0.0681693C1.51525 0.0251306 1.41098 0.00198805 1.30525 0.000122548C1.19951 -0.00174295 1.09449 0.0177069 0.99644 0.0573113C0.898389 0.0969157 0.809319 0.155864 0.734545 0.230638C0.65977 0.305413 0.600822 0.394482 0.561218 0.492533C0.521613 0.590584 0.502163 0.695608 0.504029 0.801339C0.505894 0.90707 0.529037 1.01134 0.572076 1.10793C0.615114 1.20453 0.677167 1.29146 0.754533 1.36355L3.90747 4.51964L0.752434 7.67468C0.613339 7.82396 0.537614 8.02139 0.541214 8.22539C0.544813 8.4294 0.627455 8.62404 0.771729 8.76831C0.916004 8.91259 1.11064 8.99523 1.31465 8.99883C1.51865 9.00243 1.71609 8.9267 1.86536 8.78761L5.0225 5.63257L8.17754 8.78866C8.32681 8.92775 8.52425 9.00348 8.72825 8.99988C8.93225 8.99628 9.12689 8.91364 9.27117 8.76936C9.41544 8.62509 9.49808 8.43045 9.50168 8.22644C9.50528 8.02244 9.42956 7.82501 9.29046 7.67573L6.13752 4.51964L9.29151 1.3646Z'
              fill='black'
            />
          </svg>
        </button>
        <div className='flex flex-col justify-center items-center max-w-[455px] '>
          <div className='flex justify-center items-center'>
            <img
              src='/img/successInvestment.svg'
              alt='Inversión exitosa'
              className='p-6'
            />
          </div>
          <h3 className='font-bold text-base text-center p-4'>
            Ya registramos tu inversión
          </h3>
          <p className='text-center font-normal text-sm pt-4'>
            Nuestro equipo estará validando el pago. En unos minutos, podrás ver
            el estado de la inversión en tus movimientos.{' '}
          </p>
          <div className='flex justify-between md:justify-around w-full pt-10'>
            <button
              className='bg-white text-black rounded-[17.09px] border-[0.68px] border-[#1F1646] w-[47%] font-medium text-xs h-[33px] md:h-[49px] max-w-[215px] md:rounded-[25px]'
              onClick={() => setOpenModal(false)}
            >
              Salir
            </button>
            <button
              className='bg-waterGreen text-black rounded-[17.09px] w-[47%] font-medium text-xs h-[33px] md:h-[49px] max-w-[215px] md:rounded-[25px] '
              onClick={() => setOpenModal(false)}
            >
              Ver movimiento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInvestmentComplete;

ModalInvestmentComplete.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
