import store from "../../common/store";

const setEthAccount = (key: string) => {
  const { web3 } = store.eth;
  store.eth.account = web3.eth.accounts.privateKeyToAccount(key);
  console.log(store.eth.account);
};

export default setEthAccount;
