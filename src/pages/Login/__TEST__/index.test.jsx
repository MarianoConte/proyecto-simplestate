import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useLogin } from '../../../api/useLogin';
import Login from '..';

// Mock del hook useForm
jest.mock('react-hook-form', () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    formState: { isValid: true },
  })),
}));

// Mock del hook useLogin
jest.mock('../../../api/useLogin', () => ({
  useLogin: jest.fn(() => ({
    login: jest.fn(),
    loadingLogin: false,
    errorLogin: null,
  })),
}));

describe('Login component', () => {
  it('render', () => {
    render(<Login />);
  });

  it('renderiza y hace submit del login', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Correo electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const submitButton = getByText('Ingresar');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');

    await waitFor(() => {
      expect(useLogin).toHaveBeenCalled();
    });
  });

  it('muestra mensaje de error', async () => {
    // Mock del hook useLogin para simular error de inicio de sesión
    useLogin.mockReturnValueOnce({
      login: jest.fn(),
      loadingLogin: false,
      errorLogin: { networkError: { result: { message: 'Error message' } } },
    });

    const { getByText } = render(<Login />);

    expect(getByText('Error message')).toBeInTheDocument();
  });
});
