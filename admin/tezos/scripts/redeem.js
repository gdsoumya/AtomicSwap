const invokeContract = require("../util/invokeContract");
const init = require("../init");

const secret =
    "0x68656c6c6f666473667364666c64736a666c73646a6664736a6673646a6b666a",
  secretHash =
    "0x055e1d97b8f4a2d0e8913e6300818ed3c235f886d3b71bdfde7ed5aa05d724fd";

init().then(() => {
  invokeContract(0, "redeem", `(Pair ${secretHash} ${secret})`, 100000, 300)
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
