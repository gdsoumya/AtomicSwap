const AtomicSwap = artifacts.require("AtomicSwap");

module.exports = function (deployer) {
  deployer.deploy(AtomicSwap);
};
