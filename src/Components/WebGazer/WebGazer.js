import "./webGazer.css";
import React from "react";
import webgazer from "webgazer";
import { useState, useRef, useEffect } from "react";
import generateRandomGif from '../../utilities/apiData'
// this.photoRef = React.createRef("")
// npm i webcam-easy
// eslint-disable-next-line

function WebGazer() {
  let [main, setMain] = useState();
  const mainRef = useRef();

  const getNewImage = () => {
    let img = React.createElement("img", {
      className: "main-photo",
      src: "https://picsum.photos/1000?" + Math.random(),
      ref: mainRef,
      onClick: movePhoto,
    });
    setMain(img);
    return img;
  };

  const movePhoto = () => {
    mainRef.current.classList.add("drop");
    mainRef.current.src = "https://picsum.photos/1000?" + Math.random();

    setTimeout(() => {
      mainRef.current.classList.remove("drop");
    }, 850);
    return main;
  };

  // let [startLookTime, setStartLookTime] = useState();
  // let [lookDirection, setLookDirection] = useState();
  // let imageElement = getNewImage();
  // let nextImageElement = getNewImage();
  // const LOOK_DELAY = 1000;
  // const LEFT_CUTOFF = window.innerWidth / 4;
  // const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4;

  useEffect(() => {
    // eslint-disable-next-line
    let randomGif = generateRandomGif;
    console.log(randomGif);
    getNewImage();

    // webgazer
    //   .setGazeListener((gazeData, elapsedTime) => {
    //     console.log("webgazerrrrrrr");
    //     console.log(gazeData);
    //     console.log(elapsedTime);
    //     if (gazeData == null && lookDirection === "STOP") return

    // if (
    //   gazeData.x < LEFT_CUTOFF &&
    //   lookDirection !== "LEFT" &&
    //   lookDirection !== "RESET"
    // ) {
    //   console.log("left");
    //   setStartLookTime(elapsedTime);
    //   setLookDirection("LEFT");
    // } else if (
    //   gazeData.x > RIGHT_CUTOFF &&
    //   lookDirection !== "RIGHT" &&
    //   lookDirection !== "RESET"
    // ) {
    //   console.log("right");
    //   setStartLookTime(elapsedTime);
    //   setLookDirection("RIGHT");
    // } else if (gazeData.x >= LEFT_CUTOFF && gazeData.x <= RIGHT_CUTOFF) {
    //   console.log("rest");
    //   setStartLookTime(Number.POSITIVE_INFINITY);
    //   setLookDirection(null);
    // }

    // if (startLookTime + LOOK_DELAY < elapsedTime) {
    // movePhoto

    //   lookDirection === "LEFT"
    //     ? mainRef.current.classList.add("drop")
    //     : mainRef.current.classList.add("drop");
    //   setStartLookTime(Number.POSITIVE_INFINITY);
    //   setLookDirection("STOP");

    //   setTimeout(() => {

    //     imageElement.remove();
    //     nextImageElement.classList.remove("next");
    //     imageElement = nextImageElement;
    //     nextImageElement = getNewImage();
    //     setLookDirection("RESET");
    //   }, 200);
    // }
    // })
    // .begin();
    // webgazer.showVideo(false).showPredictionPoints(false);
    // window.saveDataAcrossSessions = true;
  }, []);

  return (
    <section className="gazer-container">
      {/* <h1>Random Image Generator</h1> */}
      {main}
    </section>
  );
}

export default WebGazer;
