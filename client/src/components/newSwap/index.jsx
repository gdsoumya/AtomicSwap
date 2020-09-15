import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./style";

const Swap = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.select}>
      <button
        className={classes.selectButton}
        onClick={() => history.push("/create/xtz")}
      >
        XTZ-&gt;ETH
      </button>
      <button
        className={classes.selectButton}
        onClick={() => history.push("/create/eth")}
      >
        ETH-&gt;XTZ
      </button>
    </div>
  );
};

export default Swap;
