import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: 'New Rocker, cursive'
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    textDecoration: "none",
    fontFamily: 'New Rocker, cursive'
    // color: "white",
  },
  titleBox:{
    flexGrow: 1
  },
  boxContainer: {
      height: "100vh - 64px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  "@media only screen and (max-width: 750px)": {
    boxContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media only screen and (min-width: 750px)": {
      boxContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
    "@media only screen and (min-width: 1000px)": {
      boxContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
  },
}));

export default useStyles;
