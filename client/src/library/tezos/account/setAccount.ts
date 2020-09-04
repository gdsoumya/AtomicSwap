import store from "../../common/store";
import { KeyStoreUtils, SoftSigner } from "conseiljs-softsigner";
import { TezosMessageUtils } from "conseiljs";

const setTezAccount = async (key: string) => {
  store.tez.account = await KeyStoreUtils.restoreIdentityFromSecretKey(key);
  store.tez.signer = await SoftSigner.createSigner(
    TezosMessageUtils.writeKeyWithHint(key, "edsk"),
    -1
  );
  console.log(store.tez.account);
};

export default setTezAccount;
