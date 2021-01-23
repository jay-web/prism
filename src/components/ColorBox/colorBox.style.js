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
    zIndex: 11
  },
  buttonBox: {
    flexGrow: 1,
  },
  button: {
    height: "1rem",
    padding: "1rem",
    opacity: "0",
    transition: ".5s",
    zIndex: 11
  },
  boxContent: {
    textTransform: "uppercase",
  },
  overlay: {
    
    opacity: 0,
    zIndex: 0,
  
    transition: "transform 5000ms ease-in-out",
  },
  show: {
    opacity: 1,
    zIndex: 12,
    width: "100%",
    height: "100%",
    transform: "Scale(50)",
    position: "absolute",
  },
});

export default useStyles;
