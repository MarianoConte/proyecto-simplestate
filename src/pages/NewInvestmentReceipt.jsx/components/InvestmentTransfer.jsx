import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function InvestmentTransfer({ file, setFile, terms, setTerms }) {
  const location = useLocation();
  const [error, setError] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 1) {
        setError('Solo puedes subir un archivo');
        return;
      }

      if (!acceptedFiles[0].name.match(/\.(jpg|jpeg|png)$/)) {
        setError('Solo puedes subir archivos .jpg, .jpeg o .png');
        return;
      }

      setError(null);

      setFile(acceptedFiles[0]);
    },
  });

  const handleRemoveFile = () => {
    setFile(null);
  };

  if (!location.state) {
    return null;
  }

  const { amount, currency } = location.state;

  return (
    <form
      className='  
     min-h-[350px]
    md:min-h-0 md:p-4'
    >
      <section className='bg-white w-full px-6 pt-2 py-7 mt-3 rounded-[10px] shadow-sm flex flex-wrap justify-between items-center'>
        <div className='w-full py-4 md:flex md:flex-row md:justify-between'>
          <h4 className='font-bold text-lg mb-6 md:w-3/5 md:mb-1'>
            Forma de pago: Transferencia bancaria
          </h4>
          <div className='md:w-2/5'>
            <p className='bg-[#E2E2FE] rounded-[10px] inline-block py-1.5 px-3'>
              Monto a pagar{' '}
              <span className='font-semibold'>{`${amount} ${currency}`}</span>
            </p>
          </div>
        </div>
        <h5 className='font-bold text-base py-1.5 hidden md:block'>
          Datos para Transferencia
        </h5>
        <div className='w-full flex flex-col justify-between md:flex-row mb-5'>
          <div className='w-full md:w-3/5'>
            <p className='font-normal text-sm py-1.5'>
              Banco: <span className='font-semibold'>Superville</span>
            </p>
            <p className='font-normal text-sm py-1.5'>
              Tipo de cuenta:{' '}
              <span className='font-semibold'> Cuenta corriente USD</span>
            </p>
            <p className='font-normal text-sm py-1.5'>
              Razón social:{' '}
              <span className='font-semibold'>Fideicomiso Simplestate</span>
            </p>
          </div>
          <div className='w-full md:w-2/5'>
            <p className='font-normal text-sm py-1.5'>
              CUIT: <span className='font-semibold'>30-71661771-4</span>
            </p>
            <p className='font-normal text-sm py-1.5'>
              Número de cuenta:{' '}
              <span className='font-semibold'>03958711-001</span>
            </p>
            <p className='font-normal text-sm py-2'>
              CBU: <span className='font-semibold'>0270055740039587110015</span>
            </p>
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor='file' className='font-bold text-normal '>
            Adjuntar comprobante de pago
          </label>
          {/* centro vertical y horizontalmente el div*/}
          <div
            className='min-h-[110px] w-full flex flex-col
              justify-center items-center border-dashed border-[1px] border-[#747474] mt-4'
            {...getRootProps()}
            // onClick={() => document.getElementById('file').click()}
          >
            <svg
              width='19'
              height='34'
              viewBox='0 0 19 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='mb-3 mt-1'
            >
              <path
                d='M5.94817 11.0979V23.8999C5.96296 24.8361 6.34522 25.7289 7.01246 26.3856C7.67971 27.0424 8.57843 27.4105 9.51468 27.4105C10.4509 27.4105 11.3497 27.0424 12.0169 26.3856C12.6841 25.7289 13.0664 24.8361 13.0812 23.8999L13.0928 7.11974C13.1025 6.3196 12.9533 5.5255 12.6538 4.78346C12.3543 4.04142 11.9105 3.3662 11.3481 2.79696C10.7857 2.22771 10.116 1.77576 9.37761 1.4673C8.63926 1.15883 7.84702 1 7.04683 1C6.24663 1 5.4544 1.15883 4.71604 1.4673C3.97769 1.77576 3.30791 2.22771 2.74553 2.79696C2.18315 3.3662 1.73936 4.04142 1.43988 4.78346C1.14039 5.5255 0.991182 6.3196 1.00089 7.11974V24.0129C0.984588 25.1394 1.19238 26.2579 1.61218 27.3033C2.03199 28.3488 2.65543 29.3003 3.44626 30.1027C4.23709 30.9051 5.17954 31.5422 6.2188 31.9771C7.25807 32.412 8.37341 32.6359 9.5 32.6359C10.6266 32.6359 11.7419 32.412 12.7812 31.9771C13.8205 31.5422 14.7629 30.9051 15.5537 30.1027C16.3446 29.3003 16.968 28.3488 17.3878 27.3033C17.8076 26.2579 18.0154 25.1394 17.9991 24.0129V8.22685'
                stroke='black'
                strokeWidth='1.40565'
                strokeMiterlimit='10'
                strokeLinecap='round'
              />
            </svg>
            <p className='text-sm font-normal px-2'>
              Arrastra la imagen o adjuntala aquí
            </p>

            <input
              type='file'
              id='file'
              hidden
              {...getInputProps()}
              accept='.jpg, .jpeg, .png'
            />
          </div>
          {file && (
            <p className='text-[10.79px] font-normal mt-2 p-2 bg-waterGreen bg-opacity-30 inline-block rounded-[3.3px]'>
              {file?.name}
              <button
                className='font-semibold cursor-pointer ml-2'
                onClick={handleRemoveFile}
              >
                <svg
                  width='7'
                  height='7'
                  viewBox='0 0 7 7'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.384766 6.45662L5.88982 0.953125M0.384766 0.953125L5.88982 6.45662'
                    stroke='black'
                    strokeWidth='0.770707'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
            </p>
          )}
          {<p className='text-red-500 text-sm mt-2'>{error ? error : null}</p>}
        </div>
      </section>
      <div className='ml-1 w-full relative mt-4 md:mt-2'>
        <input
          type='checkbox'
          name='terms'
          className='border-[0.42px] border-[#313131] h-[16px] border-radius-[4.21px] w-[15.16px] accent-waterGreen relative top-[3px] '
          onChange={(e) => setTerms(e.target.checked)}
          value={terms}
          accept='.jpg, .jpeg, .png, .pdf, .doc, .docx'
        />
        <label htmlFor='terms' className='text-sm italic ml-3'>
          Leí y acepto los{' '}
          <span className='underline'>Términos y condiciones*</span>
        </label>
      </div>
    </form>
  );
}

export default InvestmentTransfer;

InvestmentTransfer.propTypes = {
  file: PropTypes.object,
  setFile: PropTypes.func,
  terms: PropTypes.bool,
  setTerms: PropTypes.func,
};
