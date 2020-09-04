import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import web3Setup from "./library/ethereum/init";

import setEthAccount from "./library/ethereum/account/setAccount";
import setTezAccount from "./library/tezos/account/setAccount";
import store from "./library/common/store";
import accountBalanceEth from "./library/ethereum/account/getAccountBalance";
import accountBalanceTez from "./library/tezos/account/getAccountBalance";

const App = () => {
  web3Setup();
  setEthAccount(
    "22d28b7e6deb32c252f5d0df08ce097d6cab8c22e4d5c56490a5cc6265babe02"
  );
  setTezAccount(
    "edskRgATvUDHcTAm42ow2CJSpg6CtCJ1jfjWvqmAgxvpZteC3UUGKMCiiK1CvszjWrxUzKK34ZPCfryrBX6du3L1uNEYMFJVGZ"
  );
  accountBalanceEth(store.eth.account.address).then(console.log);
  accountBalanceTez("tz1Y8UNsMSCXyDgma8Ya51eLx8Qu4AoLm8vt").then(console.log);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
