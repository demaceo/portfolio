import React, { Component } from "react";
import Interests from "./Interests";
import "./recommendations.css";
import { interests } from "../../utilities/interestsData";

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "books",
      how: 100,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
    });
  }
  render() {
    const { mode, how } = this.state;
    const modes = interests;
    return (
      <div className="interests-container">
        <div className="interests">
          <h1>Recommendations</h1>
          <button how={50} value={"music"} onClick={this.handleClick}>
            music
          </button>
          <button how={50} value={"documentaries"} onClick={this.handleClick}>
            documentaries
          </button>
          <button how={50} value={"books"} onClick={this.handleClick}>
            books
          </button>
          <button how={50} value={"film"} onClick={this.handleClick}>
            film
          </button>
          <button how={50} value={"podcasts"} onClick={this.handleClick}>
            podcasts
          </button>
        </div>
        <Interests
          id="interests"
          images={modes[mode]}
          how={how}
          size={"100px"}
          time={30}
        />
      </div>
    );
  }
}

export default Recommendations;
