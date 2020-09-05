const invokeContract = require("../util/invokeContract");
const init = require("../init");

const tezAccount = "tz1TjCVuTLE7mHRJdS8GDYhtmjTu1eAncq8e",
  secret = "0x218cca049c4b124dbae88931be4c52887eb8e896cb7b380a0f0f41074d5432c2";

init().then(() => {
  invokeContract(0, "refund", `${secret}`, 100000)
    .then((res) => {
      if (res.status !== "applied") {
        console.log("FAILED - XTZ HASH : ", res.operation_group_hash);
        console.log("STATUS : ", res.status, "\nREASON : ", res.errors);
      } else console.log("CONFIRMED - XTZ HASH : ", res.operation_group_hash);
    })
    .catch((err) => {
      console.error("ERROR : ", err);
    });
});
