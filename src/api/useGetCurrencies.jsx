import { gql, useQuery } from '@apollo/client';

export const useGetCurrencies = () => {
  const GET_CURRENCIES = gql`
    query getCurrencies {
      getCurrencies @rest(path: "/getCurrencies", method: "GET") {
        data
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_CURRENCIES);

  return { data, loading, error };
};
