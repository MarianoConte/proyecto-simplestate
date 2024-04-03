import { gql, useQuery } from '@apollo/client';

export const useGetModels = () => {
  const GET_MODELS = gql`
    query getModels {
      getModels @rest(path: "/getModels", method: "GET") {
        data
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_MODELS);

  return { data, loading, error };
};
