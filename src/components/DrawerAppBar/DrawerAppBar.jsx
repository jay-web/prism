import React from "react";
import clsx from "clsx";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link} from "react-router-dom";
import useStyles from "../PrismDrawer/prismDrawer.style";

import PrismDialog from "../Dialog/PrismDialog";

const DrawerAppBar = (props) => {
  const classes = useStyles();
  const {
    open,
    headerColor,
    handleDrawerOpen,
    textColor,
    colorsList,
    savePalette,
    palettes,
  } = props;
  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: headerColor }}
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
          <Link
            to="/prism"
            className={classes.title}
            style={{ color: `${textColor}` }}
          >
            Prism
          </Link>
        </Typography>
        <PrismDialog
          colorsList={colorsList}
          savePalette={savePalette}
          palettes={palettes}
        />
      </Toolbar>
    </AppBar>
  );
};

export default DrawerAppBar;
