import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../shared/components/Input';

import { useLogin } from '../../api/useLogin';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },

    mode: 'onChange',
  });

  const { login, loadingLogin, errorLogin } = useLogin();

  const onSubmit = (data) => {
    const { email, password } = data;

    login({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    });
  };

  return (
    <main className='h-screen bg-login'>
      <header className='flex justify-center items-center h-40'>
        <img
          src='img/simplestate.svg'
          alt='SimpleState'
          className='w-36 md:w-[214px]'
        />
      </header>
      <section className=''>
        <h3 className='text-waterGreen font-bold text-lg md:text-[20px] text-center'>
          Iniciar sesión
        </h3>

        <form
          className='flex flex-col gap-4 p-6 mx-auto max-w-[454px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            title='Correo electrónico'
            register={register('email', {
              required: {
                value: true,
                message: 'Este campo es obligatorio',
              },
            })}
            type={'email'}
          />
          <Input
            title='Contraseña'
            register={register('password', {
              required: {
                value: true,
                message: 'Este campo es obligatorio',
              },
            })}
            type={`${showPassword ? 'text' : 'password'}`}
            icon={`${
              showPassword ? 'img/showPassword.svg' : 'img/hidePassword.svg'
            }`}
            onClickIcon={
              showPassword
                ? () => setShowPassword(false)
                : () => setShowPassword(true)
            }
          />

          <a
            href='#'
            className='text-black text-xs text-left font-semibold  underline'
          >
            ¿Olvidaste tu contraseña?
          </a>
          <div
            className='flex flex-col justify-center w-full bg-login relative
          '
          >
            {loadingLogin && (
              <div className='flex justify-center items-center absolute top-0 mx-auto left-0 right-0 text-center mt-3 md:mt-0 md:top-44'>
                <div
                  className='inline h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-waterGreen'
                  role='status'
                >
                  <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                    Loading...
                  </span>
                </div>
              </div>
            )}
            <div className='w-full text-center'>
              <button
                type='submit'
                disabled={!formState.isValid}
                className={`${
                  !formState.isValid
                    ? 'bg-disabledButton hover:bg-opacity-100'
                    : 'bg-waterGreen'
                } text-disabledButtonFont font-medium rounded-full hover:bg-opacity-80 mt-20 md:mt-10 w-[214px] h-[49px] hover:cursor-pointer`}
              >
                Ingresar
              </button>
            </div>
          </div>
          {errorLogin && (
            <div className='relative'>
              <div className='inline absolute top-2 mx-auto left-0 right-0 text-center'>
                <span className='text-red-500 text-sm'>
                  {errorLogin?.networkError?.result?.message}
                </span>
              </div>
            </div>
          )}
          <span className='text-center md:mt-5 mt-10'>
            ¿Ya tienes cuenta?{' '}
            <a href='#' className='text-black font-bold underline'>
              inicia sesión
            </a>
          </span>
        </form>
      </section>
    </main>
  );
}
