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
  },
  buttonBox: {
    flexGrow: 1,
  },
  button: {
    height: "1rem",
    padding: "1rem",
    opacity: "0",
    transition: ".5s",
  },
  boxContent:{
      textTransform: "uppercase"
  }
});

export default useStyles;
