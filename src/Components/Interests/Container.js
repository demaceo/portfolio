import React, { Component } from "react";
import Interests from "./Interests";
import "./container.css";
import { interests } from "../../utilities/interestsData";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "documentaries",
      background: "#2F3939",
      how: 100,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
      //   background: e.target.attributes.background.value,
    });
  }
  render() {
    const { mode, background, how } = this.state;
    const modes = interests;
    return (
      <div className="container">
        <div className="interests">
          <h1>Recommendations</h1>

          <button
            how={50}
            // background={"#2F3939"}
            value={"documentaries"}
            onClick={this.handleClick}
          >
            documentaries
          </button>
          <button
            how={50}
            // background={"#2F3939"}
            value={"books"}
            onClick={this.handleClick}
          >
            books
          </button>
          <button
            how={50}
            // background={"#2F3939"}
            value={"film"}
            onClick={this.handleClick}
          >
            film
          </button>
          <button
            how={50}
            // background={"#2F3939"}
            value={"podcasts"}
            onClick={this.handleClick}
          >
            podcasts
          </button>
          {/* <button
            how={35}
            background={"#2F3939"}
            value={"gif"}
            onClick={this.handleClick}
          >
            gifs
          </button> */}
          <a
            className="github-button"
            href="https://github.com/demaceo"
            data-icon="fab fa-github"
            data-size="large"
            data-show-count="true"
            aria-label="Demaceo on GitHub"
          >
            Demaceo
          </a>
        </div>
        <Interests
          id="interests"
          images={modes[mode]}
          how={how}
          size={"100px"}
          time={30}
          //   background={background}
        />
      </div>
    );
  }
}

export default Container;
