import React from "react";
import "./tinyBox.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class TinyBox extends React.Component {
  constructor(props) {
    super(props);
    this.renderTinyColorBox = this.renderTinyColorBox.bind(this);
  }
  renderTinyColorBox() {
    return this.props.colors.map((item, idx) => {
      return (
        <div
          className="tinyBox"
          style={{ backgroundColor: `${item.color}` }}
          key={idx}
        ></div>
      );
    });
  }

  // deletePalette = (e, colors) => {
  //   e.stopPropagation();
  //   console.log(colors);
  //   this.props.deletePalette(colors);
  // }
  render() {
    // const { colors, name } = this.props;
    // console.log(colors);
    return <div className="showBoxes"> 
    {/* <span className="deleteBox"><DeleteForeverIcon onClick={this.deletePalette} /></span> */}
    {this.renderTinyColorBox()}
    </div>;
  }
}

export default TinyBox;
