import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    height: "100%",
    justifyContent: "center",
  },
  selectButton: {
    margin: "1.5vw",
    padding: "4vw",
    backgroundColor: "black",
    borderRadius: "0.6vw",
    color: "white",
    fontSize: "2.5vw",
    fontWeight: "bold",
    cursor: "pointer",
    border: "0.2vw solid black",
    width: "100%",
    outline: "none",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  expectedValue: {
    display: "block",
    margin: "3vw",
  },
  create: {
    backgroundColor: "black",
    borderRadius: "0.5vw",
    color: "white",
    fontWeight: "bold",
    padding: "0.4vw 1vw",
    cursor: "pointer",
    outline: "none",
    border: "0.2vw black solid",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  valueInput: {
    marginRight: "1vw",
    padding: "0.2vw",
  },
  swap: {
    color: "white",
    border: "0.2vw black solid",
    cursor: "pointer",
    margin: "0 1.4vw 1.4vw 1.4vw",
    padding: "0.5vw 2vw",
    lineHeight: "1.4vw",
    borderRadius: "1vw",
    backgroundColor: "black",
    outline: "none",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  msg: {
    margin: "1.4vw 1vw",
    fontSize: "1.7vw",
  },
  swapScreen: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  swapList: {
    width: "45%",
    height: "100%",
  },
  swaps: {
    display: "block",
    height: "60vh",
    overflowY: "auto",
  },
  or: {
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "2.5vw",
    background: "linear-gradient(#000, #000) no-repeat center/2px 100%",
    "& p": {
      background: "white",
    },
  },
  newSwap: {
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default useStyles;
