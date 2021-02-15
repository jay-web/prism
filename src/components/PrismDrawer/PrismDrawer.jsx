import React from "react";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { withRouter } from "react-router-dom";
import useStyles from "./prismDrawer.style";
import PrismColorPicker from "../ColorPicker/Colorpicker";

import chroma from "chroma-js";


import arrayMove from 'array-move';
import DraggableList from "../DraggableList/DraggableList";

import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";


function PrismDrawer(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [headerColor, setHeaderColor] = React.useState("#0d84b2")
  const [colorsList, setColorsList] = React.useState([{ color: "#0d84b2", name: "blue" }]);

  const isDarkMode = chroma(headerColor).luminance() <= 0.8;
  const textColor = isDarkMode ? "white" : "black";
  const allPalettes = props.palettes;

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

  const clearColorsList = () => {
    setColorsList([]);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DrawerAppBar open={open} headerColor={headerColor}  handleDrawerOpen={handleDrawerOpen} 
                textColor={textColor} 
                colorsList={colorsList} 
                savePalette={savePalette}
                palettes={palettes} />
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
            clearColorsList={clearColorsList}
            allPalettes={allPalettes}
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