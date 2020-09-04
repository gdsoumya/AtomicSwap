import Web3 from "web3";
import store from "../common/store";

const web3Setup = () => {
  store.eth.web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://goerli.infura.io/v3/3f764c2122644024825ab09e9e4d39d2"
    )
  );
};

export default web3Setup;
