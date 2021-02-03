import { createStyles } from "@material-ui/core";

const useStyles = createStyles({
  root: {
    
    cursor: "pointer",
    "&:hover button": {
      opacity: "1",
    },
  },
  shade:{
    height: "41vh",
    // display: "grid",
    textAlign: "center",
    textTransform: "uppercase"
  },
  contentBox:{
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center"
   
  },
  
  title: {
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
    marginBottom: "1rem"
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
  seeMore: {
    textDecoration: "none"
  }
});

export default useStyles;
