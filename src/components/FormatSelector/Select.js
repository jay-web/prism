import React from "react";

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./select.css";
import PrismSnackBar from "../Snackbar/Snackbar";

class  FormatSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {changed : false};
    this.handleClose = this.handleClose.bind(this);
    
  }
  handleClick = (e) =>  {
    this.setState({ changed: true });
    this.props.handleChange(e);
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ changed: false });
  }

    render(){
        const { format, handleChange } = this.props;
        return (
          <>
            <FormControl className="formControl">
            <Select
              value={format}
              onChange={this.handleClick}
              displayEmpty
              className="selectEmpty"
            //   inputProps={{ 'aria-label': 'Without label' }}
            >
            
              <MenuItem value='hex'>HEX - #ffffff</MenuItem>
              <MenuItem value='rgb'>RGB - rgb(255,255, 255)</MenuItem>
              <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
            </Select>
            {/* <FormHelperText>Color Format</FormHelperText> */}
          </FormControl>
          <PrismSnackBar handleClose={this.handleClose} copied={this.state.changed} message="Color Format Changed 🤡 " background=""/>
          </>
        )
    }
}

export default FormatSelector;