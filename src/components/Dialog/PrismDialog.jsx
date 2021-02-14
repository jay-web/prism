import React from "react";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withRouter } from "react-router-dom";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PrismDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, paletteName: "", emojiBox: false };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName !== value
      );
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleEmojiOpen = () => {
    this.setState({ emojiBox: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (emojiData) => {
    console.log(emojiData.native);
    const name = this.state.paletteName;
    const color = {
      paletteName: name,
      id: name.toLowerCase().replace(/ /g, "-"),
      emoji: emojiData.native,
      colors: this.props.colorsList,
    };
    this.props.savePalette(color);
    this.props.history.push("/");
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ paletteName: event.target.value });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="default"
          onClick={this.handleClickOpen}
          startIcon={<CloudUploadIcon />}
        >
          Save new palette
        </Button>

        {/* Dialog to the name of new palette */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Palette Name</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
            Choose unique name
          </DialogContentText> */}
            <ValidatorForm
              ref="form"
              onSubmit={this.handleEmojiOpen}
              onError={(errors) => console.log(errors)}
              style={{ marginBottom: "1rem" }}
            >
              <TextValidator
                onChange={this.handleInputChange}
                label="Color Name"
                value={this.state.paletteName}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["this field is required", "Name already taken"]}
              />

              <DialogActions style={{ marginTop: "1rem" }}>
                <Button
                  onClick={this.handleClose}
                  color="secondary"
                  variant="contained"
                >
                  Cancel
                </Button>
                <Button color="primary" type="submit" variant="contained">
                  Choose emoji
                </Button>
              </DialogActions>
            </ValidatorForm>
            {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
          </DialogContent>
        </Dialog>

        {/* Dialog for emoji selection */}
        <Dialog
          open={this.state.emojiBox}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Add emoji for new palette
          </DialogTitle>
          <Picker onSelect={this.handleSubmit} />
        </Dialog>
      </div>
    );
  }
}

export default withRouter(PrismDialog);
