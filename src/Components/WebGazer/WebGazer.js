import "./webGazer.css";
import React from "react";
// import webgazer from "webgazer";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
// this.photoRef = React.createRef("")

// npm i webcam-easy

function WebGazer() {
  // let [main, setMain] = useState();
  // let [next, setNext] = useState();
  let mainRef = useRef();
  let nextRef = useRef();
  let [elements, setElements] = useState([]);

  // let [startLookTime, setStartLookTime] = useState("");
  // let [lookDirection, setLookDirection] = useState(null);
  // let imageElement = getNewImage();
  // let nextImageElement = getNewImage(true);
  // const LOOK_DELAY = 1000;
  // const LEFT_CUTOFF = window.innerWidth / 4;
  // const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4;

  const getNewImage = (next = false) => {
    let img = React.createElement("img", {
      className: next ? "main-photo" : "main-photo next",
      src: "https://picsum.photos/1000?" + Math.random(),
      ref: next ? mainRef : nextRef,
      onClick: movePhoto,
      id: nanoid(),
    });
    setElements([...elements, img]);
    return img;
  };

  const movePhoto = (event) => {
    console.log(event.target.id);
    // setTimeout(() => {
    // imageElement = nextImageElement;
    // mainRef.current.classList.add("left");
    // setMain(getNewImage(true));
    // setNext(getNewImage(false));
    getNewImage(true);
    getNewImage();
    elements.shift();
    // nextRef.current.classList.remove('next')
    // console.log(elements[0].props.className);
    // }, 200);
    return elements;
  };

  useEffect(() => {
    getNewImage(true);
    getNewImage();
  }, []);

  // webgazer
  //   .setGazeListener((data, timestamp) => {
  //     console.log("webgazerrrrrrr");
  //     if (data == null && this.state.lookDirection === "STOP") return;

  //     if (
  //       data.x < this.state.LEFT_CUTOFF &&
  //       this.state.lookDirection !== "LEFT" &&
  //       this.state.lookDirection !== "RESET"
  //     ) {
  //       this.setState({
  //         startLookTime: timestamp,
  //         lookDirection: "LEFT",
  //       });
  //     } else if (
  //       data.x > this.state.RIGHT_CUTOFF &&
  //       this.state.lookDirection !== "RIGHT" &&
  //       this.state.lookDirection !== "RESET"
  //     ) {
  //       this.setState({
  //         startLookTime: timestamp,
  //         lookDirection: "RIGHT",
  //       });
  //     } else if (
  //       data.x >= this.state.LEFT_CUTOFF &&
  //       data.x <= this.state.RIGHT_CUTOFF
  //     ) {
  //       this.setState({
  //         startLookTime: Number.POSITIVE_INFINITY,
  //         lookDirection: null,
  //       });
  //     }
  //     if (this.state.startLookTime + this.state.LOOK_DELAY < timestamp) {
  //       this.state.lookDirection === "LEFT"
  //         ? this.setState({ class: "main-photo left" })
  //         : this.setState({
  //             class: "main-photo right",
  //             startLookTime: Number.POSITIVE_INFINITY,
  //             lookDirection: "STOP",
  //           });
  //       setTimeout(() => {
  //         imageElement.remove();
  //         nextImageElement.classList.remove("next");
  //         imageElement = nextImageElement;
  //         nextImageElement = this.getNewImage(true);
  //         this.setState({ lookDirection: "RESET" });
  //       }, 200);
  //     }
  //   })
  //   .begin();
  // window.saveDataAcrossSessions = true;

  // webgazer.showVideo(true).showPredictionPoints(true);

  return <section className="gazer-container">{elements[0]}</section>;
}

export default WebGazer;
