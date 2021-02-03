import React, { Component } from "react";
import Item from "./Item";

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [],
    };
    this.movement = this.movement.bind(this);
  }

  componentDidMount() {
    const many = this.props.how;
    const temp_moves = [];
    for (let i = 0; i < many; i++) {
      temp_moves.push(this.movement());
    }
    this.setState({
      moves: temp_moves,
    });
  }

  movement() {
    const rotation = Math.floor((Math.round(Math.random()) * 2 - 1) * 600);
    const fromX = Math.floor(Math.random() * window.innerWidth);
    const fromY = Math.floor(Math.random() * window.innerHeight * 1.5);
    const toX = Math.floor(
      Math.random() * window.innerWidth * (Math.round(Math.random()) * 2 - 1)
    );
    const toY = Math.floor(
      Math.random() *
        window.innerHeight *
        1.5 *
        (Math.round(Math.random()) * 2 - 1)
    );
    const temp = {
      rotation,
      fromX,
      fromY,
      toX,
      toY,
    };
    return temp;
  }

  render() {
    const items = this.props.images;
    const outerStyle = {
      position: "absolute",
      top: "25%",
    //   left: "45%",
      borderRadius: "15px",
      width: "50vw",
      height: "100vh",
      padding: "0",
      zIndex: "-1",
      //   background: this.props.background ? this.props.background : "",
    };

    return (
      <div style={outerStyle} id="Interests">
        {this.state.moves.map((e, i) => {
          const conditional = Math.floor(
            Math.random() * Object.keys(items).length
          );

          return (
            <Item
              what={items[conditional]}
              from={[e.fromX, e.fromY]}
              to={[e.toX, e.toY]}
              rotation={e.rotation}
              size={this.props.size}
              time={this.props.time}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default Interests;
