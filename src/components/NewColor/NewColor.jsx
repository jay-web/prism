import React from "react";
import {withStyles} from "@material-ui/core";
import styles from "./newColor.style";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import chroma from "chroma-js";

class NewColor extends React.Component {
    render(){
        const { color, classes } = this.props;
        const isDarkMode = chroma(color.color).luminance() <= 0.8;
        const textColor = isDarkMode ? "white" : "black";
        return (
            <div style={{ backgroundColor: color.color}} className={classes.root}>
                <div className={classes.innerBox}>
                <span style={{ color: `${textColor}`}}>{color.colorName.toUpperCase()}</span>
                <span className={classes.deleteButton}><DeleteForeverIcon style={{ color: `${textColor}`}} /></span>
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(NewColor);