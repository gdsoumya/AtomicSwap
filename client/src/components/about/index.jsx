import React from "react";
import useStyles from "./style";
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>
        <b>TrueSwap</b> provides complete Decentralized Atomic Swaps, it is not
        dependant on any centralized third-party service.
        <br />
        <br />
        All stages of a swap are performed by the client application(this
        website), hence it is mandatory for the client to be active throughout
        the swap. If the app is disconnected or closed before a swap is
        completed or refunded the data will be lost and your swap assets will
        not be recoverable. <br />
        <br />
        Currently TrueSwap provides cross chain atomic swaps between Ethereum
        and Tezos, to start a swap you can visit the <b>New Swap</b> option and
        select which crypto-currency you want to swap(ETH/XTZ). In the following
        screen you can either create an new swap by entering the amount you want
        to exchange or select from the existing swaps. <br />
        <br />
        Once a swap is generated you can see the Swap state in the <b>
          Home
        </b>{" "}
        page. The swap can can be in the following states :<br />
      </p>
      <p className={classes.list}>
        1. Running[1] : Swap Request initiated, waiting for response Swaps.
        <br /> 2. Running[2] : Swap response has been found and can proceed to
        completion. <br />
        3. Completed : The Swap was successfully completed. <br />
        4. Refunded : There was no Response for the Swap, it expired and the
        funds have been returned.
      </p>
    </div>
  );
};

export default About;
