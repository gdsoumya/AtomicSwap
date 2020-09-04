const init = require("../init");
const invokeContract = require("../util/invokeContract");

const ethAddress = "0x91f79893E7B923410Ef1aEba6a67c6fab07D800C",
  amtMuTez = 5000000,
  secretBytes =
    "0x055e1d97b8f4a2d0e8913e6300818ed3c235f886d3b71bdfde7ed5aa05d724fd",
  time = Math.trunc(Date.now() / 1000) + 30;

init().then(() => {
  invokeContract(
    amtMuTez,
    "initiateWait",
    `(Pair ${secretBytes} (Pair "${time}" "${ethAddress}"))`,
    10000,
    300
  )
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
