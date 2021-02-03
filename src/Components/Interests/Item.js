import React, { Component } from "react";
import './container.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transform: `translate(${this.props.from[0]}px, ${
          this.props.from[1]
        }px) rotate(${Math.random() * 360}deg)`,
      },
    };
    this.setStyle = this.setStyle.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setStyle, 1);
  }

  setStyle() {
    const movingStyle = `translate(${
      Math.random() * window.innerHeight * 0.8
    }px, ${Math.random() * window.innerWidth * 0.6}px) rotate(${
      Math.random() * 360
    }deg)`;
    const time = this.props.time ? this.props.time : 20;
    const size = this.props.size ? this.props.size : "150px";
    const style = {
      position: "absolute",
      zIndex: "-1",
      transform: movingStyle,
      transition: `transform ${time}s ease-out`,
      MsTransform: movingStyle,
      MsTransition: `transform ${time}s ease-out`,
      Webkitransform: movingStyle,
      WebkitTransition: `transform ${time}s ease-out`,
    //   overflow: "hidden",
      willChange: "transform",

    };
    const imgSize = {
      width: size,
      height: "auto",
    };
    this.setState({
      style: style,
      size: imgSize,
    });
    setTimeout(this.setStyle, time * 1000);
  }

  render() {
    const { style, size } = this.state;

    return (
      <div style={style} id="item">
        <img style={size} srcSet={this.props.what} alt="img" />
      </div>
    );
  }
}

export default Item;
