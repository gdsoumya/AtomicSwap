const { TezosNodeReader } = require("conseiljs");
const config = require("../../config/tez-config.json");
const init = require("../../tezos/init");

const getSwap = async (secretHash) => {
  await init();
  data = await TezosNodeReader.getValueForBigMapKey(
    config.RPC,
    15534,
    secretHash
  );
  console.log(JSON.stringify(data));
};
getSwap("0x055e1d97b8f4a2d0e8913e6300818ed3c235f886d3b71bdfde7ed5aa05d724fd");
