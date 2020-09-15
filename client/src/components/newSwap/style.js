import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  select: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    margin: "2% auto",
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
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  expectedValue: { display: "block", margin: "3vw" },
  create: {
    backgroundColor: "black",
    border: "none",
    borderRadius: "0.5vw",
    color: "white",
    fontWeight: "bold",
    padding: "0.4vw 1vw",
    cursor: "pointer",
  },
  valueInput: { marginRight: "1vw", padding: "0.2vw" },
  swap: {
    color: "white",
    width: "fit-content",
    border: "0.2vw black solid",
    margin: "3vw auto",
    padding: "0.5vw 2vw",
    lineHeight: "1.7vw",
    borderRadius: "4vw",
    backgroundColor: "black",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  msg: {
    margin: "4vw 1vw",
  },
}));

export default useStyles;
