import store from "../../common/store";

const accountBalanceEth = async (address: string) => {
  const { web3 } = store.eth;
  const balance = await web3.eth.getBalance(address); //Will give value in.
  return balance;
};

export default accountBalanceEth;
