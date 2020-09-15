import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    padding: "1.5vw",
    fontSize: "1.5vw",
    justifyContent: "space-between",
  },
  account: {
    padding: "0.6vw",
    border: "0.2vw black solid",
    borderRadius: "2vw",
  },
  button: {
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "0.4vw 1vw",
    fontWeight: "bold",
    borderRadius: "0.5vw",
    backgroundColor: "black",
    marginBottom: "5vw",
    fontSize: "1.4vw",
  },
}));

export default useStyles;
