import React, { useEffect, useState } from "react";
import getConversionRate from "../../../../library/common/getConversionRate";
import getSwaps from "../../../../library/tezos/operations/getSwaps";
import { useHistory } from "react-router-dom";
import useStyles from "../../style";
import Loader from "../../../loader";
import CreateSwap from "../createSwap";

const GetSwap = ({ genSwap, selfAcc }) => {
  const [swaps, setSwaps] = useState([]);
  const [loader, setLoader] = useState(true);
  const [fullLoader, setFullLoader] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const filterSwaps = async (rt) => {
    const data = await getSwaps();
    let swps = [];
    data.forEach((swp) => {
      if (
        swp.participant === swp.initiator &&
        swp.initiator !== selfAcc &&
        Math.trunc(Date.now() / 1000) < swp.refundTimestamp - 4200
      )
        swps.push({
          ...swp,
          displayValue: swp.value / 1000000,
          pay: swp.value / (rt * 1000000),
        });
    });
    setSwaps(swps);
    setLoader(false);
  };

  const SwapItem = (data) => {
    return (
      <div
        onClick={() => {
          generateSwap(data.pay, data);
        }}
        key={data.hashedSecret}
        className={classes.swap}
      >
        <p>Hash : {data.hashedSecret}</p>
        <p>XTZ Value : {data.displayValue}</p>
        <p>ETH to Pay : {data.pay}</p>
      </div>
    );
  };

  const generateSwap = async (value, data) => {
    setFullLoader(true);
    const res = await genSwap(2, value, data);
    setFullLoader(false);
    if (!res) {
      alert("Error: Swap Couldn't be created");
    } else {
      history.push("/");
    }
  };
  useEffect(() => {
    getConversionRate().then((res) => {
      filterSwaps(res);
    });
    console.log("Rate Updated");
    const timer = setInterval(async () => {
      const rt = await getConversionRate();
      filterSwaps(rt);
    }, 600000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let data = "No Swaps Found. Create One!";
  if (swaps.length > 0) data = swaps.map((swp) => SwapItem(swp));
  if (fullLoader) return <Loader message="..Creating Your Swap.." />;
  return (
    <div>
      <CreateSwap genSwap={genSwap} loader={setFullLoader} />
      <h3>Or</h3>
      <h3 className={classes.msg}>Select From Available SWAPS</h3>
      {loader && <Loader message="..Loading Swaps.." />}
      {!loader && data}
    </div>
  );
};

export default GetSwap;
