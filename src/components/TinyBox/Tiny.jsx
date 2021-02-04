import React from "react";
import "./tinyBox.css";


class TinyBox extends React.Component {
  constructor(props) {
    super(props);
    this.renderTinyColorBox = this.renderTinyColorBox.bind(this);
  }
  renderTinyColorBox() {
    return this.props.colors.map((item) => {
      return (
        <div
          className="tinyBox"
          style={{ backgroundColor: `${item.color}` }}
          key={item.name}
        ></div>
      );
    });
  }
  render() {
    // const { colors, name } = this.props;
    // console.log(colors);
    return <div className="showBoxes"> {this.renderTinyColorBox()}</div>;
  }
}

export default TinyBox;
