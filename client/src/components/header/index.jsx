import React, { useEffect } from "react";
import { useState } from "react";
import accountBalanceEth from "../../library/ethereum/account/getAccountBalance";
import accountBalanceTez from "../../library/tezos/account/getAccountBalance";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
const Header = ({ ethStore, tezStore }) => {
  const [balance, setBalance] = useState({ eth: "0 ETH", tez: "0 XTZ" });
  const classes = useStyles();
  const history = useHistory();
  const updateBalance = async () => {
    let eth = await accountBalanceEth(ethStore.web3, ethStore.keyStore.address);
    let tez = await accountBalanceTez(tezStore.keyStore.publicKeyHash);
    eth = eth / Math.pow(10, 18);
    tez = tez / 1000000;
    setBalance({ eth: `${eth} ETH`, tez: `${tez} XTZ` });
  };

  useEffect(() => {
    updateBalance();
    const timer = setInterval(async () => {
      await updateBalance();
    }, 120000);
    return () => {
      clearInterval(timer);
    };
  }, [ethStore.keyStore.address, tezStore.keyStore.publicKeyHash]);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.account}>
          <p>Ethereum Addr.: {ethStore.keyStore.address}</p>
          <p>Balance : {balance.eth}</p>
        </div>
        <div className={classes.account}>
          <p>Tezos Addr.: {tezStore.keyStore.publicKeyHash}</p>
          <p>Balance : {balance.tez}</p>
        </div>
      </div>
      <button className={classes.button} onClick={() => history.push("/")}>
        Home
      </button>
    </>
  );
};

export default Header;
