import React from "react";
import { SketchPicker } from "react-color";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core";
import styles from "./picker.style";

class PrismColorPicker extends React.Component {
  render() {
      const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div >
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Clear Color
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Random Color
        </Button>
        </div>
       
        <SketchPicker />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Add Color
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(PrismColorPicker);
