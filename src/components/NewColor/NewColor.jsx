import React from "react";
import { withStyles, Paper } from "@material-ui/core";
import styles from "./newColor.style";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import chroma from "chroma-js";
import {SortableElement} from 'react-sortable-hoc';

class NewColor extends React.Component {
  render() {
    const { color, classes, deleteColor } = this.props;
    const isDarkMode = chroma(color.color).luminance() <= 0.8;
    const textColor = isDarkMode ? "white" : "black";
    return (
    //   <Paper elevation={2}>
        <Paper elevation={2} style={{ backgroundColor: color.color, borderRadius: "0px" }} className={classes.root}>
          <div className={classes.innerBox}>
            <span style={{ color: `${textColor}` }}>
              {color.name.toUpperCase()}
            </span>
            <span className={classes.deleteButton}>
              <DeleteForeverIcon style={{ color: `${textColor}` }} onClick={deleteColor}/>
            </span>
          </div>
        </Paper>
    //   </Paper>
    );
  }
}

export default SortableElement(withStyles(styles)(NewColor));
