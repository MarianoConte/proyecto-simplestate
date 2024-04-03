import { gql, useMutation } from '@apollo/client';
import { useAuth } from '../context/AuthProvider';

export const useLogin = () => {
  const auth = useAuth();

  const LOGIN = gql`
    mutation login {
      login(input: $input)
        @rest(path: "/login", method: "POST", bodykey: "input") {
        data {
          token
        }
      }
    }
  `;

  const [login, { loading: loadingLogin, error: errorLogin }] = useMutation(
    LOGIN,
    {
      onCompleted: ({ login: { data } }) => {
        const { token } = data;
        auth.login(token);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { login, loadingLogin, errorLogin };
};
