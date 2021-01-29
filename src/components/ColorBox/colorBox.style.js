import { createStyles } from "@material-ui/core";

const useStyles = createStyles({
  root: {
    flexGrow: 1,
    cursor: "pointer",
    "&:hover button": {
      opacity: "1",
    },
  },

  copyContainer: {
    padding: ".2rem",
    zIndex: 11,
  },
  buttonBox: {
    flexGrow: 1,
  },
  copyButton:{
    marginBottom: "2rem",
    marginTop: "1rem"
  },
  button: {
    opacity: "0",
  },
  boxContent: {
    textTransform: "uppercase",
  },
  overlay: {
    opacity: 0,
    zIndex: 0,
    transition: "transform 500ms ease-in-out",
    display: "flex",
  },
  show: {
    opacity: 1,
    zIndex: 12,
    width: "100vw",
    height: "100vh",
    transform: "Scale(50)",
    position: "absolute",
  },
});

export default useStyles;
