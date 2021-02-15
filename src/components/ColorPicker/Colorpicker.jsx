import React from "react";
import { SketchPicker } from "react-color";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core";
import styles from "./picker.style";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import chroma from "chroma-js";

class PrismColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "#0d84b2", colorName: "" };
  }

  componentDidMount() {
  
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      
     return this.props.colorsList.every(({name}) => name.toLowerCase() !== value.toLowerCase() );
    });

    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      
      return this.props.colorsList.every(({color}) => color !== this.state.currentColor );
     });
    
  }

  handleChangeComplete = (color) => {
    this.setState({ currentColor: color.hex });
    this.props.onChangeColor(color.hex);
  };

  handleInputChange = (event) => {
    const name = event.target.value;
    this.setState({ colorName: name });
  };

  handleAddColor = (color) => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.colorName,
    };
    console.log(newColor);
    this.props.addNewColor(newColor);
    // this.setState({colorName: ""})
  };

  createRandomColor = () =>  {
    const allColors = this.props.allPalettes.map((p) => p.colors).flat();
    let rand;
    let newColor;
    let isDuplicateColor = true;
    while(isDuplicateColor){
      rand = Math.floor(Math.random() * allColors.length);
      newColor = allColors[rand];
      isDuplicateColor = this.props.colorsList.some(color => color.name == newColor.name)
      console.log(newColor);
    }

    
    this.props.addNewColor(newColor);
  }

 

 
  render() {
    const { classes } = this.props;
    const isDarkMode = chroma(this.state.currentColor).luminance() <= 0.8;
    const textColor = isDarkMode ? "white" : "black";
    const paletteIsFull = this.props.colorsList.length >= 20;
    const addButtonColor = paletteIsFull ? "grey" : this.state.currentColor;

    return (
      <div className={classes.root}>
        <div className={classes.buttonBox}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick= {this.props.clearColorsList}
            startIcon={<DeleteIcon />}
          >
            Clear Color
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={this.createRandomColor}
            disabled={paletteIsFull}
            startIcon={<CloudUploadIcon />
            }
          >
            Random Color
          </Button>
        </div>

        <SketchPicker
          color={this.state.currentColor}
          className={classes.picker}
          onChangeComplete={this.handleChangeComplete}
        />

        <ValidatorForm
          // ref="form"
          onSubmit={this.handleAddColor}
          onError={(errors) => console.log(errors)}
          style={{ marginTop: ".5rem" }}
        >
          <TextValidator
            onChange={this.handleInputChange}
            label="Color Name"
            value={this.state.colorName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={["this field is required", "Name should be unique", "Color should be unique"]}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ backgroundColor: addButtonColor, marginTop: "1rem", cursor: "pointer", color: `${textColor}` }}
            startIcon={<SaveIcon />}
            // onClick={this.handleInputSubmit}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette full" : "Add Color" }
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(PrismColorPicker);
