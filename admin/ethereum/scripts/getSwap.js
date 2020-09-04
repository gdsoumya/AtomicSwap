const config = require("../../config/eth-config.json");
const initAdminAccount = require("../init");

const getSwap = async (secretHash) => {
  const web3 = initAdminAccount();
  const contractinstance = new web3.eth.Contract(
    config.abi,
    config.contractAddr
  );
  const swaps = await contractinstance.methods.swaps(secretHash).call();
  return swaps;
};

getSwap(
  "0x055e1d97b8f4a2d0e8913e6300818ed3c235f886d3b71bdfde7ed5aa05d724fd"
).then((res) => console.log(res));
