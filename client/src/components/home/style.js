import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "1vw",
    background: "black",
    fontWeight: "bold",
    borderRadius: "1vw",
    fontSize: "1.5vw",
  },
  swaps: { margin: "2.5vw", padding: "2vw" },
  swap: {
    color: "white",
    width: "fit-content",
    border: "0.2vw black solid",
    margin: "3vw auto",
    padding: "0.5vw 2vw",
    lineHeight: "1.7vw",
    borderRadius: "4vw",
    backgroundColor: "black",
  },
}));

export default useStyles;
