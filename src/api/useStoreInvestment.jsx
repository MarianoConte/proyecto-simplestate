import { gql, useMutation } from '@apollo/client';

export const useStoreInvestment = (setOpenModal) => {
  const STORE_INVESTMENT = gql`
    mutation storeInvestment {
      storeInvestment(input: $input)
        @rest(
          path: "/storeInvestment"
          method: "POST"
          bodykey: "input"
          bodySerializer: $transform
        ) {
        data
      }
    }
  `;

  const [storeInvestment] = useMutation(STORE_INVESTMENT, {
    onCompleted: () => {
      setOpenModal(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return storeInvestment;
};
