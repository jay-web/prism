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

import { Link, withRouter } from "react-router-dom";
import useStyles from "./prismDrawer.style";
import PrismColorPicker from "../ColorPicker/Colorpicker";

import chroma from "chroma-js";

import PrismDialog from "../Dialog/PrismDialog";
import arrayMove from 'array-move';
import DraggableList from "../DraggableList/DraggableList";


function PrismDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [headerColor, setHeaderColor] = React.useState("#0d84b2")
  const [colorsList, setColorsList] = React.useState([{ color: "#0d84b2", name: "blue" }]);

  const isDarkMode = chroma(headerColor).luminance() <= 0.8;
  const textColor = isDarkMode ? "white" : "black";

  const { savePalette,palettes } = props;
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
      setColorsList([...colorsList, newColor]);
  }

  const deleteColor = (colorName) => {
    const colors = colorsList.filter((color) => color.name !== colorName);
    setColorsList(colors);
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    // this.setState(({items}) => ({
    //   items: arrayMove(items, oldIndex, newIndex),
    // }));
    setColorsList(arrayMove(colorsList, oldIndex, newIndex))
  };

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
          <PrismDialog colorsList={colorsList} savePalette={savePalette} palettes={palettes} />
        
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
        
          <DraggableList  axis="xy" colorsList={colorsList}  onSortEnd={onSortEnd} deleteColor={deleteColor}/>
      
      
      </main>
    </div>
  );
}


export default withRouter(PrismDrawer)