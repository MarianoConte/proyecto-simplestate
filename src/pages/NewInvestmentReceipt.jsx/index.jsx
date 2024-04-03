import { useEffect, useState } from 'react';
import InvestmentTransfer from './components/InvestmentTransfer';

import { useLocation, useNavigate } from 'react-router-dom';
import { useStoreInvestment } from '../../api/useStoreInvestment';
import ModalInvestmentComplete from './components/ModalInvestmentComplete';

function NewInvestmentReceipt() {
  const [terms, setTerms] = useState(false);
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate('/new-investment');
    }
  }, [location.state, navigate]);

  const storeInvestment = useStoreInvestment(setOpenModal);

  const handleSubmit = (e) => {
    e.preventDefault();

    storeInvestment({
      variables: {
        input: file,
        transform: (data, headers) => {
          const formData = new FormData();
          formData.append('receipt', file);
          return {
            body: formData,
            headers,
          };
        },
      },
    });
  };

  return (
    <>
      {openModal && (
        <ModalInvestmentComplete
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <main className='bg-login min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-65px)] '>
        <div className='p-6 md:max-w-[930px] md:mx-auto'>
          <div className='flex w-full '>
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
              className='text-black text-sm font-normal hover:cursor-pointer'
              href='#'
              onClick={(e) => {
                e.preventDefault();
                navigate('/new-investment');
              }}
            >
              Volver
            </a>
          </div>
          <h3 className='font-semibold text-base text-black mt-5'>
            Nueva inversión
          </h3>
          <InvestmentTransfer
            file={file}
            setFile={setFile}
            terms={terms}
            setTerms={setTerms}
          />
          <button
            type='submit'
            className={`
           ${
             !terms || !file || !file.name.match(/\.(jpg|jpeg|png)$/i)
               ? 'bg-disabledButton'
               : 'bg-waterGreen'
           } 
            text-black
            font-medium
            text-sm
            rounded-full
            p-2
            min-h-[39px]
            w-[169px]
            mt-5
            md:mt-0
            md:float-right
            `}
            onClick={handleSubmit}
            disabled={!terms || !file || !file.name.match(/\.(jpg|jpeg|png)$/i)}
          >
            Finalizar
          </button>
        </div>
      </main>
    </>
  );
}

export default NewInvestmentReceipt;
