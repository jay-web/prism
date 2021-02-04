import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { Link } from "react-router-dom";
import useStyles from "./prismDrawer.style";
import PrismColorPicker from "../ColorPicker/Colorpicker";
import NewColor from "../NewColor/NewColor";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import chroma from "chroma-js";



export default function PrismDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [headerColor, setHeaderColor] = React.useState("#064cd5")
  const [colorsList, setColors] = React.useState([{ color: "#064cd5", colorName: "teal" }]);

  const isDarkMode = chroma(headerColor).luminance() <= 0.8;
  const textColor = isDarkMode ? "white" : "black";
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeColor = (newColor) => {
      setHeaderColor(newColor)
  }

  const addNewColor = (newColor ) => {
      console.log("new color", newColor);
      setColors([...colorsList, newColor]);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: headerColor}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.titleBox}>
            <Link to="/" className={classes.title} style={{ color: `${textColor}`}}>
              Prism
            </Link>
          </Typography>
          <Button
        variant="contained"
        size="small"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div >
        <PrismColorPicker 
            onChangeColor={changeColor} 
            addNewColor={addNewColor} 
            colorsList={colorsList}/>
        </div>

        
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.boxContainer}>
        {colorsList.map((item, idx) => {
            return <NewColor color={item} key={idx}/>
        })}
        </div>
      
      </main>
    </div>
  );
}
