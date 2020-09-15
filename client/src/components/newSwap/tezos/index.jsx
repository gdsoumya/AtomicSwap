import React from "react";
import GetSwap from "./getSwaps";

const Tezos = ({ genSwap, ethStore }) => {
  return <GetSwap genSwap={genSwap} ethStore={ethStore} />;
};

export default Tezos;
