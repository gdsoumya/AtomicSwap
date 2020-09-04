import Web3 from "web3";
import { KeyStore } from "conseiljs";

let store = {
  eth: {
    web3: {} as Web3,
    account: {} as any,
  },
  tez: {
    account: {} as KeyStore,
    signer: {},
  },
};

export default store;
