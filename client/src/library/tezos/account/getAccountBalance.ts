import { TezosNodeReader } from "conseiljs";

const accountBalanceTez = async (address: string) => {
  const result = await TezosNodeReader.getSpendableBalanceForAccount(
    "https://carthagenet.smartpy.io/",
    address
  );
  return result;
};

export default accountBalanceTez;
