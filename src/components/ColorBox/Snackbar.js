import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { withStyles } from '@material-ui/core';
import useStyles from "./colorBox.style";


const CustomizedSnackbars = (props) => {
  const classes = props;
  
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root2}>
      <Button variant="outlined" onClick={handleClick} className={classes.button}>
        Copy
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
       
        <Alert elevation={6} variant="filled" onClose={handleClose} severity="success" >
        Copied on clipboard
        </Alert>

      </Snackbar>
     
    </div>
  );
}

export default withStyles(useStyles)(CustomizedSnackbars)