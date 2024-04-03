import { gql, useMutation } from '@apollo/client';

export const useSimulateInvestment = (setInvestment) => {
  const SIMULATE_INVESTMENT = gql`
    mutation simulateInvestment {
      simulateInvestment(input: $input)
        @rest(path: "/simulateInvestment", method: "POST", bodykey: "input") {
        data {
          amount
          currency_id
          profitability_amount
          profitability
          mont_term
          parking
          payment
        }
      }
    }
  `;

  const [
    simulateInvestment,
    { loading: loadingInvestment, error: errorInvestment },
  ] = useMutation(SIMULATE_INVESTMENT, {
    onCompleted: (data) => {
      const investment = data.simulateInvestment.data;
      setInvestment(investment);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { simulateInvestment, loadingInvestment, errorInvestment };
};
